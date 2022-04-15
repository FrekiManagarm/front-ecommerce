/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_API: process.env.SERVER_API_LARAVEL,
    SERVER_FRONT: process.env.LOCAL_FRONT_SERVER,
    ENV: process.env.NODE_ENV
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: "fr",
  },
  images: {
    domains: ['https://i.imgur.com', 'i.imgur.com', '*'],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig;
