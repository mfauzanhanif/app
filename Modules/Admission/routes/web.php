<?php

use Illuminate\Support\Facades\Route;
use Modules\Admission\Http\Controllers\AdmissionInvoiceController;
use Modules\Admission\Http\Controllers\AdmissionWaveController;
use Modules\Admission\Http\Controllers\CandidateController;
use Modules\Admission\Http\Controllers\CandidateExamController;
use Modules\Admission\Http\Controllers\CandidateCertificateController;

/*
|--------------------------------------------------------------------------
| Admission Module - Web Routes (Institution-Scoped)
|--------------------------------------------------------------------------
| These routes are loaded by the AdmissionServiceProvider within a group
| that is already wrapped in the institution-scoped middleware group
| (auth, verified, SetCurrentInstitution, CheckInstitutionAccess)
| and prefixed with {institution}.
|
| All routes here are institution-scoped (Admin Panel).
*/

// --- Gelombang Pendaftaran (CRUD) ---
Route::resource('admission-waves', AdmissionWaveController::class);

// --- Kandidat ---
Route::get('candidates', [CandidateController::class, 'index'])->name('candidates.index');
Route::get('candidates/{candidate}', [CandidateController::class, 'show'])->name('candidates.show');
Route::put('candidates/{candidate}/status', [CandidateController::class, 'updateStatus'])->name('candidates.update-status');
Route::put('candidates/{candidate}/documents/{document}/verify', [CandidateController::class, 'verifyDocument'])->name('candidates.verify-document');
Route::get('candidates/{candidate}/certificate', [CandidateCertificateController::class, 'download'])->name('candidates.certificate');

// --- Seleksi / Tes ---
Route::get('candidates/{candidate}/exams', [CandidateExamController::class, 'index'])->name('candidate-exams.index');
Route::post('candidates/{candidate}/exams', [CandidateExamController::class, 'store'])->name('candidate-exams.store');
Route::put('candidates/{candidate}/exams/{exam}', [CandidateExamController::class, 'update'])->name('candidate-exams.update');

// --- Invoice PSB ---
Route::get('admission-invoices', [AdmissionInvoiceController::class, 'index'])->name('admission-invoices.index');
Route::put('admission-invoices/{invoice}/verify', [AdmissionInvoiceController::class, 'verify'])->name('admission-invoices.verify');
Route::put('admission-invoices/{invoice}/cancel', [AdmissionInvoiceController::class, 'cancel'])->name('admission-invoices.cancel');
