import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos", "cdn.dummyjson.com"],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
