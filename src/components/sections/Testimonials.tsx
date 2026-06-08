"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    quote:
      "En 3 meses duplicamos nuestra cartera de clientes. El equipo de Eje Ocho no solo diseñó la estrategia, nos acompañó en cada paso de la ejecución. Resultados reales, nada de teoría.",
    author: "Carlos Mendoza",
    role: "Director Comercial",
    company: "Constructora Mendoza",
    industry: "Construcción",
    metric: "+120% en prospectos",
    color: "#04CCB5",
    initials: "CM",
  },
  {
    quote:
      "Implementaron nuestro CRM en 2 semanas y capacitaron a todo el equipo. Ahora tenemos visibilidad total del pipeline y cerramos 30% más oportunidades. Inversión que se pagó sola.",
    author: "Laura Vásquez",
    role: "CEO",
    company: "Servicios TechPro",
    industry: "Tecnología B2B",
    metric: "+30% tasa de cierre",
    color: "#FCE300",
    initials: "LV",
  },
  {
    quote:
      "Teníamos redes sociales pero cero ventas online. Eje Ocho rediseñó toda nuestra estrategia digital y en 4 meses pasamos a generar el 40% de nuestros ingresos por canales digitales.",
    author: "Roberto Salas",
    role: "Fundador",
    company: "Salas Distribuidora",
    industry: "Comercio",
    metric: "40% ventas digitales",
    color: "#508590",
    initials: "RS",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-5" aria-label="5 estrellas">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} fill="#FCE300" stroke="none" aria-hidden="true" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-heading",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonial-heading",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".testimonial-card",
        { y: 60, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonial-card",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 px-6 bg-[#090F13] relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#04CCB5]/4 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="testimonial-heading text-center mb-20">
          <span className="inline-block text-[#FCE300] font-body font-bold text-sm tracking-[0.2em] uppercase mb-4">
            Testimonios
          </span>
          <h2
            id="testimonials-heading"
            className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-tight mb-6"
          >
            Lo que dicen los que{" "}
            <span className="text-gradient-teal">ya crecieron</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="testimonial-card glass-card rounded-2xl p-8 border border-white/[0.05] hover-lift flex flex-col"
            >
              <Stars />

              <blockquote className="text-white/70 text-sm leading-relaxed flex-1 mb-6 font-body">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold mb-6 w-fit font-body"
                style={{ background: `${t.color}15`, color: t.color }}
              >
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ background: t.color }}
                  aria-hidden="true"
                />
                {t.metric}
              </div>

              <figcaption className="flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-heading text-sm text-white flex-shrink-0"
                  style={{ background: `${t.color}25`, border: `1px solid ${t.color}35` }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-body font-bold text-white text-sm">
                    {t.author}
                  </div>
                  <div className="text-white/40 text-xs font-body">
                    {t.role} · {t.company}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
