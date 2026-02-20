<?php

namespace Modules\Employee\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Modules\Institution\Models\Institution;
use Modules\Employee\Models\EmployeeEducation;
use Modules\Employee\Models\EmployeeDocument;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = [
        'nik',
        'nipy',
        'nuptk',
        'npwp',
        'name',
        'pob',
        'dob',
        'gender',
        'address',
        'rt',
        'rw',
        'province_code',
        'city_code',
        'district_code',
        'village_code',
        'postal_code',
        'phone',
        'email',
        'bank_name',
        'bank_account',
        'bank_account_holder',
    ];

    public function institution(): BelongsTo
    {
        return $this->belongsTo(Institution::class);
    }

    public function educations(): HasMany
    {
        return $this->hasMany(EmployeeEducation::class);
    }

    public function documents(): HasMany
    {
        return $this->hasMany(EmployeeDocument::class);
    }

    public function latestEducation(): HasOne
    {
        return $this->hasOne(EmployeeEducation::class)
            ->where('education_type', 'formal')
            ->ofMany('level_weight', 'max');
    }
}
