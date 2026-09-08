import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',

  basePath: '/figma-convert-project',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
