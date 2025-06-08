import { useMetaPixel } from '@/components/providers/MetaPixelProvider'

// Event names for tracking
export const META_PIXEL_EVENTS = {
    PAGE_VIEW: "PrimorioPageView",
    CONCIERGE_FORM_LEAD: "PrimorioConciergeFormLead",
    CONTACT_FORM_LEAD: "PrimorioContactFormLead",
    DEMO_PHONE_CLICK: "PrimorioDemoPhoneClick",
} as const

// Custom hook for Meta Pixel tracking
export const useMetaPixelTracking = () => {
    const { fbq, isLoaded } = useMetaPixel()


    // Specific tracking functions for our events
    const trackPageView = (pageName: string) => {
        fbq && fbq('trackCustom', META_PIXEL_EVENTS.PAGE_VIEW, {
            content_name: pageName,
        })
    }

    const trackConciergeFormLead = (formData?: any) => {
        fbq && fbq('trackCustom', META_PIXEL_EVENTS.CONCIERGE_FORM_LEAD, {
            content_name: "Concierge Form Lead",
            content_category: "lead_generation",
            source: "concierge_page",
            ...formData,
        })
    }

    const trackContactFormLead = (formData?: any) => {
        fbq && fbq('trackCustom', META_PIXEL_EVENTS.CONTACT_FORM_LEAD, {
            content_name: "Contact Form Lead",
            content_category: "lead_generation",
            source: "contact_page",
            ...formData,
        })
    }

    const trackDemoPhoneClick = (source: string) => {
        fbq && fbq('trackCustom', META_PIXEL_EVENTS.DEMO_PHONE_CLICK, {
            content_name: "Demo Phone Click",
            content_category: "engagement",
            source: source,
        })
    }

    return {
        trackPageView,
        trackConciergeFormLead,
        trackContactFormLead,
        trackDemoPhoneClick,
        isLoaded
    }
}
