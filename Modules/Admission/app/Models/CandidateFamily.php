<?php

namespace Modules\Admission\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\Admission\Enums\FamilyType;
use Modules\Admission\Enums\IncomeRange;
use Modules\Admission\Enums\JobType;
use Modules\Admission\Enums\LastEducation;

class CandidateFamily extends Model
{
    use HasFactory;

    protected $fillable = [
        'candidate_id',
        'type',
        'nik',
        'name',
        'phone',
        'email',
        'last_education',
        'job',
        'income',
    ];

    protected function casts(): array
    {
        return [
            'type' => FamilyType::class,
            'last_education' => LastEducation::class,
            'job' => JobType::class,
            'income' => IncomeRange::class,
        ];
    }

    // ========================================
    // RELATIONSHIPS
    // ========================================

    public function candidate(): BelongsTo
    {
        return $this->belongsTo(Candidate::class);
    }
}
