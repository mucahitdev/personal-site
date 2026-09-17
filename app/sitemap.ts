import type { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/lib/constants'
import { routing } from '@/i18n/routing'

const base = WEBSITE_URL.replace(/\/$/, '')

// App pages that only exist in English (not yet translated).
const projects = ['verso', 'stamper', 'tradelands', 'lecto']
const legal = ['privacy-policy', 'terms-of-use']

// English-only legacy blog posts (single MDX files, unprefixed).
const enPosts = [
  'app-store-2025',
  'exploring-the-intersection-of-design-ai-and-design-engineering',
]

// Blog posts translated into every locale (same slug per locale).
const multilingualPosts = [
  'iphone-duo-home-screen-setup',
  'iphone-duo-cover-screen-apps',
  'best-widgets-iphone-duo',
  'ios-27-home-screen-ideas',
  'ios-27-widgets-whats-new',
  'ios-27-lock-screen-setup',
  'extra-large-widget-ios-27',
  'dark-mode-app-icons-iphone',
  'apps-in-dynamic-island-iphone',
  'open-website-in-chrome-from-widget-iphone',
  'folders-inside-folders-iphone',
  'transparent-widget-iphone',
  'call-whatsapp-contact-from-widget-iphone',
  'custom-app-icons-without-shortcuts-iphone',
  'notification-badges-on-widgets-iphone',
  'launch-apps-from-widgets-ios',
  'organize-iphone-home-screen-2026',
  'find-photos-of-a-person-iphone',
  'search-photos-by-content-iphone',
  'on-device-photo-organizer-privacy',
  'find-remove-duplicate-photos-iphone',
  'find-photos-of-your-pet-iphone',
  'search-text-in-photos-iphone',
]

function localePath(locale: string, path: string): string {
  const clean = path.replace(/^\//, '')
  return locale === routing.defaultLocale
    ? `${base}/${clean}`
    : `${base}/${locale}/${clean}`
}

function languagesFor(path: string): Record<string, string> {
  const languages: Record<string, string> = {}
  for (const l of routing.locales) languages[l] = localePath(l, path)
  languages['x-default'] = localePath(routing.defaultLocale, path)
  return languages
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: { languages: { en: `${base}/`, tr: `${base}/tr` } },
    },
  ]

  // WidgetLoft's app page and legal pages now live on widgetloft.app (these
  // mucahitk.com addresses redirect there), so none are listed here.

  // FaceIdent: translated in en + tr (page + legal pages authored in both).
  for (const locale of ['en', 'tr']) {
    entries.push({
      url: localePath(locale, 'faceident'),
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${base}/faceident`,
          tr: `${base}/tr/faceident`,
        },
      },
    })
  }
  for (const l of legal) {
    for (const locale of ['en', 'tr']) {
      entries.push({
        url: localePath(locale, `faceident/${l}`),
        lastModified: now,
        changeFrequency: 'yearly',
        priority: 0.3,
        alternates: {
          languages: {
            en: `${base}/faceident/${l}`,
            tr: `${base}/tr/faceident/${l}`,
          },
        },
      })
    }
  }

  // Other apps — English only.
  for (const p of projects) {
    entries.push({
      url: `${base}/${p}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    })
    for (const l of legal) {
      entries.push({
        url: `${base}/${p}/${l}`,
        lastModified: now,
        changeFrequency: 'yearly',
        priority: 0.3,
      })
    }
  }

  // Lecto also has a support page next to the usual legal pair.
  entries.push({
    url: `${base}/lecto/support`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.5,
  })

  // Multilingual blog posts — one entry per locale, each with the full
  // hreflang alternates map.
  for (const slug of multilingualPosts) {
    const languages = languagesFor(`blog/${slug}`)
    for (const locale of routing.locales) {
      entries.push({
        url: localePath(locale, `blog/${slug}`),
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: { languages },
      })
    }
  }

  // English-only legacy posts.
  for (const post of enPosts) {
    entries.push({
      url: `${base}/blog/${post}`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.6,
    })
  }

  return entries
}
