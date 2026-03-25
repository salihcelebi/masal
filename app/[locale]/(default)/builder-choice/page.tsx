import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params
  return genPageMetadata({ title: 'Oluşturma Seçimi', params: resolvedParams })
}

export default async function BuilderChoicePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  return (
    <div className="mx-auto mt-16 max-w-3xl rounded-xl border p-8 shadow-sm">
      <h1 className="text-3xl font-bold">Hoş geldiniz</h1>
      <p className="mt-3 text-muted-foreground">
        Google hesabınızla giriş yaptınız. Tekrar kayıt olmanıza gerek olmadan aşağıdaki akışlardan
        birini seçerek devam edebilirsiniz.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Link
          href={`/${locale}/blog`}
          className="rounded-lg border p-5 text-center font-semibold hover:bg-muted"
        >
          Blog Oluştur
        </Link>
        <Link
          href={`/${locale}`}
          className="rounded-lg border p-5 text-center font-semibold hover:bg-muted"
        >
          Açılış Sayfası Oluştur
        </Link>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">Bu hesapla devam ediyorsunuz.</p>
    </div>
  )
}
