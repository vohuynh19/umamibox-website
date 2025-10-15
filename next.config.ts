import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
