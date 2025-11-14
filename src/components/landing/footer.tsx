import { Sparkles } from 'lucide-react';

// Componente do rodapé
export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-bold text-foreground">
                Crescendo com Cristo
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Crescendo com Cristo. Todos os direitos reservados.
            </p>
        </div>
      </div>
    </footer>
  );
}
