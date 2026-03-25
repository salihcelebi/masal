import LoginButton from '@/components/auth/login-button'
import { genPageMetadata } from 'app/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  return genPageMetadata({ title: 'Giriş Yap', params: resolvedParams })
}

export default function LoginPage() {
  return (
    <div className="mx-auto mt-24 flex w-full max-w-md flex-col gap-6 rounded-xl border border-border bg-card p-8 shadow-sm">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Hesabına giriş yap</h1>
        <p className="text-sm text-muted-foreground">
          Devam etmek için Google hesabınla oturum aç.
        </p>
      </div>
      <LoginButton />
    </div>
  )
}
