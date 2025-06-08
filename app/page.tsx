import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Zap } from "lucide-react"
import Link from "next/link"
import NavBar from "@/components/ui/NavBar"
import Footer from "@/components/ui/Footer"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Primorio - Innovative Lösungen für die Immobilienwirtschaft",
};

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <NavBar />
            <main className="flex-1 flex flex-col">
                {/* Hero Section */}
                <section className="flex-1 bg-gradient-to-br from-teal-50 via-white to-orange-50 py-32 lg:py-48">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto text-center">
                            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6 hover:bg-teal-200 transition-colors">
                                <Zap className="w-4 h-4 mr-2" />
                                Demnächst verfügbar
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                                Primorio is
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-600">
                                    {" "}
                                    coming soon
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                                Wir arbeiten an innovativen Lösungen für die Immobilienwirtschaft.
                                <br />
                                <strong className="text-gray-900">Bleiben Sie gespannt.</strong>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/concierge">
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold transition-all duration-300 w-full sm:w-auto"
                                    >
                                        Primorio Concierge entdecken
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="text-gray-700 border-gray-300 hover:bg-teal-50 hover:border-teal-300 transition-all duration-300 w-full sm:w-auto"
                                    >
                                        <Mail className="w-4 h-4 mr-2" />
                                        Kontakt aufnehmen
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
