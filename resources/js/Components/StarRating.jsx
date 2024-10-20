import { FaStar, FaRegStar } from "react-icons/fa";

export default function Rating({ rating }) {
    const maxStars = 5;
    const filledStars = Math.min(rating, maxStars); // Ensures the filled stars don't exceed max
    const emptyStars = maxStars - filledStars;

    return (
        <div className="flex">
            {/* Render filled stars */}
            {[...Array(filledStars)].map((_, i) => (
                <FaStar key={`filled-${i}`} className="text-yellow-500" />
            ))}

            {/* Render empty stars */}
            {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar key={`empty-${i}`} className="text-gray-400" />
            ))}
        </div>
    );
}
