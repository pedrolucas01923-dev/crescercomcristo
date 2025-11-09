import { Zap } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/30 shadow-md backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 h-14 flex items-center justify-center">
        <div className="flex items-center gap-3 text-center">
          <Zap className="h-5 w-5 text-accent" />
          <p className="relative inline-block text-sm font-bold text-accent overflow-hidden">
            <span className="animate-shimmer bg-clip-text text-transparent bg-gradient-to-r from-accent via-white/80 to-accent bg-[length:200%_100%]">
                OFERTA EXCLUSIVA APENAS HOJE
            </span>
          </p>
        </div>
      </div>
    </header>
  );
}
