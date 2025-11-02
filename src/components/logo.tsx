import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M12 22V12" />
        <path d="M7 12H17" />
        <path d="M20.4 14.5c-2.1 4.9-7 7.5-12 6.5s-8.5-6.4-6.5-12c2.1-4.9 7-7.5 12-6.5s8.5 6.4 6.5 12Z" />
        <path d="M12 2v10" />
      </svg>
      <span className="font-headline text-xl font-bold text-foreground">
        FaithGrow Kids
      </span>
    </div>
  );
}
