"use client";

import React from "react";

const items = [
  "IDENTIDAD Y PROPUESTA DE VALOR",
  "PRESENCIA DIGITAL",
  "CAPTACIÓN DE DEMANDA",
  "NUTRICIÓN DE LEADS",
  "PROCESO DE VENTAS",
  "EXPERIENCIA DEL CLIENTE",
  "FIDELIZACIÓN Y EXPANSIÓN",
  "MEDICIÓN Y OPTIMIZACIÓN",
];

function MarqueeItem({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-6 px-6">
      <span className="font-body font-bold text-sm md:text-base uppercase tracking-[0.15em] text-white/70 whitespace-nowrap">
        {text}
      </span>
      <span className="w-1.5 h-1.5 rounded-full bg-[#04CCB5] flex-shrink-0" aria-hidden="true" />
    </span>
  );
}

export function Marquee() {
  const doubled = [...items, ...items];

  return (
    <section className="relative py-5 bg-[#04CCB5]/[0.04] border-y border-[#04CCB5]/15 overflow-hidden">
      <div
        className="flex w-max"
        style={{ animation: "marquee 32s linear infinite" }}
        aria-hidden="true"
      >
        {doubled.map((item, i) => (
          <MarqueeItem key={i} text={item} />
        ))}
      </div>
    </section>
  );
}
