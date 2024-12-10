<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LaptopController;


Route::resource('laptops', LaptopController::class);

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');

