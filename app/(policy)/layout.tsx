import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yasal Metinler',
  description: 'Yasal sayfalar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="policy-layout">{children}</div>
}
