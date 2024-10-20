import ImageSlider from "@/Components/ImageSlider";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Review from "@/Components/Review";
import RoomCard from "@/Components/RoomCard";
import StarRating from "@/Components/StarRating";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { CheckIcon } from "@heroicons/react/24/solid";
import { Link, useForm, usePage } from "@inertiajs/react";
import React from "react";
import { FaCheck, FaStar, FaWifi } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Show({ room }) {
    const user = usePage().props.auth.user;

    const { data, setData, post, errors } = useForm();

    return (
        <AuthenticatedLayout
            header={
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <h2 className="text-xl font-semibold leading-tight text-gray-800">
                            Room
                        </h2>
                        <span className="text-2xl font-bold text-teal-700">
                            #{room.room_number}
                        </span>
                    </div>
                    <div className="space-x-2">
                        <Link
                            // href={route("bookings.show", room.id)}
                            className="px-3 py-2 text-sm font-bold text-white bg-teal-700 rounded hover:bg-teal-800"
                        >
                            Check Availability
                        </Link>
                        {user.role === "admin" && (
                            <>
                                <Link
                                    className="px-3 py-2 text-sm font-bold text-white bg-indigo-700 rounded hover:bg-indigo-800"
                                    href={route("rooms.edit", room.id)}
                                >
                                    Edit
                                </Link>
                                <Link
                                    className="px-3 py-2 text-sm font-bold text-white rounded bg-rose-700 hover:bg-rose-800"
                                    // href={route("rooms.edit", room.id)}
                                >
                                    Delete
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            }
        >
            <div className="my-6 shadow-sm">
                <div className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
                    {/* Image Carousel */}
                    <div className="relative h-64 sm:h-96">
                        <ImageSlider images={room.images} />
                    </div>

                    {/* Room Details */}
                    <div className="p-6">
                        {/* Title and Rating */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <StarRating rating={room.rating} />
                                <p className="text-gray-600">
                                    {room.reviews.length} reviews
                                </p>
                            </div>
                            <div className="flex items-center space-x-1">
                                <p>Type: </p>
                                <p className="font-bold text-teal-700 capitalize">
                                    {room.room_type}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-bold">
                                {room.name} - #{room.room_number}
                            </h1>

                            {/* Price */}
                            <div className="flex items-center justify-end ">
                                <div className="flex flex-col items-center">
                                    <p className="text-sm text-gray-500">
                                        Price per night
                                    </p>
                                    <span className="text-xl font-bold text-indigo-600">
                                        {room.price}$
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex mt-3 space-x-1">
                            <FaLocationDot className="text-blue-600" />
                            <p>{room.address}</p>
                        </div>

                        {/* Description */}
                        <div className="mt-2">
                            <h2 className="font-bold">Description</h2>
                            <p className="text-base text-gray-700 ">
                                {room.description}
                            </p>
                        </div>

                        {/* Facilities */}
                        <div className="mt-4">
                            <h2 className="font-bold ">Facilities</h2>
                            <div className="flex flex-wrap items-center ">
                                {room.facilities.map((facility) => (
                                    <span
                                        key={facility.id}
                                        className="inline-flex items-center px-3 py-1 m-2 text-sm font-medium text-teal-700 bg-teal-100 rounded"
                                    >
                                        <FaCheck className="mr-1" />
                                        {facility.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-2xl p-6 mx-auto my-5 overflow-hidden bg-white rounded-lg shadow-lg">
                    <h1 className="text-4xl font-semibold">Leave a review</h1>
                    <div className="p-4 mt-5 mb-10 rounded-lg shadow-xl bg-slate-100">
                        <form className="flex flex-col space-y-3">
                            <div className="flex items-center space-x-2">
                                <div className="flex flex-col w-1/2">
                                    <InputLabel
                                        htmlFor="review_title"
                                        value="Title"
                                    />
                                    <TextInput
                                        id="review_title"
                                        type="text"
                                        name="title"
                                        className="block w-full mt-1"
                                        // onChange={(e) =>
                                        //     setData("title", e.target.files[0])
                                        // }
                                    />
                                    <InputError
                                        message={errors.title}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <InputLabel
                                        htmlFor="review_rating"
                                        value="Rating"
                                    />
                                    <TextInput
                                        id="review_rating"
                                        type="number"
                                        name="rating"
                                        min={1}
                                        max={5}
                                        className="block w-full mt-1"
                                        // onChange={(e) =>
                                        //     setData("rating", e.target.files[0])
                                        // }
                                    />
                                    <InputError
                                        message={errors.rating}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col mt-4">
                                <InputLabel
                                    htmlFor="review_comment"
                                    value="Comment"
                                />
                                <TextAreaInput
                                    id="review_comment"
                                    name="comment"
                                    className="block w-full mt-1"
                                    // onChange={(e) =>
                                    //     setData("comment", e.target.value)
                                    // }
                                />
                                <InputError
                                    message={errors.comment}
                                    className="mt-2"
                                />
                            </div>
                            <div className="flex justify-end ">
                                <button className="px-2 py-1 mt-4 text-sm text-white transition-all bg-teal-700 rounded shadow hover:bg-teal-900">
                                    Post
                                </button>
                            </div>
                        </form>
                    </div>

                    <h1 className="text-2xl font-semibold">Reviews</h1>
                    <div>
                        {room.reviews && room.reviews.length > 0 ? (
                            room.reviews.map((review) => (
                                <Review key={review.id} review={review} />
                            ))
                        ) : (
                            <p className="mt-4 text-sm italic font-semibold text-gray-600">
                                No reviews yet.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
