import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],   // auto-convert to modern formats
    minimumCacheTTL: 31536000,               // cache images for 1 year
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // target Gulf mobile + desktop sizes
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,                    // remove X-Powered-By header (security + minor perf)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options",   value: "nosniff" },
          { key: "X-Frame-Options",           value: "DENY" },
          { key: "X-XSS-Protection",          value: "1; mode=block" },
          { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // Long-cache all static assets
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
