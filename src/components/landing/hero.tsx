// Início da Seção Hero
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-mockup');

  return (
    <section id="hero" className="relative w-full h-[70vh] min-h-[500px] md:h-[calc(100vh-80px)] flex items-center justify-center text-white pt-20">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="space-y-6 text-center max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
            Ensine <span className="text-accent">valores cristãos</span> de forma divertida e inesquecível!
          </h1>
          <p className="text-lg text-slate-200 md:text-xl">
            Uma coleção completa de ebooks ilustrados para ensinar a fé às crianças com alegria, amor e propósito.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="text-lg rounded-full font-bold bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg animate-pulse">
              <Link href="#final-cta">Quero adquirir agora!</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
// Fim da Seção Hero
