import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Asegura que el sitio funcione correctamente en GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
  trailingSlash: false,
};

export default nextConfig;
