<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum', 'verified'])->group(function () {

    // --- Institution & Student Selection ---
    Route::get('/select-institution', [LoginController::class, 'selectInstitution'])
        ->name('institution.select');
    Route::get('/select-student', [LoginController::class, 'selectStudent'])
        ->name('student.select');

    // --- Context Switching (Portal/Student Switcher) ---
    Route::get('/switch-institution/{code}', [LoginController::class, 'switchInstitution'])
        ->name('institution.switch');
    Route::get('/switch-student/{publicId}', [LoginController::class, 'switchStudent'])
        ->name('student.switch');

    // --- Settings Routes (Profile, Password, 2FA) ---
    require base_path('routes/settings.php');
});
