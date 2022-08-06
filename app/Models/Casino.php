<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Casino extends Model
{
    use HasFactory;

    public function countries() {
        return $this->hasMany('App\Models\CasinoCountry','casino_id');
    }
}
