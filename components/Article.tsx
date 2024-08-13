import React from 'react';

interface ArticleProps {
  title: string;
  description: string;
  link: string;
}

const Article: React.FC<ArticleProps> = ({ title, description, link }) => (
  <div className="mb-8">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <h2 className="text-m font-semibold text-gray-800 group-hover:text-gray-600 transition-colors duration-200">
        {title}
      </h2>
      <div className="w-full h-1 bg-green-100 bg-gray-400 mt-1 group-hover:bg-green-500 transition-colors duration-200"></div>
    </a>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

export default Article;
