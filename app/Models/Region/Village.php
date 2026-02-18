<?php

namespace App\Models\Region;

use Illuminate\Database\Eloquent\Model;

class Village extends Model
{
    protected $table = 'indonesia_villages';
    protected $fillable = ['code', 'district_code', 'name', 'meta'];

    public function district()
    {
        return $this->belongsTo(District::class, 'district_code', 'code');
    }
}
