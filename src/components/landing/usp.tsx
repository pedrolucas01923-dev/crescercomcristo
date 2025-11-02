import { Cross, Palette, Users, Printer, Lightbulb } from 'lucide-react';

const differentiators = [
    {
      icon: Cross,
      text: '100% baseados na Palavra de Deus',
    },
    {
      icon: Palette,
      text: 'Ilustrações originais e coloridas',
    },
    {
      icon: Users,
      text: 'Ideal para pais, catequistas e escolas cristãs',
    },
    {
      icon: Printer,
      text: 'Pronto para imprimir e usar imediatamente',
    },
    {
      icon: Lightbulb,
      text: 'Ensina valores com linguagem infantil e moderna',
    },
];

export function Usp() {
  return (
    <section id="usp" className="w-full py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            📚 O ensino cristão que as crianças amam aprender!
          </h2>
          <p className="max-w-3xl text-muted-foreground md:text-xl">
            Transforme o momento de aprendizado bíblico em uma aventura interativa e cheia de significado.
            Cada material da Coleção "Crescendo com Cristo" foi criado para educar e inspirar, unindo fé, diversão e valores eternos.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl justify-center gap-6 sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
            {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <p className="text-lg font-medium text-foreground">{item.text}</p>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
}
