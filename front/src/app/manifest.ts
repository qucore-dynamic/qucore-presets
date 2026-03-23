// Modules
import { MetadataRoute } from 'next'

// Config
import { siteConfig } from '@config/metadata'

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
    short_name: 'QC Auth',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#171219',
    theme_color: '#171219',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
