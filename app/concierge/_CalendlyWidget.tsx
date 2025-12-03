"use client";

import Script from "next/script";

export default function CalendlyWidget() {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/d/csqr-882-7vr/primorio-concierge-demo?primary_color=009689"
        style={{ minWidth: "320px", height: "700px" }}
      />
    </>
  );
}
