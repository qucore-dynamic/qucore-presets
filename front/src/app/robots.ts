// Modules
import { MetadataRoute } from "next"

// Config
import { siteConfig } from "@config/metadata"

/**
 * Robots configuration for QuCore Dynamic.
 *
 * Change the disallow paths or sitemap URL ONLY if this project
 * has a different structure or custom requirements.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/_next/"],
    },
    sitemap: `${siteConfig.metadataBase.origin}/sitemap.xml`,
  }
}
