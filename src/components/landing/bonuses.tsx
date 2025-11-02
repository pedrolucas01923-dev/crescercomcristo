import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Gift } from 'lucide-react';

const bonuses = [
  {
    id: 'bonus-dates',
    title: 'Datas Cristãs Explicadas',
    description: 'Todas as principais comemorações cristãs explicadas de forma simples e visual para crianças (Páscoa, Natal, Pentecostes, etc.).',
    imageHint: 'kids calendar',
  },
  {
    id: 'bonus-commandments',
    title: 'Os 10 Mandamentos em Imagens',
    description: 'Ilustrações prontas para imprimir e ensinar os valores de Deus de forma visual, educativa e divertida.',
    imageHint: 'stone tablets',
  },
];

export function Bonuses() {
  return (
    <section id="bonuses" className="w-full py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-accent px-4 py-2 text-sm text-accent-foreground font-bold shadow-md">
            <Gift className="inline-block h-5 w-5 mr-2" />
            Bônus Especiais
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            E para deixar o aprendizado ainda mais completo...
          </h2>
          <p className="max-w-3xl text-muted-foreground md:text-xl">
            Comprando a coleção hoje, você leva estes presentes incríveis para enriquecer ainda mais a jornada de fé do seu filho.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
          {bonuses.map((bonus) => {
            const image = PlaceHolderImages.find((img) => img.id === bonus.id);
            return (
              <Card key={bonus.id} className="overflow-hidden shadow-lg bg-card border-2 border-accent/50 transition-all hover:border-accent hover:shadow-2xl">
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
                  <CardTitle className="font-headline text-2xl text-primary">{bonus.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">{bonus.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
