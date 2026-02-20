<?php

namespace Modules\Student\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\Student\Enums\IncomeRange;
use Modules\Student\Enums\JobType;
use Modules\Student\Enums\LastEducation;
use Modules\Student\Enums\ParentType;

class StudentParent extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_id',
        'type',
        'nik',
        'name',
        'phone',
        'email',
        'last_education',
        'job',
        'income',
        'address',
        'rt',
        'rw',
        'province_code',
        'city_code',
        'district_code',
        'village_code',
        'postal_code',
        'is_alive',
        'is_guardian',
    ];

    protected function casts(): array
    {
        return [
            'type' => ParentType::class ,
            'last_education' => LastEducation::class ,
            'job' => JobType::class ,
            'income' => IncomeRange::class ,
            'is_alive' => 'boolean',
        ];
    }

    // ========================================
    // RELATIONSHIPS
    // ========================================

    public function student(): BelongsTo
    {
        return $this->belongsTo(Student::class);
    }

    // ========================================
    // SCOPES
    // ========================================

    public function scopeFather(Builder $query): Builder
    {
        return $query->where('type', ParentType::AYAH);
    }

    public function scopeMother(Builder $query): Builder
    {
        return $query->where('type', ParentType::IBU);
    }

    public function scopeAlive(Builder $query): Builder
    {
        return $query->where('is_alive', true);
    }
}
