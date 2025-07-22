import { strapi } from "@strapi/client";

// Create a Strapi client instance
export const strapiClient = strapi({
    baseURL: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api`,
    auth: process.env.STRAPI_API_TOKEN,
});

// Article type definition for Strapi v5
export interface Article {
    id: number;
    documentId: string;
    title: string;
    description?: string; // excerpt equivalent
    slug: string;
    blocks: any[]; // Rich text content blocks
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
    cover?: {
        id: number;
        documentId: string;
        url: string;
        name: string;
        alternativeText?: string;
        caption?: string;
        width: number;
        height: number;
        formats?: {
            thumbnail?: { url: string; width: number; height: number };
            small?: { url: string; width: number; height: number };
            medium?: { url: string; width: number; height: number };
            large?: { url: string; width: number; height: number };
        };
    };
    author?: {
        id: number;
        documentId: string;
        name: string;
        email: string;
    };
    category?: {
        id: number;
        documentId: string;
        name: string;
        slug: string;
        description?: string;
    };
}

// API response types for Strapi v5
export interface ArticlesResponse {
    data: Article[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

// Fetch articles with pagination
export async function fetchArticles(page: number = 1, pageSize: number = 10) {
    try {
        const response = await strapiClient.collection("articles").find({
            pagination: {
                page: page,
                pageSize: pageSize,
            },
            sort: ["publishedAt:desc"],
            populate: {
                cover: true,
                author: true,
                category: true,
            },
        });

        return response as unknown as ArticlesResponse;
    } catch (error) {
        console.error("Error fetching articles:", error);
        throw error;
    }
}

// Fetch single article by slug
export async function fetchArticleBySlug(slug: string) {
    try {
        const response = await strapiClient.collection("articles").find({
            filters: {
                slug: {
                    $eq: slug,
                },
            },
            populate: {
                cover: true,
                author: true,
                category: true,
                blocks: {
                    populate: "*",
                },
            },
        });
        console.log("Fetched article response:", response);

        const articlesResponse = response as unknown as ArticlesResponse;
        return articlesResponse.data[0] || null;
    } catch (error) {
        console.error("Error fetching article by slug:", error);
        throw error;
    }
}
