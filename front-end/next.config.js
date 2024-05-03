const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: { disableDevLogs: true },
})
/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  // reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/fa',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/en',
        destination: '/about',
        permanent: true,
      },
    ]
  },

  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/about',
  //       permanent: true,
  //     },
  //   ]
  // },

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'resume-sajjad-ramezani.storage.iran.liara.space',
      },
    ],
  },
}

module.exports = withPWA(nextConfig)
