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
            $table->text('address')->nullable();
            $table->string('district', 100)->nullable();
            $table->string('city', 100)->nullable();
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
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('institutions');
    }
};
