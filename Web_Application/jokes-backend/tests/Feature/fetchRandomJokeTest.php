<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Joke;

class FetchRandomJokeTest extends TestCase
{
    public function testFetchRandomJokeReturnsValidJoke()
    {
        $response = $this->get('/api/jokes/random');
        $response->assertStatus(200);
        $joke = $response->json();
        $this->assertArrayHasKey('id', $joke);
        $this->assertArrayHasKey('text', $joke);
        
    }

}
