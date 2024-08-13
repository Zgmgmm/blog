import React, { useState } from 'react';
import { RoughNotation } from "react-rough-notation";

interface ArticleProps {
    title: string;
    description: string;
    link: string;
    modifiedDate: string;
}

const Article: React.FC<ArticleProps> = ({ title, description, link, modifiedDate }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="mb-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
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