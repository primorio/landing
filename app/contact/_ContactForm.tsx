"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PocketBase from "pocketbase";
import { useMetaPixelTracking } from "@/lib/meta-pixel";

const pb = new PocketBase("https://primoriomarketplace.pockethost.io");

export default function ContactForm() {
    const { trackContactFormLead } = useMetaPixelTracking();
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            await pb.collection("kontaktanfragen_allgemein").create({
                name: form.name,
                email: form.email,
                telefon: form.phone,
                nachricht: form.message,
            });

            // Track successful form submission with Meta Pixel
            trackContactFormLead({
                email: form.email,
                leadType: "contact_form",
                timestamp: new Date().toISOString(),
            });

            setSuccess(true);
        } catch (err: any) {
            setError("Fehler beim Senden. Bitte versuchen Sie es erneut.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="max-w-lg w-full">
            <CardContent className="p-8">
                <h1 className="text-3xl font-bold mb-4 text-gray-900">
                    Kontakt
                </h1>
                <p className="mb-2 text-gray-700">
                    Sie erreichen uns auch direkt unter:
                </p>
                <div className="mb-6">
                    <div className="text-teal-700 font-semibold">
                        info@primorio.de
                    </div>
                    <div className="text-teal-700 font-semibold">
                        +49 30 52014903
                    </div>
                </div>
                {success ? (
                    <div className="flex flex-col items-center justify-center text-green-700 py-8">
                        <CheckCircle2 className="w-12 h-12 mb-2" />
                        <div className="font-semibold text-xl text-center">
                            Vielen Dank für Ihre Nachricht!
                            <br />
                            Wir melden uns zeitnah.
                        </div>
                    </div>
                ) : (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                E-Mail
                            </label>
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
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Telefon
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Nachricht
                            </label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                            />
                        </div>
                        {error && (
                            <div className="text-red-600 text-sm">{error}</div>
                        )}
                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 transition-all duration-300"
                            disabled={loading}
                        >
                            {loading ? "Senden..." : "Nachricht senden"}
                        </Button>
                    </form>
                )}
            </CardContent>
        </Card>
    );
}
