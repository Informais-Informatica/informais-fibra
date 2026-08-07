"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" ref={ref} className="relative overflow-hidden bg-white">
      <div className="h-1.5 bg-[#1A56DB]" />
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div
            className="reveal"
            style={{ opacity: 0, transform: "translateY(2rem)", transition: "all 0.7s ease" }}
          >
            <span className="inline-block bg-[#EBF5FF] text-[#1A56DB] border border-[#1A56DB]/15 font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              // Sobre nós
            </span>
            <h2 className="font-display font-black text-5xl md:text-6xl xl:text-7xl uppercase leading-[0.9] text-[#1E293B]">
              Sobre a <br />
              <span className="text-[#1A56DB]">Informais</span>
              <br />
              <span className="relative inline-block">
                Fibra
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-[#FBBF24] rounded-full block" />
              </span>
            </h2>

            <div className="flex flex-col sm:flex-row items-start gap-4 mt-10">
              {[
                { icon: "🏢", title: "Parte da Informais Informática", desc: "Empresa consolidada no mercado de tecnologia regional" },
                { icon: "📡", title: "Cobertura em expansão", desc: "Novos bairros e regiões atendidos todo mês" },
                { icon: "🛠️", title: "Suporte local", desc: "Time técnico próximo, atendimento rápido e presencial" },
              ].map((fact, i, arr) => (
                <div key={fact.title} className="flex items-start gap-3">
                  <div className="flex flex-col">
                    <span className="font-body font-semibold text-[#1E293B] text-sm">{fact.title}</span>
                    <span className="font-body text-slate-400 text-xs mt-0.5 leading-relaxed">{fact.desc}</span>
                  </div>
                  {i < arr.length - 1 && <div className="hidden sm:block w-px h-10 bg-slate-200 ml-4 mt-1 flex-shrink-0" />}
                </div>
              ))}
            </div>
          </div>

          <div
            className="reveal space-y-7"
            style={{ opacity: 0, transform: "translateY(2rem)", transition: "all 0.7s ease 150ms" }}
          >
            <div className="space-y-4 font-body text-slate-500 leading-relaxed">
              <p>
                Somos a vertente de telecomunicações da Informais, empresa consolidada no mercado de tecnologia. Com DNA de inovação, levamos internet fibra óptica de alta qualidade para residências e empresas de Jataí (GO) e região.
              </p>
              <p>
                Nosso <strong className="text-[#1A56DB] font-semibold">link dedicado</strong> garante que supermercados, clínicas, lojas e escritórios mantenham suas operações conectadas e estáveis — porque cada minuto sem internet é prejuízo para o seu negócio.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Instalação técnica especializada com Wi-Fi 6 incluso grátis",
                "Fibra óptica real com infraestrutura robusta e alta estabilidade",
                "Link dedicado exclusivo para empresas com IP público fixo",
                "Firewall corporativo para mais segurança e proteção da rede",
                "Consultoria técnica para apoiar a conectividade do seu negócio",
                "Em expansão — levando conexão de qualidade para novos bairros todos os meses",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EBF5FF] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#1A56DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="font-body text-slate-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
