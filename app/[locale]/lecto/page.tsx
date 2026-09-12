import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lecto',
  description:
    'Lecto turns any photo into a mosaic built from your own photo library — entirely on device.',
}

export default function LectoPage() {
  return (
    <main className="pb-10">
      <article className="space-y-8 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <section className="space-y-3">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Lecto
          </h1>
          <p>Lecto transforms any image into a stunning mosaic built entirely from your photo library. Every tiny tile is a real memory.</p>
          <p>
            <a className="underline" href="https://apps.apple.com/app/id6760270162">
              Download for iOS
            </a>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Everything you need to create photo mosaics
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                Photo Mosaic Magic
              </span>{' '}
              — Pick any target image and Lecto rebuilds it using thousands of tiny photos from your library. Every tile is a real photo.
            </li>
            <li>
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                Smart Color Matching
              </span>{' '}
              — Advanced algorithm analyzes color distance, neighbor similarity, and reuse penalties to create the most accurate mosaic possible.
            </li>
            <li>
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                Photo Groups
              </span>{' '}
              — Organize your photos into custom groups. Choose exactly which photos become the tiles of your mosaic.
            </li>
            <li>
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                High Quality Export
              </span>{' '}
              — Save your mosaics in standard or high quality (up to 2048px). Share your creations with the world.
            </li>
            <li>
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                Crop &amp; Adjust
              </span>{' '}
              — Crop your target image before building. Get the perfect composition for your mosaic.
            </li>
            <li>
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                Privacy First
              </span>{' '}
              — Everything happens on your device. Your photos never leave your phone. No accounts, no cloud uploads.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            How it works
          </h2>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                Pick a target image
              </span>{' '}
              — Choose any photo you want to recreate as a mosaic. Crop it if needed.
            </li>
            <li>
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                Organize your tiles
              </span>{' '}
              — Use photos from your library or custom groups. The more photos, the better the result.
            </li>
            <li>
              <span className="font-medium text-zinc-900 dark:text-zinc-100">
                Get your mosaic
              </span>{' '}
              — Lecto builds your mosaic with smart color matching. Save or share your creation.
            </li>
          </ol>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Support
          </h2>
          <p>
            For bug reports, feature requests, or any questions, email us at{' '}
            <a className="underline" href="mailto:infokoksoft@gmail.com">
              infokoksoft@gmail.com
            </a>
          </p>
          <Link className="underline" href="/lecto/support">
            FAQ
          </Link>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Legal
          </h2>
          <div className="flex flex-col gap-1">
            <Link className="underline" href="/lecto/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="underline" href="/lecto/terms-of-use">
              Terms of Use
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
