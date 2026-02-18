<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Region\District>
 */
class DistrictFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'code' => $this->faker->unique()->numerify('##.##.##'),
            'city_code' => \App\Models\Region\City::factory(),
            'name' => $this->faker->unique()->citySuffix(), // approximating district names
            'meta' => ['lat' => $this->faker->latitude(), 'long' => $this->faker->longitude()],
        ];
    }
}
