import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BookOpen, Palette, BookHeart, BookMarked } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Definição das características do produto
const features = [
  {
    id: 'product-comics',
    icon: BookOpen,
    title: 'Quadrinhos Cristãos',
    description: 'Histórias ilustradas com valores bíblicos.',
  },
  {
    id: 'product-bible-books',
    icon: BookHeart,
    title: 'Livros da Bíblia para Crianças',
    description: 'Explicações simples e coloridas dos principais livros bíblicos.',
  },
  {
    id: 'product-testaments',
    icon: BookMarked,
    title: 'Antigo e Novo Testamento',
    description: 'Linguagem acessível e ilustrada para os pequenos.',
  },
  {
    id: 'product-coloring',
    icon: Palette,
    title: 'Livros para Colorir',
    description: 'Aprendizado com criatividade e muita diversão.',
  },
];

// Propriedades do componente de cartão de característica
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageId: string;
}

// Componente para renderizar um cartão de característica
function FeatureCard({ icon: Icon, title, description, imageId }: FeatureCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === imageId);

  return (
    <Card className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-card border-2 border-transparent hover:border-accent">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
        <div className="bg-secondary p-3 rounded-full">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="font-headline text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <p className="text-muted-foreground">{description}</p>
        {image && (
          <div className="overflow-hidden rounded-lg">
            <Image
              src={image.imageUrl}
              alt={image.description}
              width={200}
              height={150}
              className="w-full h-auto object-cover"
              data-ai-hint={image.imageHint}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Componente da seção de características do produto
export function ProductFeatures() {
  return (
    <section id="features" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            📚 O que está incluso na Coleção "Crescendo com Cristo"
          </h2>
          <p className="max-w-3xl text-muted-foreground md:text-xl">
            Um kit completo para nutrir a fé das crianças com alegria e propósito.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              imageId={feature.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
