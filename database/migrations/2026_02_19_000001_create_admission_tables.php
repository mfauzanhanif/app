<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration 
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // ==============================
        // 1. ADMISSION WAVES (Gelombang Pendaftaran)
        // ==============================
        Schema::create('admission_waves', function (Blueprint $table) {
            $table->id();

            $table->foreignId('institution_id')
                ->constrained('institutions')
                ->cascadeOnDelete();

            $table->foreignId('academic_year_id')
                ->constrained('academic_years')
                ->cascadeOnDelete();

            $table->string('name');
            $table->date('start_date');
            $table->date('end_date');
            $table->date('exam_date')->nullable();
            $table->date('announcement_date')->nullable();
            $table->decimal('registration_fee', 15, 2)->default(0);
            $table->string('brochure_path')->nullable();
            $table->boolean('is_active')->default(false);
            $table->text('description')->nullable();

            $table->timestamps();

            // Indexes
            $table->index(['institution_id', 'academic_year_id']);
            $table->index('is_active');
        });

        // ==============================
        // 2. CANDIDATES (Calon Santri/Siswa)
        // ==============================
        Schema::create('candidates', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id') // ini pertimbangkan, disimpan di sini atau di guardian
                ->nullable()
                ->constrained('users')
                ->nullOnDelete();

            $table->foreignId('institution_id')
                ->constrained('institutions')
                ->cascadeOnDelete();

            $table->foreignId('admission_wave_id')
                ->constrained('admission_waves')
                ->cascadeOnDelete();

            $table->string('registration_number')->unique();

            // Nullable: khusus jalur lanjut jenjang (siswa internal)
            $table->unsignedBigInteger('internal_student_id')->nullable();

            // Biodata Calon Santri
            $table->string('nik', 16)->unique();
            $table->string('nisn', 10)->unique()->nullable();
            $table->string('name');
            $table->string('pob', 100);
            $table->date('dob');
            $table->enum('gender', ['l', 'p']);

            //  Kontak dan Alamat Calon Santri
            $table->string('phone', 20)->nullable();
            $table->string('email')->nullable();
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

            $table->string('previous_school')->nullable();
            $table->string('previous_class')->nullable();
            $table->string('previous_school_address')->nullable();

            $table->enum('status', [
                'draft',
                'diajukan',
                'diverifikasi',
                'jadwal_tes_ada',
                'lulus',
                'tidak_lulus',
                'diterima',
            ])->default('draft');

            // Hasil akhir: diisi setelah One Click Migration
            $table->unsignedBigInteger('student_id')->nullable();

            $table->timestamps();

            // Indexes
            $table->index('registration_number');
            $table->index('nik');
            $table->index('status');
            $table->index(['institution_id', 'admission_wave_id']);
        });

        // ==============================
        // 3. CANDIDATE PARENTS (Data Orang Tua/Wali)
        // ==============================
        Schema::create('candidate_parents', function (Blueprint $table) {
            $table->id();

            $table->foreignId('candidate_id')
                ->constrained('candidates')
                ->cascadeOnDelete();

            $table->enum('type', ['ayah', 'ibu', 'wali']);
            $table->string('nik', 16)->nullable();
            $table->string('name');
            $table->string('phone', 20)->nullable();
            $table->string('email')->nullable();
            $table->enum('last_education', [
                'sd', 'smp', 'sma', 'd1', 'd2', 'd3', 's1', 's2', 's3', 'tidak_sekolah',
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
            $table->boolean('is_alive')->nullable();
            $table->boolean('is_guardian')->nullable();

            $table->timestamps();

            // Index
            $table->index('candidate_id');
        });

        // ==============================
        // 4. CANDIDATE DOCUMENTS (Berkas Persyaratan)
        // ==============================
        Schema::create('candidate_documents', function (Blueprint $table) {
            $table->id();

            $table->foreignId('candidate_id')
                ->constrained('candidates')
                ->cascadeOnDelete();

            $table->enum('file_type', [
                'foto', 'kk', 'akta_lahir', 'ijazah', 'skl', 'kip', 'ktp_ortu', 'lainnya',
            ]);
            $table->string('file_name');
            $table->string('file_path');
            $table->boolean('is_valid')->nullable();
            $table->text('notes')->nullable();

            $table->timestamps();

            // Index
            $table->index(['candidate_id', 'file_type']);
        });

        // ==============================
        // 5. CANDIDATE EXAMS (Seleksi / Tes)
        // ==============================
        Schema::create('candidate_exams', function (Blueprint $table) {
            $table->id();

            $table->foreignId('candidate_id')
                ->constrained('candidates')
                ->cascadeOnDelete();

            // Penguji (nullable karena employees mungkin belum ada di Phase 1)
            $table->unsignedBigInteger('examiner_id')->nullable();

            $table->dateTime('schedule')->nullable();
            $table->enum('type', [
                'wawancara_santri',
                'wawancara_wali',
                'tes_tulis',
                'tes_alquran',
            ]);
            $table->decimal('score', 5, 2)->nullable(); // 0-100
            $table->enum('result', [
                'direkomendasikan',
                'tidak_direkomendasikan',
            ])->nullable();
            $table->text('notes')->nullable();

            $table->timestamps();

            // Index
            $table->index('candidate_id');
            $table->index('type');
        });

        // ==============================
        // 6. ADMISSION INVOICES (Tagihan PSB)
        // ==============================
        Schema::create('admission_invoices', function (Blueprint $table) {
            $table->id();

            $table->foreignId('candidate_id')
                ->constrained('candidates')
                ->cascadeOnDelete();

            $table->string('code')->unique(); // INV/PSB/001
            $table->decimal('amount', 15, 2);
            $table->enum('type', ['biaya_formulir', 'biaya_daftar_ulang']);
            $table->enum('status', ['belum_lunas', 'lunas', 'dibatalkan'])
                ->default('belum_lunas');
            $table->string('payment_method')->nullable();
            $table->string('proof_path')->nullable(); // Bukti transfer
            $table->timestamp('verified_at')->nullable();
            $table->unsignedBigInteger('verified_by')->nullable(); // User ID admin

            $table->timestamps();

            // Indexes
            $table->index('candidate_id');
            $table->index('status');
            $table->index('code');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admission_invoices');
        Schema::dropIfExists('candidate_exams');
        Schema::dropIfExists('candidate_documents');
        Schema::dropIfExists('candidate_parents');
        Schema::dropIfExists('candidates');
        Schema::dropIfExists('admission_waves');
    }
};
