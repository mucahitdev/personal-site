'use client'

import { useLocale } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

// Toggles between locales on the current path. Works cleanly for pages that
// share a slug across locales (home, foldermini). Blog posts use per-locale
// slugs, so their canonical cross-language link is the hreflang tag; this
// switcher still lets readers jump to the same URL under the other prefix.
export function LanguageSwitcher() {
  const pathname = usePathname()
  const active = useLocale()

  return (
    <div className="flex items-center gap-1.5 text-xs">
      {routing.locales.map((locale, i) => (
        <span key={locale} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-zinc-300 dark:text-zinc-700">/</span>}
          <Link
            href={pathname}
            locale={locale}
            className={
              locale === active
                ? 'font-medium text-zinc-900 dark:text-zinc-100'
                : 'text-zinc-400 transition-colors hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300'
            }
          >
            {locale.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  )
}
