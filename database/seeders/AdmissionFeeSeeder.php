<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\Admission\Models\AdmissionFeeComponent;
use Modules\Institution\Models\Institution;
use Modules\Periode\Models\AcademicYear;

class AdmissionFeeSeeder extends Seeder
{
    public function run(): void
    {
        $academicYear = AcademicYear::first();

        if (! $academicYear) {
            $this->command->warn('Tidak ada academic year. Jalankan seeder Periode terlebih dahulu.');
            return;
        }

        $institutions = Institution::internal()
            ->active()
            ->whereIn('code', ['PONDOK', 'SMP', 'MA'])
            ->get();

        if ($institutions->isEmpty()) {
            $this->command->warn('Tidak ada institution internal SMP/MA/PONDOK.');
            return;
        }

        // Komponen biaya umum per lembaga
        $feeComponents = [
            ['name' => 'Biaya Formulir Pendaftaran',    'amount' => 250000,   'type' => 'sekali',  'sort_order' => 1, 'description' => 'Dibayar saat pendaftaran awal'],
            ['name' => 'Biaya Daftar Ulang',             'amount' => 3000000,  'type' => 'sekali',  'sort_order' => 2, 'description' => 'Dibayar setelah dinyatakan diterima'],
            ['name' => 'Biaya Seragam Lengkap',          'amount' => 1500000,  'type' => 'sekali',  'sort_order' => 3, 'description' => 'Seragam harian, olahraga, dan pramuka'],
            ['name' => 'Biaya Kitab & Buku',             'amount' => 750000,   'type' => 'sekali',  'sort_order' => 4, 'description' => 'Kitab kuning, buku pelajaran, dan modul'],
            ['name' => 'SPP Bulanan',                    'amount' => 850000,   'type' => 'bulanan', 'sort_order' => 5, 'description' => 'Termasuk biaya makan dan asrama'],
            ['name' => 'Biaya Laundry',                  'amount' => 150000,   'type' => 'bulanan', 'sort_order' => 6, 'description' => 'Cuci pakaian santri'],
        ];

        foreach ($institutions as $institution) {
            foreach ($feeComponents as $component) {
                AdmissionFeeComponent::updateOrCreate(
                    [
                        'institution_id' => $institution->id,
                        'academic_year_id' => $academicYear->id,
                        'name' => $component['name'],
                    ],
                    [
                        'amount' => $component['amount'],
                        'type' => $component['type'],
                        'sort_order' => $component['sort_order'],
                        'description' => $component['description'],
                    ]
                );
            }
        }
    }
}
