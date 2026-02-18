<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Region\Village>
 */
class VillageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'code' => $this->faker->unique()->numerify('##.##.##.####'),
            'district_code' => \App\Models\Region\District::factory(),
            'name' => $this->faker->unique()->streetName(), // approximating village names
            'meta' => ['lat' => $this->faker->latitude(), 'long' => $this->faker->longitude()],
        ];
    }
}
