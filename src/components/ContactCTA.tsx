"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function ContactCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section aria-labelledby="contato-preview-heading" ref={ref} className="relative bg-[#1A56DB] overflow-hidden">
      <div className="h-1.5 bg-[#FBBF24]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <div className={`relative max-w-3xl mx-auto px-6 py-24 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <span className="inline-block bg-white/15 text-white border border-white/20 font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          // Entre em contato
        </span>
        <h2 id="contato-preview-heading" className="font-display font-black text-4xl md:text-5xl uppercase leading-[0.95] text-white mb-5">
          Contrate a internet fibra da sua região em{" "}
          <span className="text-[#FBBF24]">Jataí</span>
        </h2>
        <p className="font-body text-blue-200 text-lg leading-relaxed max-w-xl mx-auto mb-8">
          Fale agora com nossa equipe pelo WhatsApp ou veja todos os canais de atendimento.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={siteConfig.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-[#FBBF24] hover:bg-[#D97706] text-[#1E293B] font-body font-semibold px-8 py-4 rounded-xl transition-all text-base"
          >
            Falar no WhatsApp
          </a>
          <Link
            href="/contato"
            className="font-body font-semibold px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all text-base"
          >
            Ver todos os canais
          </Link>
        </div>
      </div>
    </section>
  );
}
