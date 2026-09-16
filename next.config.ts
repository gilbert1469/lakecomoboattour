import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "lakecomotouristcenter.com" }],
        destination: "https://www.lakecomotouristcenter.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
