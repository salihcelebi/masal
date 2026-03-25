import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | Yapay Zekâ Açılış Sayfası ve Blog Oluşturucu',
  description: 'Kişisel bilgilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu öğrenin',
}

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Gizlilik Politikası</h1>

      <div className="prose prose-gray max-w-none">
        <p className="text-gray-600">Son güncelleme tarihi: 20 Mart 2024</p>

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">1. Bilgi Toplama</h2>
          <p>Şu bilgi türlerini toplarız:</p>
          <ul className="mt-2 list-disc pl-6">
            <li>Hesap bilgileri (e-posta, kullanıcı adı vb.)</li>
            <li>Hizmetimizi kullanırken üretilen içerikler</li>
            <li>Cihaz bilgileri ve günlük kayıtları</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">2. Bilgilerin Kullanımı</h2>
          <p>Toplanan bilgileri şu amaçlarla kullanırız:</p>
          <ul className="mt-2 list-disc pl-6">
            <li>Hizmetlerimizi sunmak, sürdürmek ve geliştirmek</li>
            <li>Ödeme işlemlerinizi yürütmek</li>
            <li>Hizmet bildirimleri ve güncellemeler göndermek</li>
            <li>Dolandırıcılık ve kötüye kullanımı önlemek</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">3. Bilgi Paylaşımı</h2>
          <p>Kişisel bilgilerinizi satmayız. Bilgileri yalnızca şu durumlarda paylaşırız:</p>
          <ul className="mt-2 list-disc pl-6">
            <li>Açık onayınız olduğunda</li>
            <li>Hizmet sağlayıcı iş ortaklarıyla çalışırken</li>
            <li>Yasal yükümlülük gerektirdiğinde</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">4. Veri Güvenliği</h2>
          <p>
            Kişisel bilgilerinizi yetkisiz erişim, kullanım ve ifşaya karşı korumak için uygun teknik
            ve organizasyonel önlemler uygularız.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">5. Haklarınız</h2>
          <p>Şu haklara sahipsiniz:</p>
          <ul className="mt-2 list-disc pl-6">
            <li>Kişisel verilerinize erişme</li>
            <li>Hatalı bilgileri düzeltme</li>
            <li>Bilgilerinizin silinmesini talep etme</li>
            <li>Veri işleme faaliyetlerine itiraz etme veya sınırlandırma isteme</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">6. Çerez Politikası</h2>
          <p>
            Kullanıcı deneyimini iyileştirmek için çerezler ve benzeri teknolojiler kullanırız. Çerez
            tercihlerinizi tarayıcı ayarlarınızdan yönetebilirsiniz.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">7. Bize Ulaşın</h2>
          <p>
            Gizlilik politikamızla ilgili sorularınız için bizimle şu kanallardan iletişime
            geçebilirsiniz:
          </p>
          <p className="mt-2">E-posta: support@example.com</p>
        </section>
      </div>
    </div>
  )
}
