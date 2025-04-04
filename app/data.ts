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
  link: string
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
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    id: 'project1',
    type: 'professional',
    platform: 'web',
    technologies: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind', icon: 'tailwind' },
    ],
    links: {
      website: 'https://pro.motion-primitives.com/',
    },
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    id: 'project2',
    type: 'personal',
    platform: 'web',
    technologies: [
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind', icon: 'tailwind' },
    ],
    links: {
      website: 'https://motion-primitives.com/',
      github: 'https://github.com/example/project2',
    },
  },
  {
    name: 'Mobile App Example',
    description: 'A sample mobile application with modern features.',
    id: 'project3',
    type: 'professional',
    platform: 'mobile',
    technologies: [
      { name: 'React Native', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Expo', icon: 'expo' },
    ],
    links: {
      github: 'https://github.com/example/project3',
      android: 'https://play.google.com/store/apps/details?id=com.example.app',
      ios: 'https://apps.apple.com/app/example-app/id123456789',
    },
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
    details: [
      'Şirketin genel stratejisini ve vizyonunu belirledim',
      'Ekip yönetimi ve işe alım süreçlerini yönettim',
      'Müşteri ilişkilerini geliştirdim ve yeni iş fırsatları yarattım',
    ],
    technologies: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Tailwind', icon: 'tailwind' },
      { name: 'Node.js', icon: 'nodejs' },
    ],
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
    details: [
      'Kullanıcı deneyimi tasarımları oluşturdum',
      'Frontend geliştirme projeleri tamamladım',
      'Müşterilerle birebir çalışarak projeleri yönettim',
    ],
    technologies: [
      { name: 'Figma', icon: 'figma' },
      { name: 'React', icon: 'react' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'CSS', icon: 'css' },
      { name: 'HTML', icon: 'html' },
    ],
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
    details: [
      'Modern web teknolojileri ile responsive web siteleri geliştirdim',
      'SEO optimizasyonları yaptım',
      'Performance iyileştirmeleri gerçekleştirdim',
    ],
    technologies: [
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'jQuery', icon: 'jquery' },
      { name: 'Bootstrap', icon: 'bootstrap' },
    ],
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'App Store 2025: Yeni Nesil Uygulama Geliştirme ve Yayınlama Süreci',
    description:
      "2025 yılında App Store'a uygulama yükleme sürecindeki değişiklikler ve yenilikler",
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
