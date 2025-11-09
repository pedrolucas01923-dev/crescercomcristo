import { Zap } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/30 shadow-md backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 h-14 flex items-center justify-center">
        <div className="flex items-center gap-3 text-center">
          <Zap className="h-5 w-5 text-accent animate-pulse" />
          <p className="text-sm font-bold text-accent animate-pulse-subtle">
            OFERTA EXCLUSIVA APENAS HOJE
          </p>
        </div>
      </div>
    </header>
  );
}
