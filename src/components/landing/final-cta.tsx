import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Lock, Smartphone, BadgeCheck } from 'lucide-react';
import { CountdownTimer } from '@/components/countdown-timer';

export function FinalCTA() {
  const benefits = [
    "Quadrinhos e livros bíblicos ilustrados",
    "Atividades e páginas para colorir",
    "Tempo de qualidade com seu filho",
    "Aprendizado cristão prático e envolvente",
    "Materiais prontos para imprimir"
  ];

  return (
    <section id="final-cta" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-secondary/30 rounded-2xl shadow-2xl p-8 md:p-12 overflow-hidden relative">
            <div className="text-center space-y-4 mb-12 relative z-10">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                    Tudo o que você precisa para ensinar a fé de forma divertida!
                </h2>
                <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
                    São 4 livros principais + 2 bônus exclusivos, repletos de ilustrações, histórias e atividades que vão aproximar seu filho de Deus com alegria e propósito.
                </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 md:items-center">
                <div className="flex justify-center flex-col items-center bg-white/60 p-8 rounded-xl shadow-lg">
                    <p className="text-xl text-muted-foreground line-through">De R$ 137,00</p>
                    <p className="text-6xl font-extrabold text-primary my-2">por R$ 37,00</p>
                    <p className="text-lg font-medium text-accent">ou 3x de R$ 12,33</p>
                     <div className="mt-6 bg-accent/20 rounded-full px-4 py-2 inline-flex items-center gap-3 text-primary font-bold">
                        <span>Oferta se encerrando em: <CountdownTimer /></span>
                    </div>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-3">
                              <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0" />
                              <span className="text-lg text-muted-foreground">{benefit}</span>
                          </li>
                      ))}
                  </ul>
                </div>
            </div>

            <div className="mt-16 text-center space-y-6">
                <Button asChild size="lg" className="w-full md:w-auto text-2xl py-8 shadow-lg bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-bold animate-pulse">
                    <Link href="#">👉 Quero o Kit Completo Agora!</Link>
                </Button>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-base text-muted-foreground w-full max-w-2xl mx-auto">
                    <div className="flex items-center gap-2">
                        <Lock className="h-5 w-5" />
                        <span>Pagamento 100% seguro</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Smartphone className="h-5 w-5" />
                        <span>Entrega imediata</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <BadgeCheck className="h-5 w-5" />
                        <span>Garantia de satisfação</span>
                    </div>
                </div>
            </div>
            
            <div className="mt-12 text-center">
                 <p className="font-headline text-lg text-primary font-semibold">
                    🌈 Eduque o coração e a mente das crianças na Palavra de Deus.
                    <br />
                    Dê esse primeiro passo hoje — o futuro da fé começa no aprendizado de agora.
                 </p>
            </div>
        </div>
      </div>
    </section>
  );
}
