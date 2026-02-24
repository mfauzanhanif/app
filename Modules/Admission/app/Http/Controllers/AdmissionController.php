<?php

namespace Modules\Admission\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Admission\Enums\CandidateStatus;
use Modules\Admission\Enums\InvoiceType;
use Modules\Admission\Models\AdmissionInvoice;
use Modules\Admission\Models\AdmissionWave;
use Modules\Admission\Models\Candidate;
use Modules\Admission\Models\CandidateDocument;
use Modules\Admission\Models\CandidateParent;
use Modules\Admission\Http\Requests\StoreCandidateRequest;
use Modules\Institution\Models\Institution;

class AdmissionController extends Controller
{
    /**
     * PSB Home Page — show open waves and info.
     */
    public function home(): Response
    {
        $waves = AdmissionWave::with('institution:id,name,code,type')
            ->active()
            ->open()
            ->get();

        $fees = \Modules\Admission\Models\AdmissionFeeComponent::with('institution:id,name,code')
            ->whereHas('academicYear', fn($q) => $q->orderByDesc('id')->limit(1))
            ->orderBy('sort_order')
            ->get()
            ->groupBy('institution.name');

        return Inertia::render('home', [
            'waves' => $waves,
            'fees' => $fees,
        ]);
    }

    /**
     * Show registration form for a specific wave (public).
     */
    public function showForm(AdmissionWave $wave): Response
    {
        if (!$wave->isOpen()) {
            abort(403, 'Pendaftaran gelombang ini sudah ditutup.');
        }

        $wave->load('institution:id,name,code,type');

        return Inertia::render('registration', [
            'wave' => $wave,
        ]);
    }

    /**
     * Submit registration (public — tanpa login).
     */
    public function register(StoreCandidateRequest $request, AdmissionWave $wave): RedirectResponse
    {
        if (!$wave->isOpen()) {
            abort(403, 'Pendaftaran gelombang ini sudah ditutup.');
        }

        $registrationNumber = null;

        DB::transaction(function () use ($request, $wave, &$registrationNumber) {
            // 1. Create Candidate (tanpa user_id)
            $candidate = Candidate::create([
                'institution_id' => $wave->institution_id,
                'admission_wave_id' => $wave->id,
                'registration_number' => Candidate::generateRegistrationNumber(
                    $wave->institution_id,
                    $wave->id
                ),
                'nik' => $request->nik,
                'name' => $request->name,
                'gender' => $request->gender,
                'pob' => $request->pob,
                'dob' => $request->dob,
                'previous_school' => $request->previous_school,
                'nisn' => $request->nisn,
                'address' => $request->address,
                'status' => CandidateStatus::DIAJUKAN,
            ]);

            $registrationNumber = $candidate->registration_number;

            // 2. Create Parent Data
            foreach ($request->parents as $parent) {
                CandidateParent::create([
                    'candidate_id' => $candidate->id,
                    'type' => $parent['type'],
                    'nik' => $parent['nik'] ?? null,
                    'name' => $parent['name'],
                    'phone' => $parent['phone'] ?? null,
                    'email' => $parent['email'] ?? null,
                    'last_education' => $parent['last_education'] ?? null,
                    'job' => $parent['job'] ?? null,
                    'income' => $parent['income'] ?? null,
                    'is_alive' => $parent['is_alive'] ?? true,
                    'is_guardian' => $parent['is_guardian'] ?? false,
                ]);
            }

            // 3. Upload Documents
            if ($request->hasFile('documents')) {
                foreach ($request->file('documents') as $type => $file) {
                    $path = $file->store("admission/candidates/{$candidate->id}", 'private');

                    CandidateDocument::create([
                        'candidate_id' => $candidate->id,
                        'file_type' => $type,
                        'file_path' => $path,
                    ]);
                }
            }

            // 4. Auto-generate Invoice Biaya Formulir
            if ($wave->registration_fee > 0) {
                AdmissionInvoice::create([
                    'candidate_id' => $candidate->id,
                    'code' => AdmissionInvoice::generateCode(),
                    'amount' => $wave->registration_fee,
                    'type' => InvoiceType::BIAYA_FORMULIR,
                    'status' => 'belum_lunas',
                ]);
            }
        });

        return redirect()
            ->route('psb.status')
            ->with('success', 'Pendaftaran berhasil! Nomor pendaftaran Anda: ' . $registrationNumber);
    }

    /**
     * Show status lookup page (public — form input no. pendaftaran + NIK).
     */
    public function status(Request $request): Response
    {
        return Inertia::render('cek-status', [
            'candidates' => [],
            'searched' => false,
        ]);
    }

    /**
     * Lookup status by registration number + NIK.
     */
    public function statusLookup(Request $request): Response
    {
        $request->validate([
            'registration_number' => 'required|string',
            'nik' => 'required|string|size:16',
        ]);

        $candidates = Candidate::where('registration_number', $request->registration_number)
            ->where('nik', $request->nik)
            ->with([
                'institution:id,name,code',
                'admissionWave:id,name',
                'invoices',
                'documents',
            ])
            ->get();

        return Inertia::render('cek-status', [
            'candidates' => $candidates,
            'searched' => true,
            'filters' => $request->only('registration_number', 'nik'),
        ]);
    }

    /**
     * Show announcement lookup page (public).
     */
    public function announcement(Request $request): Response
    {
        return Inertia::render('announcement', [
            'candidates' => [],
            'searched' => false,
        ]);
    }

    /**
     * Lookup announcement by registration number + NIK.
     */
    public function announcementLookup(Request $request): Response
    {
        $request->validate([
            'registration_number' => 'required|string',
            'nik' => 'required|string|size:16',
        ]);

        $candidates = Candidate::where('registration_number', $request->registration_number)
            ->where('nik', $request->nik)
            ->whereIn('status', [
                CandidateStatus::LULUS,
                CandidateStatus::TIDAK_LULUS,
                CandidateStatus::DITERIMA,
            ])
            ->with([
                'institution:id,name,code',
                'admissionWave:id,name,announcement_date',
                'exams',
            ])
            ->get();

        return Inertia::render('announcement', [
            'candidates' => $candidates,
            'searched' => true,
            'filters' => $request->only('registration_number', 'nik'),
        ]);
    }

    /**
     * Upload payment proof for an invoice.
     */
    public function uploadProof(Request $request, AdmissionInvoice $invoice): RedirectResponse
    {
        $request->validate([
            'proof' => 'required|file|mimes:jpg,jpeg,png,pdf|max:5120',
        ]);

        $path = $request->file('proof')->store(
            "admission/invoices/{$invoice->id}",
            'private'
        );

        $invoice->update([
            'proof_path' => $path,
            'payment_method' => 'transfer_manual',
        ]);

        return redirect()->back()->with('success', 'Bukti transfer berhasil diunggah.');
    }
}
