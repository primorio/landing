import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <Link href="/" className="flex items-center space-x-3 mb-4">
                            <Logo
                                width={32}
                                height={32}
                                className="w-8 h-8"
                                showBrand={true}
                                brandClassName="text-xl font-bold text-white"
                                isDark={true}
                            />
                        </Link>
                        <p className="text-gray-400 text-sm">Innovative Lösungen für die Immobilienwirtschaft.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Produkte</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link href="/concierge" className="hover:text-white transition-colors">
                                    Primorio Concierge
                                </Link>
                            </li>
                            <li className="text-gray-600">Weitere Produkte folgen</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Rechtliches</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <Link href="/contact" className="hover:text-white transition-colors">
                                    Kontakt
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal" className="hover:text-white transition-colors">
                                    Impressum
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-white transition-colors">
                                    Datenschutz
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; 2024 Primorio. Alle Rechte vorbehalten.</p>
                </div>
            </div>
        </footer>
    );
} 