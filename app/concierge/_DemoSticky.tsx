"use client"

import { useEffect, useState } from "react"
import { Phone, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface DemoStickyProps {
    demoNumber: string
}

export default function DemoSticky({ demoNumber }: DemoStickyProps) {
    const [showStickyDemo, setShowStickyDemo] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById("hero-section")
            if (heroSection) {
                const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
                setShowStickyDemo(window.scrollY > heroBottom - 100)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    if (!showStickyDemo) return null

    return (
        <div className="fixed top-20 right-4 z-40 hidden lg:block animate-in slide-in-from-right duration-300">
            <Card className="border border-orange-200 shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="px-4">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                            <Target className="w-4 h-4 text-orange-600 mr-1" />
                            <p className="text-xs text-gray-600 font-medium">Live Demo</p>
                        </div>
                        <p className="text-lg font-bold text-gray-900 mb-2">{demoNumber}</p>
                        <Link href={`tel:${demoNumber}`}>
                            <Button
                                size="sm"
                                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold w-full transition-all duration-300"
                            >
                                <Phone className="w-4 h-4 mr-1" />
                                Anrufen
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}