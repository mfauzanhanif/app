<?php

use Illuminate\Support\Facades\Route;
use Modules\Guardian\Http\Controllers\GuardianController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('guardians', GuardianController::class)->names('guardian');
});
