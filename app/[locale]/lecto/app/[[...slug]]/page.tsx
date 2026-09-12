import type { Metadata } from 'next'
import Link from 'next/link'

const APP_STORE_URL = 'https://apps.apple.com/app/id6760270162'

// Landing pages behind the universal links declared in
// /.well-known/apple-app-site-association. With Lecto installed iOS opens the
// app instead of the browser; these pages are what everyone else sees, so no
// /lecto/app/* address is ever allowed to dead-end. The deep links live under
// their own segment so the sibling /lecto pages — privacy policy in
// particular — are never swallowed by the app.
const TARGETS: Record<string, { title: string; lead: string; body: string[] }> =
  {
    'mosaic-video': {
      title: 'Watch your mosaic come together',
      lead: 'Lecto can export a short clip of your photos flying into place, ready to share.',
      body: [
        'Build a mosaic from any photo in your library, then open it again and export the video. Each tile is one of your own photos landing in its spot until the whole picture appears.',
        'Everything is rendered on your device — your photos are never uploaded anywhere.',
      ],
    },
  }

const FALLBACK = {
  title: 'Lecto',
  lead: 'Turn your photos into mosaic collages built entirely from your own library.',
  body: [
    'Pick any photo and Lecto rebuilds it out of thousands of tiny tiles taken from your photo library. Every tile is a real memory.',
    'Everything runs on your device — your photos are never uploaded anywhere.',
  ],
}

export const metadata: Metadata = {
  title: 'Lecto',
  description:
    'Open this page on an iPhone with Lecto installed and it opens the app.',
}

export default async function LectoAppLinkPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const { slug } = await params
  const content = TARGETS[slug?.[0] ?? ''] ?? FALLBACK

  return (
    <main className="pb-10">
      <article className="space-y-8 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <section className="space-y-3">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            {content.title}
          </h1>
          <p>{content.lead}</p>
          {content.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className="space-y-2">
          <a
            className="inline-block rounded-full bg-zinc-900 px-5 py-2.5 font-medium text-white dark:bg-zinc-100 dark:text-zinc-900"
            href={APP_STORE_URL}
          >
            Get Lecto on the App Store
          </a>
          <p className="text-zinc-500 dark:text-zinc-400">
            Already have it? Opening this link on your iPhone takes you
            straight into the app.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            More about Lecto
          </h2>
          <div className="flex flex-col gap-1">
            <Link className="underline" href="/lecto">
              Overview
            </Link>
            <Link className="underline" href="/lecto/support">
              Support &amp; FAQ
            </Link>
            <Link className="underline" href="/lecto/privacy-policy">
              Privacy Policy
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
