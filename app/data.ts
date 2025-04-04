export type Project = {
  name: string
  description: string
  id: string
  type: 'personal' | 'professional'
  platform: 'web' | 'mobile'
  technologies: {
    name: string
    icon?: string
  }[]
  links?: {
    website?: string
    github?: string
    android?: string
    ios?: string
  }
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
  details: string[]
  technologies: {
    name: string
    icon?: string
  }[]
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'speeza',
    description: 'An offline text-to-speech application using iOS TTS modules',
    id: 'project1',
    type: 'personal',
    platform: 'mobile',
    technologies: [{ name: 'SwiftUI', icon: 'swift' }, { name: 'SwiftData' }],
    links: {
      ios: 'https://apps.apple.com/us/app/speeza/id6743993564',
      github: 'https://github.com/mucahitdev/speeza',
    },
  },
  {
    name: 'Speedy Bunny',
    description: 'Online food delivery application used in Kuwait',
    id: 'project2',
    type: 'professional',
    platform: 'mobile',
    technologies: [
      { name: 'React Native', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Expo', icon: 'expo' },
      { name: 'Firebase', icon: 'firebase' },
    ],
    links: {
      ios: 'https://apps.apple.com/us/app/speedy-bunny-%D8%B3%D8%A8%D9%8A%D8%AF%D9%8A-%D8%A8%D8%A7%D9%86%D9%8A/id6502349008',
      android:
        'https://play.google.com/store/apps/details?id=com.koutfood.koutfood',
    },
  },
  {
    name: 'LTB Jeans',
    description:
      'E-commerce applications for LTB Jeans, available for both iOS and Android',
    id: 'project3',
    type: 'professional',
    platform: 'mobile',
    technologies: [
      { name: 'Swift', icon: 'swift' },
      { name: 'UIKit' },
      { name: 'Kotlin', icon: 'kotlin' },
    ],
    links: {
      android: 'https://play.google.com/store/apps/details?id=com.nextlua.ltb',
      ios: 'https://apps.apple.com/tr/app/ltb-jeans/id1619764937?l=tr',
    },
  },
  {
    name: 'Koç Diyalog',
    description:
      'A performance improvement application based on OKR methodology, designed for Koç Holding employees.',
    id: 'project4',
    type: 'professional',
    platform: 'web',
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Redux', icon: 'redux' },
    ],
    links: {
      website: 'https://www.kocdiyalog.com',
    },
  },
  {
    name: 'TST',
    description:
      'TST is a company that produces implant materials. This web project is designed to digitalize production monitoring processes.',
    id: 'project5',
    type: 'professional',
    platform: 'web',
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Redux', icon: 'redux' },
    ],
    links: {},
  },
  {
    name: 'Alo Junior Destek',
    description:
      'A platform where junior developers can share their links to expand their network on LinkedIn and GitHub.',
    id: 'project6',
    type: 'personal',
    platform: 'web',
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
    ],
    links: {
      website: 'https://alo-junior-destek.netlify.app',
      github: 'https://github.com/mucahitdev/alo-junior-destek',
    },
  },
  {
    name: 'Milyoneero',
    description: 'A small-scale "Who Wants to Be a Millionaire" experience.',
    id: 'project7',
    type: 'personal',
    platform: 'web',
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
    ],
    links: {
      website: 'https://milyoneero.netlify.app',
      github: 'https://github.com/mucahitdev/kim-milyoner-olmak-ister',
    },
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'NTT DATA Business Solutions',
    title: 'Frontend & Mobile Developer',
    start: '2023',
    end: 'Present',
    id: 'work1',
    details: [
      'Restructuring and renewal of legacy native projects',
      'Firebase, CDC (Customer Data Cloud), and Gigya integrations',
      'Integration of map and location-based services',
      'App Store and Google Play Store management',
    ],
    technologies: [
      { name: 'React Native', icon: 'react' },
      { name: 'Swift', icon: 'swift' },
      { name: 'Kotlin', icon: 'kotlin' },
      { name: 'Expo', icon: 'expo' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Firebase', icon: 'firebase' },
    ],
  },
  {
    company: 'NTT DATA Business Solutions',
    title: 'Frontend Developer',
    start: '2022',
    end: '2023',
    id: 'work2',
    details: [
      'Creating responsive and modern UI components',
      'API integrations and data management',
      'Real-time data synchronization (SignalR, WebSocket, etc.)',
      'Restructuring and renewal of legacy projects',
    ],
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind', icon: 'tailwind' },
      { name: 'Figma', icon: 'figma' },
      { name: 'CSS', icon: 'css' },
      { name: 'HTML', icon: 'html' },
    ],
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title:
      'App Store 2025: Next-Generation App Development and Publishing Process',
    description:
      'Changes and innovations in the App Store app submission process in 2025',
    link: '/blog/app-store-2025',
    uid: 'blog-4',
  },
  /*
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  */
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/mucahitdev',
  },
  {
    label: 'X (Twitter)',
    link: 'https://x.com/dev_zimablue',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/mucahitdev',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/kalimufs',
  },
]

export const EMAIL = 'kokdemir20@gmail.com'
