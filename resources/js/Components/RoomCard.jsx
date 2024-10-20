import { Link } from "@inertiajs/react";
import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

export default function RoomCard({ room }) {
    const truncatedDesc =
        room.description.length > 200
            ? room.description.slice(0, 200) + "..."
            : room.description;

    return (
        <>
            <div className="max-w-sm mx-auto overflow-hidden bg-white rounded shadow-lg sm:mx-0">
                {/* Image */}
                <div className="relative">
                    <img
                        className="object-cover w-full h-48"
                        src={room.images[0]}
                    />
                    <span className="absolute px-2 py-1 text-sm font-semibold text-gray-100 bg-gray-600 rounded-full opacity-90 left-2 top-2">
                        {room.room_type}
                    </span>
                </div>

                {/* Room Details */}
                <div className="px-6 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-bold">
                            {room.name} -{" "}
                            <span className="italic text-gray-500">
                                #{room.room_number}
                            </span>
                        </h1>
                        <h1 className="text-xl font-bold text-indigo-600">
                            {room.price}$
                        </h1>
                    </div>

                    <p className="mb-2 text-sm text-gray-500">
                        Created at:{" "}
                        {new Date(room.created_at).toLocaleDateString()}
                    </p>

                    <p className="mb-4 text-base text-gray-700">
                        {truncatedDesc}
                    </p>

                    <div className="flex items-center justify-between">
                        <Link
                            href={route("rooms.show", room)}
                            className="px-2 py-1 text-sm text-white bg-teal-700 rounded hover:bg-teal-800"
                        >
                            Book Now
                        </Link>

                        <Link
                            className="flex items-center space-x-1 hover:underline hover:text-teal-700"
                            href={route("rooms.show", room)}
                        >
                            <IoMdInformationCircleOutline className="size-6" />{" "}
                            Info
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
