const baseUrl =
  process.env.MODE === 'prod' ? `https://${process.env.NEXT_PUBLIC_SITE}` : 'http://localhost:3000'

/**
 * Central site configuration for QuCore Dynamic.
 *
 * Immutable structure: do NOT change the keys or nesting.
 * Change only these values for per-site customization:
 * - title
 * - description
 * - metadataBase (baseUrl)
 * - openGraph.title, openGraph.description, openGraph.siteName
 * - twitter.title, twitter.description, twitter.site
 */

const title = 'QuCore Dynamic'
const description =
  'Modular platform for managing and visualizing enterprise workflows, authentication, subscriptions, and inter-module communication with high reliability.'

export const siteConfig = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description: description,
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: title,
    description: description,
    images: [
      {
        url: '/icon-512.png',
        width: 512,
        height: 512,
        alt: `${title} logo`,
      },
    ],
    url: new URL(baseUrl),
    siteName: title,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: title,
    description: description,
    card: 'summary_large_image',
    images: ['/icon-512.png'],
    site: title,
    creator: 'Artem Zhytovoz',
  },
  robots: {
    index: true,
    follow: true,
  },
}
