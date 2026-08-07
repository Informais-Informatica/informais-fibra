"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
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

  const contacts = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      label: "WhatsApp",
      value: "(64) 99676-8038",
      description: "Resposta rápida, direto com a equipe.",
      href: "https://wa.me/5564996768038",
      accent: "#25D366",
      accentBg: "#F0FDF4",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      label: "E-mail",
      value: "atendimento@informaisfibra.com.br",
      description: "Para orçamentos e dúvidas mais detalhadas.",
      href: "mailto:atendimento@informaisfibra.com.br",
      accent: "#1A56DB",
      accentBg: "#EBF5FF",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      label: "Localização",
      value: "Jataí, GO",
      description: "Atendimento técnico local e presencial.",
      href: "https://maps.app.goo.gl/7BV7c8MCdXD4LFpB8",
      accent: "#D97706",
      accentBg: "#FFFBEB",
    },
  ];

  return (
    <section id="contato" ref={ref} className="relative">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <span className="inline-block bg-[#EBF5FF] text-[#1A56DB] border border-[#1A56DB]/15 font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              // Entre em contato
            </span>
            <Heading className="font-display font-black text-5xl md:text-6xl uppercase leading-[0.9] text-[#1E293B] mb-6">
              Fale com a{" "}
              <span className="text-[#1A56DB]">gente!</span>
            </Heading>
            <div className="space-y-4 font-body text-slate-500 leading-relaxed max-w-md">
              <p>
                A Informais Fibra é a vertente de telecomunicações da Informais, empresa
                consolidada no mercado de tecnologia, levando internet fibra óptica para
                residências e empresas de Jataí (GO) e região.
              </p>
              <p>
                Nossa equipe responde rápido e está pronta para te ajudar a escolher o
                plano certo ou tirar qualquer dúvida técnica — escolha o canal mais
                conveniente ao lado.
              </p>
            </div>
          </div>

          <div className={`flex flex-col gap-4 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {contacts.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card-surface group flex items-center gap-5 px-6 py-6 rounded-2xl"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: item.accentBg, color: item.accent }}
                >
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-body text-xs text-slate-400 uppercase tracking-wider leading-none mb-1.5">{item.label}</div>
                  <div className="font-body text-[#1E293B] font-semibold text-base group-hover:text-[#1A56DB] transition-colors truncate">{item.value}</div>
                  <div className="font-body text-slate-400 text-xs mt-1">{item.description}</div>
                </div>
                <div className="text-slate-300 group-hover:text-[#1A56DB] group-hover:translate-x-1 transition-all duration-200 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
