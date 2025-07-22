import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";
import { fetchArticleBySlug, Article } from "@/lib/strapi";
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PageViewTracker from "@/components/tracking/PageViewTracker";
import ArticleContent from "@/components/blog/ArticleContent";

interface ArticlePageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({
    params,
}: ArticlePageProps): Promise<Metadata> {
    try {
        const article = await fetchArticleBySlug((await params).slug);

        if (!article) {
            return {
                title: "Artikel nicht gefunden - Primorio Blog",
                description:
                    "Der angeforderte Artikel konnte nicht gefunden werden.",
            };
        }

        const cover = article.cover;
        const imageUrl = cover
            ? `${
                  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"
              }${cover.url}`
            : undefined;

        return {
            title: `${article.title} - Primorio Blog`,
            description:
                article.description ||
                `Lesen Sie mehr über ${article.title} in unserem Blog.`,
            openGraph: {
                title: article.title,
                description: article.description,
                images: imageUrl ? [{ url: imageUrl }] : undefined,
                type: "article",
                publishedTime: article.publishedAt,
            },
            alternates: {
                canonical: `/blog/${article.slug}`,
            },
        };
    } catch (error) {
        return {
            title: "Artikel nicht gefunden - Primorio Blog",
            description:
                "Der angeforderte Artikel konnte nicht gefunden werden.",
        };
    }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    let article: Article | null = null;

    try {
        article = await fetchArticleBySlug((await params).slug);
    } catch (error) {
        console.error("Error fetching article:", error);
    }

    if (!article) {
        notFound();
    }

    const getImageUrl = (article: Article) => {
        const cover = article.cover;
        if (cover) {
            const baseUrl =
                process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
            return `${baseUrl}${cover.url}`;
        }
        return null;
    };

    const imageUrl = getImageUrl(article);

    console.log("Article data:", article);

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <PageViewTracker pageName={`Blog - ${article.title}`} />
            <NavBar />

            <main className="flex-1">
                {/* Article Header */}
                <section className="py-8 lg:py-12 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            {/* Back Button */}
                            <div className="mb-8">
                                <Link href="/blog">
                                    <Button
                                        variant="ghost"
                                        className="flex items-center text-gray-600 hover:text-gray-900"
                                    >
                                        <ArrowLeft className="w-4 h-4 mr-2" />
                                        Zurück zum Blog
                                    </Button>
                                </Link>
                            </div>

                            {/* Categories */}
                            {article.category && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="inline-flex items-center px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">
                                        <Tag className="w-3 h-3 mr-1" />
                                        {article.category.name}
                                    </span>
                                </div>
                            )}

                            {/* Title */}
                            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                {article.title}
                            </h1>

                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                                <div className="flex items-center">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    {format(
                                        new Date(article.publishedAt),
                                        "dd. MMMM yyyy",
                                        { locale: de }
                                    )}
                                </div>
                                {article.author && (
                                    <div className="flex items-center">
                                        <User className="w-5 h-5 mr-2" />
                                        {article.author.name}
                                    </div>
                                )}
                            </div>

                            {/* Excerpt */}
                            {article.description && (
                                <p className="text-xl text-gray-600 leading-relaxed mb-8 border-l-4 border-teal-500 pl-6 italic">
                                    {article.description}
                                </p>
                            )}
                        </div>
                    </div>
                </section>

                {/* Featured Image */}
                {imageUrl && (
                    <section className="py-8">
                        <div className="container mx-auto px-4">
                            <div className="max-w-4xl mx-auto">
                                <div className="aspect-video relative bg-gray-100 rounded-xl overflow-hidden">
                                    <img
                                        src={imageUrl}
                                        alt={
                                            article.cover?.alternativeText ||
                                            article.title
                                        }
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Article Content */}
                <section className="py-8 lg:py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            {article.blocks && (
                                <ArticleContent blocks={article.blocks} />
                            )}
                        </div>
                    </div>
                </section>

                {/* Back to Blog CTA */}
                <section className="py-12 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Mehr interessante Artikel entdecken
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Stöbern Sie in unserem Blog und entdecken Sie
                                weitere spannende Insights.
                            </p>
                            <Link href="/blog">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800"
                                >
                                    Alle Artikel anzeigen
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
