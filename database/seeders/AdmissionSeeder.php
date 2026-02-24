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

        // Ambil lembaga internal (SMP, MA, PONDOK)
        $institutions = Institution::internal()
            ->active()
            ->whereIn('code', ['PONDOK', 'SMP', 'MA'])
            ->get();

        if ($institutions->isEmpty()) {
            $this->command->warn('Tidak ada institution internal SMP/MA/PONDOK. Jalankan InstitutionSeeder terlebih dahulu.');
            return;
        }

        foreach ($institutions as $institution) {
            // Gelombang Umum
            AdmissionWave::updateOrCreate(
                [
                    'institution_id' => $institution->id,
                    'academic_year_id' => $academicYear->id,
                    'name' => 'Gelombang Umum PSB 2026',
                ],
                [
                    'start_date' => '2026-02-01',
                    'end_date' => '2026-07-31',
                    'exam_date' => '2026-08-05',
                    'announcement_date' => '2026-08-10',
                    'registration_fee' => 250000,
                    'is_active' => true,
                    'description' => "Pendaftaran Gelombang Umum Santri Baru {$institution->name} Tahun Ajaran {$academicYear->name}.",
                ]
            );
        }
    }
}
