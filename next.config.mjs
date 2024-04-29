/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos", 'cdn.dummyjson.com'],
  },
  i18n: {
    locales: ['en', 'ka'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
