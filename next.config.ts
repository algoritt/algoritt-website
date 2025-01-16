import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Sitemap Configuration
  sitemapBaseUrl: 'https://algoritt.com',
  generateSitemap: true,
  sitemapSize: 5000,
  
  // Other configurations
  images: {
    domains: ['algoritt.com'],
  },
};

export default nextConfig;
