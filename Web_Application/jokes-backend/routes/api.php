<?php

use App\Http\Controllers\JokeController;
use Illuminate\Support\Facades\Route;

Route::middleware('api')->group(function () {
    Route::get('jokes/quantity', [JokeController::class, 'getJokeQuantity']);
    Route::get('jokes/random', [JokeController::class, 'getRandomJoke']);
    Route::put('jokes/vote', [JokeController::class, 'voteForJoke']);
});