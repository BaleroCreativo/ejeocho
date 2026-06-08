"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const posts = [
  {
    category: "Marketing Digital",
    categoryColor: "#FF4D00",
    title: "5 métricas de marketing que toda PYME debería monitorear cada semana",
    excerpt:
      "Si no mides, no puedes mejorar. Estas 5 métricas te dan una radiografía semanal de tu estrategia digital y te dicen exactamente dónde enfocar tu presupuesto.",
    readTime: "6 min",
    slug: "metricas-marketing-pyme",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    category: "Ventas",
    categoryColor: "#00E8A2",
    title: "Cómo implementar un CRM en tu PYME sin morir en el intento",
    excerpt:
      "El CRM correcto puede triplicar tus cierres. El incorrecto, paralizar tu operación. Guía práctica para elegir e implementar la herramienta que sí funciona para tu negocio.",
    readTime: "8 min",
    slug: "implementar-crm-pyme",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    category: "Estrategia",
    categoryColor: "#A78BFA",
    title: "El error más costoso que cometen las PYMEs en publicidad digital",
    excerpt:
      "El 80% de los negocios tiran dinero en ads sin una estrategia de conversión. Te mostramos el framework que usamos para asegurar que cada peso invertido genere retorno.",
    readTime: "5 min",
    slug: "error-publicidad-digital-pyme",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80",
  },
];

export function BlogPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".blog-heading",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".blog-heading",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".blog-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".blog-card",
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
      className="py-28 px-6 bg-[#080B12]"
      aria-labelledby="blog-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="blog-heading flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="inline-block text-[#A78BFA] font-heading font-bold text-sm tracking-[0.2em] uppercase mb-4">
              Recursos gratis
            </span>
            <h2
              id="blog-heading"
              className="font-heading font-black text-[clamp(2rem,4.5vw,3.5rem)] text-white leading-tight"
            >
              Aprende a vender{" "}
              <span className="text-gradient-orange">mejor</span>
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link href="/blog" className="flex items-center gap-2">
              Ver todos los artículos
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article key={i} className="blog-card group">
              <Link
                href={`/blog/${post.slug}`}
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D00] rounded-2xl"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[16/9]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={600}
                    height={338}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-bold tracking-wider uppercase rounded-full px-3 py-1"
                    style={{
                      background: `${post.categoryColor}18`,
                      color: post.categoryColor,
                    }}
                  >
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-white/30 text-xs">
                    <Clock size={12} aria-hidden="true" />
                    {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading font-black text-lg text-white group-hover:text-[#FF4D00] transition-colors duration-200 leading-snug mb-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-white/45 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
