import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FolderMini',
  description: 'FolderMini app overview, support, and legal links.',
}

export default function FolderMiniPage() {
  return (
    <main className="pb-10">
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
