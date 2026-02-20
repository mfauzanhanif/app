<?php

namespace Modules\Employee\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\Employee\Enums\EmploymentStatus;

class EmployeeAssignment extends Model
{
    use HasFactory;

    protected $fillable = [
        'employee_id',
        'position',
        'employment_status',
        'start_date',
        'end_date',
        'basic_salary',
        'allowance_fixed',
    ];

    protected function casts(): array
    {
        return [
            'employment_status' => EmploymentStatus::class ,
            'start_date' => 'date',
            'end_date' => 'date',
            'basic_salary' => 'decimal:2',
            'allowance_fixed' => 'decimal:2',
        ];
    }

    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }
}