"use client";

import Script from 'next/script';

export function AnalyticsScripts() {
  return (
    <>
      <Script
        id="utmify-pixel-id"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.pixelId = "69251455dbf269038a81ba49";`,
        }}
      />
      <Script
        id="utmify-pixel-script"
        src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
        strategy="afterInteractive"
        defer
        async
      />
    </>
  );
}
