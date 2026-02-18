<?php

use Illuminate\Support\Facades\Route;
use Modules\Admission\Http\Controllers\AdmissionInvoiceController;
use Modules\Admission\Http\Controllers\CandidateController;
use Modules\Admission\Http\Controllers\PsbRegistrationController;

/*
|--------------------------------------------------------------------------
| Admission Module - API Routes
|--------------------------------------------------------------------------
*/

Route::middleware(['auth:sanctum'])->prefix('v1/admission')->group(function () {
    // Candidates API (for admin/operator)
    Route::get('candidates', [CandidateController::class, 'index'])->name('api.admission.candidates.index');
    Route::get('candidates/{candidate}', [CandidateController::class, 'show'])->name('api.admission.candidates.show');
});
