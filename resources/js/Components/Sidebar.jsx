import { useState } from "react";
import {
    FaBars,
    FaCalendarCheck,
    FaDoorOpen,
    FaHashtag,
    FaStar,
    FaUsers,
} from "react-icons/fa";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`${
                    isCollapsed ? "w-16" : "w-64"
                } bg-white transition-all duration-300 relative`}
            >
                <div
                    className="absolute cursor-pointer top-4 left-4"
                    onClick={toggleSidebar}
                >
                    <FaBars size={24} className="text-gray-500" />
                </div>
                <div className={`${isCollapsed ? "hidden" : "block"} mt-28`}>
                    {/* Sidebar Items */}

                    <ul className="flex flex-col p-4 space-y-8">
                        <Link
                            className="inline-flex items-center gap-1 px-1 py-1 text-lg font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 focus:outline-none hover:border-teal-700 hover:text-teal-700"
                            href={route("users.index")}
                        >
                            <FaUsers className="size-8" />
                            Users
                        </Link>
                        <Link
                            className="inline-flex items-center gap-1 px-1 py-1 text-lg font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 focus:outline-none hover:border-teal-700 hover:text-teal-700"
                            href={route("rooms.index")}
                        >
                            <FaDoorOpen className="size-7" />
                            Rooms
                        </Link>
                        <Link
                            className="inline-flex items-center gap-1 px-1 py-1 text-lg font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 focus:outline-none hover:border-teal-700 hover:text-teal-700"
                            href={route("bookings.index")}
                        >
                            <FaCalendarCheck className="size-7" />
                            Bookings
                        </Link>
                        <Link
                            className="inline-flex items-center gap-1 px-1 py-1 text-lg font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 focus:outline-none hover:border-teal-700 hover:text-teal-700"
                            href={route("reviews.index")}
                        >
                            <FaStar className="size-7" />
                            Reviews
                        </Link>
                        <Link
                            className="inline-flex items-center gap-1 px-1 py-1 text-lg font-medium leading-5 text-gray-500 transition duration-150 ease-in-out border-b-2 focus:outline-none hover:border-teal-700 hover:text-teal-700"
                            href={route("facilities.index")}
                        >
                            <FaHashtag className="size-7" />
                            Facilities
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
