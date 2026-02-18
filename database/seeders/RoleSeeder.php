<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Modules\User\Models\Permission;
use Modules\User\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 0. Reset Cached Roles/Permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // 1. Define Permissions (Grouped by Module)
        $permissions = [
            // Module: Institution & User
            'Institution & User' => [
                'institution.create',
                'institution.edit',
                'user.create',
                'user.assign-role',
                'role.manage',
            ],
            // Module: Employee
            'Employee' => [
                'employee.view-all',
                'employee.manage',
                'employee.verify-attendance',
                'leave.request',
                'leave.approve',
            ],
            // Module: Asset
            'Asset' => [
                'asset.create',
                'asset.move',
                'asset.dispose',
                'asset.audit',
                'ticket.create',
                'ticket.resolve',
                'procurement.approve',
            ],
            // Module: Admission (PSB)
            'Admission' => [
                'candidate.view',
                'candidate.verify',
                'candidate.decide',
                'candidate.migrate',
            ],
            // Module: Student & Guardian
            'Student & Guardian' => [
                'student.create',
                'student.edit',
                'student.promote',
                'guardian.link',
            ],
            // Module: Academic & Curriculum
            'Academic & Curriculum' => [
                'curriculum.manage',
                'roster.manage',
                'class.assign',
                'calendar.manage',
            ],
            // Module: Journal (KBM)
            'Journal' => [
                'journal.create',
                'attendance.homeroom',
                'attendance.subject',
                'journal.approve',
            ],
            // Module: Grading
            'Grading' => [
                'grade.setup',
                'grade.input',
                'report.generate',
            ],
            // Module: Finance
            'Finance' => [
                'fee.manage',
                'invoice.generate',
                'payment.receive',
                'expense.create',
                'budget.approve',
                'finance.report',
            ],
            // Module: Payroll
            'Payroll' => [
                'payroll.config',
                'payroll.calculate',
                'payroll.approve',
                'payroll.print',
            ],
            // Module: Boarding
            'Boarding' => [
                'dorm.manage',
                'permission.approve',
                'discipline.record',
            ],
        ];

        // Create Permissions
        foreach ($permissions as $group => $perms) {
            foreach ($perms as $permName) {
                Permission::firstOrCreate(
                    ['name' => $permName, 'guard_name' => 'web'],
                    ['group_name' => $group]
                );
            }
        }

        // 2. Create Global Roles (Yayasan)
        // Note: Role definitions are now GLOBAL (no institution_id)

        // Administrator (Super User)
        $admin = Role::firstOrCreate(
            ['name' => 'administrator'],
            ['display_name' => 'Administrator', 'guard_name' => 'web']
        );
        $admin->givePermissionTo(Permission::all()); // Full CRUD Access

        // Foundation Head (Ketua Yayasan)
        $foundationHead = Role::firstOrCreate(
            ['name' => 'foundation_head'],
            ['display_name' => 'Ketua Yayasan', 'guard_name' => 'web']
        );
        $foundationHead->givePermissionTo([
            'budget.approve', 'payroll.approve', 'leave.approve', 'finance.report',
        ]);

        // PPDB Committee (Panitia PPDB Yayasan)
        $ppdb = Role::firstOrCreate(
            ['name' => 'ppdb_committee'],
            ['display_name' => 'Panitia PPDB', 'guard_name' => 'web']
        );
        $ppdb->givePermissionTo([
            'candidate.view', 'candidate.verify', 'candidate.decide', 'candidate.migrate',
        ]);

        // Treasurer (Bendahara Yayasan)
        $treasurerGlobal = Role::firstOrCreate(
            ['name' => 'treasurer'], // Name conflict with scoped role? No, unique by name. Use same role contextually.
            ['display_name' => 'Bendahara', 'guard_name' => 'web']
        );
        $treasurerGlobal->givePermissionTo([
            'fee.manage', 'invoice.generate', 'expense.create', 'payroll.calculate', 'finance.report',
        ]);

        // Cashier (Kasir Yayasan)
        $cashierGlobal = Role::firstOrCreate(
            ['name' => 'cashier'],
            ['display_name' => 'Kasir', 'guard_name' => 'web']
        );
        $cashierGlobal->givePermissionTo(['payment.receive']);

        // 3. Create Scoped Roles (Lembaga)
        // Roles are created once, but will be assigned with institution_id in User model

        $scopedRoles = [
            'institution_head' => [
                'display' => 'Kepala Lembaga',
                'perms' => ['journal.approve', 'leave.approve', 'budget.approve', 'report.generate', 'employee.view-all'],
            ],
            'school_operator' => [
                'display' => 'Operator Sekolah/TU',
                'perms' => ['student.create', 'student.edit', 'student.promote', 'class.assign', 'attendance.homeroom'],
            ],
            'curriculum_admin' => [
                'display' => 'Waka Kurikulum',
                'perms' => ['curriculum.manage', 'roster.manage', 'calendar.manage', 'grade.setup'],
            ],
            'vice_principal_facilities' => [
                'display' => 'Waka Sarpras',
                'perms' => ['asset.create', 'asset.move', 'asset.dispose', 'asset.audit', 'ticket.resolve', 'procurement.approve'],
            ],
            'vice_principal_student_affairs' => [
                'display' => 'Waka Kesiswaan',
                'perms' => ['candidate.view', 'candidate.verify', 'candidate.decide', 'discipline.record', 'student.promote'],
            ],
            // Treasurer & Cashier already created above (Global roles used in scoped context)
            'teacher' => [
                'display' => 'Guru Mapel',
                'perms' => ['journal.create', 'attendance.subject', 'grade.input', 'leave.request', 'ticket.create'],
            ],
            'class_teacher' => [
                'display' => 'Guru Kelas',
                'perms' => ['journal.create', 'attendance.homeroom', 'attendance.subject', 'grade.input', 'leave.request', 'report.generate'],
            ],
            'homeroom_teacher' => [
                'display' => 'Wali Kelas',
                'perms' => ['attendance.homeroom', 'report.generate'], // Usually combined with Teacher role
            ],
            'project_coordinator' => [
                'display' => 'Koordinator P5',
                'perms' => ['curriculum.manage'], // Simplified
            ],
            'boarding_mentor' => [
                'display' => 'Musyrif/Pengasuh',
                'perms' => ['dorm.manage', 'permission.approve', 'discipline.record'],
            ],
        ];

        foreach ($scopedRoles as $name => $details) {
            $role = Role::firstOrCreate(
                ['name' => $name],
                ['display_name' => $details['display'], 'guard_name' => 'web']
            );
            $role->syncPermissions($details['perms']);
        }

        // 4. End-User Roles
        $guardian = Role::firstOrCreate(
            ['name' => 'guardian'],
            ['display_name' => 'Wali Santri', 'guard_name' => 'web']
        );
        $guardian->givePermissionTo(['guardian.link', 'candidate.view']); // Basic perms

        // Clear cache again
        app()[PermissionRegistrar::class]->forgetCachedPermissions();
    }
}
