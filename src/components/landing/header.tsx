import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from '@/components/countdown-timer';
import { Logo } from '@/components/logo';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/">
          <Logo />
          <span className="sr-only">FaithGrow Kids Home</span>
        </Link>
        <div className="hidden md:flex items-center gap-2 text-sm text-center">
            <p className="font-medium text-foreground">
            🎁 Oferta especial: desconto imperdível nas próximas <CountdownTimer />
            </p>
        </div>
        <Button asChild>
          <Link href="#final-cta">Quero Garantir Meu Desconto</Link>
        </Button>
      </div>
       <div className="md:hidden bg-secondary/50 py-2 text-center text-sm">
             <p className="font-medium text-secondary-foreground">
            🎁 Oferta especial: <CountdownTimer />
            </p>
       </div>
    </header>
  );
}
