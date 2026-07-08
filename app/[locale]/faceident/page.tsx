import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { setRequestLocale } from 'next-intl/server'
import { FACEIDENT_CONTENT } from './content'

const EN_URL = 'https://mucahitk.com/faceident'
const TR_URL = 'https://mucahitk.com/tr/faceident'
const SUPPORT_EMAIL = 'kokdemir20@gmail.com'

function pickLocale(locale: string): 'en' | 'tr' {
  return locale === 'tr' ? 'tr' : 'en'
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const c = FACEIDENT_CONTENT[pickLocale(locale)]
  const canonical = locale === 'tr' ? '/tr/faceident' : '/faceident'

  return {
    title: { absolute: c.metaTitle },
    description: c.metaDescription,
    keywords: c.keywords,
    alternates: {
      canonical,
      languages: {
        en: '/faceident',
        tr: '/tr/faceident',
        'x-default': '/faceident',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      title: c.ogTitle,
      description: c.ogDescription,
      url: canonical,
    },
    twitter: {
      card: 'summary_large_image',
      title: c.ogTitle,
      description: c.ogDescription,
    },
  }
}

export default async function FaceIdentPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const key = pickLocale(locale)
  const c = FACEIDENT_CONTENT[key]
  const pageUrl = key === 'tr' ? TR_URL : EN_URL

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      inLanguage: key,
      name: 'FaceIdent',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'iOS',
      url: pageUrl,
      featureList: c.jsonLdFeatures,
      author: {
        '@type': 'Person',
        name: 'Mücahit Kökdemir',
        url: 'https://mucahitk.com',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: key,
      mainEntity: c.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: c.breadcrumbHome,
          item: 'https://mucahitk.com',
        },
        { '@type': 'ListItem', position: 2, name: 'FaceIdent', item: pageUrl },
      ],
    },
  ]

  return (
    <main className="pb-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="space-y-8 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <section className="space-y-3">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            FaceIdent
          </h1>
          {c.intro.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <div className="pt-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              {c.comingSoon}
            </span>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            {c.featuresHeading}
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            {c.features.map((f) => (
              <li key={f.slice(0, 24)}>{f}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            {c.privacyHeading}
          </h2>
          <p>{c.privacy}</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            {c.audienceHeading}
          </h2>
          <p>{c.audienceIntro}</p>
          <ul className="list-disc space-y-1 pl-5">
            {c.audience.map((a) => (
              <li key={a.slice(0, 24)}>{a}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            {c.faqHeading}
          </h2>
          <div className="space-y-4">
            {c.faqs.map((faq) => (
              <div key={faq.q} className="space-y-1">
                <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                  {faq.q}
                </h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            {c.supportHeading}
          </h2>
          <p>
            {c.supportPrefix}{' '}
            <a className="underline" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            {c.legalHeading}
          </h2>
          <div className="flex flex-col gap-1">
            <Link className="underline" href="/faceident/privacy-policy">
              {c.privacyLabel}
            </Link>
            <Link className="underline" href="/faceident/terms-of-use">
              {c.termsLabel}
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
