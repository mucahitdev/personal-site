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
    name: 'WidgetLoft',
    description:
      'Organize your installed apps into colorful folders and launch them straight from Home Screen and Lock Screen widgets.',
    id: 'widgetloft',
    type: 'personal',
    platform: 'mobile',
    technologies: [{ name: 'SwiftUI', icon: 'swift' }, { name: 'WidgetKit' }],
    links: {
      ios: 'https://apps.apple.com/app/id6782827870',
      website: 'https://mucahitk.com/widgetloft',
    },
  },
  {
    name: 'FaceIdent',
    description:
      'Recognize and group faces and pets, tag objects, read text, and search your photos — entirely on-device, nothing ever leaves your iPhone.',
    id: 'faceident',
    type: 'personal',
    platform: 'mobile',
    technologies: [{ name: 'SwiftUI', icon: 'swift' }, { name: 'Vision' }],
    links: {
      ios: 'https://apps.apple.com/app/id6788569032',
      website: 'https://mucahitk.com/faceident',
    },
  },
  {
    name: 'Tycoon Heir',
    description:
      'A swipe-to-decide story game — inherit a family company and rule it one decision at a time while keeping every meter in balance.',
    id: 'tradelands',
    type: 'personal',
    platform: 'mobile',
    technologies: [{ name: 'SwiftUI', icon: 'swift' }, { name: 'GameKit' }],
    links: {
      ios: 'https://apps.apple.com/app/id6779888422',
      website: 'https://mucahitk.com/tradelands',
    },
  },
  {
    name: 'Verso',
    description:
      'Record portrait and landscape at once — capture 9:16 and 16:9 simultaneously in photo or video mode.',
    id: 'verso',
    type: 'personal',
    platform: 'mobile',
    technologies: [
      { name: 'SwiftUI', icon: 'swift' },
      { name: 'AVFoundation' },
    ],
    links: {
      ios: 'https://apps.apple.com/app/id6762179530',
      website: 'https://mucahitk.com/verso',
    },
  },
  {
    name: 'Spendi',
    description:
      'An intuitive expense tracker and budget planner — log income and expenses in seconds and see exactly where your money goes.',
    id: 'spendi',
    type: 'personal',
    platform: 'mobile',
    technologies: [{ name: 'SwiftUI', icon: 'swift' }, { name: 'SwiftData' }],
    links: {
      ios: 'https://apps.apple.com/app/id6760630364',
      website: 'https://spendi.mucahitk.com',
    },
  },
  {
    name: 'Lecto',
    description:
      'Turn your photos into stunning mosaic collages — everything runs entirely on-device to keep your privacy intact.',
    id: 'lecto',
    type: 'personal',
    platform: 'mobile',
    technologies: [{ name: 'SwiftUI', icon: 'swift' }, { name: 'SwiftData' }],
    links: {
      ios: 'https://apps.apple.com/app/id6760270162',
      website: 'https://lecto.mucahitk.com',
    },
  },
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
      'How to Set Up the iPhone Duo Home Screen (Inner and Outer Display)',
    description:
      'Plan your foldable iPhone Duo\'s cover screen and 7.6-inch inner screen, with widgets and one-tap app launchers.',
    link: '/blog/iphone-duo-home-screen-setup',
    uid: 'blog-27',
  },
  {
    title:
      'How to Open Apps Faster on the iPhone Duo Cover Screen',
    description:
      'One-hand ways to reach your apps on the 5.4-inch outer display: launcher widgets, the Lock Screen and the Dynamic Island.',
    link: '/blog/iphone-duo-cover-screen-apps',
    uid: 'blog-26',
  },
  {
    title:
      'Best Widgets for the iPhone Duo\'s 7.6-Inch Inner Screen',
    description:
      'Apple\'s new Extra Large widgets and an app-launcher widget that make the most of the iPhone Duo\'s big inner display.',
    link: '/blog/best-widgets-iphone-duo',
    uid: 'blog-25',
  },
  {
    title:
      'iOS 27 Home Screen Ideas: 7 Setups Worth Copying',
    description:
      'Seven iOS 27 Home Screen setups, from a one-page launcher to an all-dark, glass or nested-folder layout.',
    link: '/blog/ios-27-home-screen-ideas',
    uid: 'blog-24',
  },
  {
    title:
      'What\'s New for Widgets in iOS 27 (and How to Use Them)',
    description:
      'The Extra Large widget, notification automations and the compact Lock Screen clock, and what you can build with them.',
    link: '/blog/ios-27-widgets-whats-new',
    uid: 'blog-23',
  },
  {
    title:
      'How to Set Up a Clean iOS 27 Lock Screen (Compact Clock and One-Tap Apps)',
    description:
      'Use iOS 27\'s compact clock, a Lock Screen app widget and a Quick Launch bar for a tidy Lock Screen.',
    link: '/blog/ios-27-lock-screen-setup',
    uid: 'blog-22',
  },
  {
    title:
      'How to Use the iOS 27 Extra Large Widget as a One-Page App Launcher',
    description:
      'Fill a whole Home Screen page with up to 77 apps using iOS 27\'s new Extra Large widget size.',
    link: '/blog/extra-large-widget-ios-27',
    uid: 'blog-21',
  },
  {
    title:
      'How to Get Dark Mode App Icons for Every App on iPhone',
    description:
      'Stop bright icons from breaking a dark Home Screen: dark icons for every app, even ones that don\'t ship one.',
    link: '/blog/dark-mode-app-icons-iphone',
    uid: 'blog-20',
  },
  {
    title:
      'How to Put Your Favorite Apps in the Dynamic Island on iPhone',
    description:
      'Launch your favorite apps from the Dynamic Island and the Lock Screen in one tap with a Quick Launch bar.',
    link: '/blog/apps-in-dynamic-island-iphone',
    uid: 'blog-19',
  },
  {
    title:
      'How to Open a Website in Chrome (or Any Browser) from an iPhone Widget',
    description:
      'Make Home Screen website shortcuts open in Chrome, Firefox, Brave or full screen instead of always Safari.',
    link: '/blog/open-website-in-chrome-from-widget-iphone',
    uid: 'blog-18',
  },
  {
    title:
      'How to Put Folders Inside Folders on iPhone (Nested Folders)',
    description:
      'iOS folders can\'t nest, but a widget can: sub-folders with a back button, right on your Home Screen.',
    link: '/blog/folders-inside-folders-iphone',
    uid: 'blog-17',
  },
  {
    title:
      'How to Make a Transparent Widget on iPhone (iOS 26 Liquid Glass)',
    description:
      'See-through and frosted Liquid Glass widgets that let your wallpaper show through.',
    link: '/blog/transparent-widget-iphone',
    uid: 'blog-16',
  },
  {
    title:
      'How to Call or WhatsApp a Contact from Your iPhone Home Screen Widget',
    description:
      'Speed dial on iPhone: call, message, FaceTime or open a WhatsApp chat with one tap from a widget.',
    link: '/blog/call-whatsapp-contact-from-widget-iphone',
    uid: 'blog-15',
  },
  {
    title:
      'How to Customize App Icons on iPhone Without the Shortcuts App',
    description:
      'Custom photo, symbol, emoji or letter icons that open the app directly, with separate light and dark designs.',
    link: '/blog/custom-app-icons-without-shortcuts-iphone',
    uid: 'blog-14',
  },
  {
    title:
      'How to Show Notification Dots on iPhone Widgets (iOS 27)',
    description:
      'Use iOS 27\'s notification automation to put a dot on the widget tile of apps with new notifications.',
    link: '/blog/notification-badges-on-widgets-iphone',
    uid: 'blog-13',
  },
  {
    title:
      'How to Find All Photos of a Person on iPhone (On-Device Face Grouping)',
    description:
      'Find and group every photo of a specific person on iPhone with on-device face recognition — nothing is uploaded.',
    link: '/blog/find-photos-of-a-person-iphone',
    uid: 'blog-7',
  },
  {
    title:
      "How to Search Your iPhone Photos by What's In Them (Objects & Natural Language)",
    description:
      'Search your photo library by objects, scenes, and plain-language descriptions — on-device, no upload.',
    link: '/blog/search-photos-by-content-iphone',
    uid: 'blog-8',
  },
  {
    title:
      'Private, On-Device Photo Organizing on iPhone: Why It Matters and How It Works',
    description:
      'How face grouping, object tagging, and search can run entirely on your iPhone, with nothing sent to the cloud.',
    link: '/blog/on-device-photo-organizer-privacy',
    uid: 'blog-9',
  },
  {
    title:
      'How to Find and Remove Duplicate Photos on iPhone (Free Up Storage)',
    description:
      'Find duplicate and near-identical photos on iPhone and clear them to free up storage — on-device, no upload.',
    link: '/blog/find-remove-duplicate-photos-iphone',
    uid: 'blog-10',
  },
  {
    title:
      'How to Find All Photos of Your Pet on iPhone (Dog & Cat Grouping)',
    description:
      'Group every photo of your dog or cat automatically with on-device pet recognition — nothing is uploaded.',
    link: '/blog/find-photos-of-your-pet-iphone',
    uid: 'blog-11',
  },
  {
    title:
      'How to Search Text Inside Your Photos on iPhone (Screenshots & Receipts)',
    description:
      'Find any screenshot, receipt, or note by the words inside it with on-device text recognition — no upload.',
    link: '/blog/search-text-in-photos-iphone',
    uid: 'blog-12',
  },
  {
    title: 'Best Ways to Organize Your iPhone Home Screen in 2026',
    description:
      'Practical methods to declutter and organize your iPhone Home Screen — from the App Library to widget-based app launchers.',
    link: '/blog/organize-iphone-home-screen-2026',
    uid: 'blog-6',
  },
  {
    title:
      'How to Launch Any App from a Home Screen or Lock Screen Widget on iPhone',
    description:
      'A step-by-step guide to opening apps directly from iOS widgets, so any app is one tap away.',
    link: '/blog/launch-apps-from-widgets-ios',
    uid: 'blog-5',
  },
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
