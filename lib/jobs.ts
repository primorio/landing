export interface Job {
    id: string;
    title: string;
    location: string;
    type: string;
    salary: string;
    department: string;
    description: string;
    requirements: string[];
    benefits: string[];
    tasks: string[];
}

export const jobs: Job[] = [
    {
        id: "werkstudent-dev",
        title: "Werkstudent - Softwareentwickler (m/w/d)",
        location: "München / Remote",
        type: "Werkstudent",
        salary: "18-22€/h",
        department: "Entwicklung",
        description:
            "Als Werkstudent in unserem Entwicklungsteam arbeitest du an der Zukunft der Immobilienwirtschaft mit. Du entwickelst innovative Softwarelösungen, die Immobilienprofis dabei helfen, effizienter zu arbeiten und bessere Entscheidungen zu treffen.",
        requirements: [
            "Studium der Informatik, Wirtschaftsinformatik oder verwandter Studiengänge",
            "Grundkenntnisse in JavaScript/TypeScript und React",
            "Interesse an modernen Web-Technologien",
            "Erste Erfahrungen mit Git und agiler Entwicklung von Vorteil",
            "Selbstständige und strukturierte Arbeitsweise",
            "Gute Deutsch- und Englischkenntnisse",
        ],
        benefits: [
            "Flexible Arbeitszeiten, die sich perfekt mit dem Studium vereinbaren lassen",
            "Remote-First Arbeitsweise mit modernem Equipment",
            "Mentoring durch erfahrene Senior-Entwickler",
            "Möglichkeit zur Übernahme nach dem Studium",
            "Teilnahme an Tech-Konferenzen und Weiterbildungen",
            "Kostenlose Getränke und regelmäßige Team-Events",
        ],
        tasks: [
            "Entwicklung von Frontend-Komponenten mit React und TypeScript",
            "Implementierung von APIs und Backend-Services",
            "Code-Reviews und Qualitätssicherung",
            "Mitarbeit bei der Planung neuer Features",
            "Testing und Debugging von Anwendungen",
            "Dokumentation von Entwicklungsprozessen",
        ],
    },
    {
        id: "account-manager",
        title: "Account Manager - Vertrieb",
        location: "München",
        type: "Vollzeit",
        salary: "55.000-70.000€",
        department: "Vertrieb",
        description:
            "Als Account Manager baust du langfristige Beziehungen zu unseren Kunden in der Immobilienwirtschaft auf. Du betreust bestehende Accounts, identifizierst neue Geschäftsmöglichkeiten und hilfst dabei, unser Produkt erfolgreich am Markt zu positionieren.",
        requirements: [
            "Erfolgreich abgeschlossenes Studium (BWL, Immobilienwirtschaft oder vergleichbar)",
            "2-4 Jahre Erfahrung im B2B-Vertrieb, idealerweise in der Immobilienbranche",
            "Ausgezeichnete Kommunikations- und Präsentationsfähigkeiten",
            "Erfahrung mit CRM-Systemen (Salesforce, HubSpot o.ä.)",
            "Strukturierte und ergebnisorientierte Arbeitsweise",
            "Reisebereitschaft im DACH-Raum",
        ],
        benefits: [
            "Attraktives Grundgehalt plus erfolgsabhängige Provision",
            "30 Tage Urlaub und flexible Arbeitszeiten",
            "Firmenwagen oder Mobilitätszuschuss",
            "Moderne Büroausstattung in zentraler Lage",
            "Weiterbildungsbudget von 2.000€ pro Jahr",
            "Betriebliche Altersvorsorge und Gesundheitsvorsorge",
            "Regelmäßige Team-Events und Firmenevents",
        ],
        tasks: [
            "Betreuung und Ausbau bestehender Kundenbeziehungen",
            "Identifikation und Akquise neuer Geschäftskunden",
            "Durchführung von Produktpräsentationen und Demos",
            "Verhandlung von Verträgen und Konditionen",
            "Marktanalyse und Wettbewerbsbeobachtung",
            "Enge Zusammenarbeit mit Marketing und Produktentwicklung",
        ],
    },
];

export function getJobById(id: string): Job | undefined {
    return jobs.find((job) => job.id === id);
}
