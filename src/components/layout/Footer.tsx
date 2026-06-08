import React from "react";
import Link from "next/link";
import { Globe, Mail, X } from "lucide-react";

const footerLinks = {
  Servicios: [
    { label: "Los 8 Ejes", href: "#servicios" },
    { label: "Diagnóstico Comercial", href: "#contacto" },
    { label: "Proceso", href: "#proceso" },
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
    <footer className="bg-[#090F13] border-t border-white/[0.05]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-heading text-2xl tracking-tight inline-block mb-4"
              aria-label="Eje Ocho - ir al inicio"
            >
              <span className="text-gradient-teal">Eje</span>
              <span className="text-white"> Ocho</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Conectamos marketing, ventas y experiencia en un sistema de
              crecimiento comercial para PYMEs latinoamericanas.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-[#04CCB5] hover:border-[#04CCB5]/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04CCB5]"
                >
                  <social.icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-body font-bold text-white/60 text-xs tracking-[0.15em] uppercase mb-5">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-white text-sm transition-colors duration-200 focus:outline-none focus-visible:text-[#04CCB5]"
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
            © {new Date().getFullYear()} Eje Ocho. Todos los derechos reservados.
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
