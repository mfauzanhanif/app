<?php

namespace Modules\Employee\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Employee extends Model
{
    use HasFactory;

    protected $fillable = [
        'nik',
        'nipy',
        'nuptk',
        'npwp',
        'name',
        'place_of_birth',
        'date_of_birth',
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
        'last_education',
        'major',
        'university',
        'bank_name',
        'bank_account',
        'bank_account_holder',
        'institution_id',
    ];

    public function institution(): BelongsTo
    {
        return $this->belongsTo(Institution::class);
    }
}