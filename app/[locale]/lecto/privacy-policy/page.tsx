import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lecto — Privacy Policy',
  description: 'How Lecto handles your data.',
}

export default function LectoPrivacyPage() {
  return (
    <main className="pb-10">
      <article className="space-y-8 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <section className="space-y-2">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Privacy Policy
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Last updated: March 23, 2026
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Overview
          </h2>
          <p>Lecto (&quot;the App&quot;) is a photo mosaic and collage application developed by Koksoft (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). We are committed to protecting your privacy. This policy explains how we handle your data.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Data Collection &amp; Analytics
          </h2>
          <p>Lecto uses Google Firebase to collect anonymous usage data and improve the app experience. This includes: crash reports and performance data (Firebase Crashlytics), anonymous usage events such as collage creation and feature usage (Firebase Analytics), and device information like device model and OS version. This data is anonymous and cannot be used to identify you personally. Your photos and personal content are never collected or uploaded.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Photo Library Access
          </h2>
          <p>Lecto requests access to your photo library to load photos that are used as tiles in your mosaics. Your photos are processed locally on your device and are never uploaded to any server. Photo access is managed through Apple&apos;s Photos framework and you can revoke access at any time through your device&apos;s Settings.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Push Notifications
          </h2>
          <p>Lecto uses Firebase Cloud Messaging to send push notifications. If you opt in, a device token is generated and stored by Firebase to deliver notifications. You can disable notifications at any time through your device&apos;s Settings. No personal information is collected through this service.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Data Storage
          </h2>
          <p>All app content (photos, collages, groups, preferences) is stored locally on your device. Anonymous analytics and crash data are processed by Google Firebase on their servers. We do not maintain our own servers or databases that store your personal data.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            In-App Purchases
          </h2>
          <p>Lecto offers optional in-app purchases processed through Apple&apos;s App Store and managed by RevenueCat. Purchase status and anonymous user identifiers are stored by RevenueCat to manage your subscription. We do not have access to your payment information. All transactions are handled by Apple according to their privacy policy.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Third-Party Services
          </h2>
          <p>Lecto uses the following third-party services: Google Firebase (Analytics, Crashlytics, Cloud Messaging, Remote Config) and RevenueCat (subscription management). Each service has its own privacy policy. We encourage you to review them.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Children&apos;s Privacy
          </h2>
          <p>Lecto is not directed at children under 13. We do not knowingly collect data from children.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Changes to This Policy
          </h2>
          <p>We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated revision date.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Contact Us
          </h2>
          <p>If you have any questions about this privacy policy, please contact us at</p>
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
