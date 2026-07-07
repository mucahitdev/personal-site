import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tradelands Privacy Policy',
  description: 'Privacy Policy for the Tradelands iOS game.',
}

export default function TradelandsPrivacyPolicyPage() {
  return (
    <main className="pb-10">
      <article className="space-y-6 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Tradelands Privacy Policy
          </h1>
          <p>Effective date: June 14, 2026</p>
        </div>

        <p>
          Tradelands is a single-player strategy game. We respect your privacy
          and keep your game data on your device whenever possible. Tradelands
          does not require account creation and does not run its own servers to
          collect your data.
        </p>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Information We Access
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              On-device game data: your best run, games played, and the
              characters you have met are stored locally on your device to keep
              your progress.
            </li>
            <li>
              Game Center: if you sign in, Apple Game Center is used to submit
              your survival score to the weekly leaderboard. This is handled by
              Apple and governed by Apple&apos;s privacy policy.
            </li>
            <li>
              Motion data: device tilt is read on-device only to animate the
              liquid meters. It is never stored or transmitted.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            How Your Data Is Used
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Your progress is processed locally on your device to save and
              restore your best run and unlocked characters.
            </li>
            <li>
              Leaderboard scores you choose to submit are sent to Apple Game
              Center, not to a Tradelands server.
            </li>
            <li>
              We do not sell your personal data and do not use your data for
              advertising.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Third-Party Services
          </h2>
          <p>
            Tradelands uses Apple Game Center for leaderboards. Aside from
            Apple&apos;s platform services, the game does not include
            third-party analytics, ad SDKs, or social tracking SDKs.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Data Retention
          </h2>
          <p>
            Your game data is stored on your device and is removed when you
            delete the app. Game Center leaderboard data is retained by Apple
            according to their policies and your Game Center settings.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Children&apos;s Privacy
          </h2>
          <p>
            Tradelands is not directed to children under 13, and we do not
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
          <Link className="underline" href="/tradelands/terms-of-use">
            Read Tradelands Terms of Use
          </Link>
        </p>
      </article>
    </main>
  )
}
