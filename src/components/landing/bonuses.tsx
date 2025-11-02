import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

// Lista de bônus oferecidos
const bonuses = [
  {
    id: 'bonus-dates',
    title: 'Datas Comemorativas Cristãs',
    description: 'Guia ilustrado com todas as datas cristãs importantes — perfeito para planejar atividades durante o ano.',
    imageHint: 'kids calendar',
  },
  {
    id: 'bonus-commandments',
    title: '10 Mandamentos para Imprimir',
    description: 'Versão visual e colorida dos 10 mandamentos para decorar a sala ou a catequese.',
    imageHint: 'stone tablets',
  },
];

// Componente da seção de bônus
export function Bonuses() {
  return (
    <section id="bonuses" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground font-medium">Bônus</div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            🎉 E ainda tem Bônus Imperdíveis!
          </h2>
          <p className="max-w-3xl text-muted-foreground md:text-xl">
            Comprando hoje, você leva estes presentes incríveis para enriquecer ainda mais o aprendizado.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
          {bonuses.map((bonus) => {
            const image = PlaceHolderImages.find((img) => img.id === bonus.id);
            return (
              <Card key={bonus.id} className="overflow-hidden shadow-lg bg-card">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={bonus.title}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                    data-ai-hint={image.imageHint}
                  />
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{bonus.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{bonus.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="secondary" className="w-full bg-accent text-accent-foreground hover:bg-accent/80">
                    <Link href="#final-cta">✅ Quero esses bônus também!</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
