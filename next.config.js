/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/skincoach_event',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/skincoach_event',
  },
}

module.exports = nextConfig
