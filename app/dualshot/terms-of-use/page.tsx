import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'DualShot Terms of Use',
  description: 'Terms of Use for the DualShot iOS application.',
}

export default function DualShotTermsOfUsePage() {
  return (
    <main className="pb-10">
      <article className="space-y-6 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            DualShot Terms of Use
          </h1>
          <p>Effective date: June 28, 2026</p>
        </div>

        <p>
          These Terms of Use govern your use of the DualShot mobile
          application. By using DualShot, you agree to these terms.
        </p>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            1. Use of the App
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              DualShot is provided for personal, lawful use to capture photos
              and videos with supported iOS devices.
            </li>
            <li>
              You are responsible for ensuring your content creation and sharing
              complies with applicable laws and third-party rights.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            2. Permissions and Device Access
          </h2>
          <p>
            DualShot requires camera, microphone, and photo library permissions
            to provide core functionality. If permissions are denied, some or
            all features may not work.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            3. User Content
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              You retain ownership of photos and videos you create using
              DualShot.
            </li>
            <li>
              You are solely responsible for the content you record, store, and
              share.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            4. Advertising
          </h2>
          <p>
            DualShot may display advertising provided by third parties such as
            Google AdMob. Your use of the app is subject to the privacy practices
            of those providers as described in our{' '}
            <Link className="underline" href="/dualshot/privacy-policy">
              Privacy Policy
            </Link>
            . A DualShot Pro subscription removes ads.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            5. Subscriptions, Free Trial, and Billing
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              DualShot offers an optional premium upgrade (&quot;DualShot
              Pro&quot;) as an auto-renewable subscription, available on monthly
              and yearly plans, and as a one-time lifetime purchase, sold through
              Apple&apos;s In-App Purchase.
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
            6. Prohibited Conduct
          </h2>
          <p>You agree not to use DualShot to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Violate laws, privacy rights, or intellectual property rights.</li>
            <li>Attempt to reverse engineer or misuse the app.</li>
            <li>Record or distribute unlawful or harmful content.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            7. Disclaimers
          </h2>
          <p>
            DualShot is provided &quot;as is&quot; and &quot;as available&quot; without warranties of
            any kind, to the fullest extent permitted by law. We do not
            guarantee uninterrupted operation or compatibility with every device
            model.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            8. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, DualShot and its developer
            will not be liable for indirect, incidental, special, consequential,
            or punitive damages resulting from your use of the app.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            9. Changes to Terms
          </h2>
          <p>
            We may revise these terms at any time. Updated terms will be posted
            on this page with a revised effective date.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            10. Contact
          </h2>
          <p>
            Questions about these Terms can be sent to:{' '}
            <a className="underline" href="mailto:infokoksoft@gmail.com">
              infokoksoft@gmail.com
            </a>
          </p>
        </section>

        <p className="pt-2">
          <Link className="underline" href="/dualshot/privacy-policy">
            Read DualShot Privacy Policy
          </Link>
        </p>
      </article>
    </main>
  )
}
