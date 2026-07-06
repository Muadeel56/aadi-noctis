import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so Cloudflare Pages can serve the site as pure static files
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
