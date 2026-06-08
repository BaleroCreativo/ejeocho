import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ejeocho — Consultoría de Marketing y Ventas",
  description:
    "Transformamos PYMEs en máquinas de ventas con estrategias de marketing digital y consultoría comercial que generan resultados reales y medibles.",
  keywords: [
    "consultoría marketing",
    "consultoría ventas",
    "marketing digital",
    "CRM",
    "PYMEs",
    "crecimiento empresarial",
    "Ejeocho",
  ],
  openGraph: {
    title: "Ejeocho — Consultoría de Marketing y Ventas",
    description:
      "Transformamos PYMEs en máquinas de ventas con estrategias probadas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${syne.variable} ${jakarta.variable}`}>
      <body className="font-body antialiased bg-[#080B12] text-white">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
