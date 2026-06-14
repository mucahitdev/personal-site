'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Footer } from './footer'
import { Header } from './header'

function DualShotHeader() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/dualshot" className="font-medium text-black dark:text-white">
          DualShot
        </Link>
        <p className="text-zinc-600 dark:text-zinc-500">
          Dual camera capture app
        </p>
      </div>
      <Link
        href="/"
        className="text-sm text-zinc-600 underline dark:text-zinc-400"
      >
        Personal Site
      </Link>
    </header>
  )
}

function DualShotFooter() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-500 dark:text-zinc-400">
        <span>© 2026 DualShot</span>
        <div className="flex items-center gap-4">
          <a className="underline" href="mailto:infokoksoft@gmail.com">
            Support
          </a>
          <Link className="underline" href="/dualshot/privacy-policy">
            Privacy
          </Link>
          <Link className="underline" href="/dualshot/terms-of-use">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}

function TradelandsHeader() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link
          href="/tradelands"
          className="font-medium text-black dark:text-white"
        >
          Tradelands
        </Link>
        <p className="text-zinc-600 dark:text-zinc-500">
          Run a company, one swipe at a time
        </p>
      </div>
      <Link
        href="/"
        className="text-sm text-zinc-600 underline dark:text-zinc-400"
      >
        Personal Site
      </Link>
    </header>
  )
}

function TradelandsFooter() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-500 dark:text-zinc-400">
        <span>© 2026 Tradelands</span>
        <div className="flex items-center gap-4">
          <a className="underline" href="mailto:infokoksoft@gmail.com">
            Support
          </a>
          <Link className="underline" href="/tradelands/privacy-policy">
            Privacy
          </Link>
          <Link className="underline" href="/tradelands/terms-of-use">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isDualShotRoute = pathname.startsWith('/dualshot')
  const isTradelandsRoute = pathname.startsWith('/tradelands')

  function renderHeader() {
    if (isDualShotRoute) return <DualShotHeader />
    if (isTradelandsRoute) return <TradelandsHeader />
    return <Header />
  }

  function renderFooter() {
    if (isDualShotRoute) return <DualShotFooter />
    if (isTradelandsRoute) return <TradelandsFooter />
    return <Footer />
  }

  return (
    <div className="flex min-h-screen w-full flex-col font-(family-name:--font-inter-tight)">
      <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
        {renderHeader()}
        {children}
        {renderFooter()}
      </div>
    </div>
  )
}
