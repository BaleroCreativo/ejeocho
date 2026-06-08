"use client";

import React from "react";

const items = [
  "MARKETING DIGITAL",
  "CONSULTORÍA DE VENTAS",
  "CRM & AUTOMATIZACIÓN",
  "ESTRATEGIA DE MARCA",
  "PAID MEDIA",
  "SEO & CONTENIDO",
  "PIPELINE DE VENTAS",
  "GROWTH HACKING",
];

function MarqueeItem({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-6 px-6">
      <span className="font-heading font-black text-sm md:text-base uppercase tracking-[0.15em] text-white/80 whitespace-nowrap">
        {text}
      </span>
      <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D00] flex-shrink-0" aria-hidden="true" />
    </span>
  );
}

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <section className="relative py-5 bg-[#FF4D00]/[0.04] border-y border-[#FF4D00]/15 overflow-hidden">
      <div
        className="flex w-max"
        style={{ animation: "marquee 30s linear infinite" }}
        aria-hidden="true"
      >
        {doubled.map((item, i) => (
          <MarqueeItem key={i} text={item} />
        ))}
      </div>
    </section>
  );
}
