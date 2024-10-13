<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Facility>
 */
class FacilityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $facilityNames = [
            'Wi-Fi',
            'Parking',
            'Gym',
            'Pool',
            'Spa',
            'Restaurant',
            'Laundry',
            'Conference Room',
            'Bar',
            'Pet Friendly',
            'Room Service',
            'Business Center',
            'Playground',
            'Game Room',
            'Fitness Center',
            'Hot Tub',
            'Sauna',
            'Outdoor Terrace',
            'Beach Access',
            'Event Space',
            'Library',
            'Cinema',
            'Lounge',
            'Coffee Shop',
            'Bike Rental',
            'Tennis Court',
            'Golf Course',
            'Shopping Center',
            'Water Sports',
            'Hiking Trails',
            'Self-Serve Laundry',
            'Hair Salon',
            'Beauty Spa',
            'Meeting Rooms',
            'BBQ Area',
            'Mini Golf',
            'Kids Club',
            'Internet Cafe',
            'Craft Room',
            'Art Studio',
            'Dance Studio',
            'Yoga Studio',
            'Catering Service',
            'Valet Parking',
            'Storage Room',
            'Outdoor Pool',
            'Rooftop Lounge',
            'Pet Spa',
            'Massage Services',
            'Wine Cellar',
            'Sky Lounge'
        ];

        return [
            'name' => $this->faker->randomElement($facilityNames),
        ];
    }
}
