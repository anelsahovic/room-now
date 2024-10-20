import React from "react";
import { FaStar } from "react-icons/fa";
import StarRating from "./StarRating";

export default function Review({ review }) {
    return (
        <div
            key={review.id}
            className="p-4 my-4 rounded-lg shadow-xl bg-zinc-100"
        >
            {/* User Info */}
            <div className="flex items-center justify-between mb-2">
                <div>
                    <h4 className="text-lg font-bold text-gray-900">
                        {review.user.name}
                    </h4>
                    <p className="text-sm text-gray-500">{review.user.email}</p>
                </div>
                <p className="text-sm text-gray-400">
                    {new Date(review.created_at).toLocaleDateString()}
                </p>
            </div>

            {/* Review Title */}
            <h3 className="mb-2 font-semibold text-teal-600 text-md">
                {review.title || "Untitled Review"}
            </h3>

            {/* Rating */}
            <div className="flex items-center mb-3">
                <div className="flex space-x-1">
                    <StarRating rating={review.rating} />
                </div>
                <span className="ml-2 text-gray-500">{review.rating}/5</span>
            </div>

            {/* Comment */}
            <p className="text-gray-700">{review.comment}</p>
        </div>
    );
}
