<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::domain(env('PPDT_DOMAIN', 'daraltauhid.com'))->group(function () {
    Route::get('/', function () {
        return Inertia::render('Home')->setRootView('ppdt');
    })->name('ppdt.home');
});
