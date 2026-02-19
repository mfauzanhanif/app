<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Region\Province;
use App\Models\Region\City;
use App\Models\Region\District;
use App\Models\Region\Village;
use Illuminate\Support\Facades\Cache;

class RegionController extends Controller
{
    /**
     * Mengambil data Provinsi
     * Cached forever because provinces rarely change.
     */
    public function getProvinces()
    {
        return Cache::rememberForever('provinces_list', function () {
            return Province::orderBy('name')->pluck('name', 'code');
        });
    }

    /**
     * Mengambil data Kabupaten/Kota berdasarkan Kode Provinsi
     */
    public function getCities(Request $request)
    {
        $provinceCode = $request->id_province;

        if (! $provinceCode) {
            return response()->json([]);
        }

        return Cache::rememberForever("cities_{$provinceCode}", function () use ($provinceCode) {
            return City::where('province_code', $provinceCode)
                ->orderBy('name')
                ->pluck('name', 'code');
        });
    }

    /**
     * Mengambil data Kecamatan berdasarkan Kode Kabupaten/Kota
     */
    public function getDistricts(Request $request)
    {
        $cityCode = $request->id_city;

        if (! $cityCode) {
            return response()->json([]);
        }

        return Cache::rememberForever("districts_{$cityCode}", function () use ($cityCode) {
            return District::where('city_code', $cityCode)
                ->orderBy('name')
                ->pluck('name', 'code');
        });
    }

    /**
     * Mengambil data Desa/Kelurahan berdasarkan Kode Kecamatan
     */
    public function getVillages(Request $request)
    {
        $districtCode = $request->id_district;

        if (! $districtCode) {
            return response()->json([]);
        }

        return Cache::rememberForever("villages_{$districtCode}", function () use ($districtCode) {
            return Village::where('district_code', $districtCode)
                ->orderBy('name')
                ->pluck('name', 'code');
        });
    }
}
