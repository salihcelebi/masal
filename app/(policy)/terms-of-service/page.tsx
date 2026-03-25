import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hizmet Şartları | Yapay Zekâ Açılış Sayfası ve Blog Oluşturucu',
  description: 'Hizmetlerimizi kullanırken geçerli olan şartlar ve koşullar',
}

export default function TermsOfService() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Hizmet Şartları</h1>

      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600">Son güncelleme tarihi: 20 Mart 2024</p>

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">1. Hizmet Açıklaması</h2>
          <p>
            Yapay zekâ destekli içerik üretim hizmetleri sunarız; bunlara aşağıdakiler dâhildir ancak
            bunlarla sınırlı değildir:
          </p>
          <ul className="mt-2 list-disc pl-6">
            <li>Yapay zekâ açılış sayfası üretimi</li>
            <li>Yapay zekâ blog içeriği üretimi</li>
            <li>Yapay zekâ karakter üretimi</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">2. Kullanıcı Sorumlulukları</h2>
          <p>Kullanıcı olarak şunları kabul edersiniz:</p>
          <ul className="mt-2 list-disc pl-6">
            <li>Doğru kayıt bilgileri sağlamak</li>
            <li>Hesap etkinliklerinden sorumlu olmak</li>
            <li>Hizmetimizi kötüye kullanmamak veya yasa dışı amaçlarla kullanmamak</li>
            <li>Üçüncü taraf fikri mülkiyet haklarını ihlal etmemek</li>
            <li>Yürürlükteki tüm mevzuata uymak</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">3. Fikri Mülkiyet</h2>
          <p>Yapay zekâ ile üretilen içeriklere ilişkin fikri mülkiyet esasları:</p>
          <ul className="mt-2 list-disc pl-6">
            <li>Hizmetimiz üzerinden üretilen içeriklerin hakları kullanıcıya aittir</li>
            <li>Hizmet, marka ve teknik altyapı üzerindeki haklar bize aittir</li>
            <li>Kullanıcı, yüklediği içeriğin üçüncü taraf haklarını ihlal etmediğini garanti eder</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">4. Hizmet Sınırları</h2>
          <p>Şu hakları saklı tutarız:</p>
          <ul className="mt-2 list-disc pl-6">
            <li>Hizmetin herhangi bir bölümünü değiştirmek veya sonlandırmak</li>
            <li>Kullanım kotası uygulamak</li>
            <li>Uygunsuz içerikleri reddetmek veya kaldırmak</li>
            <li>Kuralları ihlal eden hesapları askıya almak veya kapatmak</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">5. Sorumluluk Reddi</h2>
          <p>Hizmetimiz “olduğu gibi” sunulur ve:</p>
          <ul className="mt-2 list-disc pl-6">
            <li>Kesintisiz veya hatasız çalışmayı garanti etmeyiz</li>
            <li>Yapay zekâ çıktılarının mutlak doğruluğunu garanti etmeyiz</li>
            <li>Üretilen içeriklerin kullanımından doğan sonuçlardan sorumlu olmayız</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">6. Ücretli Hizmetler</h2>
          <p>Ücretli hizmetlere ilişkin esaslar:</p>
          <ul className="mt-2 list-disc pl-6">
            <li>Tüm fiyatlar, işlem anında gösterilen tutara göre geçerlidir</li>
            <li>Fiyatları güncelleme hakkımız saklıdır</li>
            <li>İade koşulları ilgili plan şartlarına göre uygulanır</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">7. Hizmet Değişiklikleri</h2>
          <p>
            Bu şartları dilediğimiz zaman güncelleme hakkını saklı tutarız. Önemli değişiklikler
            e-posta veya site duyurusu ile bildirilir. Hizmeti kullanmaya devam etmeniz, güncel
            şartları kabul ettiğiniz anlamına gelir.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">8. İletişim</h2>
          <p>Hizmet şartlarımızla ilgili sorularınız için bizimle iletişime geçebilirsiniz:</p>
          <p className="mt-2">E-posta: support@example.com</p>
        </section>
      </div>
    </div>
  )
}
