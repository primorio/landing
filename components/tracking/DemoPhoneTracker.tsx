"use client"

import { ReactNode } from 'react'
import Link from 'next/link'
import { useMetaPixelTracking } from '@/lib/meta-pixel'

interface DemoPhoneTrackerProps {
    children: ReactNode
    phoneNumber: string
    source: string
    className?: string
}

export default function DemoPhoneTracker({ children, phoneNumber, source, className }: DemoPhoneTrackerProps) {
    const { trackDemoPhoneClick } = useMetaPixelTracking()

    const handleClick = () => {
        trackDemoPhoneClick(source)
    }

    return (
        <Link href={`tel:${phoneNumber}`} onClick={handleClick} className={className}>
            {children}
        </Link>
    )
} 