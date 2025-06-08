"use client"

import { Button } from "@/components/ui/button"
import { ReactNode, CSSProperties } from "react"

interface ScrollToButtonProps {
    targetId: string
    offset?: number
    variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary"
    size?: "default" | "sm" | "lg" | "icon"
    className?: string
    style?: CSSProperties
    children: ReactNode
}

export default function ScrollToButton({
    targetId,
    offset = 55,
    variant = "default",
    size = "default",
    className = "",
    style,
    children
}: ScrollToButtonProps) {
    const scrollToIdWithOffset = (id: string, offset: number) => {
        const element = document.getElementById(id)
        if (element) {
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.scrollY - offset
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
        }
    }

    const handleClick = () => {
        scrollToIdWithOffset(targetId, offset)
    }

    return (
        <Button
            variant={variant}
            size={size}
            className={className}
            style={style}
            onClick={handleClick}
        >
            {children}
        </Button>
    )
} 