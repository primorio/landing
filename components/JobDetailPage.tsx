"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    MapPin,
    Clock,
    Euro,
    Users,
    Code,
    TrendingUp,
    ArrowLeft,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import pb from "@/lib/pocketbase";

interface Job {
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

interface ApplicationDialogProps {
    job: Job;
    trigger: React.ReactNode;
}

function ApplicationDialog({ job, trigger }: ApplicationDialogProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        cv: null as File | null,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [open, setIsOpen] = useState(false);
    // const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await pb.collection("job_applications").create({
                name: formData.name,
                email: formData.email,
                telefon: formData.phone,
                cv: formData.cv,
                jobId: job.id,
            });
        } catch (error) {
            console.error("Fehler beim Senden der Bewerbung:", error);
            alert(
                "Fehler beim Senden der Bewerbung. Bitte versuchen Sie es erneut."
            );
            setIsSubmitting(false);
            return;
        }

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // alert(
        //     "Bewerbung erfolgreich eingereicht! Wir melden uns bald bei Ihnen."
        // );
        setSubmitted(true);
        setIsSubmitting(false);
        setFormData({
            name: "",
            email: "",
            phone: "",
            cv: null,
        });
    };

    return (
        <Dialog open={open} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                {submitted ? (
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Bewerbung erfolgreich eingereicht!
                        </h2>
                        <p className="text-gray-700">
                            Vielen Dank für Ihre Bewerbung. Wir werden uns bald
                            bei Ihnen melden.
                        </p>
                        <Button
                            onClick={() => {
                                setSubmitted(false);
                                setIsOpen(false);
                            }}
                            className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800"
                        >
                            Schließen
                        </Button>
                    </div>
                ) : (
                    <>
                        <DialogHeader>
                            <DialogTitle className="text-xl">
                                Bewerbung einreichen
                            </DialogTitle>
                            <DialogDescription className="text-gray-600">
                                {job.title}
                            </DialogDescription>
                        </DialogHeader>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 mt-4"
                        >
                            <div className="space-y-2">
                                <Label htmlFor="name">
                                    Vollständiger Name *
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    required
                                    placeholder="Ihr vollständiger Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">E-Mail-Adresse *</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    required
                                    placeholder="ihre.email@beispiel.de"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Telefonnummer</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            phone: e.target.value,
                                        })
                                    }
                                    placeholder="+49 123 456789"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="cv">Lebenslauf (PDF) *</Label>
                                <Input
                                    id="cv"
                                    type="file"
                                    accept=".pdf"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            cv: e.target.files?.[0] || null,
                                        })
                                    }
                                    required
                                    className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800"
                                disabled={isSubmitting}
                            >
                                {isSubmitting
                                    ? "Wird eingereicht..."
                                    : "Bewerbung einreichen"}
                            </Button>
                        </form>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}

interface JobDetailPageProps {
    job: Job;
}

export default function JobDetailPage({ job }: JobDetailPageProps) {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <NavBar />
            <main className="flex-1">
                {/* Header Section */}
                <section className="bg-gradient-to-br from-teal-50 via-white to-orange-50 py-16 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            {/* Back Button */}
                            <Link
                                href="/jobs"
                                className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Zurück zu allen Jobs
                            </Link>

                            {/* Job Header */}
                            <div className="space-y-6">
                                <div>
                                    <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                        {job.title}
                                    </h1>
                                    <div className="flex flex-wrap gap-4 text-lg text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-5 h-5" />
                                            {job.location}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-5 h-5" />
                                            {job.type}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Euro className="w-5 h-5" />
                                            {job.salary}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-5 h-5" />
                                            {job.department}
                                        </div>
                                    </div>
                                </div>

                                {/* Apply Button */}
                                <ApplicationDialog
                                    job={job}
                                    trigger={
                                        <Button
                                            size="lg"
                                            className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800"
                                        >
                                            Jetzt bewerben
                                        </Button>
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Details Section */}
                <section className="py-16 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto space-y-12">
                            {/* Description */}
                            <Card className="p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Über die Position
                                </h2>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    {job.description}
                                </p>
                            </Card>

                            {/* Tasks */}
                            <Card className="p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <Code className="w-6 h-6 text-teal-600" />
                                    Deine Aufgaben
                                </h2>
                                <ul className="space-y-4">
                                    {job.tasks.map((task, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 text-gray-700 text-lg"
                                        >
                                            <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 flex-shrink-0"></div>
                                            {task}
                                        </li>
                                    ))}
                                </ul>
                            </Card>

                            {/* Requirements */}
                            <Card className="p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <TrendingUp className="w-6 h-6 text-orange-600" />
                                    Das bringst du mit
                                </h2>
                                <ul className="space-y-4">
                                    {job.requirements.map((req, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 text-gray-700 text-lg"
                                        >
                                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-3 flex-shrink-0"></div>
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </Card>

                            {/* Benefits */}
                            <Card className="p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                    <Users className="w-6 h-6 text-green-600" />
                                    Das bieten wir dir
                                </h2>
                                <ul className="space-y-4">
                                    {job.benefits.map((benefit, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 text-gray-700 text-lg"
                                        >
                                            <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </Card>

                            {/* Apply Section */}
                            <Card className="p-8 bg-gradient-to-br from-teal-50 to-orange-50 border-0">
                                <div className="text-center space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                            Bereit für den nächsten Schritt?
                                        </h2>
                                        <p className="text-gray-700 text-lg">
                                            Wir freuen uns auf Ihre Bewerbung
                                            und darauf, Sie kennenzulernen!
                                        </p>
                                    </div>
                                    <ApplicationDialog
                                        job={job}
                                        trigger={
                                            <Button
                                                size="lg"
                                                className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800"
                                            >
                                                Jetzt bewerben
                                            </Button>
                                        }
                                    />
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
