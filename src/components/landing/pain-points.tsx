import { ScreenShare, UserRoundX, HeartCrack } from 'lucide-react';

const painPoints = [
  {
    icon: HeartCrack,
    text: "Está difícil ensinar sobre Deus de um jeito leve e interessante para seu filho?",
  },
  {
    icon: ScreenShare,
    text: "As telas têm tomado o tempo da família e afastado os momentos de fé?",
  },
  {
    icon: UserRoundX,
    text: "Você gostaria que seu filho crescesse com valores cristãos firmes desde pequeno?",
  },
];

export function PainPoints() {
  return (
    <section id="pain-points" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Você sente que...
          </h2>
        </div>
        <div className="mx-auto grid max-w-4xl justify-center gap-6 sm:grid-cols-1 lg:max-w-5xl lg:grid-cols-3">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center gap-4 p-6 bg-card rounded-xl shadow-lg border-2 border-primary/20 transition-all duration-300 ease-in-out hover:border-primary hover:shadow-primary/20 hover:scale-105">
                <div className="bg-white p-4 rounded-full shadow-inner">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <p className="text-lg text-muted-foreground">{point.text}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
            <p className="text-xl font-medium bg-accent/20 text-primary p-4 rounded-lg inline-block">
                Se você respondeu sim a alguma dessas perguntas, esta coleção foi feita especialmente para você!
            </p>
        </div>
      </div>
    </section>
  );
}
