// Início da Seção Hero
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-mockup');

  return (
    <section id="hero" className="w-full bg-secondary/30 pt-20 md:pt-24 lg:pt-32">
      <div className="container mx-auto px-4 md:px-6 grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
            Ensine <span className="text-accent">valores cristãos</span> de forma divertida e inesquecível!
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Uma coleção completa de ebooks ilustrados para ensinar a fé às crianças com alegria, amor e propósito.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button asChild size="lg" className="text-lg rounded-full font-bold bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg animate-pulse">
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
    </section>
  );
}
// Fim da Seção Hero
