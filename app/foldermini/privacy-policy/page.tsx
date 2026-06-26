import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FolderMini Privacy Policy',
  description: 'Privacy Policy for the FolderMini iOS application.',
}

export default function FolderMiniPrivacyPolicyPage() {
  return (
    <main className="pb-10">
      <article className="space-y-6 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            FolderMini Privacy Policy
          </h1>
          <p>Effective date: June 27, 2026</p>
        </div>

        <p>
          FolderMini helps you organize your installed apps into folders and
          launch them from Home Screen and Lock Screen widgets. We respect your
          privacy and keep your data on your device whenever possible. FolderMini
          does not require account creation and does not run its own servers to
          collect your data.
        </p>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Information We Access
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Your folder layout and the apps you add to folders are stored
              locally on your device so your widgets can display and launch them.
            </li>
            <li>
              App icon artwork may be fetched from the public iTunes Search
              service to render icons; results are cached on your device.
            </li>
            <li>
              FolderMini does not read your messages, contacts, photos, or
              location.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            How Your Data Is Used
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Your folder configuration is processed on-device to render widgets
              and launch your apps.
            </li>
            <li>
              FolderMini does not upload your folder data or app list to a
              FolderMini server.
            </li>
            <li>We do not sell your personal data.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Advertising
          </h2>
          <p>
            FolderMini may display ads through Google AdMob. To serve and measure
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
            . Where required, FolderMini asks for your permission before using
            tracking identifiers, and you can change this at any time in iOS
            Settings.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Subscriptions and Purchases
          </h2>
          <p>
            FolderMini offers an optional premium upgrade (&quot;FolderMini
            Pro&quot;) as an auto-renewable subscription and as a one-time
            lifetime purchase. Payments are processed by Apple through your App
            Store account; we never receive or store your payment card details.
          </p>
          <p>
            To validate purchases, restore them across your devices, and manage
            your premium access, FolderMini uses{' '}
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
            Your folder configuration and cached icons remain on your device
            until you delete folders or remove the app. Uninstalling FolderMini
            removes its locally stored data.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Children&apos;s Privacy
          </h2>
          <p>
            FolderMini is not directed to children under 13, and we do not
            knowingly collect personal information from children.
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
          <Link className="underline" href="/foldermini/terms-of-use">
            Read FolderMini Terms of Use
          </Link>
        </p>
      </article>
    </main>
  )
}
