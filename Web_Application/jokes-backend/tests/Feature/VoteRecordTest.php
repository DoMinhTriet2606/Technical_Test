<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Joke;

class VoteRecordTest extends TestCase
{
    public function testVoteForJoke()
    {
        $joke = Joke::inRandomOrder()->first();
        $response = $this->put('/api/jokes/vote', [
            'joke_id' => $joke->id,
            'vote' => 'like' 
        ]);
        $response->assertStatus(200);
        $response->assertJson(['message' => 'Vote recorded successfully']);  
    }

}
