"use client"

import { useEffect, useRef } from 'react'
import { useMetaPixelTracking } from '@/lib/meta-pixel'

interface PageViewTrackerProps {
    pageName: string
}

export default function PageViewTracker({ pageName }: PageViewTrackerProps) {
    const { trackPageView, isLoaded } = useMetaPixelTracking()
    const lastPageRef = useRef<string | null>(null)

    useEffect(() => {
        // Only track if pixel is loaded, window exists, and page name is different from last tracked page
        if (isLoaded && window && pageName !== lastPageRef.current) {
            trackPageView(pageName)
            lastPageRef.current = pageName
        }
    }, [pageName, trackPageView, isLoaded])

    return null // This component doesn't render anything
}