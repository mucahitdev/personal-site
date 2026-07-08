// Per-locale content for the FaceIdent page. Both the rendered copy and the
// JSON-LD structured data are built from these bundles so they never drift.

type Faq = { q: string; a: string }

export type FaceIdentContent = {
  metaTitle: string
  metaDescription: string
  keywords: string[]
  ogTitle: string
  ogDescription: string
  intro: string[]
  downloadCta: string
  featuresHeading: string
  features: string[]
  privacyHeading: string
  privacy: string
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

export const FACEIDENT_CONTENT: Record<'en' | 'tr', FaceIdentContent> = {
  en: {
    metaTitle: 'FaceIdent — On-Device Face & Pet Recognition Photo Organizer',
    metaDescription:
      'FaceIdent recognizes and groups faces and pets, tags objects and scenes, reads text, and powers smart search across your photo library — entirely on your iPhone. No account, no servers, no data ever leaves your device.',
    keywords: [
      'FaceIdent',
      'face recognition app',
      'on-device face recognition',
      'photo organizer',
      'pet recognition',
      'find people in photos',
      'private photo search',
      'offline face grouping',
      'photo library organizer iphone',
    ],
    ogTitle: 'FaceIdent — Private, On-Device Photo Organizer',
    ogDescription:
      'Recognize and group faces and pets, tag objects, read text, and search your photos — all on your iPhone. Nothing ever leaves your device.',
    intro: [
      'FaceIdent organizes your photo library the private way: it recognizes and groups the same person or pet across all your photos, tags objects and scenes, reads text inside images, and powers a fast, natural search — all entirely on your iPhone.',
      'There is no account, no sign-up, and no server. Every face, every group, and every search runs on-device using Apple’s Vision framework and machine-learning models bundled inside the app. Your photos and everything FaceIdent learns about them never leave your device.',
    ],
    downloadCta: 'Download on the App Store',
    featuresHeading: 'Key Features',
    features: [
      'Recognize and group the same person across your entire library',
      'Group pets too — not just people',
      'Object and scene recognition to tag what’s in each photo',
      'On-device text recognition (OCR) reads text inside your images',
      'Fast, natural search across faces, pets, objects, scenes, and text',
      'Name people and pets, and correct groupings with a tap',
      '100% on-device — no account, no servers, no network requests',
    ],
    privacyHeading: 'Private by Design',
    privacy:
      'FaceIdent makes no network requests and has no backend. Face and pet data — the mathematical embeddings used to group your photos — is stored only in a local database on your device, never uploaded, and never shared. iCloud and CloudKit sync are disabled, so nothing leaves your iPhone even to a cloud service. You can erase everything at any time from Settings.',
    audienceHeading: 'Who FaceIdent Is For',
    audienceIntro:
      'FaceIdent is built for anyone who wants to make sense of a large photo library without handing it to the cloud. It’s especially useful if you:',
    audience: [
      'Have thousands of photos and want to quickly find every shot of one person',
      'Want to group and find your pets across your library, not just people',
      'Care about privacy and refuse to upload your photos to someone else’s servers',
      'Want to search photos by what’s in them — objects, scenes, or the text inside them',
      'Prefer a tool that works fully offline, with no account and no subscription to browse your own memories',
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'What is FaceIdent?',
        a: 'FaceIdent is an iOS app that recognizes and groups faces and pets, tags objects and scenes, reads text inside images, and powers smart search across your photo library — all entirely on your device.',
      },
      {
        q: 'Does FaceIdent upload my photos or face data anywhere?',
        a: 'No. FaceIdent makes no network requests and has no servers. All processing runs on your device, and your photos, face data, and analysis results never leave your iPhone.',
      },
      {
        q: 'How does FaceIdent recognize the same person across photos?',
        a: 'For each detected face, FaceIdent creates a mathematical representation (a face embedding) using an on-device model, then groups faces that match. These embeddings are stored only in a local database on your device.',
      },
      {
        q: 'Can FaceIdent recognize pets, not just people?',
        a: 'Yes. FaceIdent detects and groups pets across your library alongside people, so you can find every photo of your dog or cat too.',
      },
      {
        q: 'Can I search my photos with FaceIdent?',
        a: 'Yes. FaceIdent lets you search across faces, pets, recognized objects and scenes, and text found inside your images — all processed on-device.',
      },
      {
        q: 'Does FaceIdent need an account or internet connection?',
        a: 'No. There is no account or sign-up, and FaceIdent works fully offline. It only needs access to your photo library to analyze your photos on your device.',
      },
      {
        q: 'Is FaceIdent free?',
        a: 'FaceIdent is free to download and includes an optional Pro upgrade with weekly, yearly, or lifetime options that unlock the full experience.',
      },
    ],
    supportHeading: 'Support',
    supportPrefix: 'For support, feature requests, or bug reports, contact:',
    legalHeading: 'Legal',
    privacyLabel: 'Privacy Policy',
    termsLabel: 'Terms of Use',
    jsonLdFeatures: [
      'On-device face and pet recognition and grouping',
      'Object and scene recognition',
      'On-device text recognition (OCR)',
      'Smart search across faces, objects, scenes, and text',
      '100% private — no account, no servers, no data leaves the device',
    ],
    breadcrumbHome: 'Home',
  },
  tr: {
    metaTitle: 'FaceIdent — Cihaz-İçi Yüz ve Evcil Hayvan Tanıma Fotoğraf Düzenleyici',
    metaDescription:
      'FaceIdent, yüzleri ve evcil hayvanları tanıyıp gruplar, nesne ve sahneleri etiketler, metin okur ve fotoğraf kitaplığında akıllı aramayı güçlendirir — tamamen iPhone’unda. Hesap yok, sunucu yok, hiçbir veri cihazından çıkmaz.',
    keywords: [
      'FaceIdent',
      'yüz tanıma uygulaması',
      'cihaz içi yüz tanıma',
      'fotoğraf düzenleyici',
      'evcil hayvan tanıma',
      'fotoğraflarda kişi bulma',
      'gizli fotoğraf arama',
      'çevrimdışı yüz gruplama',
      'iphone fotoğraf kitaplığı düzenleyici',
    ],
    ogTitle: 'FaceIdent — Gizli, Cihaz-İçi Fotoğraf Düzenleyici',
    ogDescription:
      'Yüzleri ve evcil hayvanları tanıyıp grupla, nesneleri etiketle, metin oku ve fotoğraflarını ara — hepsi iPhone’unda. Hiçbir şey cihazından çıkmaz.',
    intro: [
      'FaceIdent, fotoğraf kitaplığını gizli yoldan düzenler: aynı kişiyi veya evcil hayvanı tüm fotoğrafların arasında tanıyıp gruplar, nesne ve sahneleri etiketler, görüntülerdeki metni okur ve hızlı, doğal bir aramayı güçlendirir — hepsi tamamen iPhone’unda.',
      'Hesap yok, kayıt yok, sunucu yok. Her yüz, her grup ve her arama, Apple’ın Vision çerçevesi ve uygulamanın içine gömülü makine öğrenmesi modelleriyle cihaz-içinde çalışır. Fotoğrafların ve FaceIdent’in onlar hakkında öğrendiği her şey cihazından asla çıkmaz.',
    ],
    downloadCta: 'App Store’dan İndir',
    featuresHeading: 'Öne Çıkan Özellikler',
    features: [
      'Aynı kişiyi tüm kitaplığın boyunca tanı ve grupla',
      'Sadece insanları değil, evcil hayvanları da grupla',
      'Her fotoğraftakini etiketlemek için nesne ve sahne tanıma',
      'Görüntülerdeki metni okuyan cihaz-içi metin tanıma (OCR)',
      'Yüzler, evcil hayvanlar, nesneler, sahneler ve metin arasında hızlı, doğal arama',
      'Kişileri ve evcil hayvanları adlandır, gruplamaları tek dokunuşla düzelt',
      '%100 cihaz-içi — hesap yok, sunucu yok, ağ isteği yok',
    ],
    privacyHeading: 'Tasarım Gereği Gizli',
    privacy:
      'FaceIdent hiçbir ağ isteği yapmaz ve arka ucu (sunucusu) yoktur. Yüz ve evcil hayvan verisi — fotoğraflarını gruplamak için kullanılan matematiksel embedding’ler — yalnızca cihazındaki yerel bir veritabanında saklanır, asla yüklenmez ve asla paylaşılmaz. iCloud ve CloudKit eşitlemesi kapalıdır; bu yüzden hiçbir şey bir bulut hizmetine dahi gitmez. Her şeyi istediğin zaman Ayarlar’dan silebilirsin.',
    audienceHeading: 'FaceIdent Kimler İçin?',
    audienceIntro:
      'FaceIdent, büyük bir fotoğraf kitaplığını buluta teslim etmeden anlamlandırmak isteyen herkes için tasarlandı. Özellikle şunlar için kullanışlı:',
    audience: [
      'Binlerce fotoğrafı olan ve bir kişinin tüm karelerini hızlıca bulmak isteyenler',
      'Sadece insanları değil, evcil hayvanlarını da kitaplığı boyunca gruplayıp bulmak isteyenler',
      'Gizliliğine önem veren ve fotoğraflarını başkasının sunucusuna yüklemeyi reddedenler',
      'Fotoğrafları içindekilere göre aramak isteyenler — nesneler, sahneler veya içindeki metin',
      'Kendi anılarına bakmak için hesap ve abonelik gerektirmeyen, tamamen çevrimdışı çalışan bir araç tercih edenler',
    ],
    faqHeading: 'Sık Sorulan Sorular',
    faqs: [
      {
        q: 'FaceIdent nedir?',
        a: 'FaceIdent, yüzleri ve evcil hayvanları tanıyıp gruplayan, nesne ve sahneleri etiketleyen, görüntülerdeki metni okuyan ve fotoğraf kitaplığında akıllı aramayı güçlendiren bir iOS uygulamasıdır — hepsi tamamen cihazında.',
      },
      {
        q: 'FaceIdent fotoğraflarımı veya yüz verimi bir yere yükler mi?',
        a: 'Hayır. FaceIdent hiçbir ağ isteği yapmaz ve sunucusu yoktur. Tüm işlemler cihazında çalışır; fotoğrafların, yüz verin ve analiz sonuçların iPhone’undan asla çıkmaz.',
      },
      {
        q: 'FaceIdent aynı kişiyi fotoğraflar arasında nasıl tanır?',
        a: 'FaceIdent, tespit ettiği her yüzden cihaz-içi bir modelle matematiksel bir temsil (yüz embedding’i) oluşturur, sonra eşleşen yüzleri gruplar. Bu embedding’ler yalnızca cihazındaki yerel bir veritabanında saklanır.',
      },
      {
        q: 'FaceIdent sadece insanları değil, evcil hayvanları da tanır mı?',
        a: 'Evet. FaceIdent, insanların yanı sıra evcil hayvanları da kitaplığın boyunca tespit edip gruplar; böylece köpeğinin veya kedinin her fotoğrafını da bulabilirsin.',
      },
      {
        q: 'FaceIdent ile fotoğraflarımı arayabilir miyim?',
        a: 'Evet. FaceIdent; yüzler, evcil hayvanlar, tanınan nesne ve sahneler ile görüntülerinde bulunan metin arasında arama yapmanı sağlar — hepsi cihaz-içinde işlenir.',
      },
      {
        q: 'FaceIdent hesap veya internet bağlantısı gerektirir mi?',
        a: 'Hayır. Hesap veya kayıt yoktur ve FaceIdent tamamen çevrimdışı çalışır. Yalnızca fotoğraflarını cihazında analiz edebilmek için fotoğraf kitaplığına erişime ihtiyaç duyar.',
      },
      {
        q: 'FaceIdent ücretsiz mi?',
        a: 'FaceIdent ücretsiz indirilir ve tam deneyimin kilidini açan haftalık, yıllık veya ömür boyu seçenekleriyle isteğe bağlı bir Pro yükseltmesi içerir.',
      },
    ],
    supportHeading: 'Destek',
    supportPrefix:
      'Destek, özellik istekleri veya hata bildirimleri için iletişim:',
    legalHeading: 'Yasal',
    privacyLabel: 'Gizlilik Politikası',
    termsLabel: 'Kullanım Koşulları',
    jsonLdFeatures: [
      'Cihaz-içi yüz ve evcil hayvan tanıma ve gruplama',
      'Nesne ve sahne tanıma',
      'Cihaz-içi metin tanıma (OCR)',
      'Yüzler, nesneler, sahneler ve metin arasında akıllı arama',
      '%100 gizli — hesap yok, sunucu yok, veri cihazdan çıkmaz',
    ],
    breadcrumbHome: 'Ana Sayfa',
  },
}
