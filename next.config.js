/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
