import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "videos.openai.com",
        port: "",
        pathname: "/**",
      },
    ]
  }, 
};

export default nextConfig;
