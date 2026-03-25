# Yapay Zekâ Açılış Sayfası ve Blog Oluşturucu

🚀 AI SaaS hızlı küresel yayın şablonu | AI SaaS One Click Template

Hepsi bir arada yapay zekâ SaaS girişim şablonu. Açılış sayfası ve blog oluşturucu içerir, i18n çok dilli yapıyı destekler ve ürününüzü hızlıca yayına almanıza yardımcı olur. Next.js + Supabase ile geliştirilmiş modern bir çözümdür.

## 🌟 Öne Çıkan Özellikler

### Yapay zekâ özellikleri

- 🎨 Tek tıkla profesyonel açılış sayfası oluşturma ve çok dilli çeviri
- 📝 MDX blog/doküman desteği ve çok dilli çeviri
- 👥 Roman karakter ismi üretici ve çok dilli çeviri
- 📚 MDX dokümantasyon sitesi ve çok dilli çeviri

### Sistem özellikleri

- 🌍 Çok dillilik desteği (i18n)
- 🔐 Üçüncü taraf giriş entegrasyonu
  - Google ile giriş
  - Supabase kimlik doğrulama
- 💾 Supabase veri depolama
- 📱 Duyarlı tasarım
- 🎨 Tailwind CSS tabanlı modern arayüz

### Teknoloji yığını

- Next.js
- Tailwind CSS
- Supabase
- i18n
- TypeScript

## 🚀 Hızlı başlangıç

1. Projeyi klonlayın
   ```bash
   git clone https://github.com/salihcelebi/masal.git
   cd masal
   ```
2. Bağımlılıkları yükleyin
   ```bash
   yarn install
   ```
3. Ortam değişkenlerini yapılandırın

```bash
cp .env.example .env

# Supabase: https://supabase.com/
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# OpenAI API anahtarı
OPENAI_API_KEY=
OPENAI_API_BASE=

# Stripe
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# Tek seferlik fiyat kimlikleri
NEXT_PUBLIC_STRIPE_PRICE_ID_BASIC=price_basic_plan_usd
NEXT_PUBLIC_STRIPE_PRICE_ID_PRO=price_pro_plan_usd
```

4. Projeyi başlatın
   ```bash
   yarn dev
   ```
   Sonucu görmek için `http://localhost:3000` adresini açın.

5. Veritabanını hazırlayın
   ```bash
   # Supabase SQL Editor'da aşağıdaki SQL dosyalarını çalıştırın
   sql/create_character_payment_table.sql
   sql/create_character_profile_table.sql
   ```

## 📝 Kullanım

### AI açılış sayfası oluşturma

- `messages/` altındaki locale dosyalarını düzenleyin
- Tek tıkla çok dilli profesyonel açılış sayfası oluşturun

### API dokümanı/blog MDX toplu çeviri

- `translateblogs/translate` dizinine gidin
- `translate.py` içinde kaynak ve hedef dili ayarlayın
- Çevrilecek MDX dosyalarını `translateblogs/translate/docs` altına koyun
- `translate.py` çalıştırın
- Çıktılar `translateblogs/translate/translated-docs` altında oluşur

### Karakter ismi üretici

- Karakter ismi üretici sayfasını açın
- Karakter parametrelerini girin
- Benzersiz karakter isimleri ve açıklamalar üretin

### Dokümantasyon sitesi

- `data/docs` altında markdown/MDX dosyaları oluşturun veya güncelleyin
- MDX ile React bileşenleri gömebilirsiniz
- İçindekiler ve gezinim otomatik oluşur
- İçerikleri çok dilli sürümlere çevirebilirsiniz

## 🔜 Yol haritası

- [x] Ödeme sistemi entegrasyonu (Stripe)
- [x] Kullanıcı dil tercihini otomatik algılama
- [ ] Blog MDX içeriğini tek tıkla üretme
- [ ] Üretilen isimleri ön yüzde listeleme
- [ ] Daha fazla yapay zekâ özelliği
- [ ] Performans optimizasyonu

## Örnek proje

- [Cursor Türkçe Dokümantasyonu](https://cursordocs.com/)

## 🤝 Katkı

Pull Request gönderebilir veya Issue açabilirsiniz.

## 📜 Teşekkür

Bu proje aşağıdaki açık kaynak projelerden ilham alır:

- [Pagen AI Landing Page Template](https://github.com/all-in-aigc/pagen-ai-landing-page-template)
- [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)

## 📄 Lisans

MIT License — detaylar için [LICENSE](LICENSE).
