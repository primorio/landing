"use client";

import React from "react";
import RichTextRenderer from "./RichTextRenderer";
import MarkdownRenderer from "./MarkdownRenderer";
import MediaRenderer from "./MediaRenderer";
import QuoteRenderer from "./QuoteRenderer";
import SliderRenderer from "./SliderRenderer";

interface BlockComponent {
    __component: string;
    id: number;
    body?: any;
    media?: any;
    file?: any;
    files?: any[];
    text?: string;
    author?: string;
}

interface ArticleContentProps {
    blocks: BlockComponent[];
}

export default function ArticleContent({ blocks }: ArticleContentProps) {
    const renderBlock = (block: BlockComponent) => {
        switch (block.__component) {
            case "shared.rich-text":
                return <RichTextRenderer body={block.body} />;
            case "shared.rich-text-markdown":
                return <MarkdownRenderer body={block.body} />;
            case "shared.media":
                return <MediaRenderer file={block.file} media={block.media} />;
            case "shared.quote":
                return (
                    <QuoteRenderer text={block.text} author={block.author} />
                );
            case "shared.slider":
                return <SliderRenderer files={block.files} />;
            default:
                console.warn(`Unknown component type: ${block.__component}`);
                return null;
        }
    };

    if (!blocks || !Array.isArray(blocks)) {
        return null;
    }

    return (
        <div>
            {blocks.map((block) => (
                <div key={block.id}>{renderBlock(block)}</div>
            ))}
        </div>
    );
}
