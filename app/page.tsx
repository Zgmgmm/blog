"use client";

import { useState, useEffect, useRef } from "react";
import { GlobeAltIcon, EnvelopeIcon, ServerIcon as DatabaseIcon } from '@heroicons/react/24/solid';
import Articles from '../components/Articles';  
import { RoughNotation } from "react-rough-notation";

export default function Home() {
  const [activeTab, setActiveTab] = useState("About");

  const renderContent = () => {
    switch (activeTab) {
      case "About":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Hello!</h2>
            <p className="mb-4 text-gray-700">
              I am a software engineer focused on building reliable, readable, and maintainable software. I am also interested in teaching software development and helping people improve their personal productivity.
            </p>
            <p className="mb-4 text-gray-700">
              Currently, I am working on an advanced programming challenges website based on &ldquo;Build Your Own X&rdquo; tutorials.
            </p>
            <p className="mb-4 text-gray-700">
              I have worked full-time at several companies, including Company A, Company B, and Company C. I have also consulted for various companies such as Company D and Company E.
            </p>
            <p className="mb-4 text-gray-700">
              I am a happy husband and a proud cat parent to a mischievous feline.
            </p>
            <p className="mb-8 text-gray-500">Last updated: May 1, 2023</p>
            
            <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900">Experience</h2>
            <Experience />
            
            <div className="pt-8">
              <div className="flex justify-center space-x-8">
                <a href="https://github.com/zgmgmm" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://x.com/zgmgmm" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="mailto:zgmgmml@outlook.com" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                  <EnvelopeIcon className="w-8 h-8" />
                </a>
                <a href="https://zgmgmm.github.io" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                  <GlobeAltIcon className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        );
      case "Articles":
        const articlesData = [
          {
            title: "🚀 Go语言高性能编程技巧",
            description: "探讨Go语言中提升性能的关键策略和最佳实践。",
            link: "https://example.com/go-performance-tips",
            modifiedDate: "2023-05-15",
          },
          {
            title: "🐘 PostgreSQL索引优化指南",
            description: "深入了解PostgreSQL索引类型及其对查询性能的影响。",
            link: "https://example.com/postgresql-index-optimization",
            modifiedDate: "2023-05-10",
          },
          {
            title: "📊 Kafka流处理实战",
            description: "使用Kafka构建实时数据管道的实用指南。",
            link: "https://example.com/kafka-stream-processing",
            modifiedDate: "2023-05-05",
          },
          {
            title: "🔒 Go语言并发编程模式",
            description: "探索Go中的goroutines和channels，以及常见的并发模式。",
            link: "https://example.com/go-concurrency-patterns",
            modifiedDate: "2023-04-30",
          },
          {
            title: "🔍 PostgreSQL查询优化技巧",
            description: "提高PostgreSQL查询效率的实用技巧和工具。",
            link: "https://example.com/postgresql-query-optimization",
            modifiedDate: "2023-04-25",
          },
          {
            title: "⚖️ Kafka集群扩展策略",
            description: "如何有效地扩展Kafka集群以处理大规模数据流。",
            link: "https://example.com/kafka-cluster-scaling",
            modifiedDate: "2023-04-20",
          },
          {
            title: "🧪 Go语言测试最佳实践",
            description: "编写高质量、可维护的Go测试代码的指南。",
            link: "https://example.com/go-testing-best-practices",
            modifiedDate: "2023-04-15",
          },
          {
            title: "🔐 PostgreSQL数据安全最佳实践",
            description: "保护PostgreSQL数据库免受常见安全威胁的策略。",
            link: "https://example.com/postgresql-security-practices",
            modifiedDate: "2023-04-10",
          },
          {
            title: "📈 Kafka性能调优指南",
            description: "优化Kafka生产者、消费者和broker配置以提高吞吐量。",
            link: "https://example.com/kafka-performance-tuning",
            modifiedDate: "2023-04-05",
          },
          {
            title: "🌐 Go语言微服务架构设计",
            description: "使用Go构建可扩展、弹性的微服务系统的原则和模式。",
            link: "https://example.com/go-microservices-architecture",
            modifiedDate: "2023-03-31",
          },
          {
            title: "📊 PostgreSQL时间序列数据处理",
            description: "高效存储和查询PostgreSQL中的时间序列数据。",
            link: "https://example.com/postgresql-time-series-data",
            modifiedDate: "2023-03-26",
          },
          {
            title: "🔗 Kafka与大数据生态系统集成",
            description: "将Kafka与Hadoop、Spark和Flink等大数据工具集成的指南。",
            link: "https://example.com/kafka-big-data-integration",
            modifiedDate: "2023-03-21",
          },
          // ... 其他文章数据
        ];
        return <Articles articles={articlesData} />;
      case "Projects":
        return <Projects />;
      case "Elsewhere":
        return <div className="text-gray-700">Other links...</div>;
      default:
        return null;
    }
  };

  const Experience = () => {
    const events = [
      { year: "2020~now", event: "在 ABC 公司担任软件工程师", description: "参与开发大规模分布式系统，提高了系统的可扩展性和性能。" },
      { year: "2016~2020", event: "获得计算机科学学士学位", description: "主修软件工程，参与多个开源项目，培养了扎实的编程基础。" },
      // 添加更多事件...
    ];

    return (
      <ol className="relative border-l border-gray-200 dark:border-gray-700 space-y-4">
        {events.map((item, index) => (
          <li key={index} className="ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.year}</time>
            <h3 className="text-s font-semibold text-gray-900 dark:text-white">{item.event}</h3>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
          </li>
        ))}
      </ol>
    );
  };
 
  const Projects = () => {
    const projects = [
      {
        name: "LevelDB",
        description: "快速键值存储库提供从字符串键到字符串值的有序映射。",
        Icon: DatabaseIcon,
        link: "https://github.com/google/leveldb"
      },
      {
        name: "PostgreSQL",
        description: "强大的开源对象关系数据库系统拥有超过30年的积极开发历史。",
        Icon: DatabaseIcon,
        link: "https://github.com/postgres/postgres"
      },
      // 您可以在这里添加更多项目...
    ];

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-4 flex flex-col items-center">
                <project.Icon className="w-24 h-24 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 text-center">{project.name}</h3>
                <p className="text-sm text-gray-600 mt-2 text-center">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 text-gray-900">
      <div className="w-full max-w-3xl">
        <header className="mb-8">
          {/* <h1 className="text-4xl font-bold text-center text-gray-900">Your Name</h1> */}
        </header>
        <nav className="flex justify-center space-x-4 pb-4 mb-8 border-b border-gray-200">
          {["About", "Articles", "Projects", "Elsewhere"].map((tab) => (
            <RoughNotation
              key={tab}
              type="highlight"
              show={activeTab === tab}
              color="#bbf7d0"
            >
              <button
                className={`px-4 py-2 text-lg font-bold ${activeTab === tab ? 'text-gray-900' : 'text-gray-500'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            </RoughNotation>
          ))}
        </nav>  
        <section className="w-full">
          {renderContent()}
        </section>
      </div>
    </main>
  );
} 