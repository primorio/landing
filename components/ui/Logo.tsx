"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

interface LogoProps {
    className?: string;
    width?: number;
    height?: number;
    alt?: string;
    showBrand?: boolean;
    brandText?: string;
    brandClassName?: string;
    isDark?: boolean;
}

export default function Logo({
    className = "",
    width = 120,
    height = 40,
    alt = "Primorio Logo",
    showBrand = false,
    brandText = "Primorio",
    brandClassName = "text-xl font-bold text-gray-900",
    isDark = false
}: LogoProps) {
    const logoSrc = isDark
        ? "/logo_transparent_white.png"
        : "/logo_transparent_black.png";

    if (showBrand) {
        return (
            <div className="flex items-center space-x-3">
                <Image
                    src={logoSrc}
                    alt={alt}
                    width={width}
                    height={height}
                    className={className}
                    priority
                />
                <span className={brandClassName}>{brandText}</span>
            </div>
        );
    }

    return (
        <Image
            src={logoSrc}
            alt={alt}
            width={width}
            height={height}
            className={className}
            priority
        />
    );
} 