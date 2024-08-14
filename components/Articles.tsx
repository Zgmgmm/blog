import React from 'react';
import Article from './Article';

interface ArticleData {
    title: string;
    description: string;
    link: string;
    modifiedDate: string;  
    categories: string[];  
}

interface ArticlesProps {
    articles: ArticleData[];
}

const Articles = ({ articles }: ArticlesProps) => {
    return (
        <div className="space-y-8">
            {articles.map((article, index) => (
                <Article key={index} {...article} />
            ))}
        </div>
    );
};

export default Articles;