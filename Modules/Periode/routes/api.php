<?php

use Illuminate\Support\Facades\Route;
use Modules\Periode\Http\Controllers\AcademicPeriodController;
use Modules\Periode\Http\Controllers\AcademicYearController;
use Modules\Periode\Http\Controllers\FiscalPeriodController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::apiResource('academic-periods', AcademicPeriodController::class)->names('academic-period');
    Route::apiResource('academic-years', AcademicYearController::class)->names('academic-year');
    Route::apiResource('fiscal-periods', FiscalPeriodController::class)->names('fiscal-period');
});
