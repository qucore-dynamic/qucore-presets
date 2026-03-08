// Modules
import { siteConfig } from "./metadata"

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: siteConfig.title,
  description: siteConfig.description,
  url: siteConfig.metadataBase.toString(),
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.metadataBase.origin}/icon-512.png`,
    width: 512,
    height: 512,
  },
  applicationCategory: "BusinessApplication",
  operatingSystem: "Windows, macOS, Android, iOS",
  author: {
    "@type": "Person",
    name: siteConfig.twitter.creator,
  },
  inLanguage: "en-US",
  address: {
    "@type": "PostalAddress",
    addressCountry: "UA",
  },
}
