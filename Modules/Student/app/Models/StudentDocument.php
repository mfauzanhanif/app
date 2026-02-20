<?php

namespace Modules\Student\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Enums\DocumentType;

class StudentDocument extends Model
{
    use HasFactory;

    protected $fillable = [
        'student_id',
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
        static::creating(function (StudentDocument $doc) {
            static::autoFillFileName($doc);
        });

        static::updating(function (StudentDocument $doc) {
            if ($doc->isDirty('file_type')) {
                static::autoFillFileName($doc);
            }
        });
    }

    private static function autoFillFileName(StudentDocument $doc): void
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

    public function student(): BelongsTo
    {
        return $this->belongsTo(Student::class);
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
