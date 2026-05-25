import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {},
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  async headers() {
    return [
      {
        source: "/audio/:path*",
        headers: [
          { key: "Accept-Ranges", value: "bytes" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
    ];
  },
};

export default nextConfig;
