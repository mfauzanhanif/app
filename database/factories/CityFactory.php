<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Region\City>
 */
class CityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'code' => $this->faker->unique()->numerify('##.##'),
            'province_code' => \App\Models\Region\Province::factory(),
            'name' => $this->faker->unique()->city(),
            'meta' => ['lat' => $this->faker->latitude(), 'long' => $this->faker->longitude()],
        ];
    }
}
