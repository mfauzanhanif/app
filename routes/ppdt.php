<?php

use App\Http\Controllers\Web\PPDTController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| PPDT Routes (daraltauhid.com)
|--------------------------------------------------------------------------
| Routes for the public PPDT (Pondok Pesantren Dar Al Tauhid) website.
| Semua route public — pengunjung tidak perlu login.
*/

Route::get('/', [PPDTController::class, 'home'])->name('ppdt.home');