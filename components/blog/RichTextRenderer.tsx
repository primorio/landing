"use client";

import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

interface RichTextRendererProps {
    body: any;
}

export default function RichTextRenderer({ body }: RichTextRendererProps) {
    const blockRenderers = {
        paragraph: ({ children }: any) => <p className="mb-6">{children}</p>,
        heading: ({
            level,
            children,
        }: {
            level: number;
            children?: React.ReactNode;
        }) => {
            const HeadingTag = `h${level}` as
                | "h1"
                | "h2"
                | "h3"
                | "h4"
                | "h5"
                | "h6";
            const headingClasses: { [key: number]: string } = {
                1: "text-3xl font-bold mb-6 mt-8",
                2: "text-2xl font-bold mb-4 mt-8",
                3: "text-xl font-bold mb-4 mt-6",
                4: "text-lg font-bold mb-3 mt-6",
                5: "text-base font-bold mb-3 mt-4",
                6: "text-sm font-bold mb-3 mt-4",
            };
            const classes =
                headingClasses[level as number] ||
                "text-base font-bold mb-3 mt-4";

            return React.createElement(
                HeadingTag,
                { className: classes },
                children
            );
        },
        list: ({ children, format }: any) => {
            const Tag = format === "ordered" ? "ol" : "ul";
            return <Tag className="mb-6 pl-6">{children}</Tag>;
        },
        "list-item": ({ children }: any) => (
            <li className="mb-2">{children}</li>
        ),
        link: ({ children, url }: any) => (
            <a href={url} className="text-teal-600 hover:underline">
                {children}
            </a>
        ),
        code: ({ children }: any) => (
            <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                {children}
            </code>
        ),
        quote: ({ children }: any) => (
            <blockquote className="border-l-4 border-teal-500 bg-teal-50 p-6 rounded-r-lg mb-6 italic">
                {children}
            </blockquote>
        ),
    };

    return (
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-l-teal-500 prose-blockquote:bg-teal-50 prose-blockquote:p-6 prose-blockquote:rounded-r-lg">
            <BlocksRenderer
                content={body}
                blocks={blockRenderers}
                modifiers={{
                    bold: ({ children }) => <strong>{children}</strong>,
                    italic: ({ children }) => (
                        <span className="italic">{children}</span>
                    ),
                }}
            />
        </div>
    );
}
