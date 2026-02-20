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
        Schema::create('institutions', function (Blueprint $table) {
            // Primary Key
            $table->id();

            // Identifiers
            $table->string('code', 20)->unique();
            $table->string('slug', 100)->unique();
            $table->string('domain', 100)->unique()->nullable();
            $table->string('name', 255);

            // Statistics & Numbers
            $table->string('no_statistic', 50)->nullable(); // NSM/NSS/NSPP
            $table->string('npsn', 20)->nullable();
            // Classification
            $table->boolean('is_internal')->default(true);
            $table->enum('category', [
                'yayasan',
                'pondok',
                'formal',
                'non_formal',
                'sosial',
            ]);
            $table->enum('type', [
                'yayasan',
                'pondok',
                'tk', 'sd', 'mi',
                'smp', 'mts',
                'sma', 'ma', 'smk', 'slb',
                'mdta', 'tpq', 'madrasah',
                'lksa',
            ]);
            // Headmaster (Foreign Key ke employees, constraint ditambahkan di migrasi employees)
            $table->unsignedBigInteger('headmaster_id')->nullable();
            // Contact Info
            $table->string('email', 255)->nullable()->index();
            $table->string('phone', 50)->nullable()->index();
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

            // Assets / Files
            $table->string('logo_path', 255)->nullable();
            $table->string('letterhead_path', 255)->nullable();
            // Hierarchy (Self-Reference)
            // Menggunakan nullOnDelete agar jika induk dihapus, data anak tidak hilang tapi jadi yatim (NULL)
            $table->foreignId('parent_id')
                ->nullable()
                ->constrained('institutions')
                ->nullOnDelete();

            // Status & Timestamps
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            $table->softDeletes();

            // Explicit indexes as per documentation
            $table->index('code');
            $table->index('slug');
            $table->index('domain');
        });
        // ==============================
        // 2. INSTITUTION DOCUMENTS (Berkas Persyaratan)
        // ==============================
        Schema::create('institution_documents', function (Blueprint $table) {
            $table->id();

            $table->foreignId('institution_id')
                ->constrained('institutions')
                ->cascadeOnDelete();

            $table->enum('file_type', [
                'akta_pendirian', 'status', 'sk_operasional', 'ijop', 'sk_akreditasi', 'npwp', 'lainnya'
            ]);
            $table->string('file_name');
            $table->string('file_path');
            $table->boolean('is_valid')->nullable();
            $table->text('notes')->nullable();

            $table->timestamps();

            // Index
            $table->index(['institution_id', 'file_type']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('institution_documents');
        Schema::dropIfExists('institutions');
    }
};
