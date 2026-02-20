<?php

namespace Modules\Guardian\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Guardian\Enums\IncomeRange;
use Modules\Guardian\Enums\JobType;
use Modules\Guardian\Enums\LastEducation;
use Modules\Student\Models\Student;
use Modules\User\Models\User;
use phpDocumentor\Reflection\Types\Void_;

class Guardian extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'guardian_unique_id',
        'nik',
        'phone',
        'email',
        'name',
        'gender',
        'pob',
        'dob',
        'last_education',
        'job',
        'income',
        'address',
        'rt',
        'rw',
        'village',
        'district',
        'city',
        'province',
        'postal_code',
        'is_alive',
    ];

    protected function casts(): array
    {
        return [
            'dob' => 'date',
            'is_alive' => 'boolean',
            'last_education' => LastEducation::class ,
            'job' => JobType::class ,
            'income' => IncomeRange::class ,
        ];
    }

    // ========================================
    // BOOT — Auto-generate guardian_unique_id
    // ========================================

    protected static function booted(): void
    {
        static::creating(function (Guardian $guardian) {
            if (empty($guardian->guardian_unique_id)) {
                $guardian->guardian_unique_id = static::generateUniqueId();
            }
        });
    }

    /**
     * Generate unique ID: WAL-2026-0001
     */
    public static function generateUniqueId(): string
    {
        $year = now()->year;
        $prefix = "WAL-{$year}-";

        $lastGuardian = static::where('guardian_unique_id', 'like', "{$prefix}%")
            ->orderByDesc('guardian_unique_id')
            ->first();

        $lastNumber = 0;
        if ($lastGuardian && preg_match('/(\d+)$/', $lastGuardian->guardian_unique_id, $matches)) {
            $lastNumber = (int)$matches[1];
        }

        return $prefix . str_pad($lastNumber + 1, 4, '0', STR_PAD_LEFT);
    }

    // ========================================
    // RELATIONSHIPS
    // ========================================

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Siswa-siswa yang di-wali-kan ke guardian ini.
     */
    public function students(): BelongsToMany
    {
        return $this->belongsToMany(Student::class , 'guardian_student')
            ->withPivot(['relationship'])
            ->withTimestamps();
    }

    // ========================================
    // SCOPES
    // ========================================

    public function scopeByNik(Builder $query, string $nik): Builder
    {
        return $query->where('nik', $nik);
    }

    public function scopeByPhone(Builder $query, string $phone): Builder
    {
        return $query->where('phone', $phone);
    }

    public function scopeAlive(Builder $query): Builder
    {
        return $query->where('is_alive', true);
    }

    public function scopeSearch(Builder $query, ?string $search): Builder
    {
        if (empty($search)) {
            return $query;
        }

        $query->where('name', 'like', "%{$search}%")
            ->orWhere('nik', 'like', "%{$search}%")
            ->orWhere('phone', 'like', "%{$search}%")
            ->orWhere('guardian_unique_id', 'like', "%{$search}%");

        return $query;
    }

    // ========================================
    // STATIC FINDERS (Deduplication)
    // ========================================

    /**
     * Cari guardian berdasarkan NIK atau No. HP untuk dedup.
     * Digunakan saat One Click Migration dari Admission.
     */
    public static function findByNikOrPhone(?string $nik, ?string $phone): ?self
    {
        if (empty($nik) && empty($phone)) {
            return null;
        }

        return static::where(function (Builder $q) use ($nik, $phone) {
            if ($nik) {
                $q->where('nik', $nik);
            }
            if ($phone) {
                $q->orWhere('phone', $phone);
            }
        })->first();
    }

    // ========================================
    // HELPERS
    // ========================================

    /**
     * Cek apakah guardian sudah memiliki akun login.
     */
    public function hasUserAccount(): bool
    {
        return $this->user_id !== null;
    }
}
