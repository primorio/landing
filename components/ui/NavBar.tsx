"use client";

import { HeadphonesIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ReactNode, useState } from "react";
import Logo from "@/components/ui/Logo";

interface NavBarProps {
    logo?: ReactNode;
    contactContent?: ReactNode;
}

export default function NavBar({ logo, contactContent }: NavBarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-8 justify-between w-full">
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

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center gap-6">
                        {/* <Link
                            href="/concierge"
                            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                        >
                            Concierge
                        </Link> */}
                        {/* <Link
                            href="/blog"
                            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                        >
                            Blog
                        </Link> */}
                        <Link
                            href="/jobs"
                            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                        >
                            Jobs
                        </Link>
                        {contactContent || (
                            <Link
                                href="/contact"
                                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                            >
                                Kontakt
                            </Link>
                        )}
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white">
                    <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        {/* <Link
                            href="/concierge"
                            className="text-gray-600 hover:text-gray-900 font-medium transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Concierge
                        </Link> */}
                        {/* <Link
                            href="/blog"
                            className="text-gray-600 hover:text-gray-900 font-medium transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Blog
                        </Link> */}
                        <Link
                            href="/jobs"
                            className="text-gray-600 hover:text-gray-900 font-medium transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Jobs
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-600 hover:text-gray-900 font-medium transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Kontakt
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
