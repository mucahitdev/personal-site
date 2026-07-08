import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { setRequestLocale } from 'next-intl/server'

const SUPPORT_EMAIL = 'kokdemir20@gmail.com'

function pickLocale(locale: string): 'en' | 'tr' {
  return locale === 'tr' ? 'tr' : 'en'
}

const PRIVACY = {
  en: {
    metaTitle: 'FaceIdent Privacy Policy',
    metaDescription:
      'Privacy Policy for the FaceIdent iOS app — everything runs on your device and no data ever leaves it.',
    title: 'FaceIdent Privacy Policy',
    effective: 'Effective date: July 4, 2026',
    intro: `FaceIdent organizes your photo library — recognizing and grouping faces and pets, identifying objects and scenes, reading text, and powering search — entirely on your device. FaceIdent has no account, no sign-up, and no servers. Your photos and everything FaceIdent learns about them stay on your device.`,
    onDeviceH: 'Everything Runs On Your Device',
    onDevice: `All processing — face and pet detection and recognition, object and scene recognition, text recognition (OCR), and search — runs locally on your device using Apple's Vision framework and machine-learning models bundled inside the app. FaceIdent makes no network requests and has no backend. No photo, face data, or analysis result is ever uploaded, transmitted, or shared.`,
    photosH: 'Photo Library Access',
    photos: `FaceIdent needs access to your photo library so it can analyze your photos on your device. It reads image data to detect faces, pets, objects, scenes, and text. FaceIdent does not copy your original photos into its own storage; it references them by their system identifier and stores only the analysis results locally. FaceIdent does not use your camera and does not access your contacts, messages, or location.`,
    faceH: 'Face & Pet Recognition Data',
    face: `To group the same person or pet across your photos, FaceIdent creates a mathematical representation (a "face embedding") from each detected face using an on-device model. Because this data is derived from faces, we treat it as sensitive. These embeddings — together with the photo regions they came from, quality scores, and any names or corrections you provide — are stored only on your device, in a local database. They are never sent off your device and are used solely to group and search your own photos. iCloud and CloudKit sync are disabled, so this data does not leave your device even to a cloud service.`,
    storeH: 'What Is Stored (On Your Device Only)',
    store: [
      `Face and pet embeddings and the groups they form, plus any names you assign`,
      `Object and scene tags, and text extracted from your photos (OCR)`,
      `Photo embeddings used for on-device search`,
      `A small app setting (for example, whether the first scan has run)`,
      `All of the above is stored locally on your device; none of it is stored on a server.`,
    ],
    notH: 'What FaceIdent Does Not Do',
    not: [
      `No account or sign-up`,
      `No servers, cloud storage, or network transmission of your data`,
      `No analytics, tracking, or advertising`,
      `No third-party SDKs`,
      `We never sell or share your personal data`,
    ],
    retentionH: 'Data Retention & Deletion',
    retention: `Your analysis results remain on your device until you clear them. You can erase everything at any time using "Reset Data" in Settings, and uninstalling FaceIdent removes all of its local data.`,
    childrenH: `Children's Privacy`,
    children: `FaceIdent is not directed to children under 13, and we do not knowingly collect personal information from children.`,
    changesH: 'Changes to This Policy',
    changes: `We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.`,
    contactH: 'Contact',
    contact: `If you have questions about this Privacy Policy, contact: `,
    termsLink: 'Read FaceIdent Terms of Use',
  },
  tr: {
    metaTitle: 'FaceIdent Gizlilik Politikası',
    metaDescription:
      'FaceIdent iOS uygulaması için Gizlilik Politikası — her şey cihazında çalışır, hiçbir veri dışarı çıkmaz.',
    title: 'FaceIdent Gizlilik Politikası',
    effective: 'Yürürlük tarihi: 4 Temmuz 2026',
    intro: `FaceIdent, fotoğraf kitaplığını düzenler — yüzleri ve evcil hayvanları tanıyıp gruplar, nesneleri ve sahneleri tanır, metin okur ve aramayı güçlendirir — tamamen senin cihazında. FaceIdent'in hesabı, kaydı ve sunucusu yoktur. Fotoğrafların ve FaceIdent'in onlar hakkında öğrendiği her şey cihazında kalır.`,
    onDeviceH: 'Her Şey Cihazında Çalışır',
    onDevice: `Tüm işlemler — yüz ve evcil hayvan tespiti/tanıması, nesne ve sahne tanıma, metin tanıma (OCR) ve arama — Apple'ın Vision çerçevesi ve uygulamanın içine gömülü makine öğrenmesi modelleri kullanılarak cihazında yerel olarak çalışır. FaceIdent hiçbir ağ isteği yapmaz ve arka uç (sunucu) yoktur. Hiçbir fotoğraf, yüz verisi veya analiz sonucu yüklenmez, iletilmez veya paylaşılmaz.`,
    photosH: 'Fotoğraf Kitaplığı Erişimi',
    photos: `FaceIdent, fotoğraflarını cihazında analiz edebilmek için fotoğraf kitaplığına erişime ihtiyaç duyar. Yüzleri, evcil hayvanları, nesneleri, sahneleri ve metni tespit etmek için görüntü verisini okur. FaceIdent orijinal fotoğraflarını kendi deposuna kopyalamaz; onları sistem tanımlayıcılarıyla referanslar ve yalnızca analiz sonuçlarını yerel olarak saklar. FaceIdent kameranı kullanmaz; kişilerine, mesajlarına veya konumuna erişmez.`,
    faceH: 'Yüz ve Evcil Hayvan Tanıma Verisi',
    face: `Aynı kişiyi veya evcil hayvanı fotoğrafların arasında gruplamak için FaceIdent, tespit ettiği her yüzden cihaz-içi bir modelle matematiksel bir temsil (bir "yüz embedding'i") oluşturur. Bu veri yüzlerden türetildiği için hassas olarak ele alınır. Bu embedding'ler — geldikleri fotoğraf bölgeleri, kalite puanları ve verdiğin isim veya düzeltmelerle birlikte — yalnızca cihazında, yerel bir veritabanında saklanır. Cihazından hiçbir zaman gönderilmez ve yalnızca kendi fotoğraflarını gruplamak ve aramak için kullanılır. iCloud ve CloudKit eşitlemesi kapalıdır; bu veri bir bulut hizmetine dahi gitmez.`,
    storeH: 'Neler Saklanır (Yalnızca Cihazında)',
    store: [
      `Yüz ve evcil hayvan embedding'leri ile oluşturdukları gruplar ve atadığın isimler`,
      `Nesne ve sahne etiketleri ve fotoğraflarından çıkarılan metin (OCR)`,
      `Cihaz-içi arama için kullanılan fotoğraf embedding'leri`,
      `Küçük bir uygulama ayarı (örneğin ilk taramanın yapılıp yapılmadığı)`,
      `Yukarıdakilerin tümü cihazında yerel olarak saklanır; hiçbiri bir sunucuda tutulmaz.`,
    ],
    notH: 'FaceIdent Neleri Yapmaz',
    not: [
      `Hesap veya kayıt yok`,
      `Sunucu, bulut depolama veya verilerinin ağ üzerinden iletimi yok`,
      `Analitik, izleme veya reklam yok`,
      `Üçüncü taraf SDK yok`,
      `Kişisel verilerini asla satmaz veya paylaşmayız`,
    ],
    retentionH: 'Veri Saklama ve Silme',
    retention: `Analiz sonuçların, sen temizleyene kadar cihazında kalır. Ayarlar'daki "Verileri Sıfırla" ile her şeyi istediğin zaman silebilirsin; FaceIdent'i kaldırmak da tüm yerel verilerini kaldırır.`,
    childrenH: 'Çocukların Gizliliği',
    children: `FaceIdent 13 yaşından küçük çocuklara yönelik değildir ve çocuklardan bilerek kişisel bilgi toplamayız.`,
    changesH: 'Bu Politikadaki Değişiklikler',
    changes: `Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Güncellemeler, revize edilmiş bir yürürlük tarihiyle bu sayfada yayınlanır.`,
    contactH: 'İletişim',
    contact: `Bu Gizlilik Politikası hakkında sorun varsa iletişime geç: `,
    termsLink: `FaceIdent Kullanım Koşulları'nı oku`,
  },
} as const

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const c = PRIVACY[pickLocale(locale)]
  const canonical =
    locale === 'tr'
      ? '/tr/faceident/privacy-policy'
      : '/faceident/privacy-policy'
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical,
      languages: {
        en: '/faceident/privacy-policy',
        tr: '/tr/faceident/privacy-policy',
        'x-default': '/faceident/privacy-policy',
      },
    },
  }
}

export default async function FaceIdentPrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const c = PRIVACY[pickLocale(locale)]
  const h2 = 'text-lg font-medium text-zinc-900 dark:text-zinc-100'

  return (
    <main className="pb-10">
      <article className="space-y-6 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            {c.title}
          </h1>
          <p>{c.effective}</p>
        </div>

        <p>{c.intro}</p>

        <section className="space-y-2">
          <h2 className={h2}>{c.onDeviceH}</h2>
          <p>{c.onDevice}</p>
        </section>

        <section className="space-y-2">
          <h2 className={h2}>{c.photosH}</h2>
          <p>{c.photos}</p>
        </section>

        <section className="space-y-2">
          <h2 className={h2}>{c.faceH}</h2>
          <p>{c.face}</p>
        </section>

        <section className="space-y-2">
          <h2 className={h2}>{c.storeH}</h2>
          <ul className="list-disc space-y-1 pl-5">
            {c.store.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className={h2}>{c.notH}</h2>
          <ul className="list-disc space-y-1 pl-5">
            {c.not.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className={h2}>{c.retentionH}</h2>
          <p>{c.retention}</p>
        </section>

        <section className="space-y-2">
          <h2 className={h2}>{c.childrenH}</h2>
          <p>{c.children}</p>
        </section>

        <section className="space-y-2">
          <h2 className={h2}>{c.changesH}</h2>
          <p>{c.changes}</p>
        </section>

        <section className="space-y-2">
          <h2 className={h2}>{c.contactH}</h2>
          <p>
            {c.contact}
            <a className="underline" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
          </p>
        </section>

        <p className="pt-2">
          <Link className="underline" href="/faceident/terms-of-use">
            {c.termsLink}
          </Link>
        </p>
      </article>
    </main>
  )
}
