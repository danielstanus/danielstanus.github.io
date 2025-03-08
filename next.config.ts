import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
  },
  // Asegura que el sitio funcione correctamente en GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://danielstanus.github.io' : '',
};

export default nextConfig;
