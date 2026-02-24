<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Region\City;
use App\Models\Region\District;
use App\Models\Region\Province;
use App\Models\Region\Village;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class RegionController extends Controller
{
    /**
     * Mengambil data Provinsi
     * Cached forever because provinces rarely change.
     */
    public function getProvinces(): JsonResponse
    {
        $data = Cache::rememberForever('provinces_list', function () {
            return Province::orderBy('name', 'asc')->pluck('name', 'code');
        });

        return response()->json($data);
    }

    /**
     * Mengambil data Kabupaten/Kota berdasarkan Kode Provinsi
     */
    public function getCities(Request $request): JsonResponse
    {
        $provinceCode = $request->id_province;

        if (! $provinceCode) {
            return response()->json([]);
        }

        $data = Cache::rememberForever("cities_{$provinceCode}", function () use ($provinceCode) {
            return City::where('province_code', '=', $provinceCode)
                ->orderBy('name', 'asc')
                ->pluck('name', 'code');
        });

        return response()->json($data);
    }

    /**
     * Mengambil data Kecamatan berdasarkan Kode Kabupaten/Kota
     */
    public function getDistricts(Request $request): JsonResponse
    {
        $cityCode = $request->id_city;

        if (! $cityCode) {
            return response()->json([]);
        }

        $data = Cache::rememberForever("districts_{$cityCode}", function () use ($cityCode) {
            return District::where('city_code', '=', $cityCode)
                ->orderBy('name', 'asc')
                ->pluck('name', 'code');
        });

        return response()->json($data);
    }

    /**
     * Mengambil data Desa/Kelurahan berdasarkan Kode Kecamatan
     */
    public function getVillages(Request $request): JsonResponse
    {
        $districtCode = $request->id_district;

        if (! $districtCode) {
            return response()->json([]);
        }

        $data = Cache::rememberForever("villages_{$districtCode}", function () use ($districtCode) {
            return Village::where('district_code', '=', $districtCode)
                ->orderBy('name', 'asc')
                ->pluck('name', 'code');
        });

        return response()->json($data);
    }
}
