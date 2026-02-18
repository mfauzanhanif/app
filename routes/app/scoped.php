<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\PortalController;
use App\Http\Middleware\CheckInstitutionAccess;
use App\Http\Middleware\SetCurrentInstitution;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('{institution}')
    ->where(['institution' => '(?!select-|switch-|wali|logout|login|register|forgot-password|reset-password|verify-email|confirm-password|settings)[A-Za-z0-9_-]+$'])
    ->middleware([
        'auth:sanctum',
        'verified',
        SetCurrentInstitution::class,
        CheckInstitutionAccess::class,
    ])
    ->group(function () {

        // --- Dashboard ---
        Route::get('/dashboard', [PortalController::class, 'dashboard'])->name('portal.dashboard');

        // --- Switch Institution (halaman pilih lembaga dalam dashboard) ---
        Route::get('/switch-institution', [LoginController::class, 'switchInstitutionPage'])
            ->name('portal.switch');

        // --- Settings Lembaga ---
        Route::get('/settings', [PortalController::class, 'settings'])->name('portal.settings');

        // --- USER MANAGEMENT LOKAL (Institution-Scoped) ---
        Route::get('/users', function () {
            $institution = current_institution();

            return Inertia::render('Lembaga/User/Index', [
                'users' => [],
                'institutionCode' => $institution->code,
            ]);
        })->name('institution.users.index');

    });
