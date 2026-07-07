'use client'

import { useLocale } from 'next-intl'
import { useTransition } from 'react'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing, LOCALE_LABELS } from '@/i18n/routing'

// Dropdown language switcher. Navigates to the current path under the chosen
// locale. Works cleanly for pages that share a slug across locales (home,
// foldermini, and blog posts — which all use the same slug per locale).
export function LanguageSwitcher() {
  const pathname = usePathname()
  const active = useLocale()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  return (
    <select
      aria-label="Language"
      value={active}
      disabled={isPending}
      onChange={(e) => {
        const nextLocale = e.target.value
        startTransition(() => {
          router.replace(pathname, { locale: nextLocale })
        })
      }}
      className="cursor-pointer rounded-md border border-zinc-200 bg-transparent py-1 pr-6 pl-2 text-xs text-zinc-600 transition-colors hover:text-zinc-900 focus:outline-none dark:border-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-100"
    >
      {routing.locales.map((locale) => (
        <option key={locale} value={locale} className="text-black">
          {LOCALE_LABELS[locale] ?? locale.toUpperCase()}
        </option>
      ))}
    </select>
  )
}
