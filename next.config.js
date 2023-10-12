/** @type {import('next').NextConfig} */
// const { withPlaiceholder } = require("@plaiceholder/next");

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
// module.exports = withPlaiceholder(nextConfig);
