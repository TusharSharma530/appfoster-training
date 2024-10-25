<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Project;
use Illuminate\Http\Request;

class UserController extends Controller
{
    // Fetch all users
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    // Fetch all projects for a specific user
    public function projects($userId)
    {
        $projects = Project::where('user_id', $userId)->get();
        return response()->json($projects);
    }
}
