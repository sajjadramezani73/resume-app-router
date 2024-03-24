/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // async redirects() {
  //   return [
  //     {
  //       source: '/fa',
  //       destination: '/about',
  //       permanent: true,
  //     },
  //     {
  //       source: '/en',
  //       destination: '/about',
  //       permanent: true,
  //     },
  //   ]
  // },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true,
      },
    ]
  },

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

module.exports = nextConfig
