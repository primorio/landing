"use client"

import { HeadphonesIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import Logo from "@/components/ui/Logo";

interface NavBarProps {
    logo?: ReactNode;
    rightContent?: ReactNode;
}

export default function NavBar({ logo, rightContent }: NavBarProps) {
    return (
        <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {logo ?? (
                    <Link href="/">
                        <Logo
                            width={32}
                            height={32}
                            className="w-8 h-8"
                            showBrand={true}
                            brandClassName="text-xl font-bold text-gray-900 dark:text-white"
                        />
                    </Link>
                )}
                {rightContent ?? null}
            </div>
        </header>
    );
} 