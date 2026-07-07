'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { LanguageSwitcher } from '@/components/language-switcher'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export function Header() {
  const t = useTranslations('Header')
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Mucahit Kokdemir
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          {t('role')}
        </TextEffect>
      </div>
      <LanguageSwitcher />
    </header>
  )
}
