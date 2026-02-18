<?php

namespace Modules\Admission\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\Admission\Enums\FamilyType;
use Modules\Admission\Enums\IncomeRange;

class CandidateFamily extends Model
{
    use HasFactory;

    protected $fillable = [
        'candidate_id',
        'type',
        'nik',
        'name',
        'phone',
        'job',
        'income',
    ];

    protected function casts(): array
    {
        return [
            'type' => FamilyType::class,
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
