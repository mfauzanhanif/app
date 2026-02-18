<?php

use Illuminate\Support\Facades\Route;
use Modules\Periode\Http\Controllers\AcademicPeriodController;
use Modules\Periode\Http\Controllers\AcademicYearController;
use Modules\Periode\Http\Controllers\FiscalPeriodController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('academic-periods', AcademicPeriodController::class)->names('academic-period');
    Route::resource('academic-years', AcademicYearController::class)->names('academic-year');
    Route::resource('fiscal-periods', FiscalPeriodController::class)->names('fiscal-period');
});