<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Joke;

class FetchJokeQuantityTest extends TestCase
{
    public function testJokeQuantityIsInteger()
    {
        $jokeQuantity = Joke::count();
        $this->assertIsInt($jokeQuantity);
    }

}
