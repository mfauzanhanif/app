<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // ==============================
        // 1. STUDENTS (Siswa Aktif)
        // ==============================
        Schema::create('students', function (Blueprint $table) {
            $table->id();

            $table->foreignId('institution_id')
                ->constrained('institutions')
                ->cascadeOnDelete();

            $table->foreignId('candidate_id')
                ->nullable()
                ->constrained('candidates')
                ->nullOnDelete();

            $table->foreignId('user_id')
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            // Public ID untuk URL aman (NanoID 10 chars)
            $table->char('public_id', 10)->unique();

            // Triple ID System
            $table->string('nisy', 20)->unique()->nullable(); // Nomor Induk Santri Yayasan (seumur hidup)
            $table->string('nis', 20)->nullable(); // Nomor Induk Siswa (lokal sekolah)
            $table->string('nisn', 10)->unique()->nullable(); // Nomor Induk Siswa Nasional

            // NIK — kunci lintas jenjang
            $table->string('nik', 16)->index();

            // Biodata
            $table->string('name');
            $table->string('nickname', 50)->nullable();
            $table->enum('gender', ['l', 'p']);
            $table->string('pob', 100); // Tempat lahir
            $table->date('dob'); // Tanggal lahir
            $table->enum('blood_type', ['a', 'b', 'ab', 'o', 'tidak_diketahui'])->default('tidak_diketahui');
            $table->enum('religion', ['islam'])->default('islam');

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

            // Kontekstual Sekolah
            $table->string('transportation', 50)->nullable();
            $table->enum('residence_type', ['dengan_orang_tua', 'pondok', 'wali_lain', 'kost'])->nullable();
            $table->decimal('distance_to_school', 5, 2)->nullable();

            // Data Sosial
            $table->string('kps_number', 30)->nullable();
            $table->string('pip_number', 30)->nullable();
            $table->string('photo_path')->nullable();

            // Status & Tanggal
            $table->enum('status', [
                'aktif',
                'lulus',
                'pindah',
                'dikeluarkan',
                'meninggal',
                'diskors',
            ])->default('aktif');
            $table->date('join_date');
            $table->date('graduate_date')->nullable();

            $table->timestamps();
            $table->softDeletes();

            // Indexes
            $table->index('name');
            $table->index('status');
            $table->unique(['institution_id', 'nis']);
        });

        // ==============================
        // 2. STUDENT PARENTS (Data Ayah & Ibu)
        // ==============================
        Schema::create('student_parents', function (Blueprint $table) {
            $table->id();

            $table->foreignId('student_id')
                ->constrained('students')
                ->cascadeOnDelete();

            $table->enum('type', ['ayah', 'ibu']);

            // Biodata
            $table->string('nik', 16)->nullable();
            $table->string('name');
            $table->string('phone', 20)->nullable();
            $table->string('email')->nullable();
            $table->enum('last_education', [
                'sd',
                'smp',
                'sma',
                'd1',
                'd2',
                'd3',
                's1',
                's2',
                's3',
                'tidak_sekolah',
            ])->nullable();
            $table->boolean('is_pesantren_alumnus')->default(false);
            $table->string('pesantren_name')->nullable();
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
                '<_500rb',
                'Rp. 500.000 - Rp. 1.000.000',
                'Rp. 1.000.000 - Rp. 3.000.000',
                'Rp. 3.000.000 - Rp. 5.000.000',
                'Rp. 5.000.000 - Rp. 10.000.000',
                'Rp. 10.000.000_>',
            ])->nullable();
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

            $table->boolean('is_alive')->default(true);
            $table->boolean('is_guardian')->nullable();

            $table->timestamps();

            // Index
            $table->index('student_id');
            $table->index(['student_id', 'type']);
        });

        // ==============================
        // 3. STUDENT DOCUMENTS (Berkas Persyaratan)
        // ==============================
        Schema::create('student_documents', function (Blueprint $table) {
            $table->id();

            $table->foreignId('student_id')
                ->constrained('students')
                ->cascadeOnDelete();

            $table->enum('file_type', [
                'foto',
                'kk',
                'akta_lahir',
                'ijazah',
                'skl',
                'kip',
                'ktp_ortu',
                'lainnya',
            ]);
            $table->string('file_name');
            $table->string('file_path');
            $table->boolean('is_valid')->nullable();
            $table->text('notes')->nullable();

            $table->timestamps();

            // Index
            $table->index(['student_id', 'file_type']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('student_documents');
        Schema::dropIfExists('student_parents');
        Schema::dropIfExists('students');
    }
};
