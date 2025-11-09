import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gift, Palette, Heart, BookText } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const bonuses = [
  {
    id: 'bonus-plan',
    icon: Gift,
    title: 'Plano de Aplicação “15 Minutos com Jesus”',
    description: 'Um guia simples para você usar os quadrinhos, livros e páginas para colorir de forma leve: 10 a 15 min por dia de forma prática e sem pressão.',
    imageHint: 'planner guide',
  },
  {
    id: 'bonus-activities',
    icon: Palette,
    title: 'Guia de Atividades Práticas',
    description: 'Ideias de como usar as páginas para colorir para reforçar valores como amor, bondade, perdão e respeito.',
    imageHint: 'kids activities',
  },
  {
    id: 'bonus-devotionals',
    icon: Heart,
    title: '5 Roteiros de Conversas de Fé para Fazer em Família',
    description: 'Perguntas simples para conversar com as crianças depois da leitura das histórias.',
    imageHint: 'family conversation',
  },
  {
    id: 'bonus-verses',
    icon: BookText,
    title: 'Versículo da Semana para Memorizar',
    description: 'Uma lista pronta com versículos fáceis para ensinar e reforçar valores no dia a dia.',
    imageHint: 'bible verse',
  }
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
            const Icon = bonus.icon;
            const image = PlaceHolderImages.find((img) => img.id === bonus.id);
            return (
              <Card key={bonus.id} className="overflow-hidden shadow-lg bg-card border-2 border-primary/20 transition-all hover:border-primary hover:shadow-primary/20 hover:shadow-2xl flex flex-col">
                 {image && (
                  <div className="aspect-w-4 aspect-h-3">
                    <Image
                      src={image.imageUrl}
                      alt={bonus.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-2xl text-primary">{bonus.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pl-16">
                  <p className="text-base text-muted-foreground text-left">{bonus.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}