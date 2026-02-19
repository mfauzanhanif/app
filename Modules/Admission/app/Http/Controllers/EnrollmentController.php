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
        // Validasi: harus berstatus DITERIMA
        if ($candidate->status !== CandidateStatus::DITERIMA) {
            return redirect()->back()->with('error', 'Kandidat belum berstatus Diterima.');
        }

        // Validasi: harus sudah bayar daftar ulang
        if (! $candidate->hasEnrollmentFeePaid()) {
            return redirect()->back()->with('error', 'Kandidat belum membayar biaya daftar ulang.');
        }

        // Validasi: belum pernah dimigrasi
        if ($candidate->student_id !== null) {
            return redirect()->back()->with('error', 'Kandidat sudah dimigrasi sebelumnya.');
        }

        DB::transaction(function () use ($candidate) {
            // ========================================
            // 1. Create Student dari data Candidate
            // ========================================
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

            // ========================================
            // 2. Migrasi data ayah & ibu → student_parents
            // ========================================
            $candidate->load('families');

            foreach ($candidate->families as $family) {
                StudentParent::create([
                    'student_id' => $student->id,
                    'type' => $family->type->value,
                    'nik' => $family->nik,
                    'name' => $family->name,
                    'phone' => $family->phone,
                    'job' => $family->job,
                    'income' => $family->income?->value,
                    'is_alive' => true,
                ]);
            }

            // ========================================
            // 3. Determine & Create/Link Guardian (Wali)
            // ========================================
            $this->createGuardianLink($candidate, $student);

            // ========================================
            // 4. Link candidate → student
            // ========================================
            $candidate->update(['student_id' => $student->id]);
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

                    $candidate->load('families');
                    foreach ($candidate->families as $family) {
                        StudentParent::create([
                            'student_id' => $student->id,
                            'type' => $family->type->value,
                            'nik' => $family->nik,
                            'name' => $family->name,
                            'phone' => $family->phone,
                            'job' => $family->job,
                            'income' => $this->mapIncomeRange($family->income?->value),
                            'is_alive' => true,
                        ]);
                    }

                    $this->createGuardianLink($candidate, $student);
                    $candidate->update(['student_id' => $student->id]);
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
     * Buat atau link Guardian untuk student.
     *
     * Logic dedup:
     * 1. Ambil data wali dari candidate (guardian_phone + guardian_email + family data)
     * 2. Cari di tabel guardians berdasarkan NIK atau phone
     * 3. Jika ditemukan → reuse, buat pivot saja
     * 4. Jika tidak → buat guardian baru + pivot
     */
    private function createGuardianLink(Candidate $candidate, Student $student): void
    {
        // Tentukan siapa wali-nya dari data keluarga
        // Default: ayah kandung. Jika tidak ada ayah, gunakan ibu.
        $waliFamilyData = $candidate->father ?? $candidate->mother ?? $candidate->families->first();

        if (! $waliFamilyData) {
            return; // Tidak ada data keluarga untuk dijadikan wali
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
            $waliFamilyData->phone ?? $candidate->guardian_phone
        );

        if (! $guardian) {
            // Buat guardian baru
            $guardian = Guardian::create([
                'nik' => $waliFamilyData->nik ?? $candidate->nik.'_wali',
                'name' => $waliFamilyData->name,
                'gender' => $waliFamilyData->type->value === 'ibu' ? 'p' : 'l',
                'phone' => $waliFamilyData->phone ?? $candidate->guardian_phone,
                'email' => $candidate->guardian_email,
                'job' => $waliFamilyData->job,
                'income' => $waliFamilyData->income?->value,
            ]);
        }

        // Buat pivot link
        $student->guardians()->attach($guardian->id, [
            'relationship' => $relationship->value,
        ]);
    }
}
