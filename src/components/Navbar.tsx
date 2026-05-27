"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início",   href: "#inicio"  },
    { label: "Sobre",    href: "#sobre"   },
    { label: "Serviços", href: "#servicos"},
    { label: "Planos",   href: "#planos"  },
    { label: "Contato",  href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0D1B3E]/98 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
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
          aria-label="Menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}/>
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}/>
            <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}/>
          </div>
        </button>
      </nav>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96" : "max-h-0"}`}>
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
