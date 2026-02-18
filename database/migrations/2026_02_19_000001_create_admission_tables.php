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

            $table->string('name'); // "Gelombang 1 - Jalur Prestasi"
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

            $table->foreignId('user_id')
                ->constrained('users')
                ->cascadeOnDelete();

            $table->foreignId('institution_id')
                ->constrained('institutions')
                ->cascadeOnDelete();

            $table->foreignId('admission_wave_id')
                ->constrained('admission_waves')
                ->cascadeOnDelete();

            $table->string('registration_number')->unique(); // PSB/2026/MI/001

            // Nullable: khusus jalur lanjut jenjang (siswa internal)
            $table->unsignedBigInteger('internal_student_id')->nullable();

            // Biodata Calon Santri
            $table->string('nik', 16);
            $table->string('name');
            $table->enum('gender', ['l', 'p']);
            $table->string('pob'); // Tempat lahir
            $table->date('dob'); // Tanggal lahir
            $table->string('previous_school')->nullable();
            $table->string('nisn')->nullable();
            $table->text('address');

            // Status Flow
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
        // 3. CANDIDATE DOCUMENTS (Berkas Persyaratan)
        // ==============================
        Schema::create('candidate_documents', function (Blueprint $table) {
            $table->id();

            $table->foreignId('candidate_id')
                ->constrained('candidates')
                ->cascadeOnDelete();

            $table->enum('file_type', [
                'kk', 'akta', 'ktp_wali', 'ijazah', 'foto', 'skl', 'kip',
            ]);
            $table->string('file_path');
            $table->boolean('is_valid')->nullable(); // null=belum dicek, true=valid, false=ditolak
            $table->text('notes')->nullable();

            $table->timestamps();

            // Index
            $table->index(['candidate_id', 'file_type']);
        });

        // ==============================
        // 4. CANDIDATE FAMILIES (Data Orang Tua/Wali)
        // ==============================
        Schema::create('candidate_families', function (Blueprint $table) {
            $table->id();

            $table->foreignId('candidate_id')
                ->constrained('candidates')
                ->cascadeOnDelete();

            $table->enum('type', ['ayah', 'ibu', 'wali']);
            $table->string('nik', 16)->nullable();
            $table->string('name');
            $table->string('phone')->nullable();
            $table->string('job')->nullable();
            $table->enum('income', [
                'kurang_1jt',
                '1_3jt',
                '3_5jt',
                '5_10jt',
                'lebih_10jt',
            ])->nullable();

            $table->timestamps();

            // Index
            $table->index('candidate_id');
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
        Schema::dropIfExists('candidate_families');
        Schema::dropIfExists('candidate_documents');
        Schema::dropIfExists('candidates');
        Schema::dropIfExists('admission_waves');
    }
};
