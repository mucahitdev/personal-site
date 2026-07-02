import type { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/lib/constants'

const base = WEBSITE_URL.replace(/\/$/, '')

const projects = ['foldermini', 'dualshot', 'stamper', 'tradelands']
const legal = ['privacy-policy', 'terms-of-use']
const posts = [
  'app-store-2025',
  'exploring-the-intersection-of-design-ai-and-design-engineering',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
  ]
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
  for (const post of posts) {
    entries.push({
      url: `${base}/blog/${post}`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.7,
    })
  }
  return entries
}
