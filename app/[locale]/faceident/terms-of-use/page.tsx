import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { setRequestLocale } from 'next-intl/server'

const SUPPORT_EMAIL = 'kokdemir20@gmail.com'

function pickLocale(locale: string): 'en' | 'tr' {
  return locale === 'tr' ? 'tr' : 'en'
}

const TERMS = {
  en: {
    metaTitle: 'FaceIdent Terms of Use',
    metaDescription: 'Terms of Use for the FaceIdent iOS application.',
    title: 'FaceIdent Terms of Use',
    effective: 'Effective date: July 4, 2026',
    intro: `By downloading or using FaceIdent, you agree to these Terms of Use. If you do not agree, please do not use the app.`,
    licenseH: 'License',
    license: `FaceIdent grants you a personal, non-exclusive, non-transferable, revocable license to use the app on Apple devices you own or control, for your personal, non-commercial use, subject to these Terms and the Apple Media Services Terms and Conditions.`,
    contentH: 'Your Photos and Content',
    content: `FaceIdent processes your photos on your device to provide its features. You keep all rights to your photos, and FaceIdent claims no ownership of them. You are responsible for ensuring that you have the right to access and analyze the photos in your library.`,
    useH: 'Acceptable Use',
    use: [
      `Use FaceIdent only for lawful purposes and in compliance with all applicable laws, including laws governing facial recognition, biometric data, and privacy in your jurisdiction.`,
      `Do not use FaceIdent to identify, track, or profile other people without a lawful basis or, where required, their consent.`,
      `Do not reverse-engineer, decompile, modify, or misuse the app or the machine-learning models bundled within it.`,
    ],
    accuracyH: 'Accuracy & Intended Use',
    accuracy: `FaceIdent's recognition, grouping, and search results are generated automatically by on-device models and may be inaccurate or incomplete. FaceIdent is a personal photo-organization tool. It is not intended for identity verification, security, surveillance, law-enforcement, legal, or any other high-stakes decision-making.`,
    warrantyH: 'No Warranty',
    warranty: `FaceIdent is provided "as is" and "as available," without warranties of any kind, whether express or implied, including any implied warranties of merchantability or fitness for a particular purpose. We do not warrant that the app will be error-free or uninterrupted.`,
    liabilityH: 'Limitation of Liability',
    liability: `To the maximum extent permitted by applicable law, the developer shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, FaceIdent.`,
    changesH: 'Changes',
    changes: `We may update the app and these Terms from time to time. Continued use of FaceIdent after changes take effect constitutes acceptance of the updated Terms.`,
    lawH: 'Governing Law',
    law: `These Terms are governed by the laws of the Republic of Türkiye, without regard to its conflict-of-law rules.`,
    contactH: 'Contact',
    contact: `If you have questions about these Terms, contact: `,
    privacyLink: 'Read FaceIdent Privacy Policy',
  },
  tr: {
    metaTitle: 'FaceIdent Kullanım Koşulları',
    metaDescription: 'FaceIdent iOS uygulaması için Kullanım Koşulları.',
    title: 'FaceIdent Kullanım Koşulları',
    effective: 'Yürürlük tarihi: 4 Temmuz 2026',
    intro: `FaceIdent'i indirerek veya kullanarak bu Kullanım Koşullarını kabul etmiş olursun. Kabul etmiyorsan lütfen uygulamayı kullanma.`,
    licenseH: 'Lisans',
    license: `FaceIdent, uygulamayı sahibi olduğun veya kontrol ettiğin Apple cihazlarında, kişisel ve ticari olmayan kullanımın için; bu Koşullara ve Apple Medya Hizmetleri Şartlarına tabi olarak kullanman için sana kişisel, münhasır olmayan, devredilemez ve iptal edilebilir bir lisans verir.`,
    contentH: 'Fotoğrafların ve İçeriğin',
    content: `FaceIdent, özelliklerini sunmak için fotoğraflarını cihazında işler. Fotoğraflarına ilişkin tüm haklar sende kalır; FaceIdent onlar üzerinde hiçbir mülkiyet iddia etmez. Kitaplığındaki fotoğraflara erişme ve onları analiz etme hakkına sahip olduğundan emin olmak senin sorumluluğundadır.`,
    useH: 'Kabul Edilebilir Kullanım',
    use: [
      `FaceIdent'i yalnızca yasal amaçlarla ve bulunduğun ülkedeki yüz tanıma, biyometrik veri ve gizlilik yasaları dahil tüm ilgili yasalara uygun şekilde kullan.`,
      `FaceIdent'i başka kişileri yasal bir dayanak olmadan veya gerektiğinde onayları olmadan tanımlamak, izlemek ya da profillemek için kullanma.`,
      `Uygulamayı veya içindeki makine öğrenmesi modellerini tersine mühendislikle çözme, kaynak koda dönüştürme, değiştirme veya kötüye kullanma.`,
    ],
    accuracyH: 'Doğruluk ve Amaçlanan Kullanım',
    accuracy: `FaceIdent'in tanıma, gruplama ve arama sonuçları cihaz-içi modeller tarafından otomatik üretilir ve hatalı veya eksik olabilir. FaceIdent kişisel bir fotoğraf düzenleme aracıdır. Kimlik doğrulama, güvenlik, gözetim, kolluk, hukuki veya başka herhangi bir yüksek riskli karar verme amacıyla kullanılmak üzere tasarlanmamıştır.`,
    warrantyH: 'Garanti Yokluğu',
    warranty: `FaceIdent "olduğu gibi" ve "mevcut haliyle", satılabilirlik veya belirli bir amaca uygunluk dahil açık ya da zımni hiçbir garanti olmaksızın sunulur. Uygulamanın hatasız veya kesintisiz olacağını garanti etmeyiz.`,
    liabilityH: 'Sorumluluğun Sınırlandırılması',
    liability: `Yürürlükteki yasaların izin verdiği azami ölçüde, geliştirici; FaceIdent'i kullanmandan veya kullanamamandan doğan hiçbir dolaylı, arızi, özel veya sonuçsal zarardan sorumlu tutulamaz.`,
    changesH: 'Değişiklikler',
    changes: `Uygulamayı ve bu Koşulları zaman zaman güncelleyebiliriz. Değişiklikler yürürlüğe girdikten sonra FaceIdent'i kullanmaya devam etmen, güncellenen Koşulları kabul ettiğin anlamına gelir.`,
    lawH: 'Uygulanacak Hukuk',
    law: `Bu Koşullar, kanunlar ihtilafı kurallarına bakılmaksızın Türkiye Cumhuriyeti yasalarına tabidir.`,
    contactH: 'İletişim',
    contact: `Bu Koşullar hakkında sorun varsa iletişime geç: `,
    privacyLink: `FaceIdent Gizlilik Politikası'nı oku`,
  },
} as const

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const c = TERMS[pickLocale(locale)]
  const canonical =
    locale === 'tr' ? '/tr/faceident/terms-of-use' : '/faceident/terms-of-use'
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical,
      languages: {
        en: '/faceident/terms-of-use',
        tr: '/tr/faceident/terms-of-use',
        'x-default': '/faceident/terms-of-use',
      },
    },
  }
}

export default async function FaceIdentTermsOfUsePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const c = TERMS[pickLocale(locale)]
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
          <h2 className={h2}>{c.licenseH}</h2>
          <p>{c.license}</p>
        </section>

        <section className="space-y-2">
          <h2 className={h2}>{c.contentH}</h2>
          <p>{c.content}</p>
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
          <h2 className={h2}>{c.accuracyH}</h2>
          <p>{c.accuracy}</p>
        </section>

        <section className="space-y-2">
          <h2 className={h2}>{c.warrantyH}</h2>
          <p>{c.warranty}</p>
        </section>

        <section className="space-y-2">
          <h2 className={h2}>{c.liabilityH}</h2>
          <p>{c.liability}</p>
        </section>

        <section className="space-y-2">
          <h2 className={h2}>{c.changesH}</h2>
          <p>{c.changes}</p>
        </section>

        <section className="space-y-2">
          <h2 className={h2}>{c.lawH}</h2>
          <p>{c.law}</p>
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
          <Link className="underline" href="/faceident/privacy-policy">
            {c.privacyLink}
          </Link>
        </p>
      </article>
    </main>
  )
}
