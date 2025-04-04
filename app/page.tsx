'use client'
import { motion, AnimatePresence } from 'motion/react'
import { XIcon, ChevronDown, ChevronUp } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
  type Project,
} from './data'
import { useState } from 'react'
import Image from 'next/image'
import { LinkButton } from '@/components/link-button'
import { cn } from '@/lib/utils'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectVideoProps = {
  src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

const ProjectLinks = ({
  links,
  platform,
}: {
  links?: Project['links']
  platform: 'web' | 'mobile'
}) => {
  if (!links) return null

  const availableLinks = Object.entries(links).filter(([_, value]) => value)
  if (availableLinks.length === 0) return null

  return (
    <div className="mt-4 flex divide-x divide-zinc-200 overflow-hidden rounded-full bg-zinc-900 dark:divide-zinc-700 dark:bg-zinc-100">
      {platform === 'web' ? (
        <>
          {links.website && (
            <LinkButton
              href={links.website}
              type="website"
              position={links.github ? 'start' : 'single'}
            />
          )}
          {links.github && (
            <LinkButton
              href={links.github}
              type="github"
              position={links.website ? 'end' : 'single'}
            />
          )}
        </>
      ) : (
        <>
          {links.android && (
            <LinkButton
              href={links.android}
              type="android"
              position={links.ios || links.github ? 'start' : 'single'}
            />
          )}
          {links.ios && (
            <LinkButton
              href={links.ios}
              type="ios"
              position={
                links.android && links.github
                  ? 'middle'
                  : links.android
                    ? 'end'
                    : links.github
                      ? 'start'
                      : 'single'
              }
            />
          )}
          {links.github && (
            <LinkButton
              href={links.github}
              type="github"
              position={links.android || links.ios ? 'end' : 'single'}
            />
          )}
        </>
      )}
    </div>
  )
}

export default function Personal() {
  const [expandedWork, setExpandedWork] = useState<string | null>('work1')
  const [projectFilter, setProjectFilter] = useState<{
    type: 'all' | 'personal' | 'professional'
    platform: 'all' | 'web' | 'mobile'
  }>({ type: 'all', platform: 'all' })

  const toggleWork = (id: string) => {
    setExpandedWork(expandedWork === id ? null : id)
  }

  const filteredProjects = PROJECTS.filter((project) => {
    if (projectFilter.type !== 'all' && project.type !== projectFilter.type) {
      return false
    }
    if (
      projectFilter.platform !== 'all' &&
      project.platform !== projectFilter.platform
    ) {
      return false
    }
    return true
  })

  const TechnologyChip = ({ name, icon }: { name: string; icon?: string }) => (
    <div className="flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
      {icon && (
        <Image
          src={`/icons/${icon}.svg`}
          alt={name}
          width={16}
          height={16}
          className="mr-2"
        />
      )}
      <span className={icon ? '' : 'ml-0'}>{name}</span>
    </div>
  )

  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            Since 2021, I've specialized in frontend development, working with
            React.js, Next.js, React Native, and Expo. I've contributed to
            various projects, gained hands-on experience, and now work as a
            Mobile Developer. I also publish hobby projects and stay updated
            with the latest in the ecosystem.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {WORK_EXPERIENCE.map((job) => (
            <div
              key={job.id}
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              onClick={() => toggleWork(job.id)}
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full cursor-pointer rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row items-center justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="mr-2 text-zinc-600 dark:text-zinc-400">
                      {job.start} - {job.end}
                    </p>
                    <motion.div
                      animate={{ rotate: expandedWork === job.id ? 180 : 0 }}
                      transition={{
                        duration: 0.3,
                        type: 'spring',
                        stiffness: 200,
                        damping: 20,
                      }}
                    >
                      <ChevronDown className="h-5 w-5 text-zinc-500" />
                    </motion.div>
                  </div>
                </div>

                {/* Technologies Section */}
                <motion.div
                  className="mt-3 flex flex-wrap gap-2"
                  initial={false}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <AnimatePresence mode="popLayout">
                    {job.technologies
                      .slice(0, expandedWork === job.id ? undefined : 2)
                      .map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <TechnologyChip {...tech} />
                        </motion.div>
                      ))}
                    {expandedWork !== job.id && job.technologies.length > 2 && (
                      <motion.div
                        key="more"
                        initial={{ opacity: 0, scale: 0.8, x: -20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8, x: -20 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="relative"
                      >
                        <div className="relative z-10 flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                          +{job.technologies.length - 2}
                        </div>
                        <motion.div
                          className="absolute inset-0 z-0 rounded-full bg-zinc-100 dark:bg-zinc-800"
                          initial={{ scale: 1 }}
                          animate={{ scale: 1.2 }}
                          exit={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Collapsible Details Section */}
                <motion.div
                  initial={false}
                  animate={{ height: expandedWork === job.id ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {job.details && (
                    <ul className="mt-4 space-y-2 text-zinc-600 dark:text-zinc-400">
                      {job.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Projects</h3>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              Type:
            </span>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  setProjectFilter((prev) => ({ ...prev, type: 'all' }))
                }
                className={cn(
                  'rounded-full px-3 py-1 text-sm transition-colors',
                  projectFilter.type === 'all'
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700',
                  'hover:cursor-pointer',
                )}
              >
                All
              </button>
              <button
                onClick={() =>
                  setProjectFilter((prev) => ({ ...prev, type: 'personal' }))
                }
                className={cn(
                  'rounded-full px-3 py-1 text-sm transition-colors',
                  projectFilter.type === 'personal'
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700',
                  'hover:cursor-pointer',
                )}
              >
                Personal
              </button>
              <button
                onClick={() =>
                  setProjectFilter((prev) => ({
                    ...prev,
                    type: 'professional',
                  }))
                }
                className={cn(
                  'rounded-full px-3 py-1 text-sm transition-colors',
                  projectFilter.type === 'professional'
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700',
                  'hover:cursor-pointer',
                )}
              >
                Professional
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-600 dark:text-zinc-400">
              Platform:
            </span>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  setProjectFilter((prev) => ({ ...prev, platform: 'all' }))
                }
                className={cn(
                  'rounded-full px-3 py-1 text-sm transition-colors',
                  projectFilter.platform === 'all'
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700',
                  'hover:cursor-pointer',
                )}
              >
                All
              </button>
              <button
                onClick={() =>
                  setProjectFilter((prev) => ({ ...prev, platform: 'web' }))
                }
                className={cn(
                  'rounded-full px-3 py-1 text-sm transition-colors',
                  projectFilter.platform === 'web'
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700',
                  'hover:cursor-pointer',
                )}
              >
                Web
              </button>
              <button
                onClick={() =>
                  setProjectFilter((prev) => ({ ...prev, platform: 'mobile' }))
                }
                className={`rounded-full px-3 py-1 text-sm transition-colors ${
                  projectFilter.platform === 'mobile'
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
                }`}
              >
                Mobile
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
              >
                <Spotlight
                  className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                  size={64}
                />
                <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                  <div className="flex h-full flex-col">
                    <div className="flex flex-col space-y-3">
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-base font-[450] text-zinc-900 dark:text-zinc-50">
                            {project.name}
                          </h4>
                          {projectFilter.type === 'all' && (
                            <span className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                              {project.type === 'personal'
                                ? 'Personal'
                                : 'Professional'}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <TechnologyChip key={index} {...tech} />
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto pt-4">
                      <ProjectLinks
                        links={project.links}
                        platform={project.platform}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex flex-wrap items-center justify-start gap-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
