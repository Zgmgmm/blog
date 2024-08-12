/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: 'https://zgmgmm.github.io/', // 使用仓库名称作为前缀
};

export default nextConfig;