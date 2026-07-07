// Per-locale content for the FolderMini page. Both the rendered copy and the
// JSON-LD structured data are built from these bundles so they never drift.

type Faq = { q: string; a: string }

export type FolderMiniContent = {
  metaTitle: string
  metaDescription: string
  keywords: string[]
  ogTitle: string
  ogDescription: string
  intro: string[]
  downloadCta: string
  featuresHeading: string
  features: string[]
  audienceHeading: string
  audienceIntro: string
  audience: string[]
  faqHeading: string
  faqs: Faq[]
  supportHeading: string
  supportPrefix: string
  legalHeading: string
  privacyLabel: string
  termsLabel: string
  jsonLdFeatures: string[]
  breadcrumbHome: string
}

export const FOLDERMINI_CONTENT: Record<'en' | 'tr', FolderMiniContent> = {
  en: {
    metaTitle: 'FolderMini — App Folder Launcher & Home Screen Widgets',
    metaDescription:
      'FolderMini organizes your iPhone apps into colorful folders you launch straight from Home Screen and Lock Screen widgets — real app icons, one-tap launch, multiple sizes. Free on the App Store.',
    keywords: [
      'FolderMini',
      'app folder launcher',
      'home screen widgets',
      'lock screen widgets',
      'iphone app organizer',
      'folder widget',
      'app launcher ios',
      'icon organizer',
    ],
    ogTitle: 'FolderMini — App Folder Launcher for iPhone',
    ogDescription:
      'Organize your apps into colorful folders and launch them from Home Screen and Lock Screen widgets. Free on the App Store.',
    intro: [
      'FolderMini is an iOS app that lets you organize your installed apps into colorful folders and place them on your Home Screen and Lock Screen as widgets. Each tile shows the real app icon and launches the app directly with a single tap.',
      'Build the layout you want — group your apps by mood, project, or routine — and reach everything you need straight from a widget, without digging through pages of icons.',
    ],
    downloadCta: 'Download on the App Store',
    featuresHeading: 'Key Features',
    features: [
      'Organize installed apps into colorful, custom folders',
      'Home Screen and Lock Screen widgets for every folder',
      'Tap a tile to launch the app instantly',
      'Real, pixel-perfect app icons',
      'Multiple widget sizes — small, medium, and large grids',
      'Lock Screen accessory widgets for your most-used apps',
    ],
    audienceHeading: 'Who FolderMini Is For',
    audienceIntro:
      'FolderMini is built for anyone who wants to reach their apps in fewer taps. It’s especially useful if you:',
    audience: [
      'Have pages of app icons and want a cleaner, minimal Home Screen',
      'Want to launch a specific app straight from a Home Screen or Lock Screen widget in one tap',
      'Group apps by routine, project, or mood — work apps, morning apps, travel apps',
      'Prefer real, recognizable app icons over stock folder previews',
      'Want a launcher that works natively, without building Shortcuts automations',
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'What is FolderMini?',
        a: 'FolderMini is an iOS app that organizes your installed apps into colorful folders you can place on your Home Screen and Lock Screen as widgets, then launch any app with a single tap.',
      },
      {
        q: 'Is FolderMini free?',
        a: 'Yes, FolderMini is free to download on the App Store.',
      },
      {
        q: 'How do FolderMini widgets work?',
        a: 'You build a folder of apps, add a FolderMini widget to your Home Screen or Lock Screen, and each tile shows the real app icon. Tapping a tile opens that app directly.',
      },
      {
        q: 'What widget sizes does FolderMini support?',
        a: 'FolderMini offers small, medium, and large Home Screen grids, plus Lock Screen accessory widgets for your most-used apps.',
      },
      {
        q: 'Does FolderMini work on the Lock Screen?',
        a: 'Yes. You can add Lock Screen accessory widgets so your favorite apps are one tap away.',
      },
      {
        q: 'Can you launch an app directly from a widget on iPhone?',
        a: 'Yes. FolderMini turns a widget into a grid of real app icons, and tapping a tile opens that app directly — no need to open a folder or menu first.',
      },
      {
        q: 'What is the best way to organize apps on an iPhone?',
        a: 'A minimal Home Screen combined with the App Library for storage and a widget-based launcher like FolderMini for one-tap access to your most-used apps is the most efficient setup. It keeps your screen clean while everything stays one tap away.',
      },
      {
        q: 'Is FolderMini a good alternative to stock iOS folders?',
        a: 'Yes. Stock folders require two taps (open the folder, then the app) and only show tiny icon previews. FolderMini shows full-size real icons and launches any app in a single tap, directly from a Home Screen or Lock Screen widget.',
      },
      {
        q: 'Do I need Shortcuts or automations to use FolderMini?',
        a: 'No. FolderMini handles app launching natively through its widget, so you do not need to build anything in the Shortcuts app.',
      },
    ],
    supportHeading: 'Support',
    supportPrefix: 'For support, feature requests, or bug reports, contact:',
    legalHeading: 'Legal',
    privacyLabel: 'Privacy Policy',
    termsLabel: 'Terms of Use',
    jsonLdFeatures: [
      'Organize apps into colorful custom folders',
      'Home Screen and Lock Screen widgets',
      'One-tap app launch from widgets',
      'Real, pixel-perfect app icons',
      'Small, medium, and large widget sizes',
    ],
    breadcrumbHome: 'Home',
  },
  tr: {
    metaTitle: "FolderMini — Uygulama Klasörü Başlatıcı & Ana Ekran Widget'ları",
    metaDescription:
      "FolderMini, iPhone uygulamalarınızı ana ekran ve kilit ekranı widget'larından doğrudan açtığınız renkli klasörlere düzenler — gerçek uygulama ikonları, tek dokunuşla açma, farklı boyutlar. App Store'da ücretsiz.",
    keywords: [
      'FolderMini',
      'uygulama klasörü başlatıcı',
      "ana ekran widget'ları",
      "kilit ekranı widget'ları",
      'iphone uygulama düzenleyici',
      'klasör widget',
      'uygulama başlatıcı ios',
      'ikon düzenleyici',
    ],
    ogTitle: "FolderMini — iPhone için Uygulama Klasörü Başlatıcı",
    ogDescription:
      "Uygulamalarınızı renkli klasörlere düzenleyin ve ana ekran ile kilit ekranı widget'larından açın. App Store'da ücretsiz.",
    intro: [
      "FolderMini, yüklü uygulamalarınızı renkli klasörlere düzenlemenizi ve bunları ana ekranınıza ve kilit ekranınıza widget olarak yerleştirmenizi sağlayan bir iOS uygulamasıdır. Her kutucuk gerçek uygulama ikonunu gösterir ve tek dokunuşla uygulamayı doğrudan açar.",
      "İstediğiniz düzeni kurun — uygulamalarınızı moda, projeye veya rutine göre gruplayın — ve ihtiyacınız olan her şeye ikon sayfaları arasında kaybolmadan doğrudan bir widget'tan ulaşın.",
    ],
    downloadCta: "App Store'dan İndir",
    featuresHeading: 'Öne Çıkan Özellikler',
    features: [
      'Yüklü uygulamaları renkli, özel klasörlere düzenleyin',
      "Her klasör için ana ekran ve kilit ekranı widget'ları",
      'Bir kutucuğa dokunarak uygulamayı anında açın',
      'Gerçek, piksel mükemmelliğinde uygulama ikonları',
      "Farklı widget boyutları — küçük, orta ve büyük ızgaralar",
      "En çok kullandığınız uygulamalar için kilit ekranı aksesuar widget'ları",
    ],
    audienceHeading: 'FolderMini Kimler İçin?',
    audienceIntro:
      'FolderMini, uygulamalarına daha az dokunuşla ulaşmak isteyen herkes için tasarlandı. Özellikle şunlar için kullanışlı:',
    audience: [
      'Sayfalarca uygulama ikonu olan ve daha temiz, sade bir ana ekran isteyenler',
      "Belirli bir uygulamayı ana ekran veya kilit ekranı widget'ından tek dokunuşla açmak isteyenler",
      'Uygulamaları rutine, projeye veya moda göre gruplamak isteyenler — iş uygulamaları, sabah uygulamaları, seyahat uygulamaları',
      'Standart klasör önizlemeleri yerine gerçek, tanıdık uygulama ikonlarını tercih edenler',
      'Kısayol otomasyonları kurmadan, yerel çalışan bir başlatıcı isteyenler',
    ],
    faqHeading: 'Sık Sorulan Sorular',
    faqs: [
      {
        q: 'FolderMini nedir?',
        a: "FolderMini, yüklü uygulamalarınızı ana ekran ve kilit ekranınıza widget olarak yerleştirebileceğiniz renkli klasörlere düzenleyen ve herhangi bir uygulamayı tek dokunuşla açmanızı sağlayan bir iOS uygulamasıdır.",
      },
      {
        q: 'FolderMini ücretsiz mi?',
        a: "Evet, FolderMini App Store'dan ücretsiz indirilebilir.",
      },
      {
        q: "FolderMini widget'ları nasıl çalışır?",
        a: "Bir uygulama klasörü oluşturursunuz, ana ekranınıza veya kilit ekranınıza bir FolderMini widget'ı eklersiniz ve her kutucuk gerçek uygulama ikonunu gösterir. Bir kutucuğa dokunmak o uygulamayı doğrudan açar.",
      },
      {
        q: 'FolderMini hangi widget boyutlarını destekler?',
        a: "FolderMini küçük, orta ve büyük ana ekran ızgaralarının yanı sıra en çok kullandığınız uygulamalar için kilit ekranı aksesuar widget'ları sunar.",
      },
      {
        q: 'FolderMini kilit ekranında çalışır mı?',
        a: "Evet. Favori uygulamalarınız tek dokunuş uzağında olsun diye kilit ekranı aksesuar widget'ları ekleyebilirsiniz.",
      },
      {
        q: "iPhone'da widget'tan doğrudan uygulama açılabilir mi?",
        a: "Evet. FolderMini bir widget'ı gerçek uygulama ikonlarından oluşan bir ızgaraya dönüştürür ve bir kutucuğa dokunmak o uygulamayı doğrudan açar — önce bir klasör veya menü açmaya gerek yoktur.",
      },
      {
        q: "iPhone'da uygulamaları düzenlemenin en iyi yolu nedir?",
        a: "Sade bir ana ekranı, depolama için Uygulama Kitaplığı'nı ve en çok kullandığınız uygulamalara tek dokunuşla erişim için FolderMini gibi widget tabanlı bir başlatıcıyı birleştirmek en verimli kurulumdur. Ekranınızı temiz tutarken her şey tek dokunuş uzağında kalır.",
      },
      {
        q: 'FolderMini standart iOS klasörlerine iyi bir alternatif mi?',
        a: "Evet. Standart klasörler iki dokunuş gerektirir (önce klasörü, sonra uygulamayı açmak) ve yalnızca minik ikon önizlemeleri gösterir. FolderMini tam boyutlu gerçek ikonlar gösterir ve herhangi bir uygulamayı ana ekran veya kilit ekranı widget'ından tek dokunuşla açar.",
      },
      {
        q: 'FolderMini kullanmak için Kısayollar veya otomasyon gerekir mi?',
        a: "Hayır. FolderMini uygulama başlatmayı widget'ı üzerinden yerel olarak yönetir, bu yüzden Kısayollar uygulamasında bir şey oluşturmanıza gerek yoktur.",
      },
    ],
    supportHeading: 'Destek',
    supportPrefix:
      'Destek, özellik istekleri veya hata bildirimleri için iletişim:',
    legalHeading: 'Yasal',
    privacyLabel: 'Gizlilik Politikası',
    termsLabel: 'Kullanım Koşulları',
    jsonLdFeatures: [
      'Uygulamaları renkli özel klasörlere düzenleme',
      "Ana ekran ve kilit ekranı widget'ları",
      "Widget'lardan tek dokunuşla uygulama açma",
      'Gerçek, piksel mükemmelliğinde uygulama ikonları',
      'Küçük, orta ve büyük widget boyutları',
    ],
    breadcrumbHome: 'Ana Sayfa',
  },
}
