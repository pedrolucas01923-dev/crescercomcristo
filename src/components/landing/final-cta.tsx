import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CalendarCheck, FileText, BadgeCheck, DownloadCloud, Zap } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function FinalCTA() {
    const finalCtaImage = PlaceHolderImages.find((img) => img.id === 'final-cta-mockup');

  return (
    <section id="final-cta" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-card rounded-2xl shadow-2xl p-8 md:p-12 overflow-hidden">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div className="space-y-6">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                        🌟 Leve agora a Coleção Cristã Infantil Completa!
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Ensine valores que duram para sempre com bônus exclusivos.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-foreground">
                        <div className="flex items-center gap-2">
                            <CalendarCheck className="h-5 w-5 text-primary"/>
                            <span>Guia de Datas Comemorativas</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FileText className="h-5 w-5 text-primary"/>
                            <span>10 Mandamentos para Imprimir</span>
                        </div>
                    </div>

                     {finalCtaImage && (
                        <div className="block md:hidden mt-8">
                            <Image
                                src={finalCtaImage.imageUrl}
                                alt={finalCtaImage.description}
                                width={400}
                                height={350}
                                className="rounded-xl shadow-lg mx-auto"
                                data-ai-hint={finalCtaImage.imageHint}
                            />
                        </div>
                    )}
                    
                    <Button asChild size="lg" className="w-full md:w-auto text-xl py-8 shadow-lg">
                        <Link href="#">✝️ Quero Ensinar com Amor — Comprar Agora</Link>
                    </Button>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Zap className="h-4 w-4" />
                            <span>Oferta por tempo limitado</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <DownloadCloud className="h-4 w-4" />
                            <span>Download imediato</span>
                        </div>
                         <div className="flex items-center gap-1">
                            <BadgeCheck className="h-4 w-4" />
                            <span>Garantia de satisfação</span>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex justify-center">
                   {finalCtaImage && (
                        <Image
                            src={finalCtaImage.imageUrl}
                            alt={finalCtaImage.description}
                            width={400}
                            height={350}
                            className="rounded-xl shadow-lg"
                            data-ai-hint={finalCtaImage.imageHint}
                        />
                    )}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
