import { Sparkles } from 'lucide-react';
import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2" {...props}>
      <Sparkles className="h-8 w-8 text-primary" />
      <span className="font-headline text-xl font-bold text-foreground">
        FaithGrow Kids
      </span>
    </div>
  );
}
