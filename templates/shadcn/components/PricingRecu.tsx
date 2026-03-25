import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Ücretsiz",
        id: "plan-free",
        href: "#",
        price: { monthly: "$0", annually: "$0" },
        description: "İsim üreticimizi denemek için ideal.",
        actionTitle: "Hemen başla",
        features: [
            "Her üretimde 3 isim önerisi",
            "Temel isim stilleri (Modern, Klasik)",
            "Temel karakter özellikleri",
        ],
        popular: false,
    },
    {
        name: "Pro",
        id: "plan-pro",
        href: "#",
        price: { monthly: "$9", annually: "$90" },
        description: "Ciddi yazarlar ve romancılar için ideal.",
        actionTitle: "Hemen başla",
        features: [
            "Her üretimde 10 isim önerisi",
            "Fantastik ve Gotik dahil tüm isim stilleri",
            "Gelişmiş karakter özellik kombinasyonları",
            "İsim geçmişi ve anlam analizi",
            "Favori isimleri kaydet",
        ],
        popular: true,
    },
];

export default function () {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl sm:text-center">
                    <h2 className="text-base font-semibold leading-7 text-muted-foreground">
                        Fiyatlandırma
                    </h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                        İhtiyacınıza en uygun planı seçin
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-center">
                    ConvertFast, geliştiriciler ve her ölçekte ekip için esnek fiyat seçenekleri sunar.
                    Etkileyici açılış sayfalarını her zamankinden hızlı oluşturmaya başlayın.
                </p>
                <div className="mx-auto max-w-4xl mt-20 flow-root">
                    <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 gap-x-4 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-2 xl:-mx-4">
                        {plans.map((plan) => (
                            <Card
                                key={plan.id}
                                className={cn(
                                    "flex flex-col",
                                    plan.popular ? "ring-1 ring-primary" : ""
                                )}
                            >
                                <CardHeader>
                                    <CardTitle
                                        id={plan.id}
                                        className="text-base font-semibold leading-7"
                                    >
                                        {plan.name}
                                    </CardTitle>
                                    <CardDescription className="mt-6 flex items-baseline gap-x-1">
                                        <span className="text-5xl font-bold tracking-tight text-primary">
                                            {plan.price.monthly}
                                        </span>
                                        <span className="text-sm font-semibold leading-6 text-muted-foreground">
                                            /ay
                                        </span>
                                    </CardDescription>
                                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                        {plan.price.annually} yıllık faturalandırılır
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <p className="mt-10 text-sm font-semibold leading-6 text-primary">
                                        {plan.description}
                                    </p>
                                    <ul
                                        role="list"
                                        className="mt-6 space-y-3 text-sm leading-6 text-muted-foreground"
                                    >
                                        {plan.features.map((feature) => (
                                            <li key={feature}>{feature}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="mt-auto">
                                    <Button className="w-full" aria-describedby={plan.id} asChild>
                                        <a href={plan.href}>{plan.actionTitle}</a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
