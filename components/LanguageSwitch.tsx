'use client'

import * as React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Languages } from 'lucide-react'

const languageMap: { [key: string]: string } = {
  tr: 'Türkçe',
  en: 'İngilizce',
  zh: 'Çince',
  // İhtiyaca göre daha fazla dil eklenebilir
}

export default function LanguageSwitch() {
  const pathname = usePathname()
  const router = useRouter()
  const safePathname = pathname || '/'

  const switchLanguage = (locale: string) => {
    // Mevcut yoldan dil dışındaki kısmı çıkar
    const pathWithoutLocale = pathname.split('/').slice(2).join('/')
    const newPath = `/${locale}/${pathWithoutLocale}`
    router.push(newPath)
  }

  // Geçerli dili al
  const currentLocale = pathname.split('/')[1]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-5 w-5" />
          <span className="sr-only">Dili değiştir</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languageMap).map(([locale, label]) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => switchLanguage(locale)}
            className={currentLocale === locale ? 'bg-accent' : ''}
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 
