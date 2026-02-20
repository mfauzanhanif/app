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
        // 1. EMPLOYEE IDENTITY (Biodata)
        // ==============================
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete(); // Link ke akun login

            // Identitas Nasional
            $table->string('nik', 16)->unique(); // Primary Identifier Personal
            $table->string('nipy', 30)->nullable()->unique(); // NIP Yayasan/PNS
            $table->string('nuptk', 30)->nullable(); // Penting untuk sekolah
            $table->string('npwp', 30)->nullable();

            // Biodata
            $table->string('name');
            $table->string('place_of_birth');
            $table->date('date_of_birth');
            $table->enum('gender', ['l', 'p']);
            // Alamat Lengkap
            $table->text('address')->nullable();
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

            // Kontak
            $table->string('phone', 20);
            $table->string('email')->unique();

            // Data Pendidikan & Profesi
            $table->enum('last_education', [
                'sd', 'smp', 'sma', 'd1', 'd2', 'd3', 's1', 's2', 's3', 'tidak_sekolah',
            ])->nullable();
            $table->string('major')->nullable(); // Jurusan
            $table->string('university')->nullable();

            // Data Bank (Satu rekening untuk transfer gaji total)
            $table->string('bank_name')->nullable();
            $table->string('bank_account')->nullable();
            $table->string('bank_account_holder')->nullable();

            $table->timestamps();
            $table->softDeletes();
        });

        // Tambahkan Foreign Key untuk headmaster_id di institutions
        Schema::table('institutions', function (Blueprint $table) {
            $table->foreign('headmaster_id')
                ->references('id')
                ->on('employees')
                ->nullOnDelete();
        });

        // ==============================
        // 2. EMPLOYEE ASSIGNMENTS (Pengangkatan/Penugasan)
        // ==============================
        Schema::create('employee_assignments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('employee_id')->constrained('employees')->cascadeOnDelete();
            $table->foreignId('institution_id')->constrained('institutions')->cascadeOnDelete(); // Mengajar di MI atau Pondok

            // Detail Pekerjaan
            $table->string('position'); // Guru Kelas, Kepala Sekolah, Staff TU
            $table->enum('employment_status', ['tetap', 'tidak_tetap', 'pns', 'pengabdian', 'kontrak', 'magang']);
            $table->date('start_date');
            $table->date('end_date')->nullable(); // Null jika permanent
            $table->boolean('is_active')->default(true); // Masih aktif di jabatan ini?

            // Gaji (Per Penugasan)
            // Guru bisa digaji X di MI, dan digaji Y di Pondok
            $table->decimal('basic_salary', 15, 2)->default(0);
            $table->decimal('allowance_fixed', 15, 2)->default(0); // Tunjangan Jabatan

            $table->timestamps();
        });

        // ==============================
        // 3. EMPLOYEE DOCUMENTS (Berkas Persyaratan)
        // ==============================
        Schema::create('employee_documents', function (Blueprint $table) {
            $table->id();

            $table->foreignId('employee_id')
                ->constrained('employees')
                ->cascadeOnDelete();

            $table->enum('file_type', [
                'foto', 'cv', 'ktp', 'kk', 'akta_lahir', 'ijazah', 'npwp','sertifikat' ,'lainnya'
            ]);
            $table->string('file_name');
            $table->string('file_path');
            $table->boolean('is_valid')->nullable();
            $table->text('notes')->nullable();

            $table->timestamps();

            // Index
            $table->index(['employee_id', 'file_type']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employee_documents');
        Schema::dropIfExists('employee_assignments');
        Schema::dropIfExists('employees');
    }
};
