import type { Metadata } from 'next'
import Link from 'next/link'

const APP_STORE_URL = 'https://apps.apple.com/app/id6782827870'
const PAGE_URL = 'https://mucahitk.com/foldermini'

export const metadata: Metadata = {
  title: {
    absolute: 'FolderMini — App Folder Launcher & Home Screen Widgets',
  },
  description:
    'FolderMini organizes your iPhone apps into colorful folders you launch straight from Home Screen and Lock Screen widgets — real app icons, one-tap launch, multiple sizes. Free on the App Store.',
  keywords: [
    'FolderMini',
    'app folder launcher',
    'home screen widgets',
    'lock screen widgets',
    'iphone app organizer',
    'folder widget',
    'app launcher ios',
    'icon organizer',
  ],
  alternates: { canonical: '/foldermini' },
  itunes: { appId: '6782827870' },
  openGraph: {
    type: 'website',
    title: 'FolderMini — App Folder Launcher for iPhone',
    description:
      'Organize your apps into colorful folders and launch them from Home Screen and Lock Screen widgets. Free on the App Store.',
    url: '/foldermini',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FolderMini — App Folder Launcher for iPhone',
    description:
      'Organize your apps into colorful folders and launch them from Home Screen and Lock Screen widgets.',
  },
}

const FAQS = [
  {
    q: 'What is FolderMini?',
    a: 'FolderMini is an iOS app that organizes your installed apps into colorful folders you can place on your Home Screen and Lock Screen as widgets, then launch any app with a single tap.',
  },
  {
    q: 'Is FolderMini free?',
    a: 'Yes, FolderMini is free to download on the App Store.',
  },
  {
    q: 'How do FolderMini widgets work?',
    a: 'You build a folder of apps, add a FolderMini widget to your Home Screen or Lock Screen, and each tile shows the real app icon. Tapping a tile opens that app directly.',
  },
  {
    q: 'What widget sizes does FolderMini support?',
    a: 'FolderMini offers small, medium, and large Home Screen grids, plus Lock Screen accessory widgets for your most-used apps.',
  },
  {
    q: 'Does FolderMini work on the Lock Screen?',
    a: 'Yes. You can add Lock Screen accessory widgets so your favorite apps are one tap away.',
  },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'FolderMini',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'iOS',
    url: PAGE_URL,
    downloadUrl: APP_STORE_URL,
    installUrl: APP_STORE_URL,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    featureList: [
      'Organize apps into colorful custom folders',
      'Home Screen and Lock Screen widgets',
      'One-tap app launch from widgets',
      'Real, pixel-perfect app icons',
      'Small, medium, and large widget sizes',
    ],
    author: {
      '@type': 'Person',
      name: 'Mücahit Kökdemir',
      url: 'https://mucahitk.com',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
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
        name: 'Home',
        item: 'https://mucahitk.com',
      },
      { '@type': 'ListItem', position: 2, name: 'FolderMini', item: PAGE_URL },
    ],
  },
]

export default function FolderMiniPage() {
  return (
    <main className="pb-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="space-y-8 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <section className="space-y-3">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            FolderMini
          </h1>
          <p>
            FolderMini is an iOS app that lets you organize your installed apps
            into colorful folders and place them on your Home Screen and Lock
            Screen as widgets. Each tile shows the real app icon and launches
            the app directly with a single tap.
          </p>
          <p>
            Build the layout you want — group your apps by mood, project, or
            routine — and reach everything you need straight from a widget,
            without digging through pages of icons.
          </p>
          <div className="pt-1">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on the App Store
            </a>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Key Features
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Organize installed apps into colorful, custom folders</li>
            <li>Home Screen and Lock Screen widgets for every folder</li>
            <li>Tap a tile to launch the app instantly</li>
            <li>Real, pixel-perfect app icons</li>
            <li>Multiple widget sizes — small, medium, and large grids</li>
            <li>Lock Screen accessory widgets for your most-used apps</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((faq) => (
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
            Support
          </h2>
          <p>
            For support, feature requests, or bug reports, contact:{' '}
            <a className="underline" href="mailto:infokoksoft@gmail.com">
              infokoksoft@gmail.com
            </a>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Legal
          </h2>
          <div className="flex flex-col gap-1">
            <Link className="underline" href="/foldermini/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="underline" href="/foldermini/terms-of-use">
              Terms of Use
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
