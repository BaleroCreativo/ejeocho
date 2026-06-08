"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const benefits = [
  "Diagnóstico inicial de los 8 ejes sin costo",
  "Sin contratos de largo plazo",
  "Resultados medibles desde el día 30",
  "Equipo dedicado a tu cuenta",
];

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-content",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cta-content",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "El nombre es requerido";
    if (!formState.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "El email no es válido";
    }
    if (!formState.business.trim())
      newErrors.business = "El nombre del negocio es requerido";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstError = document.querySelector("[aria-invalid='true']");
      (firstError as HTMLElement)?.focus();
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-28 px-6 bg-[#0C1418] relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[#04CCB5]/5 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="cta-content grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Copy */}
          <div>
            <span className="inline-block text-[#04CCB5] font-body font-bold text-sm tracking-[0.2em] uppercase mb-6">
              Empieza hoy
            </span>
            <h2
              id="cta-heading"
              className="font-heading text-[clamp(2.5rem,5vw,4rem)] text-white leading-tight mb-6"
            >
              Inicia tu{" "}
              <span className="text-gradient-teal">diagnóstico</span>{" "}
              Eje Ocho
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-10 font-body">
              En 30 minutos analizamos los 8 ejes de tu negocio, identificamos
              las brechas más costosas y te entregamos un plan de acción.
              Sin presión, sin compromisos.
            </p>

            <ul className="space-y-3" aria-label="Beneficios incluidos">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-[#04CCB5] flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-white/70 text-base font-body">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <div className="glass-card rounded-3xl p-8 border border-white/[0.06]">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-[#04CCB5]/15 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={30} className="text-[#04CCB5]" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-2xl text-white mb-3">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-white/55 text-sm leading-relaxed font-body">
                  Te contactaremos en las próximas 24 horas para agendar tu
                  diagnóstico gratuito de los 8 ejes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">
                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white/70 mb-2 font-body"
                    >
                      Nombre completo <span className="text-[#04CCB5]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      placeholder="Tu nombre"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#04CCB5] focus:ring-1 focus:ring-[#04CCB5] transition-colors text-sm font-body"
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-400 text-xs mt-1.5 font-body" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white/70 mb-2 font-body"
                    >
                      Email <span className="text-[#04CCB5]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      placeholder="tu@empresa.com"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#04CCB5] focus:ring-1 focus:ring-[#04CCB5] transition-colors text-sm font-body"
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-400 text-xs mt-1.5 font-body" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Business */}
                  <div>
                    <label
                      htmlFor="business"
                      className="block text-sm font-medium text-white/70 mb-2 font-body"
                    >
                      Nombre de tu negocio <span className="text-[#04CCB5]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      value={formState.business}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.business}
                      aria-describedby={errors.business ? "business-error" : undefined}
                      placeholder="Mi Empresa S.A."
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#04CCB5] focus:ring-1 focus:ring-[#04CCB5] transition-colors text-sm font-body"
                    />
                    {errors.business && (
                      <p id="business-error" className="text-red-400 text-xs mt-1.5 font-body" role="alert">
                        {errors.business}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white/70 mb-2 font-body"
                    >
                      ¿Cuál es tu principal reto de crecimiento?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Ej: Necesitamos más clientes, nuestro equipo no cierra ventas..."
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#04CCB5] focus:ring-1 focus:ring-[#04CCB5] transition-colors text-sm resize-none font-body"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Iniciar diagnóstico Eje Ocho
                        <ArrowRight size={18} aria-hidden="true" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
