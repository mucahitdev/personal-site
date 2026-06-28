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
          <p>Effective date: June 28, 2026</p>
        </div>

        <p>
          DualShot is designed to record and capture content from multiple
          device cameras at the same time. We respect your privacy and keep your
          captured media on your device. To run the app, show advertising, and
          manage optional subscriptions, DualShot uses a small number of
          third-party services described below, which may process limited
          technical data and identifiers.
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
            DualShot uses Google Firebase (Analytics, Crashlytics, Performance,
            and Remote Config) to understand aggregate, anonymous usage, diagnose
            crashes, and improve stability. These tools may process limited
            device and diagnostic information in accordance with{' '}
            <a
              className="underline"
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s Privacy Policy
            </a>
            . They are not used to access your photos, videos, or microphone.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Advertising
          </h2>
          <p>
            DualShot may display ads through Google AdMob. To serve and measure
            ads, AdMob may process limited device information and identifiers,
            such as the advertising identifier, in accordance with{' '}
            <a
              className="underline"
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s Privacy Policy
            </a>
            . Where required, DualShot asks for your permission before using
            tracking identifiers, and you can change this at any time in iOS
            Settings. A DualShot Pro subscription removes ads.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Subscriptions and Purchases
          </h2>
          <p>
            DualShot offers an optional premium upgrade (&quot;DualShot
            Pro&quot;) as an auto-renewable subscription and as a one-time
            lifetime purchase. Payments are processed by Apple through your App
            Store account; we never receive or store your payment card details.
          </p>
          <p>
            To validate purchases, restore them across your devices, and manage
            your premium access, DualShot uses{' '}
            <a
              className="underline"
              href="https://adapty.io/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adapty
            </a>
            , a third-party subscription-management service. Adapty processes
            purchase and transaction information and an app-generated identifier
            for this purpose, in accordance with its own privacy policy. We do
            not use this information to identify you personally.
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
