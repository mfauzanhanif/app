<?php

namespace Modules\Admission\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Admission\Enums\CandidateStatus;
use Modules\Admission\Enums\InvoiceType;
use Modules\Admission\Models\AdmissionInvoice;
use Modules\Admission\Models\AdmissionWave;
use Modules\Admission\Models\Candidate;
use Modules\Admission\Http\Requests\UpdateCandidateStatusRequest;

class CandidateController extends Controller
{
    /**
     * Display a listing of candidates (Admin Panel).
     */
    public function index(Request $request): Response
    {
        $institution = current_institution();

        $candidates = Candidate::forInstitution($institution->id)
            ->with(['admissionWave:id,name', 'invoices'])
            ->when($request->status, fn ($q, $status) => $q->where('status', $status))
            ->when($request->wave_id, fn ($q, $waveId) => $q->forWave($waveId))
            ->when($request->search, function ($q, $search) {
                $q->where(function ($query) use ($search) {
                    $query->where('name', 'like', "%{$search}%")
                        ->orWhere('registration_number', 'like', "%{$search}%")
                        ->orWhere('nik', 'like', "%{$search}%");
                });
            })
            ->latest()
            ->paginate(20)
            ->withQueryString();

        $waves = AdmissionWave::forInstitution($institution->id)
            ->get(['id', 'name']);

        return Inertia::render('Lembaga/Admission/Candidates/Index', [
            'candidates' => $candidates,
            'waves' => $waves,
            'filters' => $request->only(['status', 'wave_id', 'search']),
            'statuses' => collect(CandidateStatus::cases())
                ->map(fn ($s) => ['value' => $s->value, 'label' => $s->label()]),
            'institutionCode' => $institution->code,
        ]);
    }

    /**
     * Display the specified candidate detail (Admin Panel).
     */
    public function show(Candidate $candidate): Response
    {
        $institution = current_institution();

        $candidate->load([
            'admissionWave:id,name',
            'documents',
            'families',
            'exams',
            'invoices',
            'user:id,name,email',
        ]);

        return Inertia::render('Lembaga/Admission/Candidates/Show', [
            'candidate' => $candidate,
            'institutionCode' => $institution->code,
            'statuses' => collect(CandidateStatus::cases())
                ->map(fn ($s) => ['value' => $s->value, 'label' => $s->label()]),
        ]);
    }

    /**
     * Update candidate status (Admin: verifikasi, luluskan, tolak).
     */
    public function updateStatus(UpdateCandidateStatusRequest $request, Candidate $candidate): RedirectResponse
    {
        $institution = current_institution();
        $newStatus = CandidateStatus::from($request->status);

        $candidate->update(['status' => $newStatus]);

        // Auto-generate invoice daftar ulang saat status = lulus
        if ($newStatus === CandidateStatus::LULUS) {
            $wave = $candidate->admissionWave;

            // Cek apakah sudah ada invoice daftar ulang
            $existingInvoice = $candidate->invoices()
                ->where('type', InvoiceType::BIAYA_DAFTAR_ULANG)
                ->exists();

            if (! $existingInvoice && $wave) {
                AdmissionInvoice::create([
                    'candidate_id' => $candidate->id,
                    'code' => AdmissionInvoice::generateCode(),
                    'amount' => $wave->registration_fee, // TODO: bisa dipisah fee daftar ulang
                    'type' => InvoiceType::BIAYA_DAFTAR_ULANG,
                    'status' => 'belum_lunas',
                ]);
            }
        }

        return redirect()
            ->route('candidates.show', [
                'institution' => $institution->code,
                'candidate' => $candidate->id,
            ])
            ->with('success', "Status kandidat diubah menjadi {$newStatus->label()}.");
    }

    /**
     * Verify candidate documents (Admin).
     */
    public function verifyDocument(Request $request, Candidate $candidate, int $documentId): RedirectResponse
    {
        $institution = current_institution();

        $document = $candidate->documents()->findOrFail($documentId);

        $request->validate([
            'is_valid' => 'required|boolean',
            'notes' => 'nullable|string|max:500',
        ]);

        $document->update([
            'is_valid' => $request->is_valid,
            'notes' => $request->notes,
        ]);

        // Auto-update status to DIVERIFIKASI if all documents are verified
        if ($candidate->allDocumentsVerified() && $candidate->status === CandidateStatus::DIAJUKAN) {
            $candidate->update(['status' => CandidateStatus::DIVERIFIKASI]);
        }

        return redirect()
            ->route('candidates.show', [
                'institution' => $institution->code,
                'candidate' => $candidate->id,
            ])
            ->with('success', 'Dokumen berhasil diverifikasi.');
    }
}
