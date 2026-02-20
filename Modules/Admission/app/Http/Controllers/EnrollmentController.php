<?php

namespace Modules\Admission\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Modules\Admission\Enums\CandidateStatus;
use Modules\Admission\Models\Candidate;
use Modules\Guardian\Enums\GuardianRelationship;
use Modules\Guardian\Models\Guardian;
use Modules\Student\Models\Student;
use Modules\Student\Models\StudentParent;

class EnrollmentController extends Controller
{
    /**
     * One Click Migration — Konversi kandidat → siswa + wali + data orang tua.
     */
    public function migrate(Request $request, Candidate $candidate): RedirectResponse
    {
        if ($candidate->status !== CandidateStatus::DITERIMA) {
            return redirect()->back()->with('error', 'Kandidat belum berstatus Diterima.');
        }
        if (! $candidate->hasEnrollmentFeePaid()) {
            return redirect()->back()->with('error', 'Kandidat belum membayar biaya daftar ulang.');
        }
        if ($candidate->student_id !== null) {
            return redirect()->back()->with('error', 'Kandidat sudah dimigrasi sebelumnya.');
        }

        DB::transaction(function () use ($candidate) {
            $this->performMigration($candidate);
        });

        return redirect()->back()->with('success', 'Kandidat berhasil dimigrasi menjadi siswa.');
    }

    /**
     * Batch migration — migrasi banyak kandidat sekaligus.
     */
    public function batchMigrate(Request $request): RedirectResponse
    {
        $request->validate([
            'candidate_ids' => 'required|array|min:1',
            'candidate_ids.*' => 'exists:candidates,id',
        ]);

        $candidates = Candidate::whereIn('id', $request->candidate_ids)
            ->where('status', CandidateStatus::DITERIMA)
            ->whereNull('student_id')
            ->get();

        $migrated = 0;
        $failed = 0;

        foreach ($candidates as $candidate) {
            if (! $candidate->hasEnrollmentFeePaid()) {
                $failed++;
                continue;
            }
            try {
                DB::transaction(function () use ($candidate) {
                    $this->performMigration($candidate);
                });
                $migrated++;
            } catch (\Exception $e) {
                $failed++;
                report($e);
            }
        }

        return redirect()->back()->with(
            'success',
            "Migrasi selesai: {$migrated} berhasil, {$failed} gagal."
        );
    }

    // ========================================
    // PRIVATE METHODS
    // ========================================

    /**
     * Shared migration logic for both single and batch migration.
     */
    private function performMigration(Candidate $candidate): void
    {
        // 1. Create Student dari data Candidate
        $student = Student::create([
            'institution_id' => $candidate->institution_id,
            'candidate_id' => $candidate->id,
            'nik' => $candidate->nik,
            'name' => $candidate->name,
            'gender' => $candidate->gender->value,
            'pob' => $candidate->pob,
            'dob' => $candidate->dob,
            'address' => $candidate->address,
            'nisn' => $candidate->nisn,
            'status' => 'aktif',
            'join_date' => now()->toDateString(),
        ]);

        // 2. Migrasi data orang tua → student_parents
        $candidate->load('parents');

        foreach ($candidate->parents as $parent) {
            StudentParent::create([
                'student_id' => $student->id,
                'type' => $parent->type->value,
                'nik' => $parent->nik,
                'name' => $parent->name,
                'phone' => $parent->phone,
                'email' => $parent->email,
                'last_education' => $parent->last_education?->value,
                'job' => $parent->job?->value,
                'income' => $parent->income?->value,
                'address' => $candidate->address,
                'is_alive' => $parent->is_alive ?? true,
                'is_guardian' => $parent->is_guardian ?? false,
            ]);
        }

        // 3. Determine & Create/Link Guardian (Wali)
        $this->createGuardianLink($candidate, $student);

        // 4. Link candidate → student
        $candidate->update(['student_id' => $student->id]);
    }

    /**
     * Buat atau link Guardian untuk student.
     *
     * Logic dedup:
     * 1. Ambil data wali dari candidate_parents (is_guardian = true)
     * 2. Fallback: ayah → ibu → parent pertama
     * 3. Cari di tabel guardians berdasarkan NIK atau phone
     * 4. Jika ditemukan → reuse, buat pivot saja
     * 5. Jika tidak → buat guardian baru + pivot
     */
    private function createGuardianLink(Candidate $candidate, Student $student): void
    {
        // Prioritas: parent yang ditandai is_guardian, lalu ayah, lalu ibu, lalu pertama
        $waliFamilyData = $candidate->guardianParent
            ?? $candidate->father
            ?? $candidate->mother
            ?? $candidate->parents->first();

        if (! $waliFamilyData) {
            return;
        }

        // Tentukan relationship berdasarkan tipe keluarga
        $relationship = match ($waliFamilyData->type->value) {
            'ayah' => GuardianRelationship::AYAH_KANDUNG,
            'ibu' => GuardianRelationship::IBU_KANDUNG,
            default => GuardianRelationship::WALI,
        };

        // Dedup: cari guardian yang sudah ada
        $guardian = Guardian::findByNikOrPhone(
            $waliFamilyData->nik,
            $waliFamilyData->phone
        );

        if (! $guardian) {
            $guardian = Guardian::create([
                'nik' => $waliFamilyData->nik ?? $candidate->nik . '_wali',
                'name' => $waliFamilyData->name,
                'gender' => $waliFamilyData->type->value === 'ibu' ? 'p' : 'l',
                'phone' => $waliFamilyData->phone,
                'email' => $waliFamilyData->email,
                'job' => $waliFamilyData->job?->value,
                'income' => $waliFamilyData->income?->value,
            ]);
        }

        // Buat pivot link
        $student->guardians()->attach($guardian->id, [
            'relationship' => $relationship->value,
        ]);
    }
}
