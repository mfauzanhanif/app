<?php

namespace Modules\Employee\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Enums\LastEducation;

class EmployeeEducation extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'employee_id',
        'education_type',
        'education_level',
        'level_weight',
        'institution_name',
        'major',
        'entry_year',
        'graduation_year',
        'is_graduated',
        'certificate_number',
        'score',
    ];

    protected function casts(): array
    {
        return [
            'is_graduated' => 'boolean',
            'score' => 'decimal:2',
            'level_weight' => 'integer',
        ];
    }

    public function employee(): BelongsTo
    {
        return $this->belongsTo(Employee::class);
    }

    public function documents(): HasMany
    {
        return $this->hasMany(EmployeeDocument::class, 'employee_education_id');
    }

    protected static function booted(): void
    {
        static::saving(function (EmployeeEducation $education) {
            if ($education->education_type === 'formal') {
                $enumLevel = LastEducation::tryFrom($education->education_level);
                $education->level_weight = $enumLevel ? $enumLevel->weight() : 0;
            } else {
                $education->level_weight = 0;
            }
        });
    }
}
