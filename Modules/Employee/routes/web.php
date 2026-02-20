<?php

use Illuminate\Support\Facades\Route;
use Modules\Employee\Http\Controllers\EmployeeAssignmentController;
use Modules\Employee\Http\Controllers\EmployeeController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('employees', EmployeeController::class)->names('employee');

    // Nested: Employee Assignments
    Route::prefix('employees/{employee}')->name('employee.')->group(function () {
            Route::post('assignments', [EmployeeAssignmentController::class , 'store'])->name('assignments.store');
            Route::put('assignments/{assignment}', [EmployeeAssignmentController::class , 'update'])->name('assignments.update');
            Route::delete('assignments/{assignment}', [EmployeeAssignmentController::class , 'destroy'])->name('assignments.destroy');
        }
        );    });
