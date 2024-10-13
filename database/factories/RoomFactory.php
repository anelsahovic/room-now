<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Room>
 */
class RoomFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'room_number' => fake()->numberBetween(1, 100),
            'room_type' => fake()->randomElement(['single', 'double', 'triple', 'suite', 'deluxe']),
            'description' => fake()->text(200),
            'price' => fake()->randomFloat(2, 30, 100),
            'status' => fake()->randomElement(['available', 'booked']),
        ];
    }
}
