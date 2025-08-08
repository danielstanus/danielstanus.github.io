import type { NextConfig } from "next";

const repoName = 'mi-portafolio'; // Your repository name

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Set basePath and assetPrefix only for production (GitHub Pages)
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  // Optional: If you are using a custom 404 page and want it to work with basePath
  // trailingSlash: true, // Can be useful but sometimes causes other issues, test if needed
};

export default nextConfig;
