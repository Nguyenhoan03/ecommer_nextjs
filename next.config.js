const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'c4.wallpaperflare.com',
      'encrypted-tbn0.gstatic.com'
    ],
  },
  i18n,
};

module.exports = nextConfig;