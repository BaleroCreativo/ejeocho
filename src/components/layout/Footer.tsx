import React from "react";
import Link from "next/link";
import { Globe, Mail, X } from "lucide-react";

const footerLinks = {
  Servicios: [
    { label: "Marketing Digital", href: "#servicios" },
    { label: "Consultoría de Ventas", href: "#servicios" },
    { label: "Implementación CRM", href: "#servicios" },
  ],
  Empresa: [
    { label: "Nosotros", href: "#proceso" },
    { label: "Resultados", href: "#resultados" },
    { label: "Blog", href: "/blog" },
  ],
  Contacto: [
    { label: "Diagnóstico gratuito", href: "#contacto" },
    { label: "hola@ejeocho.com", href: "mailto:hola@ejeocho.com" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "#", label: "Instagram" },
  { icon: Mail, href: "mailto:hola@ejeocho.com", label: "Email" },
  { icon: X, href: "#", label: "Twitter/X" },
];

export function Footer() {
  return (
    <footer className="bg-[#05070D] border-t border-white/[0.05]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-heading font-black text-2xl tracking-tight inline-block mb-4"
              aria-label="Ejeocho - ir al inicio"
            >
              <span className="text-gradient-orange">eje</span>
              <span className="text-white">ocho</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Consultoría de marketing digital y ventas para PYMEs que quieren
              crecer con estrategia, no con suerte.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-[#FF4D00] hover:border-[#FF4D00]/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4D00]"
                >
                  <social.icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-heading font-bold text-white/60 text-xs tracking-[0.15em] uppercase mb-5">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-white text-sm transition-colors duration-200 focus:outline-none focus-visible:text-[#FF4D00]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Ejeocho. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-white/25 hover:text-white/50 text-xs transition-colors focus:outline-none focus-visible:text-white"
            >
              Política de privacidad
            </Link>
            <Link
              href="#"
              className="text-white/25 hover:text-white/50 text-xs transition-colors focus:outline-none focus-visible:text-white"
            >
              Términos de uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
