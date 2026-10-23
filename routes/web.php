<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');

    Route::prefix('ad-requests')->name('ad-requests.')->group(function () {
        Route::inertia('/', 'ad-requests/index')->name('index');
        Route::inertia('create', 'ad-requests/create')->name('create');
    });
});

require __DIR__.'/settings.php';
