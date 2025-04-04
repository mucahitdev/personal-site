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
    description:
      'iOS ta TTS modüllerini kullanan offline text to speech uygulaması',
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
    description: 'Onlime yemek sipariş uygulaması. Kuveytte kullanılıyor',
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
    description: 'LTB Jeans e-ticaret uygulamaları. Hem iOS hem Android için.',
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
      'Koç Holding çalışanlarına özel OKR metodolojisine dayalı bir performans geliştirme uygulaması.',
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
    // TST, implant malzemeleri üreten bir şirkettir. Bu web projesi, üretim izleme süreçlerini dijitalleştirmek için tasarlanmıştır.
    // Kısaca yaz
    description:
      'TST, implant malzemeleri üreten bir şirkettir. Bu web projesi, üretim izleme süreçlerini dijitalleştirmek için tasarlanmıştır.',
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
      'Junior arkadaşların linkedin de ve githubta ağlarını genişletmek için linklerini paylaşabilecekleri platform.',
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
    description: 'Minik bir Kim Milyoner OLmak ister deneyimi.',
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
      'Eski native projelerin yeniden yapılandırılması ve yenileme',
      'Firebase, CDC (Customer Data Cloud) ve Gigya entegrasyonları',
      'Harita ve konum tabanlı servislerin entegrasyonu',
      'App Store ve Google Play Store yönetimi',
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
      'Responsive ve modern UI bileşenleri oluşturma',
      'API entegrasyonları ve veri yönetimi',
      'Gerçek zamanlı veri senkronizasyonu (SignalR, WebSocket vb.)',
      'Eski projelerin yeniden yapılandırılması ve yenileme',
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
