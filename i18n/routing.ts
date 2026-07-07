import { defineRouting } from 'next-intl/routing'

// en + tr are fully authored; the rest carry translated blog posts (and fall
// back to English on pages that aren't translated yet).
export const routing = defineRouting({
  locales: [
    'en',
    'tr',
    'es',
    'pt',
    'de',
    'fr',
    'it',
    'nl',
    'ru',
    'pl',
    'ja',
    'ko',
    'zh',
    'ar',
    'hi',
    'id',
    'vi',
  ],
  defaultLocale: 'en',
  // Default locale (en) keeps clean URLs (/foldermini); other locales are
  // prefixed (/tr/foldermini). This preserves every existing English URL.
  localePrefix: 'as-needed',
  // Keep URLs deterministic: no automatic Accept-Language redirects, so `/`
  // always serves English and localized URLs are reached explicitly.
  localeDetection: false,
})

export type Locale = (typeof routing.locales)[number]

export const RTL_LOCALES = ['ar'] as const

export function isRtl(locale: string): boolean {
  return (RTL_LOCALES as readonly string[]).includes(locale)
}

// Localized display names for the language switcher.
export const LOCALE_LABELS: Record<string, string> = {
  en: 'English',
  tr: 'Türkçe',
  es: 'Español',
  pt: 'Português',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
  nl: 'Nederlands',
  ru: 'Русский',
  pl: 'Polski',
  ja: '日本語',
  ko: '한국어',
  zh: '中文',
  ar: 'العربية',
  hi: 'हिन्दी',
  id: 'Bahasa Indonesia',
  vi: 'Tiếng Việt',
}
