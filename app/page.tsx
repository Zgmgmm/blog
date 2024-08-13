"use client";

import { useState, useEffect, useRef } from "react";
import { GlobeAltIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Hello!</h2>
            <p className="mb-4 text-gray-700">
              I'm a software engineer focused on building reliable, readable, and maintainable software. I'm also interested in teaching software development and helping people improve their personal productivity.
            </p>
            <p className="mb-4 text-gray-700">
              Currently, I'm working on an advanced programming challenges website based on "Build Your Own X" tutorials.
            </p>
            <p className="mb-4 text-gray-700">
              I've worked full-time at several companies, including Company A, Company B, and Company C. I've also consulted for various companies such as Company D and Company E.
            </p>
            <p className="mb-4 text-gray-700">
              I'm a happy husband and a proud cat parent to a mischievous feline.
            </p>
            <p className="mb-8 text-gray-500">Last updated: May 1, 2023</p>
            
            <div className="border-t pt-8">
              <div className="flex justify-center space-x-8">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                  <EnvelopeIcon className="w-8 h-8" />
                </a>
                <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                  <GlobeAltIcon className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        );
      case "timeline":
        return <Timeline />;
      case "articles":
        return <Articles />;
      case "reading":
        return <div className="text-gray-700">Reading list...</div>;
      case "elsewhere":
        return <div className="text-gray-700">Other links...</div>;
      default:
        return null;
    }
  };

  const Timeline = () => {
    const events = [
      { year: "2023", event: "开始在 XYZ 公司担任高级软件工程师", description: "负责开发和维护公司的核心产品，使用最新的技术栈。" },
      { year: "2020", event: "获得计算机科学硕士学位", description: "专攻人工智能和机器学习，完成了关于深度学习在图像识别中的应用研究。" },
      { year: "2018", event: "在 ABC 公司担任软件工程师", description: "参与开发大规模分布式系统，提高了系统的可扩展性和性能。" },
      { year: "2016", event: "获得计算机科学学士学位", description: "主修软件工程，参与多个开源项目，培养了扎实的编程基础。" },
      // 添加更多事件...
    ];

    return (
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {events.map((item, index) => (
          <li key={index} className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {item.event}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.year}
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    );
  };

  const Articles = () => {
    const articles = [
      {
        title: "React性能优化的5个关键技巧",
        link: "https://example.com/react-performance-tips",
        date: "2023-05-15"
      },
      {
        title: "深入理解JavaScript的异步编程",
        link: "https://example.com/javascript-async-programming",
        date: "2023-04-22"
      },
      {
        title: "使用Docker简化你的开发环境配置",
        link: "https://example.com/docker-dev-environment",
        date: "2023-03-10"
      },
      {
        title: "GraphQL vs REST API:何时使用哪个?",
        link: "https://example.com/graphql-vs-rest",
        date: "2023-02-28"
      },
      {
        title: "TypeScript高级类型技巧",
        link: "https://example.com/typescript-advanced-types",
        date: "2023-01-15"
      }
    ];

    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">文章</h2>
        <ul className="space-y-4">
          {articles.map((article, index) => (
            <li key={index} className="border-b pb-4 last:border-b-0">
              <a 
                href={article.link}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400 text-lg font-semibold"
              >
                {article.title}
              </a>
              <p className="text-sm text-gray-500 mt-1">{article.date}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 text-gray-900">
      <div className="w-full max-w-3xl">
        <header className="mb-8">
          {/* <h1 className="text-4xl font-bold text-center text-gray-900">Your Name</h1> */}
        </header>
        <nav className="flex justify-center space-x-4 border-b pb-4 mb-8">
          {["about", "timeline", "articles", "reading", "elsewhere"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-gray-700 hover:text-gray-900 ${activeTab === tab ? "border-b-2 border-green-600 text-gray-900" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
        <section>
          {renderContent()}
        </section>
      </div>
    </main>
  );
} 