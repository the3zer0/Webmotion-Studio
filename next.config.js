/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  basePath: isProduction ? "/Webmotion-Studio" : "",
  assetPrefix: isProduction ? "/Webmotion-Studio/" : "",

  env: {
    NEXT_PUBLIC_BASE_PATH: isProduction ? "/Webmotion-Studio" : "",
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;