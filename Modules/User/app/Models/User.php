<?php

namespace Modules\User\Models;

use Modules\Institution\Models\Institution;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\DB;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Collection;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, SoftDeletes, TwoFactorAuthenticatable;

    use HasRoles {
        assignRole as spatieAssignRole;
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'username',
        'password',
        'phone_number',
        'role_type',
        'is_active',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'two_factor_secret',
        'two_factor_recovery_codes',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'two_factor_confirmed_at' => 'datetime',
        ];
    }

    // ========================================
    // RELATIONSHIPS
    // ========================================

    /**
     * Get the employee record associated with this user.
     */

    // @TODO make employee relation
    // public function employee(): \Illuminate\Database\Eloquent\Relations\HasOne
    // {
    //     return $this->hasOne(\Modules\Employee\Models\Employee::class);
    // }

    // ========================================
    // INSTITUTION ACCESS METHODS
    // ========================================

    /**
     * Get all institutions this user has roles in.
     * Returns a collection of Institution models.
     */
    public function getInstitutions(): Collection
    {
        return Institution::whereIn(
            'id',
            $this->getInstitutionIds()
        )->get();
    }

    /**
     * Get all institution IDs this user has roles in.
     * Returns array of institution IDs.
     */
    public function getInstitutionIds(): array
    {
        // For Spatie Teams, we query the pivot table
        return DB::table('model_has_roles')
            ->where('model_id', $this->id)
            ->where('model_type', self::class)
            ->whereNotNull('institution_id')
            ->pluck('institution_id')
            ->unique()
            ->values()
            ->toArray();
    }

    /**
     * Check if user has any role in a specific institution.
     */
    public function hasRoleInInstitution(int|Institution $institution): bool
    {
        $institutionId = $institution instanceof Institution
            ? $institution->id
            : $institution;

        // Check using Spatie Teams logic
        // We can temporarily set team id or query specific role
        // Ideally, hasRole check for *any* role in this team

        // Easiest DB check via Pivot
        return DB::table('model_has_roles')
            ->where('model_id', $this->id)
            ->where('model_type', self::class)
            ->where('institution_id', $institutionId)
            ->exists();
    }

    /**
     * Get all roles for a specific institution.
     * If null is passed, returns global roles (roles without institution).
     */
    public function getRolesInInstitution(int|Institution|null $institution): Collection
    {
        // Jika null, return global roles
        if ($institution === null) {
            // Check pivot where institution_id is NULL
            // Note: Spatie Teams usually requires team_id, but NULL team_id might be used for global superadmin
            return $this->roles()
                ->wherePivot('institution_id', null)
                ->get();
        }

        $institutionId = $institution instanceof Institution
            ? $institution->id
            : $institution;

        return $this->roles()
            ->wherePivot('institution_id', $institutionId)
            ->get();
    }

    /**
     * Check if user has a specific role in a specific institution.
     */
    public function hasRoleInInstitutionByName(string $roleName, int|Institution $institution): bool
    {
        $institutionId = $institution instanceof Institution
            ? $institution->id
            : $institution;

        // Manually check pivot because we want to be specific about institution
        return $this->roles()
            ->where('name', $roleName)
            ->wherePivot('institution_id', $institutionId)
            ->exists();
    }

    /**
     * Cek apakah user punya GLOBAL role (institution_id = null pada pivot).
     * Global roles: administrator, foundation_head, ppdb_committee, treasurer, cashier
     *
     * @param string|null $roleName Jika diisi, cek role spesifik. Jika null, cek semua global role.
     */
    public function hasGlobalRole(?string $roleName = null): bool
    {
        $query = DB::table('model_has_roles')
            ->where('model_id', $this->id)
            ->where('model_type', self::class)
            ->whereNull('institution_id');

        if ($roleName) {
            $query->whereIn('role_id', Role::where('name', $roleName)->pluck('id'));
        }

        return $query->exists();
    }

    /**
     * Get the primary institution for this user.
     * Returns the first institution or null.
     */
    public function getPrimaryInstitution(): ?Institution
    {
        $institutionId = DB::table('model_has_roles')
            ->where('model_id', $this->id)
            ->where('model_type', self::class)
            ->whereNotNull('institution_id')
            ->value('institution_id');

        return $institutionId ?Institution::find($institutionId) : null;
    }

    // ========================================
    // WALI SANTRI (STUDENT GUARDIAN) METHODS
    // ========================================

    /**
     * Check if user is a wali (guardian) of a specific student.
     *
     * @param  string  $studentPublicId  The student's public_id (NanoID)
     */
    public function isWaliOf(string $studentPublicId): bool
    {
        // @todo: Implement when Student model and student_guardians table are ready
        // return $this->students()
        //     ->where('public_id', $studentPublicId)
        //     ->exists();

        return false; // Placeholder
    }

    /**
     * Get all students this user is guardian of.
     */
    public function getStudents(): Collection
    {
        // @todo: Implement when Student model is ready
        // return $this->belongsToMany(Student::class, 'student_guardians')
        //     ->withPivot('relationship')
        //     ->get();

        return collect(); // Placeholder - return empty collection
    }

    /**
     * Check if user has wali santri role at any institution.
     */
    public function isWaliSantri(): bool
    {
        return $this->role_type === 'guardian';
    }

    // ========================================
    // PORTAL ACCESS HELPERS
    // ========================================

    /**
     * Determine which portal types this user can access.
     * Used for portal selection after login.
     *
     * @return array List of available portal types
     */
    public function getAvailablePortals(): array
    {
        $portals = [];

        // Check for institution-scoped roles
        $institutions = $this->getInstitutions();
        if ($institutions->isNotEmpty()) {
            $portals['institutions'] = $institutions->map(fn(Institution $i) => [
            'id' => $i->id,
            'code' => $i->code,
            'name' => $i->name,
            'type' => $i->type,
            'url' => $i->getDashboardUrl(),
            ])->toArray();
        }

        // Check for wali santri access
        if ($this->isWaliSantri()) {
            $students = $this->getStudents();
            if ($students->isNotEmpty()) {
                $portals['students'] = $students->map(fn($s) => [
                'id' => $s->id ?? null,
                'public_id' => $s->public_id ?? null,
                'name' => $s->name ?? null,
                'url' => url("/wali/{$s->public_id}/dashboard"),
                ])->toArray();
            }
        }

        // Check for global admin
        if ($this->hasGlobalRole()) {
            $portals['admin'] = [
                'name' => 'Admin Yayasan',
                'url' => root_dashboard_url(),
            ];
        }

        return $portals;
    }

    /**
     * Check if user needs portal selection after login.
     * True if user has multiple institutions or is both employee and wali.
     */
    public function needsPortalSelection(): bool
    {
        $institutionCount = count($this->getInstitutionIds());
        $isWali = $this->isWaliSantri();
        $isGlobal = $this->hasGlobalRole();

        // Needs selection if: multiple institutions, or is wali + has other roles
        return $institutionCount > 1
            || ($isWali && $institutionCount > 0)
            || ($isGlobal && $institutionCount > 0);
    }

    /**
     * Get default redirect URL after login.
     * For users with single access point.
     */
    public function getDefaultPortalUrl(): string
    {
        // Global admin goes to admin dashboard
        if ($this->hasGlobalRole() && !$this->hasRoleInAnyInstitution()) {
            return root_dashboard_url();
        }

        // Single institution user
        $institutions = $this->getInstitutions();
        if ($institutions->count() === 1) {
            return $institutions->first()->getDashboardUrl();
        }

        // Wali santri only
        if ($this->isWaliSantri() && $institutions->isEmpty()) {
            $students = $this->getStudents();
            if ($students->count() === 1) {
                return url("/wali/{$students->first()->public_id}/dashboard");
            }
        }

        // Default to institution selection
        return url('/select-institution');
    }

    /**
     * Override method asli Spatie untuk keamanan.
     * Mencegah penggunaan assignRole('nama_role') yang ambigu di sistem Multi-Tenancy.
     *
     * @param  mixed  ...$roles
     * @return $this
     */
    public function assignRole(...$roles)
    {
        foreach ($roles as $role) {
            // Jika input adalah string (nama role), LEMPAR ERROR.
            // Kita memaksa developer memakai assignRoleInInstitution agar jelas lembaga mana.
            if (is_string($role)) {
                throw new \InvalidArgumentException(
                    "DILARANG menggunakan assignRole('nama_role') karena ambigu (satu nama role bisa ada di banyak lembaga). " .
                    "Gunakan assignRoleInInstitution('nama_role', \$institution) atau pass object Role secara langsung."
                    );
            }
        }

        // Jika input aman (Object Role), panggil method asli Spatie yang sudah di-rename
        return $this->spatieAssignRole(...$roles);
    }

    /**
     * Check if user has role in any institution.
     */
    protected function hasRoleInAnyInstitution(): bool
    {
        return DB::table('model_has_roles')
            ->where('model_id', $this->id)
            ->where('model_type', self::class)
            ->whereNotNull('institution_id')
            ->exists();
    }

    /**
     * Assign a role to the user within a specific institution context.
     * Prevents ambiguity when roles have duplicate names across institutions.
     */
    public function assignRoleInInstitution(string $roleName, int|Institution $institution): self
    {
        $institutionId = $institution instanceof Institution ? $institution->id : $institution;

        $role = Role::where('name', $roleName)->firstOrFail();

        $previousTeamId = getPermissionsTeamId();
        setPermissionsTeamId($institutionId);
        $this->spatieAssignRole($role);
        setPermissionsTeamId($previousTeamId);

        return $this;
    }

    /**
     * Switch konteks user ke lembaga tertentu (dipanggil dari Institution Selection page).
     * Berbeda dari middleware yang hanya baca URL — ini adalah AKSI EKSPLISIT dari user.
     */
    public function switchToInstitution(Institution $institution): void
    {
        // Validasi: punya role di lembaga ini ATAU punya global role
        if (!$this->hasRoleInInstitution($institution) && !$this->hasGlobalRole()) {
            abort(403, 'Anda tidak memiliki akses ke lembaga ini.');
        }

        session([
            'current_institution_id' => $institution->id,
            'current_institution_code' => $institution->code,
            'current_institution_name' => $institution->name,
        ]);

        setPermissionsTeamId($institution->id);
    }

    /**
     * Ambil institution yang sedang aktif.
     */
    public function currentInstitution(): ?Institution
    {
        if (app()->bound('current_institution') && app('current_institution')) {
            /** @var Institution */
            $institution = app('current_institution');
            return $institution;
        }

        $id = session('current_institution_id');
        return $id ?Institution::find($id) : null;
    }

    /**
     * Remove a role from the user within a specific institution context.
     */
    public function removeRoleInInstitution(string $roleName, int|Institution $institution): self
    {
        $institutionId = $institution instanceof Institution ? $institution->id : $institution;

        $role = Role::where('name', $roleName)->first();

        if ($role) {
            $previousTeamId = getPermissionsTeamId();
            setPermissionsTeamId($institutionId);
            $this->removeRole($role);
            setPermissionsTeamId($previousTeamId);
        }

        return $this;
    }
}
