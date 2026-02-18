<?php

namespace App\Models\Region;

use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    protected $table = 'indonesia_districts';
    protected $fillable = ['code', 'city_code', 'name', 'meta'];

    public function city()
    {
        return $this->belongsTo(City::class, 'city_code', 'code');
    }

    public function villages()
    {
        return $this->hasMany(Village::class, 'district_code', 'code');
    }
}
