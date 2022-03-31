/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "api.ts"],
  images: {
    domains: [process.env.NEXT_PUBLIC_IMAGE_DOMAIN],
  },
};

module.exports = nextConfig;
