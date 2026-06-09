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
};

export default nextConfig;
