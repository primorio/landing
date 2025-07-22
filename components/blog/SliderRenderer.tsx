"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderRendererProps {
    files?: any[];
}

export default function SliderRenderer({ files }: SliderRendererProps) {
    if (!files || !files.length) return null;

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const getImageUrl = (mediaItem: any) => {
        if (!mediaItem?.url) return null;
        const baseUrl =
            process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
        return `${baseUrl}${mediaItem.url}`;
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % files.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + files.length) % files.length);
    };

    return (
        <div className="mb-8">
            <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                <div className="aspect-video relative">
                    <img
                        src={getImageUrl(files[currentIndex]) || ""}
                        alt={
                            files[currentIndex]?.alternativeText ||
                            `Slide ${currentIndex + 1}`
                        }
                        className="w-full h-full object-cover"
                    />

                    {files.length > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </>
                    )}
                </div>

                {files.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {files.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                    index === currentIndex
                                        ? "bg-white"
                                        : "bg-white bg-opacity-50"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {files[currentIndex]?.caption && (
                <p className="text-sm text-gray-600 mt-2 text-center italic">
                    {files[currentIndex].caption}
                </p>
            )}
        </div>
    );
}
