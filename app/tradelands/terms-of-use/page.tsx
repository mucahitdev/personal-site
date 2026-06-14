import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'Tradelands Terms of Use',
  description: 'Terms of Use for the Tradelands iOS game.',
}

export default function TradelandsTermsOfUsePage() {
  return (
    <main className="pb-10">
      <article className="space-y-6 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Tradelands Terms of Use
          </h1>
          <p>Effective date: June 14, 2026</p>
        </div>

        <p>
          These Terms of Use govern your use of the Tradelands mobile game. By
          playing Tradelands, you agree to these terms.
        </p>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            1. Use of the Game
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Tradelands is provided for personal, lawful entertainment on
              supported iOS devices.
            </li>
            <li>
              You agree not to exploit, cheat, or otherwise interfere with the
              game or its leaderboards in a way that harms other players&apos;
              experience.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            2. Game Center and Leaderboards
          </h2>
          <p>
            Tradelands uses Apple Game Center for leaderboards. Signing in is
            optional; if you do, your survival score may be submitted to the
            weekly leaderboard. Your use of Game Center is also subject to
            Apple&apos;s terms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            3. Game Content and Progress
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              All game content, characters, and artwork are owned by the
              developer and provided for your personal use within the game.
            </li>
            <li>
              Your local progress is stored on your device and may be lost if
              you delete the app.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            4. Prohibited Conduct
          </h2>
          <p>You agree not to:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Violate laws or third-party rights while using the game.</li>
            <li>Attempt to reverse engineer, tamper with, or misuse the game.</li>
            <li>Manipulate scores or disrupt the leaderboard for other players.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            5. Disclaimers
          </h2>
          <p>
            Tradelands is provided &quot;as is&quot; and &quot;as available&quot;
            without warranties of any kind, to the fullest extent permitted by
            law. We do not guarantee uninterrupted operation or compatibility
            with every device model.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            6. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, Tradelands and its developer
            will not be liable for indirect, incidental, special, consequential,
            or punitive damages resulting from your use of the game.
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
          <Link className="underline" href="/tradelands/privacy-policy">
            Read Tradelands Privacy Policy
          </Link>
        </p>
      </article>
    </main>
  )
}
