import { Metadata } from "next";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import PageViewTracker from "@/components/tracking/PageViewTracker";
import JobListings from "./_JobListings";

export const metadata: Metadata = {
    title: "Jobs - Primorio",
    description:
        "Karrieremöglichkeiten bei Primorio - Innovative Lösungen für die Immobilienwirtschaft",
};

export default function JobsPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <PageViewTracker pageName="Jobs" />
            <NavBar />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-teal-50 via-white to-orange-50 py-16 lg:py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Karriere bei
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-600">
                                    {" "}
                                    Primorio
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Gestalte die Zukunft der Immobilienwirtschaft
                                mit uns. Werde Teil eines innovativen Teams, das
                                die Branche revolutioniert.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Job Listings Section */}
                <section className="py-12 lg:py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                    Offene Stellen
                                </h2>
                                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                    Entdecke spannende Karrieremöglichkeiten und
                                    werde Teil unserer Mission, die
                                    Immobilienwirtschaft zu transformieren.
                                </p>
                            </div>
                            <JobListings />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
