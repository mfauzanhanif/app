<?php

namespace Modules\Admission\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\Admission\Enums\ExamResult;
use Modules\Admission\Enums\ExamType;

class CandidateExam extends Model
{
    use HasFactory;

    protected $fillable = [
        'candidate_id',
        'examiner_id',
        'schedule',
        'type',
        'score',
        'result',
        'notes',
    ];

    protected function casts(): array
    {
        return [
            'schedule' => 'datetime',
            'type' => ExamType::class,
            'score' => 'decimal:2',
            'result' => ExamResult::class,
        ];
    }

    // ========================================
    // RELATIONSHIPS
    // ========================================

    public function candidate(): BelongsTo
    {
        return $this->belongsTo(Candidate::class);
    }

    // ========================================
    // HELPERS
    // ========================================

    public function isPassed(): bool
    {
        return $this->result === ExamResult::DIREKOMENDASIKAN;
    }
}
