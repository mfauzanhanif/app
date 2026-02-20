<?php

namespace Modules\Admission\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Enums\DocumentType;

class CandidateDocument extends Model
{
    use HasFactory;

    protected $fillable = [
        'candidate_id',
        'file_type',
        'file_name',
        'file_path',
        'is_valid',
        'notes',
    ];

    protected function casts(): array
    {
        return [
            'file_type' => DocumentType::class ,
            'is_valid' => 'boolean',
        ];
    }

    // ========================================
    // BOOT — Auto-fill file_name dari file_type
    // ========================================

    protected static function booted(): void
    {
        static::creating(function (CandidateDocument $doc) {
            static::autoFillFileName($doc);
        });

        static::updating(function (CandidateDocument $doc) {
            if ($doc->isDirty('file_type')) {
                static::autoFillFileName($doc);
            }
        });
    }

    private static function autoFillFileName(CandidateDocument $doc): void
    {
        $fileType = $doc->file_type instanceof DocumentType
            ? $doc->file_type
            : DocumentType::tryFrom($doc->file_type);

        if ($fileType && $fileType !== DocumentType::LAINNYA) {
            $doc->file_name = $fileType->label();
        }
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
