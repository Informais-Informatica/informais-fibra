"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function PlansTeaser() {
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
    <section aria-labelledby="planos-preview-heading" ref={ref} className="relative overflow-hidden bg-white">
      <div className="h-1.5 bg-[#1A56DB]" />
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block bg-[#EBF5FF] text-[#1A56DB] border border-[#1A56DB]/15 font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            // Planos
          </span>
          <h2 id="planos-preview-heading" className="font-display font-black text-4xl md:text-5xl uppercase leading-[0.95] text-[#1E293B] mb-4">
            Internet fibra óptica a partir de{" "}
            <span className="text-[#1A56DB]">R$ 109,90</span>
          </h2>
          <p className="font-body text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Planos residenciais e empresariais com fibra óptica real, Wi-Fi 6 grátis e suporte
            técnico 24/7 em Jataí (GO). Compare velocidades e escolha o plano ideal para sua casa
            ou negócio.
          </p>
          <Link
            href="/planos"
            className="btn-primary inline-block bg-[#1A56DB] hover:bg-[#1E429F] text-white font-body font-semibold px-8 py-4 rounded-xl transition-all text-base"
          >
            Ver todos os planos
          </Link>
        </div>
      </div>
    </section>
  );
}
