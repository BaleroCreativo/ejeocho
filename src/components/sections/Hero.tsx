"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const floatingStats = [
  {
    icon: TrendingUp,
    value: "+340%",
    label: "ROI promedio",
    color: "#04CCB5",
    delay: 0,
  },
  {
    icon: Users,
    value: "50+",
    label: "PYMEs transformadas",
    color: "#FCE300",
    delay: 0.2,
  },
  {
    icon: Target,
    value: "8",
    label: "ejes de crecimiento",
    color: "#508590",
    delay: 0.4,
  },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-line",
        { y: 100, opacity: 0, rotateX: -15 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.12,
          duration: 1.2,
          ease: "expo.out",
          delay: 0.3,
        }
      );

      gsap.fromTo(
        ".hero-sub",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.9 }
      );

      gsap.fromTo(
        ".hero-cta",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 1.1 }
      );

      gsap.fromTo(
        ".stat-card",
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "back.out(1.4)",
          delay: 1.3,
        }
      );

      gsap.to(".hero-bg-glow", {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".hero-content", {
        y: 60,
        opacity: 0.6,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "50% top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0C1418] pt-20"
      aria-label="Sección principal"
    >
      {/* Background gradients */}
      <div className="hero-bg-glow absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-[#04CCB5]/6 blur-[130px]" />
        <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] rounded-full bg-[#FCE300]/4 blur-[100px]" />
        <div className="absolute top-[30%] right-[5%] w-[300px] h-[300px] rounded-full bg-[#508590]/8 blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(4,204,181,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(4,204,181,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="hero-content relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/[0.05] border border-[#04CCB5]/20 rounded-full px-4 py-2 mb-10 text-sm font-medium text-white/70">
          <span className="w-1.5 h-1.5 rounded-full bg-[#04CCB5] animate-pulse" />
          Sistema de crecimiento comercial para PYMEs
        </div>

        {/* Main Heading */}
        <div
          className="overflow-hidden mb-8"
          style={{ perspective: "1000px" }}
        >
          <h1 className="font-heading text-[clamp(2.8rem,7vw,6.5rem)] leading-[1.05] tracking-tight mb-0">
            <span className="hero-line block text-white">Conectamos marketing,</span>
            <span className="hero-line block text-gradient-teal">
              ventas y experiencia
            </span>
            <span className="hero-line block text-white text-[clamp(2rem,5vw,4.5rem)] mt-2 text-white/80">
              en un sistema que crece.
            </span>
          </h1>
        </div>

        {/* Subheading */}
        <p className="hero-sub max-w-2xl mx-auto text-[clamp(1rem,2.5vw,1.2rem)] text-white/55 leading-relaxed font-body mb-12">
          Cuando los 8 ejes de tu negocio funcionan alineados, el crecimiento
          deja de ser una esperanza y se convierte en un{" "}
          <span className="text-white font-semibold">sistema predecible.</span>
        </p>

        {/* CTAs */}
        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <Button
            size="xl"
            onClick={() => scrollTo("contacto")}
            className="group"
          >
            Diagnosticar mi sistema de crecimiento
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
          <Button
            size="xl"
            variant="outline"
            onClick={() => scrollTo("servicios")}
          >
            Conocer los 8 ejes
          </Button>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {floatingStats.map((stat, i) => (
            <div
              key={i}
              className="stat-card glass-card rounded-2xl p-5 text-center hover-lift"
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-xl mx-auto mb-3"
                style={{ background: `${stat.color}15` }}
              >
                <stat.icon size={20} style={{ color: stat.color }} />
              </div>
              <div
                className="font-heading text-3xl mb-1"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-white/50 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#04CCB5]/40 to-transparent" />
      </div>
    </section>
  );
}
