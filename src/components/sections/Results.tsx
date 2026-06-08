"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Users, Clock, Target } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const metrics = [
  {
    icon: TrendingUp,
    value: 340,
    suffix: "%",
    label: "ROI promedio",
    description: "en campañas de paid media",
    color: "#04CCB5",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "PYMEs atendidas",
    description: "en crecimiento activo",
    color: "#FCE300",
  },
  {
    icon: Clock,
    value: 90,
    suffix: " días",
    label: "para ver resultados",
    description: "desde el inicio del proyecto",
    color: "#508590",
  },
  {
    icon: Target,
    value: 3,
    suffix: "x",
    label: "aumento en ventas",
    description: "promedio en clientes activos",
    color: "#C6D6E3",
  },
];

const niveles = [
  {
    nivel: "Nivel 1",
    title: "Fundamentos",
    description:
      "Estableces identidad, presencia digital básica y un proceso de ventas estructurado. Dejas de operar por intuición.",
    pillars: ["Identidad clara", "Presencia digital activa", "CRM básico implementado"],
    color: "#04CCB5",
  },
  {
    nivel: "Nivel 2",
    title: "Optimización",
    description:
      "Tus canales generan leads de forma consistente. El equipo cierra con método. La experiencia del cliente es memorable.",
    pillars: ["Leads calificados constantes", "Tasa de cierre mejorada", "NPS positivo"],
    color: "#FCE300",
  },
  {
    nivel: "Nivel 3",
    title: "Escalamiento",
    description:
      "El sistema funciona casi solo. Tienes dashboards, procesos documentados y un motor de referidos que alimenta el crecimiento.",
    pillars: ["Crecimiento predecible", "Referidos activos", "Expansión de ticket promedio"],
    color: "#508590",
  },
];

function Counter({
  value,
  suffix,
  color,
  triggered,
}: {
  value: number;
  suffix: string;
  color: string;
  triggered: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [triggered, value]);

  return (
    <span className="font-heading text-5xl md:text-6xl" style={{ color }}>
      {count}
      {suffix}
    </span>
  );
}

export function Results() {
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".results-heading",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".results-heading",
            start: "top 85%",
            onEnter: () => setTriggered(true),
          },
        }
      );

      gsap.fromTo(
        ".metric-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".metric-card",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".nivel-card",
        { y: 40, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".nivel-card",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="resultados"
      ref={sectionRef}
      className="py-28 px-6 bg-[#090F13] relative overflow-hidden"
      aria-labelledby="results-heading"
    >
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#04CCB5]/4 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="results-heading text-center mb-20">
          <span className="inline-block text-[#04CCB5] font-body font-bold text-sm tracking-[0.2em] uppercase mb-4">
            Resultados probados
          </span>
          <h2
            id="results-heading"
            className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-tight mb-6"
          >
            Números que{" "}
            <span className="text-gradient-teal">hablan solos</span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg leading-relaxed font-body">
            Resultados reales de PYMEs que decidieron alinear sus 8 ejes.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="metric-card glass-card rounded-2xl p-6 text-center hover-lift"
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-xl mx-auto mb-4"
                style={{ background: `${metric.color}15` }}
                aria-hidden="true"
              >
                <metric.icon size={18} style={{ color: metric.color }} />
              </div>
              <Counter
                value={metric.value}
                suffix={metric.suffix}
                color={metric.color}
                triggered={triggered}
              />
              <div className="font-body font-bold text-white/80 text-sm mt-1 mb-1">
                {metric.label}
              </div>
              <div className="text-white/40 text-xs font-body">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Niveles de Madurez */}
        <div>
          <h3 className="font-body font-bold text-white/40 text-sm tracking-[0.2em] uppercase mb-10 text-center">
            Los 3 Niveles de Madurez Comercial
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {niveles.map((nivel, i) => (
              <div
                key={i}
                className="nivel-card relative rounded-2xl p-8 border hover-lift overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${nivel.color}06 0%, transparent 100%)`,
                  borderColor: `${nivel.color}20`,
                }}
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none"
                  style={{ background: `${nivel.color}08` }}
                  aria-hidden="true"
                />
                <div
                  className="inline-block text-xs font-bold tracking-wider uppercase rounded-full px-3 py-1 mb-5"
                  style={{
                    background: `${nivel.color}15`,
                    color: nivel.color,
                  }}
                >
                  {nivel.nivel}
                </div>
                <div
                  className="font-heading text-2xl md:text-3xl mb-3 leading-tight"
                  style={{ color: nivel.color }}
                >
                  {nivel.title}
                </div>
                <p className="text-white/55 text-sm mb-6 leading-relaxed font-body">
                  {nivel.description}
                </p>
                <ul className="space-y-2">
                  {nivel.pillars.map((pillar, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-white/60 font-body">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: nivel.color }}
                        aria-hidden="true"
                      />
                      {pillar}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-white/20 text-xs mt-10 font-body">
          * Los resultados varían según tipo de negocio, inversión y ejecución. Datos basados en clientes activos.
        </p>
      </div>
    </section>
  );
}
