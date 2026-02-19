<?php

namespace Modules\Admission\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Admission\Enums\CandidateStatus;
use Modules\Admission\Enums\InvoiceType;
use Modules\Admission\Models\AdmissionInvoice;
use Modules\Admission\Models\AdmissionWave;
use Modules\Admission\Models\Candidate;
use Modules\Admission\Models\CandidateDocument;
use Modules\Admission\Models\CandidateFamily;
use Modules\Admission\Http\Requests\StoreCandidateRequest;
use Modules\Institution\Models\Institution;

class AdmissionController extends Controller
{
    /**
     * PSB Landing Page — show open waves and info.
     */
    public function landing(): Response
    {
        $waves = AdmissionWave::with('institution:id,name,code,type')
            ->active()
            ->open()
            ->get();

        return Inertia::render('Home', [
            'waves' => $waves,
        ]);
    }

    /**
     * Show registration form for a specific wave.
     */
    public function showForm(AdmissionWave $wave): Response
    {
        if (! $wave->isOpen()) {
            abort(403, 'Pendaftaran gelombang ini sudah ditutup.');
        }

        $wave->load('institution:id,name,code,type');

        return Inertia::render('Register', [
            'wave' => $wave,
        ]);
    }

    /**
     * Submit registration (multi-step form submission).
     */
    public function register(StoreCandidateRequest $request, AdmissionWave $wave): RedirectResponse
    {
        if (! $wave->isOpen()) {
            abort(403, 'Pendaftaran gelombang ini sudah ditutup.');
        }

        $user = Auth::user();

        DB::transaction(function () use ($request, $wave, $user) {
            // 1. Create Candidate
            $candidate = Candidate::create([
                'user_id' => $user->id,
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

            // 2. Create Family Data
            foreach ($request->families as $family) {
                CandidateFamily::create([
                    'candidate_id' => $candidate->id,
                    'type' => $family['type'],
                    'nik' => $family['nik'] ?? null,
                    'name' => $family['name'],
                    'phone' => $family['phone'] ?? null,
                    'job' => $family['job'] ?? null,
                    'income' => $family['income'] ?? null,
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
            ->with('success', 'Pendaftaran berhasil dikirim!');
    }

    /**
     * Show registration status (for logged-in guardian).
     */
    public function status(): Response
    {
        $user = Auth::user();

        $candidates = Candidate::byUser($user->id)
            ->with([
                'institution:id,name,code',
                'admissionWave:id,name',
                'invoices',
                'documents',
            ])
            ->latest()
            ->get();

        return Inertia::render('Status', [
            'candidates' => $candidates,
        ]);
    }

    /**
     * Show announcement page.
     */
    public function announcement(): Response
    {
        $user = Auth::user();

        $candidates = Candidate::byUser($user->id)
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
            ->latest()
            ->get();

        return Inertia::render('Announcement', [
            'candidates' => $candidates,
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
