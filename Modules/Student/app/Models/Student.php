<?php

namespace Modules\Student\Models;

use Hidehalo\Nanoid\Client as NanoidClient;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Modules\Admission\Models\Candidate;
use Modules\Guardian\Models\Guardian;
use Modules\Institution\Models\Institution;
use Modules\Student\Enums\BloodType;
use Modules\Student\Enums\ResidenceType;
use Modules\Student\Enums\StudentStatus;
use Modules\User\Models\User;

class Student extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'institution_id',
        'candidate_id',
        'user_id',
        'public_id',
        'nisy',
        'nis',
        'nisn',
        'nik',
        'name',
        'nickname',
        'gender',
        'pob',
        'dob',
        'blood_type',
        'religion',
        'address',
        'rt',
        'rw',
        'province_code',
        'city_code',
        'district_code',
        'village_code',
        'postal_code',
        'transportation',
        'residence_type',
        'distance_to_school',
        'kps_number',
        'pip_number',
        'photo_path',
        'status',
        'join_date',
        'graduate_date',
    ];

    protected function casts(): array
    {
        return [
            'dob' => 'date',
            'join_date' => 'date',
            'graduate_date' => 'date',
            'distance_to_school' => 'decimal:2',
            'status' => StudentStatus::class ,
            'blood_type' => BloodType::class ,
            'residence_type' => ResidenceType::class ,
        ];
    }

    // ========================================
    // BOOT — Auto-generate public_id (NanoID)
    // ========================================

    protected static function booted(): void
    {
        static::creating(function (Student $student) {
            if (empty($student->public_id)) {
                $client = new NanoidClient();
                // Generate until unique (collision is astronomically unlikely with 10 chars)
                do {
                    $id = $client->generateId(10, NanoidClient::MODE_DYNAMIC);
                } while (static::where('public_id', $id)->exists());

                $student->public_id = $id;
            }
        });
    }

    // ========================================
    // ROUTE MODEL BINDING
    // ========================================

    /**
     * Use public_id for route model binding instead of id.
     * URL: /wali/student/V1StG9y2kA (bukan /wali/student/15)
     */
    public function getRouteKeyName(): string
    {
        return 'public_id';
    }

    // ========================================
    // RELATIONSHIPS
    // ========================================

    public function institution(): BelongsTo
    {
        return $this->belongsTo(Institution::class);
    }

    public function candidate(): BelongsTo
    {
        return $this->belongsTo(Candidate::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Guardian (Wali) — hanya 1 per siswa melalui pivot.
     */
    public function guardians(): BelongsToMany
    {
        return $this->belongsToMany(Guardian::class , 'guardian_student')
            ->withPivot(['relationship'])
            ->withTimestamps();
    }

    /**
     * Shortcut: ambil wali aktif (hanya 1).
     */
    public function guardian(): BelongsToMany
    {
        return $this->guardians()->limit(1);
    }

    /**
     * Data Orang Tua (Ayah & Ibu) — bukan wali.
     */
    public function parents(): HasMany
    {
        return $this->hasMany(StudentParent::class);
    }

    public function documents(): HasMany
    {
        return $this->hasMany(StudentDocument::class);
    }

    public function father(): HasOne
    {
        return $this->hasOne(StudentParent::class)->where('type', 'ayah');
    }

    public function mother(): HasOne
    {
        return $this->hasOne(StudentParent::class)->where('type', 'ibu');
    }

    // ========================================
    // SCOPES
    // ========================================

    public function scopeForInstitution(Builder $query, int $institutionId): Builder
    {
        return $query->where('institution_id', $institutionId);
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('status', StudentStatus::AKTIF);
    }

    public function scopeByNik(Builder $query, string $nik): Builder
    {
        return $query->where('nik', $nik);
    }

    public function scopeByPublicId(Builder $query, string $publicId): Builder
    {
        return $query->where('public_id', $publicId);
    }

    public function scopeSearch(Builder $query, ?string $search): Builder
    {
        if (empty($search)) {
            return $query;
        }

        return $query->where(function (Builder $q) use ($search) {
            $q->where('name', 'like', "%{$search}%")
                ->orWhere('nik', 'like', "%{$search}%")
                ->orWhere('nisy', 'like', "%{$search}%")
                ->orWhere('nis', 'like', "%{$search}%")
                ->orWhere('nisn', 'like', "%{$search}%");
        });
    }

    // ========================================
    // HELPERS
    // ========================================

    /**
     * Riwayat pendidikan siswa lintas jenjang (berdasarkan NIK).
     */
    public function educationHistory(): Builder
    {
        return static::where('nik', $this->nik)
            ->orderBy('join_date', 'asc');
    }

    /**
     * Cek apakah siswa aktif (untuk penagihan SPP, dll).
     */
    public function isActive(): bool
    {
        return $this->status === StudentStatus::AKTIF;
    }

    /**
     * Get current guardian (wali).
     */
    public function getGuardian(): ?Guardian
    {
        return $this->guardians()->first();
    }
}
