<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SiteController;

Route::get('/site-data', [SiteController::class, 'getSiteData']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
