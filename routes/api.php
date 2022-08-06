<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CasinoController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\AssignmentController;
use App\Http\Controllers\api\user\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Route::get('/user/logout', [AuthController::class, 'logout']);

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::middleware('auth:api')->get('/user/current', [UserController::class, 'currentUser']);
// Route::get('/user/current', [UserController::class, 'currentUser']);



// Route::resource('casinos', CasinoController::class);

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/user/login', [AuthController::class, 'login']);
Route::get('/casinos/{limit?}', [CasinoController::class, 'index']);
Route::get('/brands', [CasinoController::class, 'index']);
Route::get('/country/{id}', [CountryController::class, 'show']);
Route::get('/latestCasinos', [CasinoController::class, 'latestCasinos']);

Route::get('/countries', [CountryController::class, 'index']);
Route::post('/addCountry', [CountryController::class, 'store']);
Route::post('/add/casinoCountry', [AssignmentController::class, 'store']);
Route::post('/assignedCasinos', [CasinoController::class, 'index']);


// Protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/casino/{id}', [CasinoController::class, 'show']);
    Route::post('/edit/casino/{id}', [CasinoController::class, 'update']);
    Route::get('/delete/casino/{id}', [CasinoController::class, 'destroy']);
    Route::get('/user/logout', [AuthController::class, 'logout']);
    Route::post('/casino', [CasinoController::class, 'store']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

