import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Stamper Privacy Policy',
  description: 'Privacy Policy for the Stamper iOS application.',
}

export default function StamperPrivacyPolicyPage() {
  return (
    <main className="pb-10">
      <article className="space-y-6 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Stamper Privacy Policy
          </h1>
          <p>Effective date: June 24, 2026</p>
        </div>

        <p>
          Stamper turns your photos into stamps on your device. We respect your
          privacy: Stamper does not require an account, does not run its own
          servers, and keeps your photos and stamps on your device.
        </p>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Information We Access
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Camera access: required to capture a photo and turn it into a
              stamp.
            </li>
            <li>
              Photo Library access: required when you import an existing photo to
              make a stamp.
            </li>
            <li>
              Location access (When In Use, optional): used only to suggest a
              place name you can add to a stamp. You can decline it and still use
              the app.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            How Your Data Is Used
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Your photos are processed locally on your device to create stamps;
              they are not uploaded to a Stamper server.
            </li>
            <li>
              Your stamps and collections are stored on your device.
            </li>
            <li>
              We do not sell your personal data, show ads, or use third-party
              analytics or tracking SDKs.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Sharing to WhatsApp
          </h2>
          <p>
            When you export a collection as a WhatsApp sticker pack, the stamp
            images you choose are handed to WhatsApp at your request. Their use
            in WhatsApp is governed by WhatsApp&apos;s own privacy policy.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Data Retention
          </h2>
          <p>
            Stamps and collections remain on your device until you delete them or
            remove the app. Uninstalling Stamper removes its locally stored data.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Children&apos;s Privacy
          </h2>
          <p>
            Stamper is not directed to children under 13, and we do not knowingly
            collect personal information from children.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Updates will be
            posted on this page with a revised effective date.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Contact
          </h2>
          <p>
            If you have questions about this Privacy Policy, contact:{' '}
            <a className="underline" href="mailto:infokoksoft@gmail.com">
              infokoksoft@gmail.com
            </a>
          </p>
        </section>

        <p className="pt-2">
          <Link className="underline" href="/stamper/terms-of-use">
            Read Stamper Terms of Use
          </Link>
        </p>
      </article>
    </main>
  )
}
