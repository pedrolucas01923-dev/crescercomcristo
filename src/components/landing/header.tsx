import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from '@/components/countdown-timer';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-6 h-14 flex items-center justify-center">
        <div className="flex items-center gap-4 text-center">
          <p className="text-sm font-medium text-amber-500">
            <span className="font-bold">🎁 Desconto exclusivo Premium</span>
          </p>
          <CountdownTimer />
        </div>
      </div>
    </header>
  );
}
