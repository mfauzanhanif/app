<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // ==============================
        // 1. GUARDIANS (Wali Santri/Siswa)
        // ==============================
        Schema::create('guardians', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            // ID Unik Wali — digunakan sebagai username login
            $table->string('guardian_unique_id', 20)->unique();

            // Identitas Utama (kunci dedup)
            $table->string('nik', 16)->unique();
            $table->string('phone', 20)->unique();           // No WA Aktif
            $table->string('email')->unique()->nullable();

            // Biodata
            $table->string('name');
            $table->enum('gender', ['l', 'p']);
            $table->string('pob', 100)->nullable();           // Tempat lahir
            $table->date('dob')->nullable();                   // Tanggal lahir

            // Pendidikan & Pekerjaan
            $table->enum('last_education', [
                'sd', 'smp', 'sma', 'd1', 'd2', 'd3', 's1', 's2', 's3', 'tidak_sekolah',
            ])->nullable();
            $table->enum('job', [
                'Akuntan',
                'Apoteker',
                'Arsitek',
                'Bidan',
                'Buruh',
                'Buruh Harian Lepas',
                'Dokter',
                'Dosen',
                'Guru',
                'IRT',
                'Karyawan BUMN/BUMD',
                'Karyawan Swasta',
                'Kepala/Perangkat Desa',
                'Nelayan',
                'Pedagang',
                'Pelaut',
                'Pensiunan',
                'Perawat',
                'Petani',
                'Peternak',
                'PNS',
                'Polri',
                'Seniman',
                'Sopir',
                'TNI',
                'Wartawan',
                'Wiraswasta',
                'Tidak Bekerja',
                'Lainnya',
            ])->nullable();
            $table->enum('income', [
                '<_500rb', 'Rp. 500.000 - Rp. 1.000.000', 'Rp. 1.000.000 - Rp. 3.000.000', 'Rp. 3.000.000 - Rp. 5.000.000', 'Rp. 5.000.000 - Rp. 10.000.000', 'Rp. 10.000.000_>',
            ])->nullable();

            // Alamat Lengkap
            $table->text('address');
            $table->string('rt', 5)->nullable();
            $table->string('rw', 5)->nullable();
            $table->char('province_code', 2)->nullable();
            $table->foreign('province_code')->references('code')->on('provinces');
            $table->char('city_code', 4)->nullable();
            $table->foreign('city_code')->references('code')->on('cities');
            $table->char('district_code', 7)->nullable();
            $table->foreign('district_code')->references('code')->on('districts');
            $table->char('village_code', 10)->nullable();
            $table->foreign('village_code')->references('code')->on('villages');
            $table->string('postal_code', 10)->nullable();

            // Status
            $table->boolean('is_alive')->default(true);

            $table->timestamps();
            $table->softDeletes();

            // Indexes
            $table->index('name');
            $table->index('phone');
        });

        // ==============================
        // 2. GUARDIAN_STUDENT (Pivot — 1 wali : banyak siswa)
        // ==============================
        Schema::create('guardian_student', function (Blueprint $table) {
            $table->id();

            $table->foreignId('guardian_id')
                ->constrained('guardians')
                ->cascadeOnDelete();

            $table->foreignId('student_id')
                ->constrained('students')
                ->cascadeOnDelete();

            // Hubungan wali dengan siswa
            $table->enum('relationship', [
                'ayah_kandung', 'ibu_kandung', 'wali',
                'ayah_tiri', 'ibu_tiri', 'kerabat',
            ]);

            $table->timestamps();

            // Setiap siswa hanya boleh punya 1 wali aktif
            $table->unique(['guardian_id', 'student_id']);
            $table->unique('student_id'); // Enforce 1 guardian per student
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('guardian_student');
        Schema::dropIfExists('guardians');
    }
};
