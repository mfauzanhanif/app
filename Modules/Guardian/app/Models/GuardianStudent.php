<?php

namespace Modules\Guardian\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;
use Modules\Guardian\Enums\GuardianRelationship;
use Modules\Student\Models\Student;

class GuardianStudent extends Pivot
{
    protected $table = 'guardian_student';

    public $incrementing = true;

    protected $fillable = [
        'guardian_id',
        'student_id',
        'relationship',
    ];

    protected function casts(): array
    {
        return [
            'relationship' => GuardianRelationship::class,
        ];
    }

    // ========================================
    // RELATIONSHIPS
    // ========================================

    public function guardian(): BelongsTo
    {
        return $this->belongsTo(Guardian::class);
    }

    public function student(): BelongsTo
    {
        return $this->belongsTo(Student::class);
    }
}
