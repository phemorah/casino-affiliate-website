<?php

namespace App\Http\Controllers\api\user;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Models\User;

class UserController extends Controller
{

    public function index() {
        return User::all();
    }

    public function currentUser() {        
        return Auth::guard('sanctum')->user();
    }
}
