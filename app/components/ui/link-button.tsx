import { cn } from '@/lib/utils'
import Image from 'next/image'

type LinkButtonProps = {
  href: string
  type: 'website' | 'github' | 'android' | 'ios'
  position?: 'start' | 'middle' | 'end' | 'single'
}

const BUTTON_ICONS = {
  website: (
    <Image
      src="/icons/website.svg"
      alt="Website"
      width={14}
      height={14}
      className="h-3.5 w-3.5"
    />
  ),
  github: (
    <Image
      src="/icons/github.svg"
      alt="GitHub"
      width={14}
      height={14}
      className="h-3.5 w-3.5"
    />
  ),
  android: (
    <Image
      src="/icons/android.svg"
      alt="Android"
      width={14}
      height={14}
      className="h-3.5 w-3.5"
    />
  ),
  ios: (
    <Image
      src="/icons/ios.svg"
      alt="iOS"
      width={14}
      height={14}
      className="h-3.5 w-3.5"
    />
  ),
}

const BUTTON_TITLES = {
  website: 'Website',
  github: 'GitHub',
  android: 'Android',
  ios: 'iOS',
}

export function LinkButton({
  href,
  type,
  position = 'middle',
}: LinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'flex flex-1 items-center justify-center gap-1 px-2 py-1.5 text-sm text-white transition-colors hover:bg-zinc-800 dark:text-black dark:hover:bg-zinc-200',
        position === 'start' && 'rounded-l-full',
        position === 'end' && 'rounded-r-full',
        position === 'single' && 'rounded-full',
      )}
    >
      {BUTTON_ICONS[type]}
      {BUTTON_TITLES[type]}
    </a>
  )
}
