<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\MISDTController;

Route::get('/', [MISDTController::class, 'beranda'])->name('misdt.beranda');
Route::get('/profil', [MISDTController::class, 'profil'])->name('misdt.profil');
Route::get('/program', [MISDTController::class, 'program'])->name('misdt.program');
Route::get('/fasilitas', [MISDTController::class, 'fasilitas'])->name('misdt.fasilitas');
Route::get('/ppdb', [MISDTController::class, 'ppdb'])->name('misdt.ppdb');
Route::get('/kontak', [MISDTController::class, 'kontak'])->name('misdt.kontak');
Route::get('/bio', [MISDTController::class, 'bio'])->name('misdt.bio');
