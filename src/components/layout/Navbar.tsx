"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";

const navLinks = [
  { label: "Los 8 Ejes", href: "#servicios" },
  { label: "Resultados", href: "#resultados" },
  { label: "Proceso", href: "#proceso" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 0.1 }
    );
  }, []);

  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (mobileOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#0C1418]/95 backdrop-blur-xl border-b border-white/[0.06] py-3"
            : "bg-transparent py-5"
        )}
        aria-label="Navegación principal"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-2xl tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04CCB5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C1418] rounded"
            aria-label="Eje Ocho — ir al inicio"
          >
            <span className="text-gradient-teal">Eje</span>
            <span className="text-white"> Ocho</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 link-underline cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04CCB5] rounded px-1"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              size="sm"
              onClick={() => handleNavClick("#contacto")}
            >
              Iniciar diagnóstico
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04CCB5] rounded"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-[#0C1418]/98 backdrop-blur-2xl flex flex-col"
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
            <Link
              href="/"
              className="font-heading text-2xl"
              onClick={() => setMobileOpen(false)}
            >
              <span className="text-gradient-teal">Eje</span>
              <span className="text-white"> Ocho</span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04CCB5] rounded"
              aria-label="Cerrar menú"
            >
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 p-6 flex-1">
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left font-heading text-3xl text-white/80 hover:text-[#04CCB5] transition-colors duration-200 py-3 focus:outline-none focus-visible:text-[#04CCB5]"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="p-6 border-t border-white/[0.06]">
            <Button
              className="w-full"
              size="lg"
              onClick={() => handleNavClick("#contacto")}
            >
              Diagnosticar mi negocio
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
