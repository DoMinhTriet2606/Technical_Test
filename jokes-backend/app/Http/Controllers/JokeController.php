<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Joke;

class JokeController extends Controller
{
    public function getJokeQuantity() {
      $jokeQuantity = Joke::count();
      return response()->json([
        'jokeQuantity' => $jokeQuantity
      ]);
    }

    public function getRandomJoke() {
        $joke = Joke::inRandomOrder()->first();
        return response()->json($joke);
    }

    public function voteForJoke(Request $request) {
        $joke = Joke::find($request->joke_id);

        if (!$joke) {
            return response()->json(['error' => 'Joke not found'], 404);
        }

        if ($request->vote == 'like') {
            $joke->increment('likes');
        } elseif ($request->vote == 'dislike') {
            $joke->increment('dislikes');
        }

        return response()->json(['message' => 'Vote recorded successfully']);
    }
}

