import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params
  return genPageMetadata({ title: 'Çalışma Alanı', params: resolvedParams })
}

export default async function WorkspacePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  const items = [
    {
      key: 'pagen',
      title: 'Pagen AI Landing Page Template',
      uiPath: `/${locale}/workspace/pagen-ai-landing-page-template`,
      adminPath: `/${locale}/workspace/pagen-ai-landing-page-template/admin`,
      githubPath: 'https://github.com/salihcelebi/masal/tree/main/pagen-ai-landing-page-template',
    },
    {
      key: 'blog',
      title: 'Tailwind Nextjs Starter Blog',
      uiPath: `/${locale}/workspace/tailwind-nextjs-starter-blog`,
      adminPath: `/${locale}/workspace/tailwind-nextjs-starter-blog/admin`,
      githubPath: 'https://github.com/salihcelebi/masal/tree/main/tailwind-nextjs-starter-blog',
    },
  ]

  return (
    <div className="mx-auto mt-16 max-w-5xl space-y-8">
      <h1 className="text-3xl font-bold">Giriş Başarılı: Proje Erişim Merkezi</h1>
      <p className="text-muted-foreground">Aşağıdan iki projeye ait arayüz ve yönetim paneli sayfalarına Türkçe olarak erişebilirsiniz.</p>

      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.key} className="rounded-xl border p-6 shadow-sm">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <div className="mt-4 flex flex-col gap-2">
              <Link href={item.uiPath} className="text-primary underline">Arayüze Git</Link>
              <Link href={item.adminPath} className="text-primary underline">Yönetim Paneline Git</Link>
              <a href={item.githubPath} target="_blank" rel="noreferrer" className="text-primary underline">GitHub Klasörünü Aç</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
