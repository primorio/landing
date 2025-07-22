"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface MarkdownRendererProps {
    body: string;
}

export default function MarkdownRenderer({ body }: MarkdownRendererProps) {
    if (!body) return null;

    return (
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-l-teal-500 prose-blockquote:bg-teal-50 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-table:w-full prose-th:text-left prose-th:font-semibold prose-th:p-2 prose-td:p-2 prose-li:mb-2">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                    h1: ({ children }) => (
                        <h1 className="text-3xl font-bold mb-6 mt-8">
                            {children}
                        </h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="text-2xl font-bold mb-4 mt-8">
                            {children}
                        </h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className="text-xl font-bold mb-4 mt-6">
                            {children}
                        </h3>
                    ),
                    h4: ({ children }) => (
                        <h4 className="text-lg font-bold mb-3 mt-6">
                            {children}
                        </h4>
                    ),
                    h5: ({ children }) => (
                        <h5 className="text-base font-bold mb-3 mt-4">
                            {children}
                        </h5>
                    ),
                    h6: ({ children }) => (
                        <h6 className="text-sm font-bold mb-3 mt-4">
                            {children}
                        </h6>
                    ),
                    p: ({ children }) => <p className="mb-6">{children}</p>,
                    ul: ({ children }) => (
                        <ul className="mb-6 pl-6">{children}</ul>
                    ),
                    ol: ({ children }) => (
                        <ol className="mb-6 pl-6">{children}</ol>
                    ),
                    li: ({ children }) => <li className="mb-2">{children}</li>,
                    a: ({ href, children }) => (
                        <a
                            href={href}
                            className="text-teal-600 hover:underline"
                        >
                            {children}
                        </a>
                    ),
                    code: ({ children, className }) => {
                        const isInline = !className;
                        if (isInline) {
                            return (
                                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                                    {children}
                                </code>
                            );
                        }
                        return (
                            <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                                {children}
                            </code>
                        );
                    },
                    blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-teal-500 bg-teal-50 p-6 rounded-r-lg mb-6 italic">
                            {children}
                        </blockquote>
                    ),
                    table: ({ children }) => (
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full border-collapse border border-gray-300">
                                {children}
                            </table>
                        </div>
                    ),
                    thead: ({ children }) => (
                        <thead className="bg-gray-50">{children}</thead>
                    ),
                    th: ({ children }) => (
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
                            {children}
                        </th>
                    ),
                    td: ({ children }) => (
                        <td className="border border-gray-300 px-4 py-2">
                            {children}
                        </td>
                    ),
                    img: ({ src, alt }) => (
                        <img
                            src={src}
                            alt={alt}
                            className="max-w-full h-auto rounded-lg mb-6"
                        />
                    ),
                }}
            >
                {body}
            </ReactMarkdown>
        </div>
    );
}
