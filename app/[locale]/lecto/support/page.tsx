import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lecto — Support',
  description: 'Frequently asked questions and contact details for Lecto.',
}

export default function LectoSupportPage() {
  return (
    <main className="pb-10">
      <article className="space-y-8 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <section className="space-y-2">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Support
          </h1>
          <p>Have a question or need help? Check the FAQ below or reach out to us directly.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Contact Us
          </h2>
          <p>
            For bug reports, feature requests, or any questions, email us at{' '}
            <a className="underline" href="mailto:infokoksoft@gmail.com">
              infokoksoft@gmail.com
            </a>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Frequently Asked Questions
          </h2>
          <div className="space-y-1">
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              How do I create a mosaic?
            </p>
            <p>Open Lecto, tap the start button, pick a target image, and choose which photos to use as tiles. Lecto handles the rest automatically with smart color matching.</p>
          </div>

          <div className="space-y-1">
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              Why does Lecto need access to my photo library?
            </p>
            <p>Lecto uses your photos as the tiny tiles that make up each mosaic. The more photos available, the better the color matching and final result. Your photos never leave your device.</p>
          </div>

          <div className="space-y-1">
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              How can I get better results?
            </p>
            <p>Use a large, diverse photo library with many different colors. You can also create custom photo groups with photos that have colors matching your target image.</p>
          </div>

          <div className="space-y-1">
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              What is Lecto Pro?
            </p>
            <p>Lecto Pro unlocks unlimited collage creation, high quality export (2048px), and experimental Lab features. You can subscribe monthly, annually, or get lifetime access with a one-time purchase.</p>
          </div>

          <div className="space-y-1">
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              Can I change the app language?
            </p>
            <p>Yes! Go to Settings in the app and select your preferred language. The app supports English and Turkish. A restart is required for the change to take effect.</p>
          </div>

          <div className="space-y-1">
            <p className="font-medium text-zinc-900 dark:text-zinc-100">
              Where are my saved mosaics stored?
            </p>
            <p>Saved mosaics are stored locally on your device in the app&apos;s documents folder. You can also save them directly to your photo library.</p>
          </div>
        </section>

        <section>
          <Link className="underline" href="/lecto">
            Back to Lecto
          </Link>
        </section>
      </article>
    </main>
  )
}
