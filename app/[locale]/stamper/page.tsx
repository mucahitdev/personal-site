import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Stamper',
  description: 'Stamper app overview, support, and legal links.',
}

export default function StamperPage() {
  return (
    <main className="pb-10">
      <article className="space-y-8 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <section className="space-y-3">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Stamper
          </h1>
          <p>
            Stamper turns your photos into nostalgic, perforated vintage stamps.
            Snap a shot or pick one from your library, and Stamper cuts it into a
            real stamp that you press into your collection with a satisfying
            stamp sound.
          </p>
          <p>
            Organize your stamps into collections and export any collection as a
            WhatsApp sticker pack to use in your chats.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Key Features
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Turn camera shots or library photos into vintage stamps</li>
            <li>Satisfying stamp sound effects (ink press, paper tear, and more)</li>
            <li>Optional location tag to remember where a memory happened</li>
            <li>Organize, name, and search stamps in collections</li>
            <li>Export a collection as a WhatsApp sticker pack</li>
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
            <Link className="underline" href="/stamper/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="underline" href="/stamper/terms-of-use">
              Terms of Use
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
