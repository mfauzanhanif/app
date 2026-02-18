<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegionController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Location API (Indonesia)
Route::prefix('v1/location')->group(function () {
    Route::get('provinces', [RegionController::class, 'getProvinces']);
    Route::get('cities', [RegionController::class, 'getCities']);
    Route::get('districts', [RegionController::class, 'getDistricts']);
    Route::get('villages', [RegionController::class, 'getVillages']);
});
