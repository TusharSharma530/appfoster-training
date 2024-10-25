<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // For each user, create 3 projects
        User::all()->each(function ($user) {
            Project::factory(3)->create([
                'user_id' => $user->id,
            ]);
        });
    }
}
