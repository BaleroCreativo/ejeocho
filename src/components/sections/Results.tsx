"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Users, Clock, Award } from "lucide-react";

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
    color: "#00E8A2",
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "PYMEs atendidas",
    description: "transformadas y creciendo",
    color: "#FF4D00",
  },
  {
    icon: Clock,
    value: 90,
    suffix: " días",
    label: "para ver resultados",
    description: "desde el inicio del proyecto",
    color: "#FFB800",
  },
  {
    icon: Award,
    value: 3,
    suffix: "x",
    label: "aumento en ventas",
    description: "promedio en clientes activos",
    color: "#A78BFA",
  },
];

const caseStudies = [
  {
    industry: "Clínica Dental",
    result: "+280% en pacientes nuevos",
    period: "en 4 meses",
    metric: "80% menos costo por adquisición",
    color: "#00E8A2",
  },
  {
    industry: "Tienda de Ropa",
    result: "3.5x más ventas online",
    period: "en 3 meses",
    metric: "ROAS de 8.2x en Meta Ads",
    color: "#FF4D00",
  },
  {
    industry: "Empresa de Servicios B2B",
    result: "+420% más leads calificados",
    period: "en 6 meses",
    metric: "Pipeline de $1.2M en oportunidades",
    color: "#FFB800",
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
    const start = 0;
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
    <span className="font-heading font-black text-5xl md:text-6xl" style={{ color }}>
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
        ".case-card",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".case-card",
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
      className="py-28 px-6 bg-[#05070D] relative overflow-hidden"
      aria-labelledby="results-heading"
    >
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#00E8A2]/4 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="results-heading text-center mb-20">
          <span className="inline-block text-[#00E8A2] font-heading font-bold text-sm tracking-[0.2em] uppercase mb-4">
            Resultados probados
          </span>
          <h2
            id="results-heading"
            className="font-heading font-black text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-tight mb-6"
          >
            Números que{" "}
            <span className="text-gradient-mint">hablan solos</span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg leading-relaxed">
            Resultados reales de PYMEs como la tuya que decidieron dejar de
            improvisar.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="metric-card glass-card rounded-2xl p-6 text-center hover-lift"
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-xl mx-auto mb-4"
                style={{ background: `${metric.color}18` }}
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
              <div className="font-heading font-bold text-white/80 text-sm mt-1 mb-1">
                {metric.label}
              </div>
              <div className="text-white/40 text-xs">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div>
          <h3 className="font-heading font-bold text-white/40 text-sm tracking-[0.2em] uppercase mb-8 text-center">
            Casos de éxito
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {caseStudies.map((cs, i) => (
              <div
                key={i}
                className="case-card glass-card rounded-2xl p-7 border border-white/[0.05] hover-lift"
              >
                <div
                  className="inline-block text-xs font-bold tracking-wider uppercase rounded-full px-3 py-1 mb-5"
                  style={{
                    background: `${cs.color}18`,
                    color: cs.color,
                  }}
                >
                  {cs.industry}
                </div>
                <div
                  className="font-heading font-black text-2xl md:text-3xl mb-1 leading-tight"
                  style={{ color: cs.color }}
                >
                  {cs.result}
                </div>
                <div className="text-white/40 text-sm mb-4">{cs.period}</div>
                <div className="h-px bg-white/[0.06] mb-4" />
                <div className="text-white/60 text-sm font-medium">{cs.metric}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-white/25 text-xs mt-10">
          * Los resultados varían según el tipo de negocio, inversión y ejecución. Los números son aproximados basados en clientes activos.
        </p>
      </div>
    </section>
  );
}
