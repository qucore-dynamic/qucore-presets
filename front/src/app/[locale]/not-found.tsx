'use client'

// Modules
import { useLocale } from 'next-intl'

export default function NotFound() {
  const locale = useLocale()

  return (
    <div>
      <h1>404 - {locale}</h1>
    </div>
  )
}
