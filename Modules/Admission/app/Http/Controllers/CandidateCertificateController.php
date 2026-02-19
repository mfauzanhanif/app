<?php

namespace Modules\Admission\Http\Controllers;

use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Modules\Admission\Enums\CandidateStatus;
use Modules\Admission\Models\Candidate;

class CandidateCertificateController extends Controller
{
    /**
     * Download surat keterangan lulus (PDF certificate).
     */
    public function download(Candidate $candidate)
    {
        // Only lulus/diterima candidates
        if (! in_array($candidate->status, [CandidateStatus::LULUS, CandidateStatus::DITERIMA])) {
            abort(403, 'Sertifikat hanya tersedia untuk kandidat yang dinyatakan lulus.');
        }

        // Auth check: either the candidate owner or admin with access to the institution
        /** @var \Modules\User\Models\User|null $user */
        $user = Auth::user();
        if ($user && $candidate->user_id !== $user->id) {
            $institutionIds = $user->getInstitutionIds();
            if (! in_array($candidate->institution_id, $institutionIds)) {
                abort(403, 'Anda tidak memiliki akses ke sertifikat ini.');
            }
        }

        $candidate->load([
            'institution',
            'admissionWave',
            'exams',
        ]);

        $pdf = Pdf::loadView('admission::pdf.certificate', [
            'candidate' => $candidate,
            'institution' => $candidate->institution,
            'wave' => $candidate->admissionWave,
            'exams' => $candidate->exams,
            'generatedAt' => now(),
        ]);

        $pdf->setPaper('A4', 'portrait');

        $filename = "Surat_Kelulusan_{$candidate->registration_number}.pdf";
        $filename = str_replace('/', '_', $filename);

        return $pdf->download($filename);
    }
}
