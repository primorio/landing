"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { addScriptDefault, setup, FacebookQuery } from 'meta-pixel'
import { META_PIXEL_CONFIG } from '@/lib/meta-pixel'

// Create the context
interface MetaPixelContextType {
    fbq: FacebookQuery | null
    isLoaded: boolean
}

const MetaPixelContext = createContext<MetaPixelContextType>({
    fbq: null,
    isLoaded: false
})

// Custom hook to use Meta Pixel
export const useMetaPixel = () => {
    const context = useContext(MetaPixelContext)
    if (!context) {
        throw new Error('useMetaPixel must be used within a MetaPixelProvider')
    }
    return context
}

export default function MetaPixelProvider({ children }: { children: ReactNode }) {
    const [fbq, setFbq] = useState<FacebookQuery | null>(null)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // Initialize Meta Pixel using the meta-pixel library
        if (typeof window !== 'undefined') {
            try {
                const metaPixelFbq = addScriptDefault()

                // Setup pixel with configuration
                setup(metaPixelFbq)
                    .init(META_PIXEL_CONFIG.pixelId)
                    .pageView()

                setFbq(metaPixelFbq)
                setIsLoaded(true)
            } catch (error) {
                console.error('Failed to initialize Meta Pixel:', error)
            }
        }
    }, [])

    return (
        <MetaPixelContext.Provider value={{ fbq, isLoaded }}>
            {children}
        </MetaPixelContext.Provider>
    )
} 