<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $categories = [
            [
                'name' => 'Web Development',
                'icon' => 'Braces',
            ],
            [
                'name' => 'Finance',
                'icon' => 'CircleDollarSign',
            ],
            [
                'name' => 'Marketingyy',
                'icon' => 'ChartCandlesticky',
            ],
            [
                'name' => 'Cyber Security',
                'icon' => 'Airplay',
            ]
        ];

        foreach ($categories as $category) {
            \App\Models\Category::create($category);
        }
        \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
