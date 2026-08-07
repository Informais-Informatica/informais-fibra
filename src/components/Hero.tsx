"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    id: "empresa",
    image: "/working.png",
    badge: "Fibra Óptica · Link Dedicado",
    alt: "Internet empresarial com link dedicado para empresas em Jataí, GO",
    title: (
      <>
        Sua
        <br />
        <span className="text-[#FBBF24]">operação</span>
        <br />
        <span className="relative inline-block">
          não para.
          <span className="absolute -bottom-2 left-0 right-0 h-2 bg-[#1A56DB] rounded-full" />
        </span>
      </>
    ),
    description: (
      <>
        Com o nosso <strong className="text-white font-semibold">link dedicado</strong>, sua empresa fica sempre online. Supermercados, clínicas, lojas — internet que acompanha o ritmo do seu negócio.
      </>
    ),
    stats: [
      { value: "1000 Mbps", label: "de velocidade" },
      { value: "99.9%",    label: "uptime garantido" },
      { value: "24/7",     label: "suporte técnico" },
    ],
  },
  {
    id: "familia",
    image: "/watching.jpg",
    badge: "Fibra Óptica · Para sua casa",
    alt: "Internet residencial fibra óptica para streaming e Wi-Fi 6 em Jataí, GO",
    title: (
      <>
        Entretenimento
        <br />
        <span className="text-[#FBBF24]">sem limites</span>
        <br />
        <span className="relative inline-block">
          em casa.
          <span className="absolute -bottom-2 left-0 right-0 h-2 bg-[#1A56DB] rounded-full" />
        </span>
      </>
    ),
    description: (
      <>
        Streaming em <strong className="text-white font-semibold">4K sem travar</strong>, para toda a família ao mesmo tempo. Séries, filmes e chamadas de vídeo com a qualidade que você merece.
      </>
    ),
    stats: [
      { value: "Wi-Fi 6",  label: "incluso grátis" },
      { value: "4K",       label: "streaming fluido" },
      { value: "24/7",     label: "suporte técnico" },
    ],
  },
  {
    id: "games",
    image: "/game.jpg",
    badge: "Fibra Óptica · Para Gamers",
    alt: "Internet fibra óptica de baixa latência para jogos online em Jataí, GO",
    title: (
      <>
        Conexão
        <br />
        <span className="text-[#FBBF24]">na velocidade</span>
        <br />
        <span className="relative inline-block">
          do game.
          <span className="absolute -bottom-2 left-0 right-0 h-2 bg-[#1A56DB] rounded-full" />
        </span>
      </>
    ),
    description: (
      <>
        Latência ultra baixa e velocidade máxima para você <strong className="text-white font-semibold">dominar cada partida</strong>. Sem lag, sem desculpas — só performance.
      </>
    ),
    stats: [
      { value: "< 5ms",    label: "de latência" },
      { value: "1000 Mbps", label: "de velocidade" },
      { value: "24/7",     label: "suporte técnico" },
    ],
  },
];

const SLIDE_DURATION = 6000;

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [entered, setEntered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number) => {
    if (animating || index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 400);
  }, [animating, current]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    timerRef.current = setTimeout(next, SLIDE_DURATION);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, next]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setEntered(true); },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const slide = slides[current];

  return (
    <section id="inicio" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">

      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={s.image}
            alt={s.alt}
            fill
            className="object-cover object-center"
            priority={i === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E]/95 via-[#0D1B3E]/80 to-[#0D1B3E]/40" />
        </div>
      ))}

      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FBBF24] z-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pt-24 pb-28">
        <div className="max-w-2xl space-y-8">

          <div className={`transition-all duration-700 delay-[0ms] ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span
              key={slide.id + "-badge"}
              className={`inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur-sm transition-opacity duration-400 ${animating ? "opacity-0" : "opacity-100"}`}
            >
              <span className="w-1.5 h-1.5 bg-[#FBBF24] rounded-full animate-pulse" />
              {slide.badge}
            </span>
          </div>

          <div className={`transition-all duration-700 delay-[150ms] ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h1
              className={`font-display font-black text-5xl md:text-6xl xl:text-[5.5rem] leading-[0.9] uppercase tracking-tight text-white transition-opacity duration-400 ${animating ? "opacity-0" : "opacity-100"}`}
            >
              {slide.title}
            </h1>
          </div>

          <p className={`font-body text-lg text-slate-300 leading-relaxed max-w-lg transition-all duration-700 delay-[300ms] ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-opacity duration-400 ${animating ? "opacity-0" : "opacity-100"}`}>
            {slide.description}
          </p>

          <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-[450ms] ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <a href="/planos" className="btn-primary bg-[#1A56DB] hover:bg-[#1E429F] text-white font-body font-semibold px-8 py-4 rounded-xl transition-all text-base">
              Ver Planos
            </a>
            <a href="/contato" className="btn-primary bg-[#FBBF24] hover:bg-[#D97706] text-[#1E293B] font-body font-semibold px-8 py-4 rounded-xl transition-all text-base">
              Falar conosco
            </a>
          </div>

          <div className={`flex flex-wrap gap-3 pt-2 transition-all duration-700 delay-[600ms] ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {slide.stats.map((stat) => (
              <div
                key={stat.label}
                className={`bg-white/20 border border-white/30 backdrop-blur-sm text-white rounded-2xl px-5 py-3 transition-opacity duration-400 ${animating ? "opacity-0" : "opacity-100"}`}
              >
                <div className="font-display font-black text-xl leading-none">{stat.value}</div>
                <div className="font-body text-xs mt-0.5 opacity-60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2.5 bg-[#FBBF24]"
                : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
