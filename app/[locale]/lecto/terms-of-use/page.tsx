import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lecto — Terms of Use',
  description: 'Terms and conditions for using Lecto.',
}

export default function LectoTermsPage() {
  return (
    <main className="pb-10">
      <article className="space-y-8 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <section className="space-y-2">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Terms of Use
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Last updated: March 19, 2026
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Acceptance of Terms
          </h2>
          <p>By downloading, installing, or using Lecto (&quot;the App&quot;), you agree to be bound by these Terms of Use. If you do not agree to these terms, do not use the App.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Description of Service
          </h2>
          <p>Lecto is a photo mosaic and collage application that allows you to create mosaic images using photos from your device&apos;s photo library. The App processes all data locally on your device.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            User Content
          </h2>
          <p>You retain all rights to the photos and images you use within the App. Lecto does not claim any ownership over your content. You are responsible for ensuring you have the right to use any images you select.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            In-App Purchases &amp; Subscriptions
          </h2>
          <p>Lecto offers auto-renewable subscriptions (monthly and annual) and a lifetime purchase option that unlock additional features such as unlimited collage creation and experimental Lab features. Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period. Payment is charged to your Apple ID account at confirmation of purchase. You can manage or cancel your subscriptions in your device&apos;s Settings &gt; Apple ID &gt; Subscriptions. All purchases are processed by Apple and are subject to Apple&apos;s terms and conditions. Refund requests should be directed to Apple.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Intellectual Property
          </h2>
          <p>The App, including its design, code, and branding, is owned by Koksoft and protected by intellectual property laws. You may not copy, modify, distribute, or reverse-engineer the App.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Disclaimer of Warranties
          </h2>
          <p>The App is provided &quot;as is&quot; without warranties of any kind, either express or implied. We do not guarantee that the App will be error-free or uninterrupted.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Limitation of Liability
          </h2>
          <p>To the maximum extent permitted by law, Koksoft shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the App.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Changes to Terms
          </h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the App after changes constitutes acceptance of the new terms.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Contact
          </h2>
          <p>For questions about these terms, contact us at</p>
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
