import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DualShot Privacy Policy',
  description: 'Privacy Policy for the DualShot iOS application.',
}

export default function DualShotPrivacyPolicyPage() {
  return (
    <main className="pb-10">
      <article className="space-y-6 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            DualShot Privacy Policy
          </h1>
          <p>Effective date: April 14, 2026</p>
        </div>

        <p>
          DualShot is designed to record and capture content from multiple
          device cameras at the same time. We respect your privacy and keep data
          processing on-device whenever possible.
        </p>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Information We Access
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Camera access: required to capture photos and videos inside the
              app.
            </li>
            <li>
              Microphone access: required when recording videos with audio.
            </li>
            <li>
              Photo Library access (Add Only): required to save captured photos
              and videos to your library.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            How Your Data Is Used
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Captured media is processed locally on your device for recording,
              formatting, and saving.
            </li>
            <li>
              DualShot does not require account creation and does not upload
              your media to a DualShot server.
            </li>
            <li>
              We do not sell your personal data and do not use your media for
              advertising.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Third-Party Services
          </h2>
          <p>
            Based on the current app implementation, DualShot does not include
            third-party analytics, ad SDKs, or social tracking SDKs.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Data Retention
          </h2>
          <p>
            Media you create is stored in your own Photo Library according to
            your device settings. Temporary processing files used during
            recording are removed by the app after save operations complete.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Children&apos;s Privacy
          </h2>
          <p>
            DualShot is not directed to children under 13, and we do not
            knowingly collect personal information from children.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Updates will
            be posted on this page with a revised effective date.
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
          <Link className="underline" href="/dualshot/terms-of-use">
            Read DualShot Terms of Use
          </Link>
        </p>
      </article>
    </main>
  )
}
