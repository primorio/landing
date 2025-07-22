import { Metadata } from "next";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import BlogListing from "./_BlogListing";
import PageViewTracker from "@/components/tracking/PageViewTracker";
import { BookOpen, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
    title: "Blog - Primorio",
    description:
        "Entdecken Sie die neuesten Insights, Trends und Entwicklungen in der Immobilienwirtschaft. Unser Blog bietet wertvolle Einblicke in innovative Lösungen und Technologien.",
    alternates: {
        canonical: "/blog",
    },
};

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <PageViewTracker pageName="Blog" />
            <NavBar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-teal-50 via-white to-orange-50 py-16 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6 hover:bg-teal-200 transition-colors">
                                <BookOpen className="w-4 h-4 mr-2" />
                                Insights & Trends
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                Unser{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-600">
                                    Blog
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                                Entdecken Sie die neuesten Entwicklungen in der
                                Immobilienwirtschaft, innovative Technologien
                                und wertvolle Einblicke aus unserer Branche.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <div className="flex items-center text-gray-600">
                                    <Lightbulb className="w-5 h-5 mr-2 text-orange-500" />
                                    <span>Praxisnahe Insights</span>
                                </div>
                                <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
                                <div className="flex items-center text-gray-600">
                                    <BookOpen className="w-5 h-5 mr-2 text-teal-500" />
                                    <span>Regelmäßige Updates</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blog Content Section */}
                <section className="py-16 lg:py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <BlogListing pageSize={9} />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
