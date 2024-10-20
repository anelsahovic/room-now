<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facility extends Model
{
    /** @use HasFactory<\Database\Factories\FacilityFactory> */
    use HasFactory;

    public function rooms()
    {
        return $this->belongsToMany(Room::class, 'room_facilities', 'facility_id', 'room_id');
    }
}
