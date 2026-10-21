import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-82940be5ed31427faae92e4c590386f2.r2.dev',
        pathname: '/**',
      }
    ]
  },
  reactStrictMode: true,
};

export default nextConfig;
