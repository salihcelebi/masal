"use client"
import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PaymentSuccess() {
    const searchParams = useSearchParams()
    const sessionId = searchParams.get('session_id')

    useEffect(() => {
        // Buraya ödeme başarılı olduktan sonraki mantık eklenebilir
        console.log('Ödeme başarılı, oturum kimliği:', sessionId)
    }, [sessionId])

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold mb-4">Ödeme Başarılı!</h1>
            <p className="text-muted-foreground">
                Satın alımınız için teşekkür ederiz. Kredileriniz kısa süre içinde hesabınıza eklenecektir.
            </p>
            <Button>
                <Link href="/">Ana sayfaya dön</Link>
            </Button>
        </div>
    )
} 