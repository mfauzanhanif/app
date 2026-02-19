<?php

use Illuminate\Support\Facades\Route;
use Modules\Admission\Http\Controllers\AdmissionController;
use Modules\Admission\Http\Controllers\CandidateCertificateController;

/*
|--------------------------------------------------------------------------
| PSB Routes (psb.daraltauhid.com)
|--------------------------------------------------------------------------
| Routes for the public PSB (Penerimaan Santri Baru) portal.
| Semua route public — pendaftar tidak perlu login.
*/

// Landing
Route::get('/', [AdmissionController::class, 'landing'])->name('psb.landing');

// Pendaftaran (public — langsung isi form)
Route::get('/daftar/{wave}', [AdmissionController::class, 'showForm'])->name('psb.form');
Route::post('/daftar/{wave}', [AdmissionController::class, 'register'])->name('psb.register');

// Status Pendaftaran (lookup by no. pendaftaran + NIK)
Route::get('/status', [AdmissionController::class, 'status'])->name('psb.status');
Route::post('/status', [AdmissionController::class, 'statusLookup'])->name('psb.status.lookup');

// Pengumuman (lookup by no. pendaftaran + NIK)
Route::get('/pengumuman', [AdmissionController::class, 'announcement'])->name('psb.announcement');
Route::post('/pengumuman', [AdmissionController::class, 'announcementLookup'])->name('psb.announcement.lookup');

// Upload bukti transfer (no auth — diakses setelah lookup)
Route::post('/invoices/{invoice}/upload-proof', [AdmissionController::class, 'uploadProof'])->name('psb.upload-proof');

// Sertifikat Kelulusan (PDF)
Route::get('/sertifikat/{candidate}', [CandidateCertificateController::class, 'download'])->name('psb.certificate');
