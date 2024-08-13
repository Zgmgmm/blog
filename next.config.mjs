/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,   // 每秒检查一次文件变更
        aggregateTimeout: 300,   // 延迟300ms再重新编译
      };
    }
    return config;
  },
};

export default nextConfig;