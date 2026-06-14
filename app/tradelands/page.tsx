import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tradelands',
  description: 'Tradelands game overview, support, and legal links.',
}

export default function TradelandsPage() {
  return (
    <main className="pb-10">
      <article className="space-y-8 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <section className="space-y-3">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Tradelands
          </h1>
          <p>
            Tradelands is an iOS strategy game where you run a company one swipe
            at a time. Each card brings a character with a decision — swipe left
            or right and live with the consequences across four meters: Cash,
            Team, Users, and Tech.
          </p>
          <p>
            Keep every meter in balance — let any of them run empty or
            overflow and your run ends. The goal is simple: survive as many days
            as you can and climb the weekly leaderboard.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Key Features
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Swipe-based decision gameplay with branching story chains</li>
            <li>Four balancing meters — Cash, Team, Users, and Tech</li>
            <li>Weekly Game Center leaderboard for days survived</li>
            <li>A growing cast of characters to meet and collect</li>
            <li>Tilt-reactive liquid meters and tactile haptics</li>
            <li>English and Turkish language support</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Support
          </h2>
          <p>
            For support, feature requests, or bug reports, contact:{' '}
            <a className="underline" href="mailto:infokoksoft@gmail.com">
              infokoksoft@gmail.com
            </a>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Legal
          </h2>
          <div className="flex flex-col gap-1">
            <Link className="underline" href="/tradelands/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="underline" href="/tradelands/terms-of-use">
              Terms of Use
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
