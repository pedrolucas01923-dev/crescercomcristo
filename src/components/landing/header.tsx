import { Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  isVisible: boolean;
}

export function Header({ isVisible }: HeaderProps) {
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-destructive shadow-md backdrop-blur-sm transition-all duration-300",
      isVisible ? 'opacity-100' : 'opacity-0 -translate-y-full pointer-events-none'
    )}>
      <div className="container mx-auto px-4 md:px-6 h-12 flex items-center justify-center">
        <div className="flex items-center gap-3 text-center">
          <Zap className="h-5 w-5 text-destructive-foreground" />
          <p className="relative inline-block text-sm font-bold text-destructive-foreground overflow-hidden">
             OFERTA EXCLUSIVA APENAS HOJE
          </p>
        </div>
      </div>
    </header>
  );
}
