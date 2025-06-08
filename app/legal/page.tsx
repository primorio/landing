import NavBar from "@/components/ui/NavBar"
import Footer from "@/components/ui/Footer"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Primorio - Impressum",
};

export default function ImpressumPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <NavBar />
            <main className="flex-1">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
                        <div className="max-w-none">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Angaben gem. § 5 DDG (ehemals TMG):</h2>
                            <div className="bg-gray-50 rounded-lg p-6 mb-8">
                                <p className="mb-2"><strong>Primorio GmbH</strong></p>
                                <p className="mb-2">Unter den Linden 10</p>
                                <p className="mb-2">10117 Berlin</p>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Vertreten durch die Geschäftsführer:</h3>
                            <p className="mb-6">Lennard Walter, Timon Gärtner</p>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Kontakt:</h3>
                            <div className="mb-6">
                                <p className="mb-2">Telefon: +49 30 52014530</p>
                                <p className="mb-2">E-Mail: kontakt@primorio.de</p>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Registereintrag:</h3>
                            <div className="mb-6">
                                <p className="mb-2">Eintragung im Handelsregister.</p>
                                <p className="mb-2">Registergericht: Amtsgericht Charlottenburg</p>
                                <p className="mb-2">Registernummer: HRB 269201 B</p>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Umsatzsteuer-ID:</h3>
                            <p className="mb-6">Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: DE450315194</p>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Steuernummer:</h3>
                            <p className="mb-6">29/479/30829</p>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h3>
                            <div className="mb-8">
                                <p className="mb-2">Lennard Walter</p>
                                <p className="mb-2">Timon Gärtner</p>
                                <p className="mb-2">Unter den Linden 10</p>
                                <p className="mb-2">10117 Berlin</p>
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Haftungsausschluss</h2>
                            <p className="mb-6">
                                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
