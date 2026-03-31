// Modules
import createNextIntlPlugin from 'next-intl/plugin'

// Interfaces
import { NextConfig } from 'next'

const isProd = process.env.MODE === 'prod'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
    externalDir: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: isProd ? 'https' : 'http',
        hostname: isProd ? process.env.NEXT_PUBLIC_SITE! : 'localhost',
        port: isProd ? '' : '3020',
        pathname: '/api/**',
      },
    ],
  },

  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value:
            "frame-src 'self' https://www.google.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com; connect-src 'self';",
        },
      ],
    },
  ],
}

export default withNextIntl(nextConfig)
