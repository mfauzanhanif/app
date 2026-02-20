<?php

namespace Database\Seeders;

use Modules\Institution\Models\Institution;
use Modules\User\Models\Role;
use Modules\User\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $defaultPassword = Hash::make('password');

        // ==========================================
        // 1. GLOBAL USERS (Yayasan Level)
        // ==========================================

        $globalUsers = [
            [
                'name' => 'Administrator',
                'username' => 'administrator',
                'email' => 'admin@daraltauhid.com',
                'role' => 'administrator',
            ],
            [
                'name' => 'Ketua Yayasan',
                'username' => 'ketua.yayasan',
                'email' => 'ketua@daraltauhid.com',
                'role' => 'foundation_head',
            ],
            [
                'name' => 'Panitia PPDB Pusat',
                'username' => 'ppdb.pusat',
                'email' => 'ppdb@daraltauhid.com',
                'role' => 'ppdb_committee',
            ],
            [
                'name' => 'Bendahara Yayasan',
                'username' => 'bendahara.yayasan',
                'email' => 'bendahara@daraltauhid.com',
                'role' => 'treasurer', // Global Role
            ],
            [
                'name' => 'Kasir Yayasan',
                'username' => 'kasir.yayasan',
                'email' => 'kasir@daraltauhid.com',
                'role' => 'cashier', // Global Role
            ],
        ];

        foreach ($globalUsers as $userData) {
            $user = User::firstOrCreate(
                ['email' => $userData['email']],
                [
                    'name' => $userData['name'],
                    'username' => $userData['username'],
                    'password' => $defaultPassword,
                    'is_active' => true,
                    'role_type' => 'employee',
                    'email_verified_at' => now(),
                ]
            );

            // Assign Global Role (pass Role object, not string)
            $role = Role::findByName($userData['role'], 'web');
            setPermissionsTeamId(null);
            if (!$user->hasRole($role)) {
                $user->spatieAssignRole($role);
            }
        }

        // ==========================================
        // 2. SCOPED USERS (Per Institution)
        // ==========================================

        $institutions = Institution::all();

        // Roles to create per institution
        $scopedRoles = [
            'institution_head' => 'Kepala',
            'school_operator' => 'Operator',
            'curriculum_admin' => 'Waka Kurikulum',
            'vice_principal_facilities' => 'Waka Sarpras',
            'vice_principal_student_affairs' => 'Waka Kesiswaan',
            'treasurer' => 'Bendahara',
            'cashier' => 'Kasir',
            'teacher' => 'Guru',
            'class_teacher' => 'Guru Kelas',
            'homeroom_teacher' => 'Wali Kelas',
            'project_coordinator' => 'Koordinator P5',
            'boarding_mentor' => 'Musyrif',
        ];

        foreach ($institutions as $institution) {
            foreach ($scopedRoles as $roleKey => $roleLabel) {
                // Generate Unique Data
                // Username format: role.code (e.g., teacher.smp)
                // Email: role.code@daraltauhid.com
                $username = Str::slug("{$roleKey}.{$institution->code}");
                $email = "{$username}@daraltauhid.com";
                $name = "{$roleLabel} " . strtoupper($institution->code);

                $user = User::firstOrCreate(
                    ['email' => $email],
                    [
                        'name' => $name,
                        'username' => $username,
                        'password' => $defaultPassword,
                        'is_active' => true,
                        'role_type' => 'employee',
                        'email_verified_at' => now(),
                    ]
                );

                // Assign Scoped Role
                // Use the custom method we created in User model for easier assignment
                // OR manually set context

                // Method 1: Manual Context Switching
                // setPermissionsTeamId($institution->id);
                // $user->assignRole($roleKey);

                // Method 2: Use helper (Recommended)
                try {
                    $user->assignRoleInInstitution($roleKey, $institution);
                } catch (\Exception $e) {
                    // Ignore if role doesn't exist? No, we should log.
                    // But in seeder we assume roles exist via RoleSeeder
                    Log::warning("Failed to assign role $roleKey to user $username: " . $e->getMessage());
                }
            }

            // --- TAMBAHAN UNTUK UJI COBA ---
            // Jadikan akun 'administrator' sebagai 'Operator' (admin) di setiap lembaga
            $adminUser = User::where('username', 'administrator')->first();
            if ($adminUser) {
                try {
                    $adminUser->assignRoleInInstitution('school_operator', $institution);
                } catch (\Exception $e) {
                    Log::warning("Failed to assign scoped role to administrator: " . $e->getMessage());
                }
            }
            // -------------------------------
        }

        // ==========================================
        // 3. GUARDIAN USER (Wali Santri)
        // ==========================================
        // Guardian is effectively global or scoped?
        // Based on discussion: Guardian acts for a Student. The role 'guardian' is global (End-User),
        // but access is determined by child relationship.

        $guardianRole = Role::findByName('guardian', 'web');

        $guardianUser = User::firstOrCreate(
            ['email' => 'wali.santri@gmail.com'],
            [
                'name' => 'Wali Santri 01',
                'username' => 'walisantri01',
                'password' => $defaultPassword,
                'is_active' => true,
                'role_type' => 'guardian',
                'email_verified_at' => now(),
            ]
        );

        setPermissionsTeamId(null);
        if (!$guardianUser->hasRole($guardianRole)) {
            $guardianUser->spatieAssignRole($guardianRole);
        }
    }
}
