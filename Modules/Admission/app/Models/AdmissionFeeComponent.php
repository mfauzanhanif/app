<?php

declare(strict_types=1);

namespace Modules\Admission\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\Institution\Models\Institution;
use Modules\Periode\Models\AcademicYear;

class AdmissionFeeComponent extends Model
{
    protected $fillable = [
        'institution_id',
        'academic_year_id',
        'name',
        'amount',
        'type',
        'description',
        'sort_order',
    ];

    protected function casts(): array
    {
        return [
            'amount' => 'decimal:2',
            'sort_order' => 'integer',
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
}
