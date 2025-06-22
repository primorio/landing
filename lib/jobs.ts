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
        title: "Werkstudent – Softwareentwickler (m/w/d)",
        location: "Remote",
        type: "Werkstudent",
        salary: "Attraktive Vergütung",
        department: "Entwicklung",
        description:
            "Du bist im Informatikstudium oder einem vergleichbaren Studiengang und möchtest spannende Softwareprojekte umsetzen? Du denkst in sauberen Architekturen, schreibst wartbaren Code und arbeitest gerne eigenständig an spannenden Projekten? Dann bist du bei uns genau richtig!",
        requirements: [
            "Du studierst Informatik oder einen ähnlichen Studiengang",
            "Praktische Erfahrung in der Umsetzung von Softwareprojekten",
            "Verständnis für Softwarearchitektur und Clean Code-Prinzipien",
            "Du arbeitest selbstständig, strukturiert und übernimmst gerne Verantwortung",
            "Du hast Lust, Initiative zu ergreifen und eigene Ideen einzubringen",
            "Teamfähigkeit und gute Kommunikationsfähigkeiten runden dein Profil ab",
        ],
        benefits: [
            "Flexible Arbeitszeiten, die sich ideal mit deinem Studium vereinbaren lassen",
            "100 % Remote-Arbeit – arbeite, von wo du willst",
            "Attraktive Vergütung",
            "Verantwortung von Anfang an: Du bekommst eigene Projekte und kannst dich wirklich einbringen",
            "Ein offenes, wertschätzendes Umfeld mit kurzen Entscheidungswegen",
            "16–20 Stunden/Woche mit flexiblen Arbeitszeiten",
        ],
        tasks: [
            "Selbstständige Umsetzung isolierter Softwareprojekte im Bereich der Immobilienwirtschaft",
            "Mitgestaltung und Weiterentwicklung bestehender Softwarelösungen",
        ],
    },
    // {
    //     id: "account-manager",
    //     title: "Account Manager - Vertrieb",
    //     location: "München",
    //     type: "Vollzeit",
    //     salary: "55.000-70.000€",
    //     department: "Vertrieb",
    //     description:
    //         "Als Account Manager baust du langfristige Beziehungen zu unseren Kunden in der Immobilienwirtschaft auf. Du betreust bestehende Accounts, identifizierst neue Geschäftsmöglichkeiten und hilfst dabei, unser Produkt erfolgreich am Markt zu positionieren.",
    //     requirements: [
    //         "Erfolgreich abgeschlossenes Studium (BWL, Immobilienwirtschaft oder vergleichbar)",
    //         "2-4 Jahre Erfahrung im B2B-Vertrieb, idealerweise in der Immobilienbranche",
    //         "Ausgezeichnete Kommunikations- und Präsentationsfähigkeiten",
    //         "Erfahrung mit CRM-Systemen (Salesforce, HubSpot o.ä.)",
    //         "Strukturierte und ergebnisorientierte Arbeitsweise",
    //         "Reisebereitschaft im DACH-Raum",
    //     ],
    //     benefits: [
    //         "Attraktives Grundgehalt plus erfolgsabhängige Provision",
    //         "30 Tage Urlaub und flexible Arbeitszeiten",
    //         "Firmenwagen oder Mobilitätszuschuss",
    //         "Moderne Büroausstattung in zentraler Lage",
    //         "Weiterbildungsbudget von 2.000€ pro Jahr",
    //         "Betriebliche Altersvorsorge und Gesundheitsvorsorge",
    //         "Regelmäßige Team-Events und Firmenevents",
    //     ],
    //     tasks: [
    //         "Betreuung und Ausbau bestehender Kundenbeziehungen",
    //         "Identifikation und Akquise neuer Geschäftskunden",
    //         "Durchführung von Produktpräsentationen und Demos",
    //         "Verhandlung von Verträgen und Konditionen",
    //         "Marktanalyse und Wettbewerbsbeobachtung",
    //         "Enge Zusammenarbeit mit Marketing und Produktentwicklung",
    //     ],
    // },
];

export function getJobById(id: string): Job | undefined {
    return jobs.find((job) => job.id === id);
}
