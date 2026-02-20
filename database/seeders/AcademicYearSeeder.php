<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Periode\Models\AcademicYear;

class AcademicYearSeeder extends Seeder
{
    /**
     * Seed Tahun Ajaran & Semester.
     */
    public function run(): void
    {
        $years = [
            [
                'name' => '2024/2025',
                'start_date' => '2024-07-15',
                'end_date' => '2025-06-30',
                'is_active' => false,
                'semesters' => [
                    ['name' => 'Ganjil', 'start_date' => '2024-07-15', 'end_date' => '2024-12-20'],
                    ['name' => 'Genap', 'start_date' => '2025-01-06', 'end_date' => '2025-06-30'],
                ],
            ],
            [
                'name' => '2025/2026',
                'start_date' => '2025-07-14',
                'end_date' => '2026-06-30',
                'is_active' => true,
                'semesters' => [
                    ['name' => 'Ganjil', 'start_date' => '2025-07-14', 'end_date' => '2025-12-19'],
                    ['name' => 'Genap', 'start_date' => '2026-01-05', 'end_date' => '2026-06-30'],
                ],
            ],
            [
                'name' => '2026/2027',
                'start_date' => '2026-07-13',
                'end_date' => '2027-06-30',
                'is_active' => false,
                'semesters' => [
                    ['name' => 'Ganjil', 'start_date' => '2026-07-13', 'end_date' => '2026-12-18'],
                    ['name' => 'Genap', 'start_date' => '2027-01-04', 'end_date' => '2027-06-30'],
                ],
            ],
        ];

        foreach ($years as $yearData) {
            $semesters = $yearData['semesters'];
            unset($yearData['semesters']);

            $year = AcademicYear::firstOrCreate(
            ['name' => $yearData['name']],
                $yearData
            );

            foreach ($semesters as $semester) {
                $year->academicPeriods()->firstOrCreate(
                ['name' => $semester['name']],
                    $semester
                );
            }
        }
    }
}
