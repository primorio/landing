"use client";

import React from "react";

interface MediaRendererProps {
    file?: any;
    media?: any;
}

export default function MediaRenderer({ file, media }: MediaRendererProps) {
    const mediaItem = file || media;
    if (!mediaItem) return null;

    const getImageUrl = (mediaItem: any) => {
        if (!mediaItem?.url) return null;
        const baseUrl =
            process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
        return `${baseUrl}${mediaItem.url}`;
    };

    const imageUrl = getImageUrl(mediaItem);
    if (!imageUrl) return null;

    return (
        <div className="mb-8">
            <div className="aspect-video relative bg-gray-100 rounded-xl overflow-hidden">
                <img
                    src={imageUrl}
                    alt={mediaItem.alternativeText || "Media"}
                    className="w-full h-full object-cover"
                />
            </div>
            {mediaItem.caption && (
                <p className="text-sm text-gray-600 mt-2 text-center italic">
                    {mediaItem.caption}
                </p>
            )}
        </div>
    );
}
