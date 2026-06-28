/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/Webmotion-Studio",
  assetPrefix: "/Webmotion-Studio/",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/Webmotion-Studio",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;