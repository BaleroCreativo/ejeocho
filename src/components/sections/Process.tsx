"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClipboardList, Lightbulb, Rocket, BarChart2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Diagnóstico",
    subtitle: "Entendemos tu negocio",
    description:
      "Analizamos tu situación actual: ventas, marketing, competencia y oportunidades. Sin suposiciones, solo datos reales.",
    color: "#FF4D00",
    duration: "1 semana",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Estrategia",
    subtitle: "Diseñamos el plan",
    description:
      "Creamos una hoja de ruta personalizada con objetivos claros, canales definidos y KPIs medibles desde el día uno.",
    color: "#FFB800",
    duration: "1 semana",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Ejecución",
    subtitle: "Ponemos manos a la obra",
    description:
      "Implementamos las acciones acordadas: campañas, CRM, contenido, seguimiento. Tu equipo y el nuestro trabajamos juntos.",
    color: "#00E8A2",
    duration: "Mes 1-2",
  },
  {
    number: "04",
    icon: BarChart2,
    title: "Resultados",
    subtitle: "Medimos y optimizamos",
    description:
      "Reportes claros, reuniones de seguimiento y ajustes continuos para maximizar tu ROI y mantener el crecimiento.",
    color: "#A78BFA",
    duration: "Mensual",
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".process-heading",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-heading",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".step-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".step-item",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="proceso"
      ref={sectionRef}
      className="py-28 px-6 bg-[#080B12]"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="process-heading text-center mb-20">
          <span className="inline-block text-[#FFB800] font-heading font-bold text-sm tracking-[0.2em] uppercase mb-4">
            Cómo trabajamos
          </span>
          <h2
            id="process-heading"
            className="font-heading font-black text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-tight mb-6"
          >
            De cero a resultados{" "}
            <br />
            <span className="text-gradient-orange">en 4 pasos</span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg leading-relaxed">
            Un proceso probado que elimina la incertidumbre y te da claridad en
            cada etapa del camino.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-[4.5rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <article
                key={i}
                className="step-item relative glass-card rounded-2xl p-7 border border-white/[0.05] hover-lift group"
              >
                {/* Number badge */}
                <div
                  className="absolute -top-3 left-7 text-xs font-heading font-black px-3 py-1 rounded-full"
                  style={{
                    background: `${step.color}22`,
                    color: step.color,
                    border: `1px solid ${step.color}33`,
                  }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-2xl mb-6 mt-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${step.color}18` }}
                  aria-hidden="true"
                >
                  <step.icon size={22} style={{ color: step.color }} />
                </div>

                {/* Content */}
                <h3 className="font-heading font-black text-xl text-white mb-1">
                  {step.title}
                </h3>
                <p
                  className="font-heading font-semibold text-sm mb-3"
                  style={{ color: step.color }}
                >
                  {step.subtitle}
                </p>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Duration */}
                <div className="flex items-center gap-2 text-xs text-white/30 font-medium">
                  <div
                    className="w-1 h-1 rounded-full"
                    style={{ background: step.color }}
                    aria-hidden="true"
                  />
                  {step.duration}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
