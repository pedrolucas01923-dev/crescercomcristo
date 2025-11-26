"use client";

import Script from 'next/script';

export function AnalyticsScripts() {
  return (
    <>
      <Script
        id="utmify-pixel-id"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.pixelId = "6921f7da921ed0cd2b9afa4f";`,
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
