<?php

use Illuminate\Support\Facades\Route;
use Modules\Admission\Http\Controllers\AdmissionController;
use Modules\Admission\Http\Controllers\CandidateCertificateController;

/*
|--------------------------------------------------------------------------
| PSB Routes (psb.daraltauhid.com)
|--------------------------------------------------------------------------
| Routes for the public PSB (Penerimaan Santri Baru) portal.
| This file is loaded from routes/web.php via domain routing.
|
| Login is handled at app.daraltauhid.com — not on the PSB subdomain.
*/

// === PUBLIC (Tidak perlu login) ===
Route::get('/', [AdmissionController::class, 'landing'])->name('psb.landing');

// Redirect login ke domain utama
Route::get('/login', function () {
    return redirect()->to('http://' . env('APP_DOMAIN') . '/login');
})->name('psb.login');

// === AUTH (Perlu login sebagai guardian) ===
Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    // Pendaftaran
    Route::get('/daftar/{wave}', [AdmissionController::class, 'showForm'])->name('psb.form');
    Route::post('/daftar/{wave}', [AdmissionController::class, 'register'])->name('psb.register');

    // Status & Invoice
    Route::get('/status', [AdmissionController::class, 'status'])->name('psb.status');
    Route::post('/invoices/{invoice}/upload-proof', [AdmissionController::class, 'uploadProof'])->name('psb.upload-proof');

    // Pengumuman
    Route::get('/pengumuman', [AdmissionController::class, 'announcement'])->name('psb.announcement');

    // Sertifikat Kelulusan (PDF)
    Route::get('/sertifikat/{candidate}', [CandidateCertificateController::class, 'download'])->name('psb.certificate');
});
