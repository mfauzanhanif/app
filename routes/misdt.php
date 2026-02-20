<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\MISDTController;

Route::get('/', [MISDTController::class, 'beranda'])->name('beranda');
Route::get('/profil', [MISDTController::class, 'profil'])->name('profil');
Route::get('/program', [MISDTController::class, 'program'])->name('program');
Route::get('/fasilitas', [MISDTController::class, 'fasilitas'])->name('fasilitas');
Route::get('/ppdb', [MISDTController::class, 'ppdb'])->name('ppdb');
Route::get('/kontak', [MISDTController::class, 'kontak'])->name('kontak');
Route::get('/bio', [MISDTController::class, 'bio'])->name('bio');
