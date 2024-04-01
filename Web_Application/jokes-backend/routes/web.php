<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JokeController;

Route::get('/', function () {
    return view('welcome');
});

Route::get("/hello", [JokeController::class, 'test']);
Route::get("jokes/quantity", [JokeController::class, 'getJokeQuantity']);
Route::get("jokes/random", [JokeController::class, 'getRandomJoke']);
Route::post("jokes/vote", [JokeController::class, 'voteForJoke']);
