'use client'
import { TextMorph } from '@/components/ui/text-morph'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { ArrowLeft, ArrowUp } from 'lucide-react'
import { motion, useScroll, AnimatePresence } from 'motion/react'
import { BLOG_POSTS } from '@/app/data'

function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:cursor-pointer hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
      type="button"
    >
      <ArrowLeft size={16} />
      <span>Back</span>
    </button>
  )
}

function CopyButton() {
  const [text, setText] = useState('Copy')
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  useEffect(() => {
    setTimeout(() => {
      setText('Copy')
    }, 2000)
  }, [text])

  return (
    <button
      onClick={() => {
        setText('Copied')
        navigator.clipboard.writeText(currentUrl)
      }}
      className="font-base flex items-center gap-1 text-center text-sm text-zinc-500 transition-colors hover:cursor-pointer dark:text-zinc-400"
      type="button"
    >
      <TextMorph>{text}</TextMorph>
      <span>URL</span>
    </button>
  )
}

function ScrollToTopButton({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed right-8 bottom-8 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white shadow-lg transition-colors hover:cursor-pointer hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode
}) {
  const { scrollY } = useScroll()
  const [isHeaderVisible, setIsHeaderVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const pathname = usePathname()

  const currentBlogPost = BLOG_POSTS.find((post) =>
    pathname.includes(post.link),
  )
  const blogTitle = currentBlogPost?.title || ''

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsHeaderVisible(latest > 200)
      setShowScrollTop(latest > 400)
    })
  }, [scrollY])

  return (
    <>
      <motion.div
        initial={false}
        animate={{
          y: isHeaderVisible ? 0 : -100,
          opacity: isHeaderVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="fixed top-0 right-0 left-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/80"
      >
        <div className="mx-auto max-w-2xl">
          <div className="relative flex items-center justify-between px-4 py-4">
            <BackButton />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {blogTitle}
              </h1>
            </div>
            <CopyButton />
          </div>
        </div>
        <ScrollProgress
          className="absolute bottom-0 h-[2px] bg-zinc-900 dark:bg-zinc-100"
          springOptions={{
            bounce: 0,
          }}
        />
      </motion.div>

      <div className="mx-auto max-w-2xl px-4">
        <div className="mt-16 mb-8 flex items-center justify-between">
          <BackButton />
          <CopyButton />
        </div>
        <main className="prose prose-gray prose-h4:prose-base dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium pb-20">
          {children}
        </main>
      </div>

      <ScrollToTopButton isVisible={showScrollTop} />
    </>
  )
}
