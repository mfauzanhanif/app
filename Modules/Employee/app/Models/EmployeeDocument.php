<?php

namespace Modules\Employee\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\Employee\Enums\DocumentType;

class EmployeeDocument extends Model
{
    use HasFactory;

    protected $fillable = [
        'employee_id',
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
        static::creating(function (EmployeeDocument $doc) {
            static::autoFillFileName($doc);
        });

        static::updating(function (EmployeeDocument $doc) {
            if ($doc->isDirty('file_type')) {
                static::autoFillFileName($doc);
            }
        });
    }

    private static function autoFillFileName(EmployeeDocument $doc): void
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

    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class);
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
