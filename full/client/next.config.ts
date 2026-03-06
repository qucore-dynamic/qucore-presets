// Types
import type { NextConfig } from "next"

// Modules
import path from "path"
import dotenv from "dotenv"

dotenv.config({ path: path.resolve(__dirname, "../.env") })

const isProd = process.env.MODE === "prod"

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
    externalDir: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: isProd ? "https" : "http",
        hostname: isProd ? process.env.SITE! : "localhost",
        port: isProd ? "" : process.env.SERVER_PORT!,
        pathname: "/api/**",
      },
    ],
  },

  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Content-Security-Policy",
          value: "frame-src 'self' https://www.google.com;",
        },
      ],
    },
  ],
}

export default nextConfig
