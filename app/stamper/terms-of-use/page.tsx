import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'Stamper Terms of Use',
  description: 'Terms of Use for the Stamper iOS application.',
}

export default function StamperTermsOfUsePage() {
  return (
    <main className="pb-10">
      <article className="space-y-6 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Stamper Terms of Use
          </h1>
          <p>Effective date: June 24, 2026</p>
        </div>

        <p>
          These Terms of Use govern your use of the Stamper mobile application.
          By using Stamper, you agree to these terms.
        </p>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            1. Use of the App
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Stamper is provided for personal, lawful use to create stamps from
              your photos and export sticker packs.
            </li>
            <li>
              You are responsible for ensuring your content and sharing comply
              with applicable laws and third-party rights.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            2. Permissions and Device Access
          </h2>
          <p>
            Stamper requires camera and photo library permissions to create
            stamps, and optional location access to suggest a place name. If
            permissions are denied, some features may not work.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            3. User Content
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              You retain ownership of the photos and stamps you create using
              Stamper.
            </li>
            <li>
              You are solely responsible for the content you create, store, and
              share, including sticker packs you export to other apps.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            4. Prohibited Conduct
          </h2>
          <p>You agree not to use Stamper to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Violate laws, privacy rights, or intellectual property rights.</li>
            <li>Attempt to reverse engineer or misuse the app.</li>
            <li>Create or distribute unlawful or harmful content.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            5. Disclaimers
          </h2>
          <p>
            Stamper is provided &quot;as is&quot; and &quot;as available&quot;
            without warranties of any kind, to the fullest extent permitted by
            law. We do not guarantee uninterrupted operation or compatibility
            with every device model or iOS version.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            6. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, Stamper and its developer
            will not be liable for indirect, incidental, special, consequential,
            or punitive damages resulting from your use of the app.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            7. Changes to Terms
          </h2>
          <p>
            We may revise these terms at any time. Updated terms will be posted
            on this page with a revised effective date.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            8. Contact
          </h2>
          <p>
            Questions about these Terms can be sent to:{' '}
            <a className="underline" href="mailto:infokoksoft@gmail.com">
              infokoksoft@gmail.com
            </a>
          </p>
        </section>

        <p className="pt-2">
          <Link className="underline" href="/stamper/privacy-policy">
            Read Stamper Privacy Policy
          </Link>
        </p>
      </article>
    </main>
  )
}
