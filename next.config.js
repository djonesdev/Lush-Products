/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'twstg2.eu.saleor.cloud',
        pathname: '/media/**',
      },
    ],
  },
}

module.exports = nextConfig
