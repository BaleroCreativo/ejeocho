"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Fingerprint,
  Globe,
  Magnet,
  Mail,
  BarChart3,
  Heart,
  Repeat2,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ejes = [
  {
    number: "01",
    icon: Fingerprint,
    title: "Identidad y Propuesta de Valor",
    description:
      "Definimos quién eres, a quién le hablas y por qué deberían elegirte. La base de todo sistema comercial exitoso.",
    color: "#04CCB5",
    tag: "Fundamento",
  },
  {
    number: "02",
    icon: Globe,
    title: "Presencia Digital",
    description:
      "Tu sitio web, redes y perfiles deben ser herramientas de venta, no solo vitrinas. Los optimizamos para convertir.",
    color: "#FCE300",
    tag: "Visibilidad",
  },
  {
    number: "03",
    icon: Magnet,
    title: "Captación y Generación de Demanda",
    description:
      "SEO, paid media, contenido y alianzas estratégicas para atraer prospectos calificados de forma constante.",
    color: "#04CCB5",
    tag: "Atracción",
  },
  {
    number: "04",
    icon: Mail,
    title: "Nutrición y Conversión de Leads",
    description:
      "Email marketing, automatizaciones y flujos de nurturing que convierten interés en decisión de compra.",
    color: "#508590",
    tag: "Conversión",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Proceso de Ventas y CRM",
    description:
      "Estructuramos tu pipeline, implementamos CRM y entrenamos al equipo para cerrar más oportunidades con menos fricción.",
    color: "#FCE300",
    tag: "Cierre",
  },
  {
    number: "06",
    icon: Heart,
    title: "Experiencia del Cliente",
    description:
      "El cliente que tiene una experiencia memorable compra de nuevo y refiere. Diseñamos cada punto de contacto.",
    color: "#04CCB5",
    tag: "Retención",
  },
  {
    number: "07",
    icon: Repeat2,
    title: "Fidelización y Expansión",
    description:
      "Programas de lealtad, upsell, cross-sell y referidos que multiplican el valor de cada cliente activo.",
    color: "#508590",
    tag: "Crecimiento",
  },
  {
    number: "08",
    icon: TrendingUp,
    title: "Medición y Optimización",
    description:
      "Tableros de control, KPIs y reuniones de revisión para que cada decisión esté basada en datos reales.",
    color: "#FCE300",
    tag: "Resultados",
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-heading",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-heading",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".eje-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".eje-card",
            start: "top 88%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="py-28 px-6 bg-[#0C1418]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="services-heading text-center mb-20">
          <span className="inline-block text-[#04CCB5] font-body font-bold text-sm tracking-[0.2em] uppercase mb-4">
            El sistema
          </span>
          <h2
            id="services-heading"
            className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-tight mb-6"
          >
            Los{" "}
            <span className="text-gradient-teal">8 Ejes</span>
            {" "}de crecimiento
          </h2>
          <p className="max-w-2xl mx-auto text-white/50 text-lg leading-relaxed font-body">
            No son servicios aislados. Son los 8 frentes que deben estar
            alineados para que tu negocio crezca de forma predecible y sostenida.
          </p>
        </div>

        {/* Ejes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {ejes.map((eje) => (
            <article
              key={eje.number}
              className="eje-card group relative rounded-2xl p-6 border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-400 hover-lift"
            >
              {/* Number */}
              <div
                className="font-heading text-xs mb-5 inline-flex items-center gap-2"
                style={{ color: eje.color }}
              >
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border"
                  style={{
                    background: `${eje.color}15`,
                    borderColor: `${eje.color}30`,
                    color: eje.color,
                  }}
                >
                  {eje.number}
                </span>
                <span
                  className="text-xs font-bold tracking-wider uppercase px-2 py-0.5 rounded-full"
                  style={{ background: `${eje.color}12`, color: eje.color }}
                >
                  {eje.tag}
                </span>
              </div>

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${eje.color}15` }}
                aria-hidden="true"
              >
                <eje.icon size={20} style={{ color: eje.color }} />
              </div>

              {/* Content */}
              <h3 className="font-heading text-base text-white mb-2 leading-snug">
                {eje.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed font-body">
                {eje.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA Row */}
        <div className="text-center">
          <p className="text-white/40 text-sm mb-6 font-body">
            Identificamos cuáles ejes necesita activar tu negocio en una sesión de diagnóstico gratuita
          </p>
          <Button size="lg" onClick={scrollToContact} className="group">
            Diagnosticar mi sistema de crecimiento
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
