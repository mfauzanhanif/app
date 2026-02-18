<?php

use Illuminate\Support\Facades\Route;

// Laravel Fortify handles Login, Register, Password Reset, etc. automatically.
// See App\Providers\FortifyServiceProvider.php for view configuration.

Route::middleware('auth')->group(function () {
    // Add any custom auth routes here that are NOT handled by Fortify
    // Example: Custom logout if Fortify's default isn't enough
    // Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
});
