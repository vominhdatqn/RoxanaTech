/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next";

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

export default withPlaiceholder(nextConfig);
