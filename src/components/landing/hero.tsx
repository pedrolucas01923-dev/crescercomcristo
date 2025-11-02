// Início da Seção Hero
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-mockup');

  return (
    <section id="hero" className="w-full pt-32 pb-16 md:pt-48 md:pb-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-foreground">
              Ensine <span className="text-primary">valores cristãos</span> de forma divertida e inesquecível!
            </h1>
            <p className="max-w-xl mx-auto md:mx-0 text-lg text-muted-foreground md:text-xl">
              Uma coleção completa de ebooks ilustrados para ensinar a fé às crianças com alegria e propósito.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button asChild size="lg" className="text-lg rounded-full">
                <Link href="#final-cta">👉 Quero o Kit Completo Agora!</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={600}
                height={500}
                className="rounded-xl shadow-2xl"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
// Fim da Seção Hero
