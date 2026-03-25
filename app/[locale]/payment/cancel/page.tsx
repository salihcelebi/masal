import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PaymentCancel() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold mb-4">Ödeme İptal Edildi</h1>
            <p className="text-muted-foreground">
                Ödemeniz iptal edildi. Hazır olduğunuzda tekrar deneyebilirsiniz.
            </p>
            <Button>
                <Link href="/">
                    Ana sayfaya dön
                </Link>
            </Button>
        </div>
    )
} 