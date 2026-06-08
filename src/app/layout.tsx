import type { Metadata } from "next";
import { Yeseva_One, Lato } from "next/font/google";
import "./globals.css";

const yesevaOne = Yeseva_One({
  subsets: ["latin"],
  variable: "--font-yeseva",
  weight: "400",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eje Ocho — Sistema de Crecimiento Comercial para PYMEs",
  description:
    "Conectamos marketing, ventas y experiencia en un sistema de crecimiento comercial. Consultoría especializada en los 8 ejes que impulsan negocios latinoamericanos.",
  keywords: [
    "Eje Ocho",
    "consultoría marketing",
    "sistema de crecimiento comercial",
    "consultoría ventas",
    "marketing digital",
    "CRM",
    "PYMEs",
    "crecimiento empresarial",
    "los 8 ejes",
  ],
  openGraph: {
    title: "Eje Ocho — Sistema de Crecimiento Comercial para PYMEs",
    description:
      "Conectamos marketing, ventas y experiencia en un sistema de crecimiento comercial predecible.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${yesevaOne.variable} ${lato.variable}`}>
      <body className="font-body antialiased bg-[#0C1418] text-white">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
