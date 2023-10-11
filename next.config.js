/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "images.pexels.com",
      "firebasestorage.googleapis.com",
      "cdn.sanity.io",
      "source.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
