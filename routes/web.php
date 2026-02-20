<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| SUPER APP (app.daraltauhid.com)
|--------------------------------------------------------------------------
| Sistem Path-Based Multi-Tenancy
*/

Route::domain(env('APP_DOMAIN'))->group(function () {

    // ============================================================
    // ZONA 1: PUBLIC / UNAUTHENTICATED ROUTES
    // ============================================================

    Route::get('/', function () {
        if (! Auth::check()) {
            return redirect()->route('login');
        }

        return redirect()->to(Auth::user()->getDefaultPortalUrl());
    })->name('home');

    // Load Authentication Routes (Login, Register, etc.)
    require base_path('routes/app/auth.php');

    // ============================================================
    // ZONA 2: AUTHENTICATED GLOBAL ROUTES
    // ============================================================
    require base_path('routes/app/global.php');

    // ============================================================
    // ZONA 3: WALI SANTRI ROUTES
    // ============================================================
    require base_path('routes/app/guardian.php');

    // ============================================================
    // ZONA 4: INSTITUTION-SCOPED ROUTES
    // ============================================================
    require base_path('routes/app/scoped.php');
});

/*
|--------------------------------------------------------------------------
| PSB PORTAL (psb.daraltauhid.com)
|--------------------------------------------------------------------------
| Portal Penerimaan Santri Baru
*/
Route::domain(env('PSB_DOMAIN'))->group(function () {
    require base_path('routes/psb.php');
});

/*
|--------------------------------------------------------------------------
| PPDT / LANDING PAGE (daraltauhid.com)
|--------------------------------------------------------------------------
*/
require base_path('routes/ppdt.php');


/*
|--------------------------------------------------------------------------
| MISDT / LANDING PAGE (misdt.daraltauhid.com)
|--------------------------------------------------------------------------
*/
Route::domain(env('MISDT_DOMAIN'))->group(function () {
    require base_path('routes/misdt.php');
});