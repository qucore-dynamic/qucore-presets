// Modules
import { MetadataRoute } from "next"

// Config
import { siteConfig } from "@config/metadata"

/**
 * Sitemap configuration for QuCore Dynamic.
 *
 * Update the URLs, lastModified, changeFrequency, and priority
 * ONLY if this project has a different structure or additional pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.metadataBase.origin,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
