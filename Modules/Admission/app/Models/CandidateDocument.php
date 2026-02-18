<?php

namespace Modules\Admission\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\Admission\Enums\DocumentType;

class CandidateDocument extends Model
{
    use HasFactory;

    protected $fillable = [
        'candidate_id',
        'file_type',
        'file_path',
        'is_valid',
        'notes',
    ];

    protected function casts(): array
    {
        return [
            'file_type' => DocumentType::class,
            'is_valid' => 'boolean',
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

    public function isPending(): bool
    {
        return $this->is_valid === null;
    }

    public function isApproved(): bool
    {
        return $this->is_valid === true;
    }

    public function isRejected(): bool
    {
        return $this->is_valid === false;
    }
}
