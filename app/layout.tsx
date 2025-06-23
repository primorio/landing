import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MetaPixelProvider from "@/components/providers/MetaPixelProvider";
import { PostHogProvider } from "@/components/providers/PostHogProvider";
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(`https://primorio.de`),
    title: "Primorio - Innovative Lösungen für die Immobilienwirtschaft",
    icons: {
        icon: "/favicon.ico",
    },
    alternates: {
        canonical: "./",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <MetaPixelProvider>
                    <PostHogProvider>{children}</PostHogProvider>
                </MetaPixelProvider>
            </body>
        </html>
    );
}
