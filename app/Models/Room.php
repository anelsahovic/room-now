<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Room extends Model
{
    /** @use HasFactory<\Database\Factories\RoomFactory> */
    use HasFactory;


    public function images()
    {

        return DB::table('room_images')->where('room_id', $this->id)->pluck('image_url');
    }

    public function facilities()
    {
        return $this->belongsToMany(Facility::class, 'room_facilities', 'room_id', 'facility_id');

    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

}
