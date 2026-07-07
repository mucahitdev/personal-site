import type { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/lib/constants'

const base = WEBSITE_URL.replace(/\/$/, '')

// App pages that only exist in English (not yet translated).
const projects = ['dualshot', 'stamper', 'tradelands']
const legal = ['privacy-policy', 'terms-of-use']

// English blog posts (unprefixed slugs).
const enPosts = [
  'organize-iphone-home-screen-2026',
  'launch-apps-from-widgets-ios',
  'app-store-2025',
  'exploring-the-intersection-of-design-ai-and-design-engineering',
]

// Turkish posts paired with their English counterpart for hreflang.
// Both live under the default (unprefixed) locale — the slug carries the
// language — so each is listed with its cross-language alternate.
const postPairs: { tr: string; en: string }[] = [
  { tr: 'iphone-ana-ekran-duzenleme-2026', en: 'organize-iphone-home-screen-2026' },
  { tr: 'iphone-widgettan-uygulama-acma', en: 'launch-apps-from-widgets-ios' },
]

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
    // FolderMini is translated: English at /foldermini, Turkish at /tr/foldermini.
    {
      url: `${base}/foldermini`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${base}/foldermini`,
          tr: `${base}/tr/foldermini`,
        },
      },
    },
    {
      url: `${base}/tr/foldermini`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${base}/foldermini`,
          tr: `${base}/tr/foldermini`,
        },
      },
    },
  ]

  for (const l of legal) {
    entries.push({
      url: `${base}/foldermini/${l}`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    })
  }

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

  for (const post of enPosts) {
    entries.push({
      url: `${base}/blog/${post}`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.7,
    })
  }

  for (const { tr, en } of postPairs) {
    entries.push({
      url: `${base}/blog/${tr}`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${base}/blog/${en}`,
          tr: `${base}/blog/${tr}`,
        },
      },
    })
  }

  return entries
}
