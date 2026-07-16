import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Verso',
  description: 'Verso app overview, support, and legal links.',
}

export default function VersoPage() {
  return (
    <main className="pb-10">
      <article className="space-y-8 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <section className="space-y-3">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Verso
          </h1>
          <p>
            Verso is an iOS camera app that lets you capture with two cameras
            at the same time. You can shoot photos or videos, reposition PiP,
            and save your results directly to your Photo Library.
          </p>
          <p>
            Built for fast content creation, Verso focuses on an easy
            dual-camera workflow with quality and frame rate controls.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Key Features
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Simultaneous capture from multiple rear cameras</li>
            <li>Photo and video modes</li>
            <li>Draggable picture-in-picture preview</li>
            <li>4K/1080p and FPS settings</li>
            <li>Direct save to your Photo Library</li>
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
            <Link className="underline" href="/verso/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="underline" href="/verso/terms-of-use">
              Terms of Use
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
