<?php

namespace Modules\Admission\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Modules\Institution\Models\Institution;
use Modules\Periode\Models\AcademicYear;

class AdmissionWave extends Model
{
    use HasFactory;

    protected $fillable = [
        'institution_id',
        'academic_year_id',
        'name',
        'start_date',
        'end_date',
        'exam_date',
        'announcement_date',
        'registration_fee',
        'brochure_path',
        'is_active',
        'description',
    ];

    protected function casts(): array
    {
        return [
            'start_date' => 'date',
            'end_date' => 'date',
            'exam_date' => 'date',
            'announcement_date' => 'date',
            'registration_fee' => 'decimal:2',
            'is_active' => 'boolean',
        ];
    }

    // ========================================
    // RELATIONSHIPS
    // ========================================

    public function institution(): BelongsTo
    {
        return $this->belongsTo(Institution::class);
    }

    public function academicYear(): BelongsTo
    {
        return $this->belongsTo(AcademicYear::class);
    }

    public function candidates(): HasMany
    {
        return $this->hasMany(Candidate::class);
    }

    // ========================================
    // SCOPES
    // ========================================

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    public function scopeForInstitution(Builder $query, int $institutionId): Builder
    {
        return $query->where('institution_id', $institutionId);
    }

    public function scopeOpen(Builder $query): Builder
    {
        return $query->where('start_date', '<=', now())
            ->where('end_date', '>=', now());
    }

    // ========================================
    // HELPERS
    // ========================================

    public function isOpen(): bool
    {
        $today = now()->startOfDay();
        return $this->is_active
            && $today->greaterThanOrEqualTo($this->start_date)
            && $today->lessThanOrEqualTo($this->end_date);
    }

    public function candidateCount(): int
    {
        return $this->candidates()->count();
    }
}
