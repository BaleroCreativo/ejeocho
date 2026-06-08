"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }
  .film-grain {
    position: absolute; inset: 0; width: 100%; height: 100%;
    pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
    background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }
  .bg-grid-theme {
    background-size: 60px 60px;
    background-image:
      linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
    mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }
  .text-3d-matte {
    color: #FFFFFF;
    text-shadow: 0 10px 30px rgba(255,255,255,0.1), 0 2px 4px rgba(255,255,255,0.05);
  }
  .text-silver-matte {
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0.4) 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text; transform: translateZ(0);
    filter: drop-shadow(0px 10px 20px rgba(255,255,255,0.1)) drop-shadow(0px 2px 4px rgba(255,255,255,0.05));
  }
  .text-card-silver-matte {
    background: linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text; transform: translateZ(0);
    filter: drop-shadow(0px 12px 24px rgba(0,0,0,0.8)) drop-shadow(0px 4px 8px rgba(0,0,0,0.6));
  }
  .premium-depth-card {
    background: linear-gradient(145deg, #0D1F4A 0%, #080B12 100%);
    box-shadow: 0 40px 100px -20px rgba(0,0,0,0.9), 0 20px 40px -20px rgba(0,0,0,0.8),
      inset 0 1px 2px rgba(255,255,255,0.15), inset 0 -2px 4px rgba(0,0,0,0.8);
    border: 1px solid rgba(255,255,255,0.04); position: relative;
  }
  .card-sheen {
    position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
    background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,77,0,0.06) 0%, transparent 40%);
    mix-blend-mode: screen; transition: opacity 0.3s ease;
  }
  .floating-ui-badge {
    background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 100%);
    backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
    box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 25px 50px -12px rgba(0,0,0,0.8),
      inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -1px 1px rgba(0,0,0,0.5);
  }
  .progress-ring {
    transform: rotate(-90deg); transform-origin: center;
    stroke-dasharray: 402; stroke-dashoffset: 402; stroke-linecap: round;
  }
`;

export interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  brandName?: string;
  tagline1?: string;
  tagline2?: string;
  cardHeading?: string;
  cardDescription?: React.ReactNode;
  metricValue?: number;
  metricLabel?: string;
  ctaHeading?: string;
  ctaDescription?: string;
}

export function CinematicHero({
  brandName = "ejeocho",
  tagline1 = "Transforma tu negocio,",
  tagline2 = "no solo tu marketing.",
  cardHeading = "Resultados, redefinidos.",
  cardDescription = (
    <>
      <span className="text-white font-semibold">Ejeocho</span> ayuda a PYMEs a
      multiplicar sus ventas con estrategias de marketing digital y consultoría
      comercial de alto impacto.
    </>
  ),
  metricValue = 340,
  metricLabel = "ROI promedio",
  ctaHeading = "Escala tu negocio.",
  ctaDescription =
    "Únete a las PYMEs que ya están creciendo con estrategias que generan resultados medibles desde el primer mes.",
  className,
  ...props
}: CinematicHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 2) return;
      cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);
          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;
          gsap.to(mockupRef.current, {
            rotationY: xVal * 10,
            rotationX: -yVal * 10,
            ease: "power3.out",
            duration: 1.2,
          });
        }
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const ctx = gsap.context(() => {
      gsap.set(".text-track", { autoAlpha: 0, y: 60, scale: 0.85, filter: "blur(20px)", rotationX: -20 });
      gsap.set(".text-days", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
      gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set([".card-left-text", ".card-right-text", ".mockup-scroll-wrapper", ".floating-badge"], { autoAlpha: 0 });
      gsap.set(".cta-wrapper", { autoAlpha: 0, scale: 0.8, filter: "blur(30px)" });

      const introTl = gsap.timeline({ delay: 0.3 });
      introTl
        .to(".text-track", { duration: 1.8, autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", rotationX: 0, ease: "expo.out" })
        .to(".text-days", { duration: 1.4, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut" }, "-=1.0");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=7000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scrollTl
        .to([".hero-text-wrapper", ".bg-grid-theme"], { scale: 1.15, filter: "blur(20px)", opacity: 0.2, ease: "power2.inOut", duration: 2 }, 0)
        .to(".main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
        .to(".main-card", { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: 1.5 })
        .fromTo(".mockup-scroll-wrapper",
          { y: 300, z: -500, rotationX: 50, rotationY: -30, autoAlpha: 0, scale: 0.6 },
          { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 2.5 }, "-=0.8"
        )
        .to(".counter-val", { innerHTML: metricValue, snap: { innerHTML: 1 }, duration: 2, ease: "expo.out" }, "-=1.5")
        .fromTo(".floating-badge", { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 },
          { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, ease: "back.out(1.5)", duration: 1.5, stagger: 0.2 }, "-=1.5"
        )
        .fromTo(".card-left-text", { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 }, "-=1.2")
        .fromTo(".card-right-text", { x: 50, autoAlpha: 0, scale: 0.8 }, { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 1.5 }, "<")
        .to({}, { duration: 2.5 })
        .set(".hero-text-wrapper", { autoAlpha: 0 })
        .set(".cta-wrapper", { autoAlpha: 1 })
        .to({}, { duration: 1.5 })
        .to([".mockup-scroll-wrapper", ".floating-badge", ".card-left-text", ".card-right-text"],
          { scale: 0.9, y: -40, z: -200, autoAlpha: 0, ease: "power3.in", duration: 1.2, stagger: 0.05 }
        )
        .to(".main-card", {
          width: isMobile ? "92vw" : "85vw",
          height: isMobile ? "92vh" : "85vh",
          borderRadius: isMobile ? "32px" : "40px",
          ease: "expo.inOut", duration: 1.8
        }, "pullback")
        .to(".cta-wrapper", { scale: 1, filter: "blur(0px)", ease: "expo.inOut", duration: 1.8 }, "pullback")
        .to(".main-card", { y: -window.innerHeight - 300, ease: "power3.in", duration: 1.5 });
    }, containerRef);

    return () => ctx.revert();
  }, [metricValue]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-screen h-screen overflow-hidden flex items-center justify-center bg-[#080B12] text-white font-sans antialiased",
        className
      )}
      style={{ perspective: "1500px" }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      <div className="film-grain" aria-hidden="true" />
      <div className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-40" aria-hidden="true" />

      {/* Hero Text */}
      <div className="hero-text-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4">
        <h1 className="text-track gsap-reveal text-3d-matte text-5xl md:text-7xl lg:text-[6rem] font-heading font-bold tracking-tight mb-2">
          {tagline1}
        </h1>
        <h1 className="text-days gsap-reveal text-silver-matte text-5xl md:text-7xl lg:text-[6rem] font-heading font-extrabold tracking-tighter">
          {tagline2}
        </h1>
      </div>

      {/* CTA Wrapper */}
      <div className="cta-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 gsap-reveal pointer-events-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 tracking-tight text-silver-matte">
          {ctaHeading}
        </h2>
        <p className="text-white/50 text-lg md:text-xl mb-12 max-w-xl mx-auto font-light leading-relaxed">
          {ctaDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <a
            href="#contacto"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem] bg-[#FF4D00] text-white font-heading font-bold text-base hover:bg-[#FF7240] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D00] focus-visible:ring-offset-2"
          >
            Quiero escalar mi negocio
          </a>
          <a
            href="#servicios"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem] border border-white/20 text-white font-heading font-bold text-base hover:border-white/40 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            Ver servicios
          </a>
        </div>
      </div>

      {/* Main Card */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={{ perspective: "1500px" }}>
        <div
          ref={mainCardRef}
          className="main-card premium-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]"
        >
          <div className="card-sheen" aria-hidden="true" />

          <div className="relative w-full h-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-3 items-center lg:gap-8 z-10 py-6 lg:py-0">
            {/* Brand name */}
            <div className="card-right-text gsap-reveal order-1 lg:order-3 flex justify-center lg:justify-end z-20 w-full">
              <h2 className="text-5xl md:text-[5rem] lg:text-[7rem] font-heading font-black uppercase tracking-tighter text-card-silver-matte">
                {brandName}
              </h2>
            </div>

            {/* Mockup / Visual */}
            <div
              className="mockup-scroll-wrapper order-2 lg:order-2 relative w-full h-[320px] lg:h-[500px] flex items-center justify-center z-10"
              style={{ perspective: "1000px" }}
            >
              <div
                ref={mockupRef}
                className="relative w-[220px] h-[420px] rounded-[2.5rem] flex flex-col will-change-transform"
                style={{
                  background: "linear-gradient(145deg, #1A1F35 0%, #0A0D18 100%)",
                  boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.1), inset 0 0 0 6px #000, 0 40px 80px rgba(0,0,0,0.9)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="absolute inset-[6px] bg-[#050914] rounded-[2rem] overflow-hidden text-white">
                  {/* Screen glow */}
                  <div
                    className="absolute inset-0 pointer-events-none z-40"
                    style={{ background: "linear-gradient(110deg, rgba(255,255,255,0.06) 0%, transparent 40%)" }}
                    aria-hidden="true"
                  />
                  {/* Notch */}
                  <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-black rounded-full z-50 flex items-center justify-end px-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00E8A2] animate-pulse" />
                  </div>
                  {/* Screen Content */}
                  <div className="relative w-full h-full pt-10 px-4 pb-6 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <span className="text-[9px] text-neutral-400 uppercase tracking-widest block mb-0.5">Ejeocho</span>
                        <span className="text-base font-bold text-white">Dashboard</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#FF4D00]/20 border border-[#FF4D00]/30 flex items-center justify-center text-xs font-bold text-[#FF4D00]">E8</div>
                    </div>
                    {/* ROI Ring */}
                    <div className="relative w-32 h-32 mx-auto flex items-center justify-center mb-5">
                      <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                        <circle cx="64" cy="64" r="52" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="10" />
                        <circle className="progress-ring" cx="64" cy="64" r="52" fill="none" stroke="#FF4D00" strokeWidth="10" />
                      </svg>
                      <div className="text-center">
                        <span className="counter-val text-3xl font-black text-white block">0</span>
                        <span className="text-[8px] text-[#FF4D00]/70 uppercase tracking-widest font-bold">{metricLabel}</span>
                      </div>
                    </div>
                    {/* Stats */}
                    <div className="space-y-2.5">
                      {[
                        { label: "Leads generados", color: "#00E8A2" },
                        { label: "Conversiones", color: "#FF4D00" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="rounded-xl p-2.5 flex items-center gap-2"
                          style={{
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.04)",
                          }}
                        >
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: `${item.color}18`, border: `1px solid ${item.color}20` }}
                            aria-hidden="true"
                          >
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                          </div>
                          <div className="flex-1">
                            <div className="h-1.5 w-16 bg-neutral-300/20 rounded-full mb-1.5" />
                            <div className="h-1 w-10 bg-neutral-600/30 rounded-full" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90px] h-[3px] bg-white/20 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="floating-badge absolute flex top-4 left-[-10px] lg:left-[-70px] floating-ui-badge rounded-xl p-3 items-center gap-3 z-30">
                <div className="w-8 h-8 rounded-full bg-[#00E8A2]/15 flex items-center justify-center border border-[#00E8A2]/30 text-sm font-bold text-[#00E8A2]" aria-hidden="true">↑</div>
                <div>
                  <p className="text-white text-xs font-bold">+340% ROI</p>
                  <p className="text-white/40 text-[10px]">Este mes</p>
                </div>
              </div>

              <div className="floating-badge absolute flex bottom-10 right-[-10px] lg:right-[-70px] floating-ui-badge rounded-xl p-3 items-center gap-3 z-30">
                <div className="w-8 h-8 rounded-full bg-[#FF4D00]/15 flex items-center justify-center border border-[#FF4D00]/30 text-sm font-bold text-[#FF4D00]" aria-hidden="true">★</div>
                <div>
                  <p className="text-white text-xs font-bold">50+ PYMEs</p>
                  <p className="text-white/40 text-[10px]">transformadas</p>
                </div>
              </div>
            </div>

            {/* Left text */}
            <div className="card-left-text gsap-reveal order-3 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 w-full px-4 lg:px-0">
              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-0 lg:mb-4 tracking-tight">
                {cardHeading}
              </h3>
              <p className="hidden md:block text-blue-100/60 text-sm lg:text-base font-normal leading-relaxed max-w-xs">
                {cardDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
