"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import posthog from "posthog-js";

export const PostHogProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    useEffect(() => {
        posthog.init("phc_t84HCBpMx2wI6Jl8oKzr8BphZ4nNQrYODRNXs5OedX1", {
            api_host: "https://eu.posthog.com",
        });
    }, []);
    const location = usePathname();
    useEffect(() => {
        posthog.capture("$pageview");
    }, [location]);
    return <>{children}</>;
};
