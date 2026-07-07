import { routing } from '@/i18n/routing'

// Path for a blog post in a given locale. Default locale (en) is unprefixed.
export function blogPath(locale: string, slug: string): string {
  return locale === routing.defaultLocale
    ? `/blog/${slug}`
    : `/${locale}/blog/${slug}`
}

// hreflang alternates map covering every locale plus x-default (English).
export function blogLanguages(slug: string): Record<string, string> {
  const languages: Record<string, string> = {}
  for (const l of routing.locales) {
    languages[l] = blogPath(l, slug)
  }
  languages['x-default'] = `/blog/${slug}`
  return languages
}

// Open Graph locale codes (language_TERRITORY) for the supported locales.
const OG_LOCALES: Record<string, string> = {
  en: 'en_US',
  tr: 'tr_TR',
  es: 'es_ES',
  pt: 'pt_BR',
  de: 'de_DE',
  fr: 'fr_FR',
  it: 'it_IT',
  nl: 'nl_NL',
  ru: 'ru_RU',
  pl: 'pl_PL',
  ja: 'ja_JP',
  ko: 'ko_KR',
  zh: 'zh_CN',
  ar: 'ar_AR',
  hi: 'hi_IN',
  id: 'id_ID',
  vi: 'vi_VN',
}

export function ogLocale(locale: string): string {
  return OG_LOCALES[locale] ?? 'en_US'
}
