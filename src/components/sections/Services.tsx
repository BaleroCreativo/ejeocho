"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BarChart3,
  Target,
  Mail,
  Search,
  Users2,
  TrendingUp,
  Database,
  Handshake,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: "marketing",
    title: "Marketing Digital",
    tagline: "Atrae. Convierte. Escala.",
    description:
      "Diseñamos y ejecutamos estrategias de marketing digital que generan demanda real para tu negocio. Sin promesas vacías, solo resultados medibles.",
    color: "#FF4D00",
    bgColor: "rgba(255,77,0,0.06)",
    borderColor: "rgba(255,77,0,0.15)",
    features: [
      { icon: Search, label: "SEO & Posicionamiento orgánico" },
      { icon: BarChart3, label: "Publicidad pagada (Google & Meta Ads)" },
      { icon: Mail, label: "Email marketing y automatización" },
      { icon: Target, label: "Estrategia de contenido y redes sociales" },
    ],
    cta: "Ver plan de marketing",
  },
  {
    id: "ventas",
    title: "Consultoría de Ventas",
    tagline: "Cierra más. Pierde menos.",
    description:
      "Optimizamos tu proceso comercial de punta a punta: desde la prospección hasta el cierre. Implementamos CRM y entrenamos a tu equipo para vender más.",
    color: "#00E8A2",
    bgColor: "rgba(0,232,162,0.06)",
    borderColor: "rgba(0,232,162,0.15)",
    features: [
      { icon: Database, label: "Implementación y configuración de CRM" },
      { icon: Users2, label: "Capacitación de equipos de ventas" },
      { icon: TrendingUp, label: "Diseño de pipeline y funnel de ventas" },
      { icon: Handshake, label: "Estrategia de prospección y seguimiento" },
    ],
    cta: "Ver plan de ventas",
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
        ".service-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-card",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="py-28 px-6 bg-[#080B12]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="services-heading text-center mb-20">
          <span className="inline-block text-[#FF4D00] font-heading font-bold text-sm tracking-[0.2em] uppercase mb-4">
            Lo que hacemos
          </span>
          <h2
            id="services-heading"
            className="font-heading font-black text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-tight mb-6"
          >
            Dos armas para{" "}
            <span className="text-gradient-orange">hacer crecer</span>
            <br />
            tu negocio
          </h2>
          <p className="max-w-2xl mx-auto text-white/50 text-lg leading-relaxed">
            No vendemos paquetes genéricos. Cada estrategia es diseñada para tu
            negocio, tu mercado y tus objetivos específicos.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="service-card group relative rounded-3xl p-8 md:p-10 border transition-all duration-500 hover-lift"
              style={{
                background: service.bgColor,
                borderColor: service.borderColor,
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${service.color}08 0%, transparent 70%)`,
                }}
                aria-hidden="true"
              />

              {/* Tag */}
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold tracking-wider uppercase mb-8"
                style={{
                  background: `${service.color}18`,
                  color: service.color,
                }}
              >
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ background: service.color }}
                  aria-hidden="true"
                />
                {service.id === "marketing" ? "Marketing" : "Ventas & CRM"}
              </div>

              {/* Title */}
              <h3 className="font-heading font-black text-3xl md:text-4xl text-white mb-2 leading-tight">
                {service.title}
              </h3>
              <p
                className="font-heading font-bold text-lg mb-5"
                style={{ color: service.color }}
              >
                {service.tagline}
              </p>
              <p className="text-white/55 leading-relaxed mb-8 text-base">
                {service.description}
              </p>

              {/* Feature List */}
              <ul className="space-y-3 mb-10" aria-label={`Qué incluye ${service.title}`}>
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0"
                      style={{ background: `${service.color}18` }}
                      aria-hidden="true"
                    >
                      <feature.icon size={15} style={{ color: service.color }} />
                    </div>
                    <span className="text-white/70 text-sm">{feature.label}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant="outline"
                className="group/btn border-white/15 hover:border-white/30"
                onClick={() =>
                  document
                    .getElementById("contacto")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {service.cta}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover/btn:translate-x-1"
                />
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
