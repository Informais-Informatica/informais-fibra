"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // A navbar só faz sentido transparente-no-topo na Home, porque é a única
  // página com uma imagem de fundo full-bleed atrás dela (o Hero). Nas
  // páginas internas (fundo branco/azul sólido) ela fica sempre sólida.
  const solid = scrolled || !isHome;

  // Sobre e Serviços continuam como seções da Home (âncoras).
  // Planos, Contato e FAQ são páginas próprias, com URL, título e
  // meta description dedicados — ver README para o racional de SEO.
  const navLinks = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/#sobre" },
    { label: "Serviços", href: "/#servicos" },
    { label: "Planos", href: "/planos" },
    { label: "FAQ", href: "/faq" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-[#0D1B3E]/98 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Navegação principal">

        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt={`${siteConfig.name} — provedor de internet fibra óptica em Jataí, GO`}
            width={200}
            height={56}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="nav-link font-body text-sm font-medium text-white/75 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block w-32" />

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}/>
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}/>
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}/>
          </div>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="bg-[#0D1B3E] border-t border-white/10 px-6 py-5 flex flex-col gap-3">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm text-white/75 hover:text-white py-2 border-b border-white/8 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
