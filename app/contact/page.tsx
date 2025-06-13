import NavBar from "@/components/ui/NavBar"
import Footer from "@/components/ui/Footer"
import { Metadata } from "next";
import ContactForm from "./_ContactForm"
import PageViewTracker from "@/components/tracking/PageViewTracker";

export const metadata: Metadata = {
    title: "Primorio - Kontakt",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <PageViewTracker pageName="Contact" />
            <NavBar />
            <main className="flex-1 flex flex-col items-center justify-center py-16 px-4">
                <ContactForm />
            </main>
            <Footer />
        </div>
    )
}
