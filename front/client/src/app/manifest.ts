// Modules
import { MetadataRoute } from "next"

// Config
import { siteConfig } from "@config/metadata"

/**
 * PWA Manifest for QuCore Dynamic modules.
 *
 * Change only the values below to customize per module/site:
 * - name
 * - short_name
 * - description
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title.default,
    short_name: "QuCore",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon.png",
        sizes: "70x70",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  }
}
