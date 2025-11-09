import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BookOpen, Palette, BookCopy, Smile, HeartHandshake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: BookOpen,
    title: "Histórias Bíblicas Cativantes",
    description: "Quadrinhos e narrativas que prendem a atenção e ensinam com clareza.",
  },
  {
    icon: Palette,
    title: "Livros para Colorir",
    description: "Atividades criativas que reforçam os ensinamentos de forma lúdica.",
  },
  {
    icon: BookCopy,
    title: "Testamentos Adaptados",
    description: "Antigo e Novo Testamento em linguagem acessível para os pequenos.",
  },
  {
    icon: HeartHandshake,
    title: "Valores Fundamentais",
    description: "Ensina sobre fé, bondade, amor, perdão e gratidão de forma prática.",
  },
];

const productImages = [
  'product-comics',
  'product-bible-books',
  'product-testaments',
  'product-coloring',
];


export function ProductFeatures() {
  return (
    <section id="features" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Apresentamos a Coleção "Crescendo com Cristo"
          </h2>
          <p className="max-w-3xl text-muted-foreground md:text-xl">
            Uma coleção completa, prática e inspiradora para ajudar pais e educadores a apresentarem os valores cristãos às crianças de forma leve, colorida e divertida.
          </p>
        </div>
        
        <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {productImages.map(id => {
                    const image = PlaceHolderImages.find(img => img.id === id);
                    if (!image) return null;
                    return (
                        <div key={id} className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              width={300}
                              height={300}
                              className="w-full h-auto object-cover"
                              data-ai-hint={image.imageHint}
                            />
                        </div>
                    );
                })}
            </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="text-center p-4 bg-card shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-b-4 border-primary/20 hover:border-primary">
                <CardHeader className="flex flex-col items-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="font-headline text-xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
