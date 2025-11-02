import { BookText, Palette, Church, School, Lightbulb } from 'lucide-react';

const advantages = [
  {
    icon: BookText,
    text: "Linguagem simples e adaptada à faixa etária.",
  },
  {
    icon: Palette,
    text: "Ilustrações coloridas e exclusivas.",
  },
  {
    icon: Church,
    text: "Ensinamentos fiéis à Bíblia.",
  },
  {
    icon: School,
    text: "Ideal para escolas, igrejas e famílias.",
  },
  {
    icon: Lightbulb,
    text: "Promove a fé, valores e criatividade das crianças.",
  },
];

export function Advantages() {
  return (
    <section id="advantages" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            ✨ Por que os pais e educadores amam esta coleção?
          </h2>
          <p className="max-w-3xl text-muted-foreground md:text-xl">
            Descubra os diferenciais que tornam nosso material a escolha certa para a educação cristã infantil.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-full">
                  <Icon className="h-6 w-6 text-secondary-foreground" />
                </div>
                <p className="text-lg text-muted-foreground pt-2">{advantage.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
