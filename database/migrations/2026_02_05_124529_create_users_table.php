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
        // 1. TABLE USERS
        // ==============================
        Schema::create('users', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->string('name');
            $table->string('username')->unique()->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->enum('role_type', ['employee', 'guardian'])->nullable();
            $table->boolean('is_active')->default(true);

            // Fortify 2FA Fields
            $table->text('two_factor_secret')->nullable();
            $table->text('two_factor_recovery_codes')->nullable();
            $table->timestamp('two_factor_confirmed_at')->nullable();

            $table->rememberToken();
            $table->timestamps();
            $table->softDeletes();

            // Index as per documentation
            $table->index('email');
        });

        // Password reset tokens table
        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        // Sessions table
        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });

        // Personal Access Tokens (Sanctum - API Authentication)
        Schema::create('personal_access_tokens', function (Blueprint $table) {
            $table->id();
            $table->morphs('tokenable');
            $table->text('name');
            $table->string('token', 64)->unique();
            $table->text('abilities')->nullable();
            $table->timestamp('last_used_at')->nullable();
            $table->timestamp('expires_at')->nullable()->index();
            $table->timestamps();
        });

        // ==============================
        // 2. SPATIE TABLES SETUP
        // ==============================
        $tableNames = config('permission.table_names');
        $columnNames = config('permission.column_names');
        $pivotRole = $columnNames['role_pivot_key'] ?? 'role_id';
        $pivotPermission = $columnNames['permission_pivot_key'] ?? 'permission_id';

        if (empty($tableNames)) {
            throw new \Exception('Error: config/permission.php not found and defaults could not be merged. Please publish the package configuration before proceeding.');
        }

        // 1. Tabel Permissions
        Schema::create($tableNames['permissions'], function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('guard_name');
            $table->string('group_name')->default('Uncategorized');
            $table->timestamps();

            $table->unique(['name', 'guard_name']);
        });

        // 2. Tabel Roles
        Schema::create($tableNames['roles'], function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('name');
            $table->string('display_name')->nullable();
            $table->string('guard_name');
            $table->timestamps();

            // Unik secara Global (Hanya ada 1 role "teacher" di seluruh aplikasi)
            $table->unique(['name', 'guard_name']);
        });

        // 3. Tabel Model Has Permissions
        Schema::create($tableNames['model_has_permissions'], function (Blueprint $table) use ($tableNames, $columnNames, $pivotPermission) {
            $table->id(); // Surrogate Key
            $table->unsignedBigInteger($pivotPermission);
            $table->string('model_type');
            $table->unsignedBigInteger($columnNames['model_morph_key']);
            $table->index([$columnNames['model_morph_key'], 'model_type'], 'model_has_permissions_model_id_model_type_index');

            // REVISI: Tambahkan institution_id jika permission juga ingin berbasis tim (Opsional, biasanya Role saja cukup)
            $table->unsignedBigInteger('institution_id')->nullable();

            $table->foreign('institution_id')->references('id')->on('institutions')->cascadeOnDelete();

            $table->foreign($pivotPermission)->references('id')->on($tableNames['permissions'])->cascadeOnDelete();

            // Gunakan Index Biasa (Karena Primary Key tidak boleh nullable di MySQL)
            // Uniqueness dihandle di application level atau Unique Index (tapi NULL != NULL di MySQL unique)
            $table->index([$pivotPermission, $columnNames['model_morph_key'], 'model_type', 'institution_id'],
                'model_has_permissions_index');
        });

        // 4. Tabel Model Has Roles
        Schema::create($tableNames['model_has_roles'], function (Blueprint $table) use ($tableNames, $columnNames, $pivotRole) {
            $table->id(); // Surrogate Key
            $table->unsignedBigInteger($pivotRole);
            $table->string('model_type');
            $table->unsignedBigInteger($columnNames['model_morph_key']);

            // === TAMBAHAN KHUSUS ===
            // Inilah penerapan "Teams" Spatie yang benar
            $table->unsignedBigInteger('institution_id')->nullable();

            // Indexing agar pencarian cepat
            $table->index([$columnNames['model_morph_key'], 'model_type', 'institution_id'], 'model_has_roles_model_id_model_type_team_index');
            $table->foreign($pivotRole)->references('id')->on($tableNames['roles'])->cascadeOnDelete();

            // Foreign Key ke Institution
            // Pastikan migrasi tabel 'institutions' sudah jalan SEBELUM file ini
            $table->foreign('institution_id')->references('id')->on('institutions')->cascadeOnDelete();

            // Primary Key tidak boleh Nullable. Ganti dengan Index.
            // Spatie Team: User A bisa punya Role "Guru" di Institution X, DAN Role "Guru" di Institution Y
            $table->index([$pivotRole, $columnNames['model_morph_key'], 'model_type', 'institution_id'],
                'model_has_roles_role_model_type_team_index');
        });

        // 5. Tabel Role Has Permissions (Standar)
        Schema::create($tableNames['role_has_permissions'], function (Blueprint $table) use ($tableNames, $pivotRole, $pivotPermission) {
            $table->unsignedBigInteger($pivotPermission);
            $table->unsignedBigInteger($pivotRole);

            $table->foreign($pivotPermission)->references('id')->on($tableNames['permissions'])->cascadeOnDelete();
            $table->foreign($pivotRole)->references('id')->on($tableNames['roles'])->cascadeOnDelete();

            $table->primary([$pivotPermission, $pivotRole], 'role_has_permissions_primary');
        });

        // Cache Reset
        app('cache')
            ->store(config('permission.cache.store') != 'default' ? config('permission.cache.store') : null)
            ->forget(config('permission.cache.key'));
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $tableNames = config('permission.table_names');

        if (empty($tableNames)) {
            throw new \Exception('Error: config/permission.php not found and defaults could not be merged. Please publish the package configuration before proceeding, or drop the tables manually.');
        }

        Schema::drop($tableNames['role_has_permissions']);
        Schema::drop($tableNames['model_has_roles']);
        Schema::drop($tableNames['model_has_permissions']);
        Schema::drop($tableNames['roles']);
        Schema::drop($tableNames['permissions']);
        Schema::dropIfExists('personal_access_tokens');
        Schema::dropIfExists('sessions');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('users');
    }
};
