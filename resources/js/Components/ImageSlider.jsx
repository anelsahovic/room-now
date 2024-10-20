import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to handle the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to handle the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto">
            {/* Carousel Images */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="object-cover w-full h-64 rounded-lg sm:h-96"
                    />
                </div>
            ))}

            {/* Left Arrow */}
            <button
                className="absolute p-3 text-white transform -translate-y-1/2 bg-teal-700 rounded-full left-2 top-32 sm:top-48"
                onClick={prevSlide}
            >
                <FaArrowLeft />
            </button>

            {/* Right Arrow */}
            <button
                className="absolute p-3 text-white transform -translate-y-1/2 bg-teal-700 rounded-full right-2 top-32 sm:top-48"
                onClick={nextSlide}
            >
                <FaArrowRight />
            </button>

            {/* Dots Indicators */}
            <div className="absolute flex space-x-2 transform -translate-x-1/2 top-3 left-1/2 ">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex
                                ? "bg-teal-700"
                                : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
