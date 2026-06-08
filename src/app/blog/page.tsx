"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Clock, Search } from "lucide-react";

const allPosts = [
  {
    category: "Marketing Digital",
    categoryColor: "#04CCB5",
    title: "5 métricas de marketing que toda PYME debería monitorear cada semana",
    excerpt:
      "Si no mides, no puedes mejorar. Estas 5 métricas te dan una radiografía semanal de tu estrategia digital.",
    readTime: "6 min",
    slug: "metricas-marketing-pyme",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    date: "8 Jun 2025",
  },
  {
    category: "Ventas",
    categoryColor: "#FCE300",
    title: "Cómo implementar un CRM en tu PYME sin morir en el intento",
    excerpt:
      "El CRM correcto puede triplicar tus cierres. Guía práctica para elegir e implementar la herramienta que funciona.",
    readTime: "8 min",
    slug: "implementar-crm-pyme",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    date: "2 Jun 2025",
  },
  {
    category: "Estrategia",
    categoryColor: "#508590",
    title: "El error más costoso que cometen las PYMEs en publicidad digital",
    excerpt:
      "El 80% de los negocios tiran dinero en ads sin una estrategia de conversión. Aprende el framework correcto.",
    readTime: "5 min",
    slug: "error-publicidad-digital-pyme",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80",
    date: "25 May 2025",
  },
  {
    category: "Marketing Digital",
    categoryColor: "#04CCB5",
    title: "SEO local: cómo aparecer primero en Google cuando tus clientes te buscan",
    excerpt:
      "Para negocios locales, el SEO puede ser el canal de adquisición más rentable. Te enseñamos cómo dominarlo.",
    readTime: "10 min",
    slug: "seo-local-pyme",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80",
    date: "18 May 2025",
  },
  {
    category: "Ventas",
    categoryColor: "#FCE300",
    title: "Cómo escribir emails de prospección que sí generan respuesta",
    excerpt:
      "El cold email sigue funcionando cuando se hace bien. Plantillas, asuntos y mejores prácticas para conectar con prospectos.",
    readTime: "7 min",
    slug: "emails-prospeccion-efectivos",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
    date: "10 May 2025",
  },
  {
    category: "Estrategia",
    categoryColor: "#508590",
    title: "Diagnóstico de marketing: 10 preguntas que revelan los hoyos en tu estrategia",
    excerpt:
      "Antes de invertir un peso más, hazte estas preguntas. La mayoría de los problemas de crecimiento tienen solución obvia cuando los identificas.",
    readTime: "9 min",
    slug: "diagnostico-marketing-pyme",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    date: "3 May 2025",
  },
];

const categories = ["Todos", "Marketing Digital", "Ventas", "Estrategia"];

export default function BlogPage(): React.ReactElement {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-20 px-6 bg-[#0C1418] relative overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#04CCB5]/6 blur-[120px] pointer-events-none"
            aria-hidden="true"
          />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block text-[#04CCB5] font-body font-bold text-sm tracking-[0.2em] uppercase mb-4">
              Blog & Recursos
            </span>
            <h1 className="font-heading text-[clamp(3rem,7vw,5.5rem)] text-white leading-tight mb-6">
              Aprende.{" "}
              <span className="text-gradient-teal">
                Crece.
              </span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto font-body">
              Estrategias de marketing y ventas explicadas de forma simple, con
              ejemplos reales de PYMEs latinoamericanas.
            </p>

            {/* Search */}
            <div className="mt-10 relative max-w-md mx-auto">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                aria-hidden="true"
              />
              <input
                type="search"
                placeholder="Buscar artículos..."
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-[#04CCB5] focus:ring-1 focus:ring-[#04CCB5] transition-colors text-sm font-body"
                aria-label="Buscar artículos"
              />
            </div>
          </div>
        </section>

        {/* Posts */}
        <section className="py-16 px-6 bg-[#0C1418]" aria-label="Lista de artículos">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12" role="list" aria-label="Filtros de categoría">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-5 py-2 rounded-full text-sm font-body font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04CCB5] cursor-pointer ${
                    cat === "Todos"
                      ? "bg-[#04CCB5] text-[#0C1418]"
                      : "bg-white/[0.04] border border-white/10 text-white/60 hover:text-white hover:border-white/20"
                  }`}
                  role="listitem"
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPosts.map((post, i) => (
                <article key={i} className="group">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04CCB5] rounded-2xl"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true" />
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs font-bold tracking-wider uppercase rounded-full px-3 py-1 font-body"
                        style={{
                          background: `${post.categoryColor}15`,
                          color: post.categoryColor,
                        }}
                      >
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-white/30 text-xs">
                        <Clock size={12} aria-hidden="true" />
                        {post.readTime}
                      </div>
                      <span className="text-white/20 text-xs ml-auto font-body">
                        {post.date}
                      </span>
                    </div>

                    <h2 className="font-heading text-lg text-white group-hover:text-[#04CCB5] transition-colors duration-200 leading-snug mb-2">
                      {post.title}
                    </h2>
                    <p className="text-white/45 text-sm leading-relaxed line-clamp-2 mb-4 font-body">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-[#04CCB5] text-sm font-semibold group-hover:gap-3 transition-all duration-200 font-body">
                      Leer artículo{" "}
                      <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-24 px-6 bg-[#090F13]" aria-label="Suscripción al newsletter">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
              Recibe estrategias en tu inbox
            </h2>
            <p className="text-white/50 mb-8 leading-relaxed font-body">
              Cada semana, un artículo accionable de marketing o ventas directo a tu correo. Sin spam.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Suscripción al newsletter"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="tu@empresa.com"
                required
                className="flex-1 bg-white/[0.04] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-[#04CCB5] focus:ring-1 focus:ring-[#04CCB5] transition-colors text-sm font-body"
              />
              <button
                type="submit"
                className="bg-[#04CCB5] text-[#0C1418] font-body font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-[#00A896] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04CCB5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#090F13] whitespace-nowrap cursor-pointer"
              >
                Suscribirme gratis
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
