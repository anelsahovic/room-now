<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\StoreRoomRequest;
use App\Http\Requests\UpdateRoomRequest;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Room::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", 'asc');

        if (request("name")) {
            $query->where("description", "like", "%" . request("name") . "%")
                ->orWhere('room_number', 'like', '%' . request('name') . '%');
        }

        if (request("room_type")) {
            $query->where("room_type", request("room_type"));
        }

        // Apply sorting
        $rooms = $query->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        // Fetch room images
        $roomIds = $rooms->pluck('id');
        $roomImages = DB::table('room_images')
            ->whereIn('room_id', $roomIds)
            ->get()
            ->groupBy('room_id');

        foreach ($rooms as $room) {
            $room->images = $roomImages->get($room->id, collect())->pluck('image_url');
        }

        // Return data to the front end
        return inertia('Rooms/Index', [
            'rooms' => $rooms,
            'queryParams' => request()->query() ?: null,
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Rooms/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRoomRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Room $room)
    {
        // Retrieve room images
        $roomImages = DB::table('room_images')
            ->where('room_id', $room->id)
            ->pluck('image_url');

        $room->images = $roomImages;

        // Load facilities and reviews with their users for this specific room
        $room->load(['facilities', 'reviews.user']); // This loads reviews and their users

        return inertia('Rooms/Show', [
            'room' => $room,
        ]);
    }



    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Room $room)
    {
        $roomImages = DB::table('room_images')
            ->where('room_id', $room->id)
            ->pluck('image_url');

        $room->images = $roomImages;
        return inertia('Rooms/Edit', [
            'room' => $room
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRoomRequest $request, Room $room)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Room $room)
    {
        //
    }
}
