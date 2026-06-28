/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/Webmotion-Studio",
  assetPrefix: "/Webmotion-Studio/",
};

module.exports = nextConfig;