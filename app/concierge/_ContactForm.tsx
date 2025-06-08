"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PocketBase from "pocketbase"
import { useMetaPixelTracking } from '@/lib/meta-pixel'

export default function ContactForm() {
    const { trackConciergeFormLead } = useMetaPixelTracking()
    const [form, setForm] = useState({
        firma: "",
        ansprechpartner: "",
        email: "",
        telefon: "",
        anzahl_einheiten: "500-1000 Einheiten"
    })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")
    const pb = new PocketBase("https://primoriomarketplace.pockethost.io")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError("")
        try {
            await pb.collection("kontaktanfragen_concierge").create({
                firma: form.firma,
                ansprechpartner: form.ansprechpartner,
                email: form.email,
                telefon: form.telefon,
                anzahl_einheiten: form.anzahl_einheiten,
            })

            // Track successful form submission with Meta Pixel
            trackConciergeFormLead({
                email: form.email,
                leadType: 'concierge_form',
                timestamp: new Date().toISOString()
            })

            setSuccess(true)
        } catch (err: any) {
            setError("Fehler beim Senden. Bitte versuchen Sie es erneut.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Card id="contact-form" className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Individuelles Angebot anfordern</h3>
                {success ? (
                    <div className="flex flex-col items-center justify-center text-green-700 py-8">
                        <CheckCircle2 className="w-12 h-12 mb-2" />
                        <div className="font-semibold text-xl text-center">Vielen Dank für Ihre Anfrage!<br />Wir melden uns zeitnah.</div>
                    </div>
                ) : (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Firma / Hausverwaltung</label>
                            <input
                                type="text"
                                name="firma"
                                value={form.firma}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Ansprechpartner</label>
                            <input
                                type="text"
                                name="ansprechpartner"
                                value={form.ansprechpartner}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                            <input
                                type="tel"
                                name="telefon"
                                value={form.telefon}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Anzahl verwaltete Einheiten (ca.)</label>
                            <select
                                name="anzahl_einheiten"
                                value={form.anzahl_einheiten}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                            >
                                <option>Bis 500 Einheiten</option>
                                <option>500-1000 Einheiten</option>
                                <option>1000-3000 Einheiten</option>
                                <option>mehr als 3000 Einheiten</option>
                            </select>
                        </div>
                        {error && <div className="text-red-600 text-sm">{error}</div>}
                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 transition-all duration-300"
                            disabled={loading}
                        >
                            {loading ? "Senden..." : "Angebot anfordern"}
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </form>
                )}
                <p className="text-xs text-gray-500 mt-4 text-center">
                    Kostenlose Beratung • Individuelle Lösung • Schnelle Umsetzung
                </p>
            </CardContent>
        </Card>
    )
} 