import {
    Phone,
    Clock,
    Users,
    FileText,
    CheckCircle,
    ArrowRight,
    Shield,
    Zap,
    HeadphonesIcon,
    Mail,
    Star,
    ChevronDown,
    AlertTriangle,
    ArrowDown,
    Settings,
    Calendar,
    MessageSquare,
    AlertCircle,
    Target,
    TrendingUp,
    Bot,
    User,
    Inbox,
    PhoneCall,
    Volume2,
    CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import Logo from "@/components/ui/Logo";
import { Metadata } from "next";
import DemoSticky from "./_DemoSticky";
import ContactForm from "./_ContactForm";
import ScrollToButton from "./_ScrollToButton";
import PageViewTracker from "@/components/tracking/PageViewTracker";
import DemoPhoneTracker from "@/components/tracking/DemoPhoneTracker";

export const metadata: Metadata = {
    title: "Primorio - KI-Concierge",
    description:
        "Entlasten Sie Ihr Team vom Telefonstress mit unserem KI-Concierge. Erfassen Sie alle relevanten Informationen professionell und leiten Sie sie strukturiert per E-Mail an Sie weiter.",
};

export default function ConciergePage() {
    const demoNumber = "+49 30 21927725";

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <PageViewTracker pageName="Concierge" />
            <NavBar
                logo={
                    <Link
                        href="/"
                        className="flex flex-col items-start space-y-0"
                    >
                        <div className="flex items-center space-x-3">
                            <Logo width={32} height={32} className="w-8 h-8" />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-gray-900 dark:text-white">
                                    Concierge
                                </span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                    by Primorio
                                </span>
                            </div>
                        </div>
                    </Link>
                }
                contactContent={
                    <div className="flex items-center space-x-4">
                        <ScrollToButton
                            targetId="contact-form"
                            variant="outline"
                            className="hover:bg-teal-50 hover:border-teal-300 transition-colors"
                        >
                            Kontakt
                        </ScrollToButton>
                    </div>
                }
            />
            <main className="flex-1">
                {/* Sticky Demo CTA */}
                <DemoSticky demoNumber={demoNumber} />

                {/* Hero Section */}
                <section
                    id="hero-section"
                    className="bg-gradient-to-br from-teal-50 via-white to-orange-50 py-16 lg:py-24"
                >
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto text-center">
                            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6 hover:bg-teal-200 transition-colors">
                                <Zap className="w-4 h-4 mr-2" />
                                Revolutionieren Sie Ihre Telefonie
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Entlasten Sie Ihr Team vom{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-600">
                                    Telefonstress
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                                Unser KI-Concierge nimmt Anrufe 24/7 entgegen,
                                erfasst alle relevanten Informationen
                                professionell und leitet sie strukturiert per
                                E-Mail an Sie weiter.{" "}
                                <strong className="text-gray-900">
                                    Mehr Zeit für Ihre Kunden.
                                </strong>
                            </p>

                            {/* Mega-Prominent Demo Number - Centered */}
                            <div className="mb-12 mt-24">
                                <div className="text-center mb-4">
                                    <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-3">
                                        <Target className="w-4 h-4 mr-2" />
                                        LIVE DEMO - Jetzt kostenlos testen
                                    </div>
                                    <div>
                                        <DemoPhoneTracker
                                            phoneNumber={demoNumber}
                                            source="hero_main"
                                            className="text-6xl lg:text-8xl font-bold text-gray-900 mb-3 tracking-tight hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-teal-600 hover:to-orange-600"
                                        >
                                            {demoNumber}
                                        </DemoPhoneTracker>
                                    </div>
                                    <p className="text-lg text-gray-600 mb-6">
                                        Rufen Sie an und erleben Sie unseren
                                        KI-Concierge live in Aktion
                                    </p>
                                </div>

                                <div className="flex items-center justify-center text-gray-500 text-sm mb-8">
                                    <AlertTriangle className="w-4 h-4 mr-2" />
                                    <span>
                                        Tipp: Melden Sie eine fiktive, kaputte
                                        Heizung
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <ScrollToButton
                                    targetId="problem-section"
                                    variant="outline"
                                    size="lg"
                                    className="text-gray-700 border-gray-300 hover:bg-teal-50 hover:border-teal-300 transition-all duration-300"
                                    style={{ scale: 1.035 }}
                                >
                                    Mehr erfahren
                                    <ChevronDown className="w-4 h-4 ml-2" />
                                </ScrollToButton>
                                <ScrollToButton
                                    targetId="contact-form"
                                    size="lg"
                                    className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold transition-all duration-300 border-0"
                                >
                                    Angebot anfordern
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </ScrollToButton>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Transition Arrow */}
                <div className="flex justify-center -mt-6 relative z-10">
                    <ScrollToButton
                        targetId="problem-section"
                        variant="ghost"
                        size="icon"
                        className="bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 hover:bg-gray-50 scale-150"
                    >
                        <ArrowDown className="w-8 h-8 text-gray-400" />
                    </ScrollToButton>
                </div>

                {/* Problem Section - Narrative Start */}
                <section id="problem-section" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                    <span className="text-red-600">
                                        Kommt Ihnen das bekannt vor?
                                    </span>
                                </h2>
                                <p className="text-xl text-gray-600 mb-8">
                                    Der Alltag in der Hausverwaltung ist geprägt
                                    von ständigen Unterbrechungen...
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    {
                                        icon: Phone,
                                        title: "Überlastete Telefonleitungen",
                                        description:
                                            "Das Telefon klingelt ununterbrochen. Wichtige Aufgaben für Ihre Kunden bleiben liegen, während Sie von einem Anruf zum nächsten hetzen.",
                                        impact: "Stress & Ineffizienz",
                                    },
                                    {
                                        icon: AlertTriangle,
                                        title: "Unvollständige Informationen",
                                        description:
                                            "Im Alltagsstress gehen wichtige Details verloren. Schadensmeldungen sind unvollständig, Rückfragen bei Mietern nötig.",
                                        impact: "Verzögerungen & Mehrarbeit",
                                    },
                                    {
                                        icon: Users,
                                        title: "Blockierte Mitarbeiter",
                                        description:
                                            "Ihr Team wird ständig durch Anrufe unterbrochen. Konzentriertes Arbeiten an wichtigen Kunden-Angelegenheiten wird unmöglich.",
                                        impact: "Produktivitätsverlust",
                                    },
                                    {
                                        icon: Clock,
                                        title: "Begrenzte Erreichbarkeit",
                                        description:
                                            "Nach Feierabend und am Wochenende sind Sie nicht erreichbar. Notfälle bleiben unbearbeitet, Kunden sind unzufrieden.",
                                        impact: "Serviceprobleme",
                                    },
                                ].map((problem, index) => (
                                    <Card
                                        key={index}
                                        className="border-red-100 bg-red-50/30 hover:shadow-lg hover:bg-red-50/50 transition-all duration-300 hover:scale-105"
                                    >
                                        <CardContent className="px-6">
                                            <div className="flex items-start space-x-4">
                                                <div className="w-12 h-12 bg-red-50 border border-red-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <problem.icon className="w-6 h-6 text-red-600" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-gray-900 mb-2">
                                                        {problem.title}
                                                    </h3>
                                                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                                                        {problem.description}
                                                    </p>
                                                    <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                                                        <AlertCircle className="w-3 h-3 mr-1" />
                                                        {problem.impact}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <div className="text-center">
                                <p className="text-xl text-gray-700 font-medium">
                                    <strong>Das muss nicht so sein.</strong> Es
                                    gibt eine bessere Lösung...
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Smooth Transition to Solution */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-green-50/30 to-green-50"></div>
                    <div className="relative py-6">
                        <div className="container mx-auto px-4">
                            <div className="flex justify-center">
                                <ScrollToButton
                                    targetId="solution-section"
                                    variant="ghost"
                                    size="icon"
                                    className="bg-white rounded-full p-4 shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300 hover:bg-gray-50 scale-150"
                                >
                                    <ArrowDown className="w-8 h-8 text-green-600" />
                                </ScrollToButton>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Solution Flow - The Answer */}
                <section id="solution-section" className="py-16 bg-green-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                    <span className="text-green-700">
                                        Hier ist die Lösung:
                                    </span>{" "}
                                    Ihr KI-Telefon-Concierge
                                </h2>
                                <p className="text-xl text-gray-600 mb-8">
                                    Von der Anrufannahme bis zur strukturierten
                                    Weiterleitung – vollautomatisch und
                                    professionell
                                </p>
                            </div>

                            <div className="relative mb-12">
                                {/* Flow Steps */}
                                <div className="grid lg:grid-cols-5 gap-8">
                                    {[
                                        {
                                            step: "1",
                                            icon: Phone,
                                            title: "Anruf eingehend",
                                            description:
                                                "Mieter ruft Ihre Service-Nummer an",
                                            color: "from-green-600 to-green-700",
                                            detail: "Sofortige Annahme, kein Warten",
                                        },
                                        {
                                            step: "2",
                                            icon: HeadphonesIcon,
                                            title: "KI-Concierge übernimmt",
                                            description:
                                                "Freundliche und professionelle Begrüßung",
                                            color: "from-green-600 to-green-700",
                                            detail: "Natürliche Gesprächsführung",
                                        },
                                        {
                                            step: "3",
                                            icon: FileText,
                                            title: "Strukturierte Erfassung",
                                            description:
                                                "Gezielte Abfrage aller relevanten Details",
                                            color: "from-green-600 to-green-700",
                                            detail: "Vollständige Dokumentation",
                                        },
                                        {
                                            step: "4",
                                            icon: Mail,
                                            title: "Automatische Weiterleitung",
                                            description:
                                                "Sofortige E-Mail mit allen Informationen",
                                            color: "from-green-600 to-green-700",
                                            detail: "Strukturiert und actionable",
                                        },
                                        {
                                            step: "5",
                                            icon: CheckCircle,
                                            title: "Effiziente Bearbeitung",
                                            description:
                                                "Sie haben alle Infos für schnelle Lösung",
                                            color: "from-green-600 to-green-700",
                                            detail: "Fokus auf Kernaufgaben",
                                        },
                                    ].map((item, index) => (
                                        <div key={index} className="relative">
                                            <Card className="border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full hover:scale-105">
                                                <CardContent className="p-6 text-center h-full flex flex-col">
                                                    <div
                                                        className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg relative`}
                                                    >
                                                        <item.icon className="w-8 h-8 text-white" />
                                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                            {item.step}
                                                        </div>
                                                    </div>
                                                    <h3 className="font-semibold text-gray-900 mb-2">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 mb-2 flex-grow">
                                                        {item.description}
                                                    </p>
                                                    <p className="text-xs text-green-600 font-medium">
                                                        {item.detail}
                                                    </p>
                                                </CardContent>
                                            </Card>

                                            {/* Desktop Arrows */}
                                            {index < 4 && (
                                                <div className="hidden lg:block absolute top-1/2 -right-7 transform -translate-y-1/2 text-green-400 z-10">
                                                    <ArrowRight className="w-6 h-6" />
                                                </div>
                                            )}

                                            {/* Mobile Arrows */}
                                            {index < 4 && (
                                                <div className="lg:hidden flex justify-center mt-1 text-green-400">
                                                    <ArrowDown className="w-6 h-6" />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Second Demo CTA - Integrated */}
                            <div className="text-center">
                                <div className="bg-white rounded-2xl shadow-xl border border-green-200 p-8 max-w-2xl mx-auto hover:shadow-2xl transition-all duration-300">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        Erleben Sie es selbst!
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Rufen Sie unseren KI-Concierge an und
                                        testen Sie die Gesprächsqualität live.
                                    </p>
                                    <div className="text-3xl font-bold text-gray-900 mb-4">
                                        {demoNumber}
                                    </div>
                                    <DemoPhoneTracker
                                        phoneNumber={demoNumber}
                                        source="solution_section"
                                    >
                                        <Button
                                            size="lg"
                                            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold transition-all duration-300 hover:scale-105"
                                        >
                                            <Phone className="w-5 h-5 mr-2" />
                                            Demo-Anruf starten
                                        </Button>
                                    </DemoPhoneTracker>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seamless Transition to Results */}
                <div className="bg-gradient-to-b from-green-50 to-blue-50 py-6">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-center">
                            <ScrollToButton
                                targetId="benefits-section"
                                variant="ghost"
                                size="icon"
                                className="bg-white rounded-full p-4 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300 hover:bg-gray-50 scale-150"
                            >
                                <ArrowDown className="w-8 h-8 text-blue-600" />
                            </ScrollToButton>
                        </div>
                    </div>
                </div>

                {/* Benefits - The Results */}
                <section id="benefits-section" className="py-16 bg-blue-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                    <span className="text-blue-700">
                                        Das Ergebnis:
                                    </span>{" "}
                                    Ihre Vorteile auf einen Blick
                                </h2>
                                <p className="text-xl text-gray-600">
                                    Verwandeln Sie Ihre größten
                                    Herausforderungen in Ihre stärksten Vorteile
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    {
                                        icon: Clock,
                                        title: "24/7 Erreichbarkeit",
                                        description:
                                            "Kein Anruf geht verloren – auch nachts, am Wochenende und an Feiertagen. Ihre Kunden schätzen die konstante Erreichbarkeit.",
                                        highlight: "Immer erreichbar",
                                        oldProblem: "Begrenzte Zeiten",
                                    },
                                    {
                                        icon: Zap,
                                        title: "Sofortige Entlastung",
                                        description:
                                            "Ihr Team kann sich auf wichtige Kunden-Services konzentrieren, ohne Unterbrechungen durch Routineanrufe.",
                                        highlight: "Mehr Effizienz",
                                        oldProblem: "Blockierte Mitarbeiter",
                                    },
                                    {
                                        icon: FileText,
                                        title: "Vollständige Dokumentation",
                                        description:
                                            "Jedes Anliegen wird strukturiert erfasst und per E-Mail zugestellt. Perfekte Nachvollziehbarkeit für Kunden.",
                                        highlight: "Lückenlose Erfassung",
                                        oldProblem: "Unvollständige Infos",
                                    },
                                    {
                                        icon: TrendingUp,
                                        title: "Kostenersparnis",
                                        description:
                                            "Reduzieren Sie Personalkosten für die Telefonie erheblich. Mehr Budget für wichtige Kunden-Services.",
                                        highlight: "Wirtschaftlich",
                                        oldProblem: "Hohe Kosten",
                                    },
                                    {
                                        icon: Star,
                                        title: "Zufriedene Kunden",
                                        description:
                                            "Professionelle Anrufannahme und schnelle Bearbeitung steigern die Kunden-Zufriedenheit nachhaltig.",
                                        highlight: "Besserer Service",
                                        oldProblem: "Serviceprobleme",
                                    },
                                    {
                                        icon: Shield,
                                        title: "Professionelle Qualität",
                                        description:
                                            "Konstant freundliche und strukturierte Gesprächsführung. Ihr Service-Level bleibt immer hoch.",
                                        highlight: "Konstante Qualität",
                                        oldProblem: "Schwankende Qualität",
                                    },
                                ].map((benefit, index) => (
                                    <Card
                                        key={index}
                                        className="border-blue-100 bg-blue-50/20 hover:shadow-xl transition-all duration-300 hover:bg-blue-50/30 hover:scale-105"
                                    >
                                        <CardContent className="px-6">
                                            <div className="flex items-start space-x-4">
                                                <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <benefit.icon className="w-6 h-6 text-blue-700" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center mb-2">
                                                        <h3 className="font-semibold text-gray-900">
                                                            {benefit.title}
                                                        </h3>
                                                    </div>
                                                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                                        {benefit.description}
                                                    </p>
                                                    <div className="flex items-center justify-between">
                                                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium text-center">
                                                            {benefit.highlight}
                                                        </span>
                                                        <span className="text-xs text-gray-400 line-through text-center">
                                                            {benefit.oldProblem}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Example Conversation Section - Hard Edge */}
                <section id="example-conversation" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                    So läuft ein{" "}
                                    <span className="text-teal-600">
                                        echtes Telefongespräch
                                    </span>{" "}
                                    ab
                                </h2>
                                <p className="text-xl text-gray-600">
                                    Sehen Sie selbst, wie professionell unser
                                    KI-Concierge arbeitet und welche E-Mail Sie
                                    erhalten
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 items-start">
                                {/* Conversation */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                                            <PhoneCall className="w-5 h-5 mr-2 text-teal-600" />
                                            Live-Telefongespräch
                                        </h3>
                                        <div className="flex items-center text-green-600 text-sm">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                            <Volume2 className="w-4 h-4 mr-1" />
                                            Verbunden
                                        </div>
                                    </div>

                                    {/* Phone ringing indicator */}
                                    <div className="text-center py-4">
                                        <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600">
                                            <Phone className="w-4 h-4 mr-2 animate-pulse" />
                                            Anruf wird verbunden...
                                        </div>
                                    </div>

                                    {/* AI Message */}
                                    <div className="flex items-start space-x-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center flex-shrink-0 relative">
                                            <Bot className="w-5 h-5 text-white" />
                                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                        </div>
                                        <div className="bg-teal-50 rounded-2xl rounded-tl-sm p-4 max-w-sm relative">
                                            <div className="absolute -left-1 top-3 w-2 h-2 bg-teal-50 rotate-45"></div>
                                            <p className="text-sm text-gray-800">
                                                Vielen Dank für Ihren Anruf bei
                                                der Musterhausverwaltung. Gerade
                                                ist kein menschlicher
                                                Mitarbeiter verfügbar, deshalb
                                                wurden sie an mich, den
                                                digitalen Assistenten,
                                                weitergeleitet. Womit kann ich
                                                Ihnen behilflich sein?
                                            </p>
                                            <div className="flex items-center mt-2 text-xs text-gray-500">
                                                <Volume2 className="w-3 h-3 mr-1" />
                                                KI-Concierge spricht
                                            </div>
                                        </div>
                                    </div>

                                    {/* User Message */}
                                    <div className="flex items-start space-x-3 justify-end">
                                        <div className="bg-gray-100 rounded-2xl rounded-tr-sm p-4 max-w-sm relative">
                                            <div className="absolute -right-1 top-3 w-2 h-2 bg-gray-100 rotate-45"></div>
                                            <p className="text-sm text-gray-800">
                                                Hallo, ich habe einen
                                                Wasserschaden in meiner Wohnung
                                                im Badezimmer. Hier ist alles
                                                nass!
                                            </p>
                                            <div className="flex items-center mt-2 text-xs text-gray-500 justify-end">
                                                <Volume2 className="w-3 h-3 mr-1" />
                                                Anruferin spricht
                                            </div>
                                        </div>
                                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 relative">
                                            <User className="w-5 h-5 text-gray-600" />
                                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center flex-shrink-0 relative">
                                            <Bot className="w-5 h-5 text-white" />
                                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                        </div>
                                        <div className="bg-teal-50 rounded-2xl rounded-tl-sm p-4 max-w-sm relative">
                                            <div className="absolute -left-1 top-3 w-2 h-2 bg-teal-50 rotate-45"></div>
                                            <p className="text-sm text-gray-800">
                                                Das tut mir leid zu hören. Ich
                                                erfasse das sofort für Sie. Ich
                                                benötige noch ein paar
                                                Informationen von Ihnen. Wie ist
                                                Ihre genaue Adresse und wie
                                                lange ist der Schaden schon
                                                angefallen?
                                            </p>
                                        </div>
                                    </div>

                                    {/* User Response */}
                                    <div className="flex items-start space-x-3 justify-end">
                                        <div className="bg-gray-100 rounded-2xl rounded-tr-sm p-4 max-w-sm relative">
                                            <div className="absolute -right-1 top-3 w-2 h-2 bg-gray-100 rotate-45"></div>
                                            <p className="text-sm text-gray-800">
                                                Ich bin Maria Schmidt, Wohnung
                                                3B in der Musterstraße 15. Seit
                                                heute morgen tropft hier Wasser
                                                aus der Decke.
                                            </p>
                                        </div>
                                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 relative">
                                            <User className="w-5 h-5 text-gray-600" />
                                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                        </div>
                                    </div>

                                    {/* AI Follow-up */}
                                    <div className="flex items-start space-x-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center flex-shrink-0 relative">
                                            <Bot className="w-5 h-5 text-white" />
                                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                        </div>
                                        <div className="bg-teal-50 rounded-2xl rounded-tl-sm p-4 max-w-sm relative">
                                            <div className="absolute -left-1 top-3 w-2 h-2 bg-teal-50 rotate-45"></div>
                                            <p className="text-sm text-gray-800">
                                                Verstanden. Ich habe alle
                                                wichtigen Informationen erfasst.
                                                Die Schadensmeldung wird sofort
                                                an die Hausverwaltung
                                                weitergeleitet. Bis wann sind
                                                Sie noch erreichbar?
                                            </p>
                                        </div>
                                    </div>

                                    {/* Final User Response */}
                                    <div className="flex items-start space-x-3 justify-end">
                                        <div className="bg-gray-100 rounded-2xl rounded-tr-sm p-4 max-w-sm relative">
                                            <div className="absolute -right-1 top-3 w-2 h-2 bg-gray-100 rotate-45"></div>
                                            <p className="text-sm text-gray-800">
                                                Bis 18 Uhr bin ich unter dieser
                                                Nummer erreichbar. Vielen Dank!
                                            </p>
                                        </div>
                                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 relative">
                                            <User className="w-5 h-5 text-gray-600" />
                                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                        </div>
                                    </div>

                                    {/* AI Confirmation */}
                                    <div className="flex items-start space-x-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center flex-shrink-0 relative">
                                            <Bot className="w-5 h-5 text-white" />
                                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                        </div>
                                        <div className="bg-teal-50 rounded-2xl rounded-tl-sm p-4 max-w-sm relative">
                                            <div className="absolute -left-1 top-3 w-2 h-2 bg-teal-50 rotate-45"></div>
                                            <p className="text-sm text-gray-800">
                                                Perfekt! Alles ist erfasst und
                                                wird sofort weitergeleitet. Die
                                                Hausverwaltung wird sich bei
                                                Ihnen melden. Auf Wiederhören,
                                                Frau Schmidt!
                                            </p>
                                            <div className="flex items-center mt-2 text-xs text-green-600">
                                                <CheckCircle className="w-3 h-3 mr-1" />
                                                Erfolgreich übertragen
                                            </div>
                                        </div>
                                    </div>

                                    {/* Call ended indicator */}
                                    <div className="text-center py-4">
                                        <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600">
                                            <PhoneCall className="w-4 h-4 mr-2" />
                                            Gespräch beendet • Dauer: 2:34 Min
                                        </div>
                                    </div>
                                </div>

                                {/* Resulting Email */}
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                                        <Inbox className="w-5 h-5 mr-2 text-orange-600" />
                                        Resultierende E-Mail
                                    </h3>

                                    <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 p-0">
                                        <CardContent className="p-0">
                                            {/* Email Header */}
                                            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-t-lg">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-2">
                                                        <Mail className="w-5 h-5" />
                                                        <span className="font-semibold">
                                                            Neue Schadensmeldung
                                                        </span>
                                                    </div>
                                                    <span className="text-sm opacity-90">
                                                        Soeben eingegangen
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Email Content */}
                                            <div className="p-6 bg-white rounded-b-lg">
                                                <div className="space-y-4">
                                                    <div className="border-b border-gray-100 pb-3">
                                                        <p className="text-sm text-gray-600">
                                                            Von:
                                                            concierge@primorio.de
                                                        </p>
                                                        <p className="text-sm text-gray-600">
                                                            An:
                                                            verwaltung@mueller-hausverwaltung.de
                                                        </p>
                                                        <p className="text-sm text-gray-600">
                                                            Betreff:{" "}
                                                            <strong>
                                                                WASSERSCHADEN -
                                                                Musterstraße 15,
                                                                Wohnung 3B
                                                            </strong>
                                                        </p>
                                                    </div>

                                                    <div className="space-y-3">
                                                        <h4 className="font-semibold text-gray-900 flex items-center">
                                                            <FileText className="w-4 h-4 mr-2" />
                                                            Schadensmeldung
                                                            Details
                                                        </h4>

                                                        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                                <div>
                                                                    <span className="font-medium text-gray-700">
                                                                        Mieter:
                                                                    </span>
                                                                    <p className="text-gray-900">
                                                                        Maria
                                                                        Schmidt
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <span className="font-medium text-gray-700">
                                                                        Telefon:
                                                                    </span>
                                                                    <p className="text-gray-900">
                                                                        0176
                                                                        12345678
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <span className="font-medium text-gray-700">
                                                                        Adresse:
                                                                    </span>
                                                                    <p className="text-gray-900">
                                                                        Musterstraße
                                                                        15,
                                                                        Wohnung
                                                                        3B
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <span className="font-medium text-gray-700">
                                                                        Erreichbar
                                                                        bis:
                                                                    </span>
                                                                    <p className="text-gray-900">
                                                                        18:00
                                                                        Uhr
                                                                        heute
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <span className="font-medium text-gray-700">
                                                                Schadensbeschreibung:
                                                            </span>
                                                            <p className="text-gray-900 mt-1">
                                                                <strong>
                                                                    Wasserschaden
                                                                    im
                                                                    Badezimmer
                                                                </strong>{" "}
                                                                - Wasser tropft
                                                                kontinuierlich
                                                                von der Decke
                                                                (seit heute
                                                                morgen)
                                                            </p>
                                                        </div>

                                                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                                                            <div className="flex items-center space-x-2">
                                                                <Zap className="w-4 h-4 text-orange-600" />
                                                                <span className="text-sm font-medium text-orange-800">
                                                                    Art:
                                                                    Schadensmeldung
                                                                    -
                                                                    Wasserschaden
                                                                </span>
                                                            </div>
                                                        </div>

                                                        <div className="text-xs text-gray-500 pt-2 border-t border-gray-100">
                                                            <p>
                                                                Automatisch
                                                                generiert durch
                                                                Primorio
                                                                Concierge •
                                                                Gespräch: 2:34
                                                                Min •{" "}
                                                                {new Date().toLocaleString(
                                                                    "de-DE"
                                                                )}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            <div className="text-center mt-12">
                                <div className="inline-flex items-center px-6 py-3 bg-teal-100 text-teal-800 rounded-full">
                                    <CheckCircle className="w-5 h-5 mr-2" />
                                    <span className="font-medium">
                                        Vollständig • Strukturiert • Priorität
                                        erkannt • Sofort verfügbar
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA - Prominent */}
                <section className="py-20 bg-gradient-to-r from-teal-700 to-teal-800">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center text-white">
                            <h2 className="text-4xl font-bold mb-6">
                                Bereit für den nächsten Schritt?
                            </h2>
                            <p className="text-xl mb-8 opacity-90">
                                Testen Sie unseren KI-Concierge jetzt kostenlos
                                oder fordern Sie ein individuelles Angebot an.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {/* Demo CTA */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                                    <Phone className="w-12 h-12 text-white mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold mb-4">
                                        Live Demo
                                    </h3>
                                    <p className="text-white/80 mb-6">
                                        Überzeugen Sie sich selbst von der
                                        Qualität
                                    </p>
                                    <p className="text-3xl font-bold mb-4">
                                        {demoNumber}
                                    </p>
                                    <DemoPhoneTracker
                                        source="final_cta"
                                        phoneNumber={demoNumber}
                                    >
                                        <Button
                                            size="lg"
                                            className="w-full bg-white text-teal-700 hover:bg-gray-100 font-bold transition-all duration-300 hover:scale-105"
                                        >
                                            <Phone className="w-5 h-5 mr-2" />
                                            Jetzt Demo anrufen
                                        </Button>
                                    </DemoPhoneTracker>
                                </div>

                                {/* Contact CTA */}
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                                    <Mail className="w-12 h-12 text-white mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold mb-4">
                                        Angebot anfordern
                                    </h3>
                                    <p className="text-white/80 mb-6">
                                        Individuelle Lösung für Ihre
                                        Hausverwaltung
                                    </p>
                                    <ul className="text-sm text-white/80 mb-6 space-y-1">
                                        <li className="flex items-center">
                                            <CheckCircle className="w-4 h-4 mr-2" />{" "}
                                            Kostenlose Beratung
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="w-4 h-4 mr-2" />{" "}
                                            Maßgeschneiderte Lösung
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="w-4 h-4 mr-2" />{" "}
                                            Schnelle Umsetzung
                                        </li>
                                    </ul>
                                    <ScrollToButton
                                        targetId="contact-form"
                                        size="lg"
                                        className="w-full bg-white text-teal-700 hover:bg-gray-100 font-bold transition-all duration-300 hover:scale-105"
                                    >
                                        <Mail className="w-5 h-5 mr-2" />
                                        Angebot anfordern
                                    </ScrollToButton>
                                </div>
                            </div>

                            <p className="text-white/70 text-sm">
                                Kostenloser Test • Keine Verpflichtung •
                                DSGVO-konform
                            </p>
                        </div>
                    </div>
                </section>

                {/* Use Cases - Consistent Icons */}
                <section id="use-cases" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    Flexibel für alle Ihre Anforderungen
                                </h2>
                                <p className="text-xl text-gray-600">
                                    Unser KI-Concierge beherrscht alle wichtigen
                                    Szenarien der Hausverwaltung
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    {
                                        title: "Schadensmeldungen",
                                        description:
                                            "Heizungsausfall, Wasserschaden, defekte Geräte – alle Details werden strukturiert erfasst und an Sie weitergeleitet",
                                        icon: Settings,
                                        examples: [
                                            "Heizung defekt",
                                            "Wasserschaden",
                                            "Stromausfall",
                                        ],
                                    },
                                    {
                                        title: "Terminanfragen",
                                        description:
                                            "Besichtigungen, Reparaturtermine und Wartungen professionell koordinieren und weiterleiten",
                                        icon: Calendar,
                                        examples: [
                                            "Besichtigung",
                                            "Handwerker",
                                            "Wartung",
                                        ],
                                    },
                                    {
                                        title: "Allgemeine Anfragen",
                                        description:
                                            "Informationen weiterleiten und erste kompetente Hilfestellung für Mieter geben",
                                        icon: MessageSquare,
                                        examples: [
                                            "Hausordnung",
                                            "Kontakte",
                                            "Informationen",
                                        ],
                                    },
                                    {
                                        title: "Notfall-Hotline",
                                        description:
                                            "Dringende Fälle sofort erkennen und entsprechend an Sie eskalieren",
                                        icon: AlertTriangle,
                                        examples: [
                                            "Rohrbruch",
                                            "Gasgeruch",
                                            "Einbruch",
                                        ],
                                    },
                                ].map((useCase, index) => (
                                    <Card
                                        key={index}
                                        className="border-teal-100 hover:shadow-lg transition-all duration-300 bg-white hover:scale-105"
                                    >
                                        <CardContent className="p-6">
                                            <div className="w-12 h-12 bg-teal-50 border border-teal-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                                                <useCase.icon className="w-6 h-6 text-teal-700" />
                                            </div>
                                            <h3 className="font-semibold text-gray-900 mb-2 text-center">
                                                {useCase.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-4 text-center">
                                                {useCase.description}
                                            </p>
                                            <div className="space-y-1">
                                                {useCase.examples.map(
                                                    (example, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="flex items-center text-xs text-gray-500"
                                                        >
                                                            <CheckCircle className="w-3 h-3 text-green-600 mr-2 flex-shrink-0" />
                                                            {example}
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust & Contact */}
                <section id="contact-form" className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                        Vertrauen Sie auf Sicherheit und
                                        Datenschutz
                                    </h2>
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="font-semibold text-gray-900">
                                                    DSGVO-konform
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    Alle Daten werden nach
                                                    deutschen
                                                    Datenschutzstandards
                                                    verarbeitet
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="font-semibold text-gray-900">
                                                    Sichere Übertragung
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    Verschlüsselte Kommunikation
                                                    und sichere
                                                    E-Mail-Weiterleitung
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="font-semibold text-gray-900">
                                                    Deutsche Server
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    Hosting und Verarbeitung
                                                    ausschließlich in
                                                    Deutschland
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
