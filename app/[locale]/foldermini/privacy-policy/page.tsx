import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { setRequestLocale } from 'next-intl/server'

const GOOGLE_PRIVACY = 'https://policies.google.com/privacy'
const ADAPTY_PRIVACY = 'https://adapty.io/privacy/'

function pickLocale(locale: string): 'en' | 'tr' {
  return locale === 'tr' ? 'tr' : 'en'
}

const PRIVACY = {
  en: {
    metaTitle: 'FolderMini Privacy Policy',
    metaDescription: 'Privacy Policy for the FolderMini iOS application.',
    title: 'FolderMini Privacy Policy',
    effective: 'Effective date: July 4, 2026',
    intro: `FolderMini helps you organize your installed apps into folders and launch them from Home Screen and Lock Screen widgets. We respect your privacy and keep your data on your device whenever possible. FolderMini does not require account creation and does not run its own servers to collect your data.`,
    accessH: 'Information We Access',
    access: [
      `Your folder layout and the apps you add to folders are stored locally on your device so your widgets can display and launch them.`,
      `App icon artwork may be fetched from the public iTunes Search service to render icons; results are cached on your device.`,
      `FolderMini does not read your messages, contacts, photos, or location.`,
    ],
    useH: 'How Your Data Is Used',
    use: [
      `Your folder configuration is processed on-device to render widgets and launch your apps.`,
      `FolderMini does not upload your folder data or app list to a FolderMini server.`,
      `We do not sell your personal data.`,
    ],
    adH: 'Advertising',
    adText1: `FolderMini may display ads through Google AdMob. To serve and measure ads, AdMob may process limited device information and identifiers, such as the advertising identifier, in accordance with `,
    googleLink: `Google's Privacy Policy`,
    adText2: `. Where required, FolderMini asks for your permission before using tracking identifiers, and you can change this at any time in iOS Settings.`,
    analyticsH: 'Analytics & Diagnostics',
    analyticsText1: `FolderMini uses Google Firebase (Analytics and Crashlytics) to understand how the app is used and to detect and fix crashes. This includes anonymous usage events, device and app information, an app-generated identifier, and crash and performance diagnostics. This data is processed by Google in accordance with `,
    analyticsText2: `. It is used to improve the app and is not used to identify you personally. Where required, analytics is subject to your consent, which you can change at any time in iOS Settings.`,
    subsH: 'Subscriptions and Purchases',
    subs1: `FolderMini offers an optional premium upgrade ("FolderMini Pro") as an auto-renewable subscription and as a one-time lifetime purchase. Payments are processed by Apple through your App Store account; we never receive or store your payment card details.`,
    subs2a: `To validate purchases, restore them across your devices, and manage your premium access, FolderMini uses `,
    adaptyLink: 'Adapty',
    subs2b: `, a third-party subscription-management service. Adapty processes purchase and transaction information and an app-generated identifier for this purpose, in accordance with its own privacy policy. We do not use this information to identify you personally.`,
    retentionH: 'Data Retention',
    retention: `Your folder configuration and cached icons remain on your device until you delete folders or remove the app. Uninstalling FolderMini removes its locally stored data.`,
    childrenH: `Children's Privacy`,
    children: `FolderMini is not directed to children under 13, and we do not knowingly collect personal information from children.`,
    changesH: 'Changes to This Policy',
    changes: `We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.`,
    contactH: 'Contact',
    contact: `If you have questions about this Privacy Policy, contact: `,
    termsLink: 'Read FolderMini Terms of Use',
  },
  tr: {
    metaTitle: 'FolderMini Gizlilik Politikası',
    metaDescription: 'FolderMini iOS uygulaması için Gizlilik Politikası.',
    title: 'FolderMini Gizlilik Politikası',
    effective: 'Yürürlük tarihi: 4 Temmuz 2026',
    intro: `FolderMini, yüklü uygulamalarını klasörlere ayırıp Ana Ekran ve Kilit Ekranı widget'larından açmana yardımcı olur. Gizliliğine saygı duyar ve mümkün olduğunda verilerini cihazında tutarız. FolderMini hesap oluşturmayı gerektirmez ve verilerini toplamak için kendi sunucularını çalıştırmaz.`,
    accessH: 'Eriştiğimiz Bilgiler',
    access: [
      `Klasör düzenin ve klasörlere eklediğin uygulamalar, widget'ların bunları gösterip açabilmesi için cihazında yerel olarak saklanır.`,
      `Uygulama ikonlarını göstermek için ikon görselleri herkese açık iTunes Search servisinden çekilebilir; sonuçlar cihazında önbelleğe alınır.`,
      `FolderMini mesajlarını, kişilerini, fotoğraflarını veya konumunu okumaz.`,
    ],
    useH: 'Verilerin Nasıl Kullanılır',
    use: [
      `Klasör yapılandırman, widget'ları oluşturmak ve uygulamalarını açmak için cihazda işlenir.`,
      `FolderMini klasör verilerini veya uygulama listeni bir FolderMini sunucusuna yüklemez.`,
      `Kişisel verilerini satmayız.`,
    ],
    adH: 'Reklamlar',
    adText1: `FolderMini, Google AdMob aracılığıyla reklam gösterebilir. Reklamları sunmak ve ölçmek için AdMob, reklam tanımlayıcısı gibi sınırlı cihaz bilgilerini ve tanımlayıcıları `,
    googleLink: `Google'ın Gizlilik Politikası`,
    adText2: ` uyarınca işleyebilir. Gereken yerlerde FolderMini, izleme tanımlayıcılarını kullanmadan önce iznini ister; bunu istediğin zaman iOS Ayarlar'dan değiştirebilirsin.`,
    analyticsH: 'Analitik ve Tanılama',
    analyticsText1: `FolderMini, uygulamanın nasıl kullanıldığını anlamak ve çökmeleri tespit edip düzeltmek için Google Firebase (Analytics ve Crashlytics) kullanır. Bu; anonim kullanım olaylarını, cihaz ve uygulama bilgilerini, uygulama tarafından üretilen bir tanımlayıcıyı ve çökme/performans tanılamalarını içerir. Bu veriler Google tarafından `,
    analyticsText2: ` uyarınca işlenir. Uygulamayı geliştirmek için kullanılır ve seni kişisel olarak tanımlamak için kullanılmaz. Gereken yerlerde analitik iznine tabidir; bunu istediğin zaman iOS Ayarlar'dan değiştirebilirsin.`,
    subsH: 'Abonelikler ve Satın Almalar',
    subs1: `FolderMini, isteğe bağlı bir premium yükseltme ("FolderMini Pro") sunar; hem otomatik yenilenen abonelik hem de tek seferlik ömür boyu satın alma olarak. Ödemeler, App Store hesabın üzerinden Apple tarafından işlenir; ödeme kartı bilgilerini asla almaz veya saklamayız.`,
    subs2a: `Satın almaları doğrulamak, cihazların arasında geri yüklemek ve premium erişimini yönetmek için FolderMini, üçüncü taraf abonelik yönetim servisi `,
    adaptyLink: 'Adapty',
    subs2b: ` kullanır. Adapty bu amaçla satın alma/işlem bilgilerini ve uygulama tarafından üretilen bir tanımlayıcıyı kendi gizlilik politikası uyarınca işler. Bu bilgileri seni kişisel olarak tanımlamak için kullanmayız.`,
    retentionH: 'Veri Saklama',
    retention: `Klasör yapılandırman ve önbelleğe alınan ikonlar, klasörleri silene veya uygulamayı kaldırana kadar cihazında kalır. FolderMini'yi kaldırmak, yerel olarak saklanan verilerini siler.`,
    childrenH: 'Çocukların Gizliliği',
    children: `FolderMini 13 yaşından küçük çocuklara yönelik değildir ve çocuklardan bilerek kişisel bilgi toplamayız.`,
    changesH: 'Bu Politikadaki Değişiklikler',
    changes: `Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Güncellemeler, revize edilmiş bir yürürlük tarihiyle bu sayfada yayınlanır.`,
    contactH: 'İletişim',
    contact: `Bu Gizlilik Politikası hakkında sorun varsa iletişime geç: `,
    termsLink: `FolderMini Kullanım Koşulları'nı oku`,
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
      ? '/tr/foldermini/privacy-policy'
      : '/foldermini/privacy-policy'
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical,
      languages: {
        en: '/foldermini/privacy-policy',
        tr: '/tr/foldermini/privacy-policy',
        'x-default': '/foldermini/privacy-policy',
      },
    },
  }
}

export default async function FolderMiniPrivacyPolicyPage({
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
          <h2 className={h2}>{c.accessH}</h2>
          <ul className="list-disc space-y-1 pl-5">
            {c.access.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className={h2}>{c.useH}</h2>
          <ul className="list-disc space-y-1 pl-5">
            {c.use.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className={h2}>{c.adH}</h2>
          <p>
            {c.adText1}
            <a
              className="underline"
              href={GOOGLE_PRIVACY}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.googleLink}
            </a>
            {c.adText2}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={h2}>{c.analyticsH}</h2>
          <p>
            {c.analyticsText1}
            <a
              className="underline"
              href={GOOGLE_PRIVACY}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.googleLink}
            </a>
            {c.analyticsText2}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className={h2}>{c.subsH}</h2>
          <p>{c.subs1}</p>
          <p>
            {c.subs2a}
            <a
              className="underline"
              href={ADAPTY_PRIVACY}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c.adaptyLink}
            </a>
            {c.subs2b}
          </p>
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
            <a className="underline" href="mailto:infokoksoft@gmail.com">
              infokoksoft@gmail.com
            </a>
          </p>
        </section>

        <p className="pt-2">
          <Link className="underline" href="/foldermini/terms-of-use">
            {c.termsLink}
          </Link>
        </p>
      </article>
    </main>
  )
}
