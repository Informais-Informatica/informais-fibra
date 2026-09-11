"use client";

import { useEffect, useRef, useState } from "react";

const plans = [
  {
    id: "essencial",
    name: "Plano Essencial",
    speed: "300",
    price: "89",
    description: "Ideal para o dia a dia: navegação, redes sociais e streaming.",
    features: ["Fibra óptica", "Wi-Fi 6 grátis", "Suporte a IPv6", "Suporte online"],
    highlight: false,
    dedicated: false,
  },
  {
    id: "inicial",
    name: "Plano Residencial",
    speed: "500",
    price: "109",
    description: "Ideal para residências.",
    features: ["Fibra óptica", "Wi-Fi 6 grátis", "Suporte a IPv6", "Suporte online"],
    highlight: false,
    dedicated: false,
  },
  {
    id: "intermediario",
    name: "Plano Plus",
    speed: "700",
    price: "129",
    description: "O mais escolhido. Perfeito para pequenas empresas e famílias exigentes.",
    features: ["Fibra óptica", "Wi-Fi 6 grátis", "Suporte a IPv6", "Suporte online", "Prioridade no suporte"],
    highlight: true,
    dedicated: false,
  },
  {
    id: "avancado",
    name: "Plano Premium",
    speed: "1000",
    price: "159",
    description: "Conexão ultra rápida para streaming, jogos e trabalho sem interrupções.",
    features: ["Fibra óptica", "Wi-Fi 6 grátis", "Suporte a IPv6", "Suporte online", "Prioridade no suporte"],
    highlight: false,
    dedicated: false,
  },
  {
    id: "dedicado",
    name: "Link Dedicado",
    speed: null,
    price: null,
    description: "Solução voltada para o setor corporativo, garantindo segurança e estabilidade na conexão.",
    features: ["Fibra óptica", "Wi-Fi 6 grátis", "Suporte a IPv6", "Suporte online", "Prioridade no suporte", "IP Fixo incluso"],
    highlight: false,
    dedicated: true,
  },
];

export default function Plans({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
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

  return (
    <section id="planos" ref={ref} className="relative">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block bg-[#EBF5FF] text-[#1A56DB] border border-[#1A56DB]/15 font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            // Planos
          </span>
          <Heading className="font-display font-black text-5xl md:text-6xl uppercase leading-[0.9] text-[#1E293B] mb-4">
            Escolha o plano{" "}
            <span className="text-[#1A56DB]">ideal</span>
          </Heading>
          <p className="font-body text-slate-500 text-lg leading-relaxed">
            Fibra óptica real, Wi-Fi 6 grátis e suporte 24/7 para residências e empresas em Jataí (GO).
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div
                className={`card-surface relative h-full flex flex-col rounded-2xl bg-white ${
                  plan.highlight ? "ring-2 ring-[#1A56DB]/25" : ""
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 right-6 bg-[#FBBF24] text-[#1E293B] font-display font-bold text-[11px] uppercase tracking-wide px-3 py-1 rounded-full shadow-md shadow-[#FBBF24]/40">
                    ⚡ Mais popular
                  </span>
                )}
                {plan.dedicated && (
                  <span className="absolute -top-3 right-6 bg-[#0D1B3E] text-white font-display font-bold text-[11px] uppercase tracking-wide px-3 py-1 rounded-full shadow-md shadow-[#0D1B3E]/30">
                    🏢 Corporativo
                  </span>
                )}

                <div className="p-6 xl:p-8 flex flex-col h-full items-center sm:items-start text-center sm:text-left">
                  <h3 className="font-display font-bold text-lg uppercase text-[#1E293B] mb-1">
                    {plan.name}
                  </h3>
                  <p className="font-body text-slate-400 text-sm mb-6">
                    {plan.description}
                  </p>

                  <div className="w-full min-h-[128px] flex flex-col justify-center mb-8 pb-8 border-b border-slate-100">
                    {plan.dedicated ? (
                      <>
                        <span className="font-display font-black text-3xl leading-none text-[#0D1B3E] mb-2">
                          Sob consulta
                        </span>
                        <p className="font-body text-sm text-slate-400">
                          Velocidade e preço personalizados conforme a sua necessidade.
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="mb-1">
                          <span className={`font-display font-black text-5xl leading-none ${plan.highlight ? "text-[#1A56DB]" : "text-[#1E293B]"}`}>
                            {plan.speed}
                          </span>
                          <span className="font-display font-bold text-lg ml-2 text-[#FBBF24]">
                            Mega
                          </span>
                        </div>
                        <div>
                          <span className="font-body text-sm text-slate-400">por </span>
                          <span className="font-display font-black text-2xl text-[#1E293B]">R$ {plan.price},90</span>
                          <span className="font-body text-sm text-slate-400">/mês</span>
                        </div>
                      </>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 w-full flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 font-body text-sm text-slate-600">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          plan.highlight ? "bg-[#EBF5FF]" : plan.dedicated ? "bg-[#0D1B3E]/10" : "bg-slate-100"
                        }`}>
                          <svg className={`w-3 h-3 ${
                            plan.highlight ? "text-[#1A56DB]" : plan.dedicated ? "text-[#0D1B3E]" : "text-slate-400"
                          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/5564996768038"
                    target="_blank" rel="noopener noreferrer"
                    className={`btn-primary mt-auto w-full block text-center font-body font-semibold px-6 py-4 rounded-xl transition-all ${
                      plan.highlight
                        ? "bg-[#FBBF24] hover:bg-[#D97706] text-[#1E293B] shadow-lg shadow-[#FBBF24]/30"
                        : plan.dedicated
                        ? "bg-[#0D1B3E] hover:bg-[#1A2F5E] text-white shadow-md shadow-[#0D1B3E]/20"
                        : "bg-[#1A56DB] hover:bg-[#1E429F] text-white shadow-md shadow-[#1A56DB]/20"
                    }`}
                  >
                    {plan.dedicated ? "Falar com um especialista" : "Quero esse!"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
