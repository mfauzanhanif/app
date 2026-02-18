<?php

use Illuminate\Support\Facades\Route;
use Modules\Admission\Http\Controllers\PsbRegistrationController;

/*
|--------------------------------------------------------------------------
| PSB Routes (psb.daraltauhid.com)
|--------------------------------------------------------------------------
| Routes for the public PSB (Penerimaan Santri Baru) portal.
| This file is loaded from routes/web.php via domain routing.
*/

// === PUBLIC (Tidak perlu login) ===
Route::get('/', [PsbRegistrationController::class, 'landing'])->name('psb.landing');

// === AUTH (Perlu login sebagai guardian) ===
Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    // Pendaftaran
    Route::get('/daftar/{wave}', [PsbRegistrationController::class, 'showForm'])->name('psb.form');
    Route::post('/daftar/{wave}', [PsbRegistrationController::class, 'register'])->name('psb.register');

    // Status & Invoice
    Route::get('/status', [PsbRegistrationController::class, 'status'])->name('psb.status');
    Route::post('/invoices/{invoice}/upload-proof', [PsbRegistrationController::class, 'uploadProof'])->name('psb.upload-proof');

    // Pengumuman
    Route::get('/pengumuman', [PsbRegistrationController::class, 'announcement'])->name('psb.announcement');
});
