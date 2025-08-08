import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For username.github.io repositories, no basePath is needed
  // basePath and assetPrefix are only needed for project repositories
  trailingSlash: true,
};

export default nextConfig;
