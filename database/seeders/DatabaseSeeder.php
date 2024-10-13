<?php

namespace Database\Seeders;

use App\Models\Booking;
use App\Models\Review;
use App\Models\Room;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Database\Factories\ReviewFactory;
use Database\Factories\BookingFactory;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(30)->create();

        User::factory()->create([
            'name' => 'John Doe',
            'email' => 'johndoe@email.com',
            'password' => bcrypt('12345678'),
            'role' => 'admin',
        ]);

        Room::factory(20)->create();

        Booking::factory(30)->create();

        Review::factory(30)->create();

        $rooms = Room::all();

        foreach ($rooms as $room) {
            // Create multiple images for each room
            for ($i = 0; $i < 3; $i++) { // Assuming each room has 3 images
                DB::table('room_images')->insert([
                    'room_id' => $room->id,
                    'image_url' => fake()->imageUrl(),
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
