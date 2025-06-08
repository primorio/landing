import NavBar from "@/components/ui/NavBar"
import Footer from "@/components/ui/Footer"
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Primorio - Datenschutzerklärung"
};


export default function DatenschutzPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <NavBar />
            <main className="flex-1">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-2xl font-bold mb-8">Datenschutzerklärung</h1>

                        <section className="mb-6">
                            <h2 className="text-xl font-semibold mb-4">
                                1. Verantwortliche Stelle
                            </h2>
                            <p className="mb-2">
                                Für die Verarbeitung personenbezogener Daten auf dieser
                                Website ist verantwortlich:
                            </p>
                            <p className="mt-4">
                                Primorio GmbH
                                <br />
                                Unter den Linden 10, 10117 Berlin Mitte
                            </p>

                            <p className="mt-4">
                                <span className="font-bold">Vertreten durch:</span>
                                <br />
                                Lennard Walter
                                <br />
                                Timon Gärtner
                            </p>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-xl font-semibold mb-4">
                                2. Datenverarbeitung und Ihre Rechte
                            </h2>
                            <p className="mb-2">
                                Wir verarbeiten Ihre personenbezogenen Daten nur mit Ihrer
                                ausdrücklichen Einwilligung oder wenn eine gesetzliche
                                Grundlage dies erlaubt. Sie haben jederzeit das Recht, eine
                                erteilte Einwilligung zu widerrufen. Senden Sie dazu einfach
                                eine E-Mail an uns. Bitte beachten Sie, dass die
                                Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung
                                davon unberührt bleibt.
                            </p>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-xl font-semibold mb-4">
                                3. Ihre Datenschutzrechte
                            </h2>
                            <p className="mb-2">
                                Sie haben umfassende Rechte bezüglich der Verarbeitung Ihrer
                                personenbezogenen Daten:
                            </p>
                            <ul className="list-disc pl-5 mb-2">
                                <li>Recht auf Auskunft über gespeicherte Daten</li>
                                <li>Recht auf Berichtigung unrichtiger Daten</li>
                                <li>Recht auf Löschung nicht mehr benötigter Daten</li>
                                <li>Recht auf Einschränkung der Verarbeitung</li>
                                <li>Recht auf Datenübertragbarkeit</li>
                            </ul>
                            <p className="mb-2">
                                Zur Ausübung dieser Rechte oder bei Fragen zur
                                Datenverarbeitung kontaktieren Sie uns bitte über die im
                                Impressum angegebenen Kontaktdaten.
                            </p>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-xl font-semibold mb-4">
                                4. Beschwerde bei Aufsichtsbehörde
                            </h2>
                            <p className="mb-2">
                                Bei Verstößen gegen datenschutzrechtliche Vorschriften haben
                                Sie das Recht, sich bei der zuständigen Aufsichtsbehörde zu
                                beschweren. Die Kontaktdaten der Datenschutzbeauftragten der
                                Bundesländer finden Sie unter:{" "}
                                <a
                                    href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline text-blue-700"
                                >
                                    https://www.bfdi.bund.de
                                </a>
                            </p>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-xl font-semibold mb-4">
                                5. Datensicherheit
                            </h2>
                            <p className="mb-2">
                                Wir setzen technische und organisatorische
                                Sicherheitsmaßnahmen ein, um Ihre Daten gegen Manipulation,
                                Verlust, Zerstörung oder unbefugten Zugriff zu schützen.
                                Unsere Sicherheitsmaßnahmen werden entsprechend der
                                technologischen Entwicklung fortlaufend verbessert. Die
                                Datenübertragung im Internet erfolgt über eine SSL- bzw.
                                TLS-Verschlüsselung.
                            </p>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-xl font-semibold mb-4">
                                6. Datenerfassung auf unserer Website
                            </h2>
                            <h3 className="text-lg font-bold mb-2">Hosting (Netlify)</h3>
                            <p className="mb-2">
                                Unser Hosting-Provider erhebt und speichert automatisch
                                Informationen in sogenannten Server-Log-Dateien, die Ihr
                                Browser automatisch an uns übermittelt. Dies sind unter anderem:
                            </p>
                            <ul className="list-disc pl-5 mb-2">
                                <li>Besuchte Seite auf unserer Domain</li>
                                <li>Datum und Uhrzeit der Serveranfrage</li>
                                <li>Browsertyp und -version</li>
                                <li>Verwendetes Betriebssystem</li>
                                <li>Referrer URL</li>
                                <li>Hostname des zugreifenden Rechners</li>
                                <li>IP-Adresse</li>
                            </ul>

                            <p className="mb-2">
                                Diese Daten sind technisch notwendig, um unsere Website
                                anzuzeigen und die Stabilität und Sicherheit zu
                                gewährleisten.
                            </p>


                            <p className="mb-2">
                                Unsere Website wird von Netlify gehostet. Wenn Sie eine
                                unserer Webseiten aufrufen, baut Ihr Browser daher eine
                                Verbindung zu einem Server von Netlify, Inc., 610 22nd Street,
                                Suite 315, San Francisco, CA 94107, USA auf. Wir haben keinen
                                Zugriff auf diese Logdateien. Mehr Informationen dazu, wie
                                Netlify Ihre Daten verarbeitet, können Sie <a className="hover:underline text-blue-700" href="https://www.netlify.com/privacy/" target="_blank">der Datenschutzerklärung von Netlify</a> entnehmen.
                                Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
                                gegenüber unseren potenziellen und bestehenden Kunden
                                (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren,
                                schnellen und effizienten Bereitstellung unseres Online-Angebots
                                durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                                Weitere Details dazu finden Sie in <a className="hover:underline text-blue-700" href="https://www.netlify.com/gdpr-ccpa" target="_blank">der Verpflichtung von Netlify zum Schutz Ihrer Daten</a>.
                            </p>

                            <h3 className="text-lg font-bold mb-2 mt-4">
                                Kontaktformular
                            </h3>
                            <p className="mb-2">
                                Wenn Sie unser Kontaktformular nutzen, werden die von Ihnen
                                angegebenen Daten zur Bearbeitung Ihrer Anfrage gespeichert.
                                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                                Die Verarbeitung dieser Daten erfolgt auf Grundlage Ihrer
                                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) oder zur
                                Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit.
                                b DSGVO). Sie können Ihre Einwilligung jederzeit widerrufen.
                            </p>

                            <h3 className="text-lg font-bold mb-2 mt-4">Cookies</h3>
                            <p className="mb-2">
                                Unsere Website verwendet Cookies. Dies sind kleine
                                Textdateien, die Ihr Browser speichert. Sie dienen dazu,
                                unser Angebot nutzerfreundlicher, effektiver und sicherer zu
                                machen. Einige Cookies sind "Session-Cookies", die nach Ende
                                Ihrer Browser-Sitzung automatisch gelöscht werden. Andere
                                Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie
                                diese löschen oder sie automatisch ablaufen.
                            </p>
                            <p className="mb-2">
                                Sie können Ihren Browser so einstellen, dass Sie über das
                                Setzen von Cookies informiert werden und Cookies nur im
                                Einzelfall erlauben, die Annahme von Cookies für bestimmte
                                Fälle oder generell ausschließen sowie das automatische
                                Löschen der Cookies beim Schließen des Browsers aktivieren.
                                Bei der Deaktivierung von Cookies kann die Funktionalität
                                dieser Website eingeschränkt sein.
                            </p>

                            <h3 className="text-lg font-bold mb-2 mt-4">Posthog</h3>
                            <p className="mb-2">
                                Diese Website verwendet Funktionen des Dienstes PostHog, um
                                das Nutzerverhalten und die Nutzerfreundlichkeit unserer
                                Seite zu analysieren und zu optimieren. Diese Funktionen
                                werden angeboten durch PostHog Inc, 965 Mission Street, San
                                Francisco, CA 94103 USA. Wir nutzen Posthog EU, somit werden
                                ihre Daten ausschliesslich in Deutschland gespeichert.
                                PostHog kann Ihr Verhalten auf unserer Webseite aufzeichnen
                                und wiedergeben. Die Speicherung dieser Daten ist zeitlich
                                begrenzt und wird ausschliesslich zur Verbesserung unseres
                                Dienstes anhand Ihrer Bedürfnisse verwendet. Weitere
                                Informationen hierzu finden Sie in der Datenschutzerklärung
                                von PostHog:{" "}
                                <a href="https://posthog.com/privacy">
                                    https://posthog.com/privacy
                                </a>
                            </p>

                            <h3 className="text-lg font-bold mb-2 mt-4">Facebook Pixel</h3>
                            <p className="mb-2">
                                Diese Website verwendet den "Facebook Pixel" der Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
                                Mit Hilfe des Facebook Pixels können wir die Besucher unserer Website als Zielgruppe für die Anzeige von Werbeanzeigen (sogenannte "Facebook Ads")
                                identifizieren. Dementsprechend verwenden wir den Facebook Pixel, um die von uns geschalteten Facebook Ads nur solchen Facebook-Nutzern anzuzeigen,
                                die auch ein Interesse an unserem Internetauftritt gezeigt haben oder die bestimmte Merkmale aufweisen, die wir an Facebook übermitteln.
                            </p>
                            <p className="mb-2">
                                Der Facebook Pixel wird direkt von Facebook in Ihrem Browser implementiert, wenn Sie unsere Website besuchen. Facebook kann dann ein Cookie auf Ihrem
                                Computer speichern. Wenn Sie sich anschließend bei Facebook einloggen oder Facebook besuchen, wird Ihr Besuch auf unserer Website in Ihrem Profil
                                vermerkt. Die erfassten Daten sind für uns anonym, bieten uns also keine Rückschlüsse auf die Identität der Nutzer. Allerdings werden die Daten von
                                Facebook gespeichert und verarbeitet, sodass eine Verbindung zum jeweiligen Nutzerprofil möglich ist.
                            </p>
                            <p className="mb-2">
                                Die Verarbeitung der Daten durch Facebook erfolgt im Rahmen von Facebooks Datenverwendungsrichtlinie. Entsprechende Hinweise, wie Sie die Verarbeitung
                                Ihrer Daten durch Facebook beeinflussen können, erhalten Sie in den Datenschutzhinweisen von Facebook:{" "}
                                <a href="https://www.facebook.com/about/privacy/" className="text-blue-600 hover:underline">
                                    https://www.facebook.com/about/privacy/
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
