// next.config.ts
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
  },
};

export default nextConfig;
