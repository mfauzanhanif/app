<?php

namespace App\Models\Region;

use Illuminate\Database\Eloquent\Model;

class Province extends Model
{
    protected $table = 'indonesia_provinces';
    protected $fillable = ['code', 'name', 'meta'];

    public function cities()
    {
        return $this->hasMany(City::class, 'province_code', 'code');
    }
}
