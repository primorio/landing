"use client";

import { useState, useEffect } from "react";
import { Article, fetchArticles } from "@/lib/strapi";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft, ChevronRight, User, Tag } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { de } from "date-fns/locale";

interface BlogListingProps {
    initialPage?: number;
    pageSize?: number;
}

export default function BlogListing({
    initialPage = 1,
    pageSize = 6,
}: BlogListingProps) {
    const [articles, setArticles] = useState<Article[]>([]);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadArticles(currentPage);
    }, [currentPage]);

    const loadArticles = async (page: number) => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetchArticles(page, pageSize);
            setArticles(response.data);
            setTotalPages(response.meta.pagination.pageCount);
        } catch (err) {
            console.error("Error loading articles:", err);
            setError(
                "Fehler beim Laden der Artikel. Bitte versuchen Sie es später erneut."
            );
        } finally {
            setLoading(false);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };

    const getImageUrl = (article: Article) => {
        const cover = article.cover;
        if (cover) {
            const baseUrl =
                process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
            return `${baseUrl}${cover.url}`;
        }
        return "/logo_transparent_black.png"; // Fallback image
    };

    const getExcerpt = (article: Article) => {
        if (article.description) {
            return article.description;
        }

        // Extract text from rich content blocks for excerpt
        if (article.blocks && Array.isArray(article.blocks)) {
            const textContent = article.blocks
                .filter((block) => block.__component === "shared.rich-text")
                .map((block) => block.body || "")
                .join(" ")
                .replace(/[#*]/g, ""); // Remove markdown symbols

            return textContent.length > 150
                ? textContent.substring(0, 150) + "..."
                : textContent;
        }

        return "Lesen Sie den vollständigen Artikel...";
    };

    if (loading && articles.length === 0) {
        return (
            <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-12">
                <p className="text-red-600 mb-4">{error}</p>
                <Button
                    onClick={() => loadArticles(currentPage)}
                    variant="outline"
                >
                    Erneut versuchen
                </Button>
            </div>
        );
    }

    if (articles.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-600">Noch keine Artikel verfügbar.</p>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <Link key={article.id} href={`/blog/${article.slug}`}>
                        <Card
                            key={article.id}
                            className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="aspect-video relative bg-gray-100">
                                <img
                                    src={getImageUrl(article)}
                                    alt={
                                        article.cover?.alternativeText ||
                                        article.title
                                    }
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target =
                                            e.target as HTMLImageElement;
                                        target.src =
                                            "/logo_transparent_black.png";
                                    }}
                                />
                            </div>
                            <CardContent className="p-6">
                                <div className="space-y-3">
                                    {/* Category */}
                                    {article.category && (
                                        <div className="flex flex-wrap gap-2">
                                            <span className="inline-flex items-center px-2 py-1 bg-teal-100 text-teal-800 text-xs rounded-full">
                                                <Tag className="w-3 h-3 mr-1" />
                                                {article.category.name}
                                            </span>
                                        </div>
                                    )}

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                                        {article.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-600 text-sm line-clamp-3">
                                        {getExcerpt(article)}
                                    </p>

                                    {/* Meta Info */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {format(
                                                    new Date(
                                                        article.publishedAt
                                                    ),
                                                    "dd. MMM yyyy",
                                                    { locale: de }
                                                )}
                                            </div>
                                            {article.author && (
                                                <div className="flex items-center">
                                                    <User className="w-4 h-4 mr-1" />
                                                    {article.author.name}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Read More Button */}
                                    <div className="pt-4">
                                        <Button
                                            variant="outline"
                                            className="w-full hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700"
                                        >
                                            Weiterlesen
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1 || loading}
                        className="flex items-center"
                    >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Zurück
                    </Button>

                    <div className="flex space-x-1">
                        {/* Show page numbers */}
                        {Array.from(
                            { length: Math.min(totalPages, 5) },
                            (_, i) => {
                                let pageNumber;
                                if (totalPages <= 5) {
                                    pageNumber = i + 1;
                                } else if (currentPage <= 3) {
                                    pageNumber = i + 1;
                                } else if (currentPage >= totalPages - 2) {
                                    pageNumber = totalPages - 4 + i;
                                } else {
                                    pageNumber = currentPage - 2 + i;
                                }

                                return (
                                    <Button
                                        key={pageNumber}
                                        variant={
                                            currentPage === pageNumber
                                                ? "default"
                                                : "outline"
                                        }
                                        size="sm"
                                        onClick={() =>
                                            handlePageClick(pageNumber)
                                        }
                                        disabled={loading}
                                        className={
                                            currentPage === pageNumber
                                                ? "bg-teal-600 hover:bg-teal-700"
                                                : ""
                                        }
                                    >
                                        {pageNumber}
                                    </Button>
                                );
                            }
                        )}
                    </div>

                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages || loading}
                        className="flex items-center"
                    >
                        Weiter
                        <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                </div>
            )}

            {/* Page Info */}
            <div className="text-center text-sm text-gray-500">
                Seite {currentPage} von {totalPages}
            </div>
        </div>
    );
}
