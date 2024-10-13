<?php

namespace Database\Factories;

use App\Models\Room;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Booking>
 */
class BookingFactory extends Factory
{
    protected $model = \App\Models\Booking::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Create new user and room instances
        $user = User::factory()->create(); // Create a new user
        $room = Room::factory()->create(['status' => 'booked']); // Create a new room with 'booked' status

        return [
            'user_id' => $user->id,
            'room_id' => $room->id,
            'check_in_date' => $this->faker->dateTimeBetween('now', '+1 day'),
            'check_out_date' => $this->faker->dateTimeBetween('+1 day', '+3 days'),
            'total_price' => $this->faker->randomFloat(2, 50, 500),
        ];
    }
}
