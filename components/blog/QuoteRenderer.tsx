"use client";

import React from "react";
import { Quote } from "lucide-react";

interface QuoteRendererProps {
    text?: string;
    author?: string;
}

export default function QuoteRenderer({ text, author }: QuoteRendererProps) {
    if (!text) return null;

    return (
        <div className="mb-8">
            <blockquote className="relative bg-teal-50 border-l-4 border-teal-500 p-8 rounded-r-lg">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-teal-400 opacity-50" />
                <p className="text-xl italic text-gray-800 mb-4 pl-8">
                    "{text}"
                </p>
                {author && (
                    <cite className="text-sm text-gray-600 font-medium pl-8">
                        — {author}
                    </cite>
                )}
            </blockquote>
        </div>
    );
}
