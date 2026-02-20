<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Admission\Models\AdmissionWave;
use Modules\Institution\Models\Institution;
use Modules\Periode\Models\AcademicYear;

class AdmissionSeeder extends Seeder
{
    /**
     * Seed sample admission waves for PSB testing.
     */
    public function run(): void
    {
        $academicYear = AcademicYear::first();

        if (! $academicYear) {
            $this->command->warn('Tidak ada academic year. Jalankan seeder Periode terlebih dahulu.');
            return;
        }

        // Ambil lembaga internal yang bisa menerima santri baru
        $institutions = Institution::internal()
            ->active()
            ->whereIn('code', ['PONDOK', 'MI', 'SMP', 'MA'])
            ->get();

        if ($institutions->isEmpty()) {
            $this->command->warn('Tidak ada institution internal. Jalankan InstitutionSeeder terlebih dahulu.');
            return;
        }

        foreach ($institutions as $institution) {
            // Gelombang 1 — Jalur Reguler
            AdmissionWave::firstOrCreate(
                [
                    'institution_id' => $institution->id,
                    'academic_year_id' => $academicYear->id,
                    'name' => 'Gelombang 1 - Jalur Reguler',
                ],
                [
                    'start_date' => '2026-01-01',
                    'end_date' => '2026-03-31',
                    'exam_date' => '2026-04-10',
                    'announcement_date' => '2026-04-20',
                    'registration_fee' => 250000,
                    'is_active' => true,
                    'description' => "Pendaftaran santri baru {$institution->name} Gelombang 1 Tahun Ajaran {$academicYear->name}.",
                ]
            );

            // Gelombang 2 — Jalur Prestasi
            AdmissionWave::firstOrCreate(
                [
                    'institution_id' => $institution->id,
                    'academic_year_id' => $academicYear->id,
                    'name' => 'Gelombang 2 - Jalur Prestasi',
                ],
                [
                    'start_date' => '2026-04-01',
                    'end_date' => '2026-05-31',
                    'exam_date' => '2026-06-05',
                    'announcement_date' => '2026-06-15',
                    'registration_fee' => 200000,
                    'is_active' => false,
                    'description' => "Pendaftaran santri baru {$institution->name} Gelombang 2 (Jalur Prestasi) Tahun Ajaran {$academicYear->name}.",
                ]
            );
        }

    }
}
