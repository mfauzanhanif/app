<?php

namespace Tests\Feature;

use App\Models\Region\City;
use App\Models\Region\District;
use App\Models\Region\Province;
use App\Models\Region\Village;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Cache;
use Tests\TestCase;

class RegionTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        Cache::flush();
    }

    public function test_can_get_provinces()
    {
        Province::factory()->count(3)->create();

        $response = $this->getJson('/api/location/provinces');

        $response->assertStatus(200)
            ->assertJsonStructure([
                '*' => [], // Should be an object/array of key-value pairs (code => name)
            ]);
    }

    public function test_can_get_cities_by_province()
    {
        $province = Province::factory()->create();
        City::factory()->count(3)->create(['province_code' => $province->code]);

        $response = $this->getJson('/api/location/cities?id_province=' . $province->code);

        $response->assertStatus(200);
        $this->assertCount(3, $response->json());
    }

    public function test_can_get_districts_by_city()
    {
        $city = City::factory()->create();
        District::factory()->count(3)->create(['city_code' => $city->code]);

        $response = $this->getJson('/api/location/districts?id_city=' . $city->code);

        $response->assertStatus(200);
        $this->assertCount(3, $response->json());
    }

    public function test_can_get_villages_by_district()
    {
        $district = District::factory()->create();
        Village::factory()->count(3)->create(['district_code' => $district->code]);

        $response = $this->getJson('/api/location/villages?id_district=' . $district->code);

        $response->assertStatus(200);
        $this->assertCount(3, $response->json());
    }

    public function test_returns_empty_if_parent_code_missing()
    {
        $response = $this->getJson('/api/location/cities');
        $response->assertStatus(200)->assertJson([]);

        $response = $this->getJson('/api/location/districts');
        $response->assertStatus(200)->assertJson([]);

        $response = $this->getJson('/api/location/villages');
        $response->assertStatus(200)->assertJson([]);
    }
}
