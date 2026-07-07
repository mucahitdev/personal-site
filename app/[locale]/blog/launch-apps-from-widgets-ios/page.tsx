import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { blogPath, blogLanguages, ogLocale } from '../_shared'

const SLUG = 'launch-apps-from-widgets-ios'

const loaders: Record<string, () => Promise<typeof import('./content/en.mdx')>> =
  {
    en: () => import('./content/en.mdx'),
    tr: () => import('./content/tr.mdx'),
    es: () => import('./content/es.mdx'),
    pt: () => import('./content/pt.mdx'),
    de: () => import('./content/de.mdx'),
    fr: () => import('./content/fr.mdx'),
    it: () => import('./content/it.mdx'),
    nl: () => import('./content/nl.mdx'),
    ru: () => import('./content/ru.mdx'),
    pl: () => import('./content/pl.mdx'),
    ja: () => import('./content/ja.mdx'),
    ko: () => import('./content/ko.mdx'),
    zh: () => import('./content/zh.mdx'),
    ar: () => import('./content/ar.mdx'),
    hi: () => import('./content/hi.mdx'),
    id: () => import('./content/id.mdx'),
    vi: () => import('./content/vi.mdx'),
  }

function load(locale: string) {
  return (loaders[locale] ?? loaders.en)()
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const { meta } = await load(locale)
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: blogPath(locale, SLUG),
      languages: blogLanguages(SLUG),
    },
    openGraph: {
      type: 'article',
      locale: ogLocale(locale),
      title: meta.ogTitle ?? meta.title,
      description: meta.ogDescription ?? meta.description,
      url: blogPath(locale, SLUG),
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.ogTitle ?? meta.title,
      description: meta.ogDescription ?? meta.description,
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const { default: Content } = await load(locale)
  return <Content />
}
