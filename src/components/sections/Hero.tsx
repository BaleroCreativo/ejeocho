"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const floatingStats = [
  {
    icon: TrendingUp,
    value: "+340%",
    label: "ROI promedio",
    color: "#00E8A2",
    delay: 0,
  },
  {
    icon: Users,
    value: "50+",
    label: "PYMEs transformadas",
    color: "#FF4D00",
    delay: 0.2,
  },
  {
    icon: Zap,
    value: "3x",
    label: "más ventas en 90 días",
    color: "#FFB800",
    delay: 0.4,
  },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
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

      // Floating stats staggered in
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

      // Subtle parallax on scroll
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080B12] pt-20"
      aria-label="Sección principal"
    >
      {/* Background gradients */}
      <div className="hero-bg-glow absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-[#FF4D00]/8 blur-[120px]" />
        <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] rounded-full bg-[#00E8A2]/5 blur-[100px]" />
        <div className="absolute top-[30%] right-[5%] w-[300px] h-[300px] rounded-full bg-[#FF4D00]/5 blur-[80px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="hero-content relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-4 py-2 mb-10 text-sm font-medium text-white/70">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E8A2] animate-pulse" />
          Consultoría especializada para PYMEs
        </div>

        {/* Main Heading */}
        <div
          ref={headingRef}
          className="overflow-hidden mb-8"
          style={{ perspective: "1000px" }}
        >
          <h1 className="font-heading font-black text-[clamp(3rem,9vw,8rem)] leading-[0.95] tracking-tight mb-0">
            <span className="hero-line block text-white">Multiplica tus</span>
            <span className="hero-line block text-gradient-orange">
              ventas.
            </span>
            <span className="hero-line block text-white text-[clamp(2rem,6vw,5.5rem)] font-bold mt-3 text-white/70">
              Sin adivinar.
            </span>
          </h1>
        </div>

        {/* Subheading */}
        <p className="hero-sub max-w-2xl mx-auto text-[clamp(1rem,2.5vw,1.25rem)] text-white/55 leading-relaxed font-body mb-12">
          Estrategias de marketing digital y ventas con{" "}
          <span className="text-white font-semibold">resultados medibles</span>{" "}
          para negocios que quieren crecer de verdad, no solo aparecer en redes.
        </p>

        {/* CTAs */}
        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <Button
            size="xl"
            onClick={() => scrollTo("contacto")}
            className="group"
          >
            Quiero escalar mi negocio
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
          <Button
            size="xl"
            variant="outline"
            onClick={() => scrollTo("resultados")}
          >
            Ver resultados reales
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
                style={{ background: `${stat.color}18` }}
              >
                <stat.icon size={20} style={{ color: stat.color }} />
              </div>
              <div
                className="font-heading font-black text-3xl mb-1"
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
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
