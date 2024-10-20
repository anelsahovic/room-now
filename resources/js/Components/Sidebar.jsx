import { useState } from "react";
import {
    FaBars,
    FaCalendarCheck,
    FaDoorOpen,
    FaHashtag,
    FaStar,
    FaUsers,
    FaChevronDown,
    FaChevronRight,
} from "react-icons/fa";
import { Link } from "@inertiajs/react";

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isRoomsOpen, setIsRoomsOpen] = useState(false);
    const [isUsersOpen, setIsUsersOpen] = useState(false);
    const [isBookingsOpen, setIsBookingsOpen] = useState(false);
    const [isReviewsOpen, setIsReviewsOpen] = useState(false);
    const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleRooms = () => {
        setIsRoomsOpen(!isRoomsOpen);
    };

    const toggleUsers = () => {
        setIsUsersOpen(!isUsersOpen);
    };

    const toggleBookings = () => {
        setIsBookingsOpen(!isBookingsOpen);
    };

    const toggleReviews = () => {
        setIsReviewsOpen(!isReviewsOpen);
    };

    const toggleFacilities = () => {
        setIsFacilitiesOpen(!isFacilitiesOpen);
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
                <div className={`${isCollapsed ? "hidden" : "block"} mt-14`}>
                    {/* Sidebar Items */}
                    <ul className="flex flex-col p-4 space-y-8">
                        {/* Users Link with Sublinks */}
                        <li>
                            <div
                                onClick={toggleUsers}
                                className="inline-flex items-center gap-1 px-1 py-1 font-medium leading-5 text-gray-500 cursor-pointer text-md hover:text-teal-700"
                            >
                                <FaUsers className="size-6" />
                                <span>Users</span>
                                {isUsersOpen ? (
                                    <FaChevronDown />
                                ) : (
                                    <FaChevronRight />
                                )}
                            </div>
                            {isUsersOpen && (
                                <ul className="mt-2 ml-4 space-y-2 text-sm">
                                    <li>
                                        <Link
                                            href={route("users.create")}
                                            className="text-gray-500 hover:text-teal-700"
                                        >
                                            Create User
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route("users.index")}
                                            className="text-gray-500 hover:text-teal-700"
                                        >
                                            See All Users
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Rooms Link with Sublinks */}
                        <li>
                            <div
                                onClick={toggleRooms}
                                className="inline-flex items-center gap-1 px-1 py-1 font-medium leading-5 text-gray-500 cursor-pointer text-md hover:text-teal-700"
                            >
                                <FaDoorOpen className="size-5" />
                                <span>Rooms</span>
                                {isRoomsOpen ? (
                                    <FaChevronDown />
                                ) : (
                                    <FaChevronRight />
                                )}
                            </div>
                            {isRoomsOpen && (
                                <ul className="mt-2 ml-4 space-y-2 text-sm">
                                    <li>
                                        <Link
                                            href={route("rooms.create")}
                                            className="text-gray-500 hover:text-teal-700"
                                        >
                                            Create Room
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route("rooms.index")}
                                            className="text-gray-500 hover:text-teal-700"
                                        >
                                            See All Rooms
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Bookings Link with Sublinks */}
                        <li>
                            <div
                                onClick={toggleBookings}
                                className="inline-flex items-center gap-1 px-1 py-1 font-medium leading-5 text-gray-500 cursor-pointer text-md hover:text-teal-700"
                            >
                                <FaCalendarCheck className="size-5" />
                                <span>Bookings</span>
                                {isBookingsOpen ? (
                                    <FaChevronDown />
                                ) : (
                                    <FaChevronRight />
                                )}
                            </div>
                            {isBookingsOpen && (
                                <ul className="mt-2 ml-4 space-y-2 text-sm">
                                    <li>
                                        <Link
                                            href={route("bookings.create")}
                                            className="text-gray-500 hover:text-teal-700"
                                        >
                                            Create Booking
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route("bookings.index")}
                                            className="text-gray-500 hover:text-teal-700"
                                        >
                                            See All Bookings
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Reviews Link with Sublinks */}
                        <li>
                            <div
                                onClick={toggleReviews}
                                className="inline-flex items-center gap-1 px-1 py-1 font-medium leading-5 text-gray-500 cursor-pointer text-md hover:text-teal-700"
                            >
                                <FaStar className="size-5" />
                                <span>Reviews</span>
                                {isReviewsOpen ? (
                                    <FaChevronDown />
                                ) : (
                                    <FaChevronRight />
                                )}
                            </div>
                            {isReviewsOpen && (
                                <ul className="mt-2 ml-4 space-y-2 text-sm">
                                    <li>
                                        <Link
                                            href={route("reviews.create")}
                                            className="text-gray-500 hover:text-teal-700"
                                        >
                                            Create Review
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route("reviews.index")}
                                            className="text-gray-500 hover:text-teal-700"
                                        >
                                            See All Reviews
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Facilities Link with Sublinks */}
                        <li>
                            <div
                                onClick={toggleFacilities}
                                className="inline-flex items-center gap-1 px-1 py-1 font-medium leading-5 text-gray-500 cursor-pointer text-md hover:text-teal-700"
                            >
                                <FaHashtag className="size-5" />
                                <span>Facilities</span>
                                {isFacilitiesOpen ? (
                                    <FaChevronDown />
                                ) : (
                                    <FaChevronRight />
                                )}
                            </div>
                            {isFacilitiesOpen && (
                                <ul className="mt-2 ml-4 space-y-2 text-sm">
                                    <li>
                                        <Link
                                            href={route("facilities.create")}
                                            className="text-gray-500 hover:text-teal-700"
                                        >
                                            Create Facility
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route("facilities.index")}
                                            className="text-gray-500 hover:text-teal-700"
                                        >
                                            See All Facilities
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
