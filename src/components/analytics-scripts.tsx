"use client";

import { useEffect } from 'react';
import Script from 'next/script';

export function AnalyticsScripts() {
  useEffect(() => {
    // Inject UTMIFY Pixel script
    if (!document.getElementById('utmify-pixel-script')) {
      window.pixelId = "6921f7da921ed0cd2b9afa4f";
      const script = document.createElement("script");
      script.id = "utmify-pixel-script";
      script.src = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      {/* UTMIFY UTMs script (this one can be loaded directly) */}
      <Script
        id="utmify-utms"
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-xcod-sck
        data-utmify-prevent-subids
        strategy="afterInteractive"
      />
    </>
  );
}
