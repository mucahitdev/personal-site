import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'FolderMini Terms of Use',
  description: 'Terms of Use for the FolderMini iOS application.',
}

export default function FolderMiniTermsOfUsePage() {
  return (
    <main className="pb-10">
      <article className="space-y-6 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            FolderMini Terms of Use
          </h1>
          <p>Effective date: June 27, 2026</p>
        </div>

        <p>
          These Terms of Use govern your use of the FolderMini mobile
          application. By using FolderMini, you agree to these terms.
        </p>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            1. Use of the App
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              FolderMini is provided for personal, lawful use to organize and
              launch apps from folders and widgets on supported iOS devices.
            </li>
            <li>
              You are responsible for using the app in compliance with applicable
              laws and the terms of the apps you launch through it.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            2. Widgets and Device Access
          </h2>
          <p>
            FolderMini stores your folder configuration on your device and uses
            it to render Home Screen and Lock Screen widgets. Some features
            depend on iOS behavior and may vary by device, iOS version, or
            system limitations outside our control.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            3. Advertising
          </h2>
          <p>
            FolderMini may display advertising provided by third parties such as
            Google AdMob. Your use of the app is subject to the privacy practices
            of those providers as described in our{' '}
            <Link className="underline" href="/foldermini/privacy-policy">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            4. Subscriptions, Free Trial, and Billing
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              FolderMini offers an optional premium upgrade (&quot;FolderMini
              Pro&quot;) as an auto-renewable subscription and as a one-time
              lifetime purchase, sold through Apple&apos;s In-App Purchase.
            </li>
            <li>
              Payment is charged to your Apple ID account at confirmation of
              purchase.
            </li>
            <li>
              The subscription automatically renews for the same period and price
              unless it is cancelled at least 24 hours before the end of the
              current period. Your account is charged for renewal within 24 hours
              before the period ends.
            </li>
            <li>
              If a free trial is offered, any unused portion is forfeited when you
              purchase a subscription that includes that trial.
            </li>
            <li>
              You can manage or cancel your subscription in your App Store account
              settings after purchase.
            </li>
            <li>
              The lifetime option is a one-time, non-renewing purchase that grants
              premium access and does not auto-renew.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            5. Prohibited Conduct
          </h2>
          <p>You agree not to use FolderMini to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Violate laws, privacy rights, or intellectual property rights.</li>
            <li>Attempt to reverse engineer or misuse the app.</li>
            <li>Interfere with the normal operation of the app or your device.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            6. Disclaimers
          </h2>
          <p>
            FolderMini is provided &quot;as is&quot; and &quot;as available&quot; without
            warranties of any kind, to the fullest extent permitted by law. We do
            not guarantee uninterrupted operation or compatibility with every
            device model or iOS version.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            7. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, FolderMini and its developer
            will not be liable for indirect, incidental, special, consequential,
            or punitive damages resulting from your use of the app.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            8. Changes to Terms
          </h2>
          <p>
            We may revise these terms at any time. Updated terms will be posted
            on this page with a revised effective date.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            9. Contact
          </h2>
          <p>
            Questions about these Terms can be sent to:{' '}
            <a className="underline" href="mailto:infokoksoft@gmail.com">
              infokoksoft@gmail.com
            </a>
          </p>
        </section>

        <p className="pt-2">
          <Link className="underline" href="/foldermini/privacy-policy">
            Read FolderMini Privacy Policy
          </Link>
        </p>
      </article>
    </main>
  )
}
