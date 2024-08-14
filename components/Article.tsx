import React, { useState } from 'react';
import { RoughNotation } from "react-rough-notation";

interface ArticleProps {
    title: string;
    description: string;
    link: string;
    modifiedDate: string;
    categories: string[];
}

const Article: React.FC<ArticleProps> = ({ title, description, link, modifiedDate, categories }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="mb-8 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {/* 分类标签 */}
            <div className="absolute top-0 right-0 flex flex-wrap gap-2 justify-end">
                {categories.map((category, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200">
                        {category}
                    </span>
                ))}
            </div>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block"
            >
                <RoughNotation
                    type="underline"
                    show={isHovered}
                    color="#4ade80"
                    strokeWidth={2}
                    padding={2}
                    iterations={2}
                    animationDuration={200}
                >
                    <h2 className="text-m font-semibold text-gray-800 group-hover:text-gray-600 transition-colors duration-200">
                        {title}
                    </h2>
                </RoughNotation>
            </a>
            <div className="mt-2 flex justify-between items-end">
                <p className="text-gray-600 flex-grow">{description}</p>
                <p className="text-sm text-gray-500 ml-4 shrink-0">{modifiedDate}</p>
            </div>
        </div>
    );
};

export default Article;