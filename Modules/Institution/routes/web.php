<?php

use Illuminate\Support\Facades\Route;
use Modules\Institution\Http\Controllers\InstitutionController;
use Modules\Periode\Http\Controllers\AcademicYearController;
use Modules\Periode\Http\Controllers\AcademicPeriodController;
use Modules\Periode\Http\Controllers\FiscalPeriodController;

/*
|--------------------------------------------------------------------------
| Institution Module - Web Routes
|--------------------------------------------------------------------------
| These routes are loaded by the InstitutionServiceProvider within a group
| that is already wrapped in the institution-scoped middleware group
| (auth, verified, SetCurrentInstitution, CheckInstitutionAccess)
| and prefixed with {institution}.
|
| All routes here are institution-scoped.
*/

// --- MASTER DATA (Yayasan/Universal) ---
// Note: Using 'inst' parameter to avoid conflict with {institution} prefix
Route::resource('institutions', InstitutionController::class)
    ->parameters(['institutions' => 'inst']);
Route::resource('academic-years', AcademicYearController::class);
Route::resource('semesters', AcademicPeriodController::class);
Route::resource('fiscal-periods', FiscalPeriodController::class);
