<?php

use Illuminate\Support\Facades\Route;
use Modules\User\Http\Controllers\RoleController;
use Modules\User\Http\Controllers\PermissionController;

/*
|--------------------------------------------------------------------------
| User Module - Web Routes
|--------------------------------------------------------------------------
| These routes are loaded by the UserServiceProvider within a group
| that is already wrapped in the institution-scoped middleware group
| (auth, verified, SetCurrentInstitution, CheckInstitutionAccess)
| and prefixed with {institution}.
|
| All routes here are institution-scoped.
*/

// --- Permission Management ---
Route::resource('permissions', PermissionController::class);
Route::post('roles/{role}/permissions', [PermissionController::class, 'assignToRole'])
    ->name('roles.permissions.assign');

// --- Role Management (Institution-Scoped) ---
Route::resource('roles', RoleController::class)
    ->names('institution.roles')
    ->except(['show']);
