import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // You can add your other Next.js config options here
  reactStrictMode: true,
};

export default withNextIntl(nextConfig);