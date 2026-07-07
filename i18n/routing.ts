import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'tr'],
  defaultLocale: 'en',
  // Default locale (en) keeps clean URLs (/foldermini); other locales are
  // prefixed (/tr/foldermini). This preserves every existing English URL.
  localePrefix: 'as-needed',
})

export type Locale = (typeof routing.locales)[number]
