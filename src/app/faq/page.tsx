import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import InternalCta from "@/components/InternalCta";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getFaqSchema, getBreadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Perguntas Frequentes sobre Internet Fibra Óptica",
  description:
    "Tire suas dúvidas sobre internet fibra óptica, Wi-Fi 6, instalação e planos da Informais Fibra em Jataí (GO).",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    url: `${siteConfig.url}/faq`,
    title: "Perguntas Frequentes | Informais Fibra",
    description:
      "Dúvidas comuns sobre internet fibra óptica, instalação, Wi-Fi 6 e planos residenciais e empresariais em Jataí (GO).",
  },
};

const faqs = [
  {
    question: "O que é internet fibra óptica e qual a vantagem em relação à internet via rádio ou cabo?",
    answer:
      "A internet fibra óptica transmite dados por meio de sinais de luz em cabos de vidro ultrafino, o que permite velocidades mais altas, menor latência e maior estabilidade do que tecnologias via rádio ou cabo metálico, além de sofrer menos interferência de condições climáticas.",
  },
  {
    question: "A instalação da internet fibra óptica tem custo?",
    answer:
      "A instalação técnica é feita por uma equipe especializada e o roteador Wi-Fi 6 já está incluso nos planos da Informais Fibra, sem custo adicional de equipamento.",
  },
  {
    question: "O que é Wi-Fi 6 e por que ele faz diferença?",
    answer:
      "Wi-Fi 6 é a geração mais recente do padrão de conexão sem fio, com maior capacidade para conectar vários dispositivos ao mesmo tempo, menor interferência e melhor desempenho em ambientes com muitos aparelhos conectados — como smart TVs, celulares e computadores na mesma casa ou empresa.",
  },
  {
    question: "Qual a diferença entre internet residencial e internet empresarial com link dedicado?",
    answer:
      "A internet residencial atende bem ao uso doméstico, com boa velocidade para streaming, jogos e home office. Já o link dedicado reserva uma banda exclusiva, sem compartilhamento, com IP público fixo — recomendado para empresas que dependem de conexão constante, como comércios com PDV, clínicas e escritórios.",
  },
  {
    question: "A Informais Fibra atende toda a cidade de Jataí (GO)?",
    answer:
      "A cobertura da Informais Fibra está em expansão, com novos bairros e regiões de Jataí (GO) sendo atendidos regularmente. Fale com nossa equipe pelo WhatsApp para confirmar a disponibilidade no seu endereço.",
  },
  {
    question: "Como funciona o suporte técnico?",
    answer:
      "O suporte técnico da Informais Fibra está disponível 24 horas por dia, 7 dias por semana, com atendimento local e time técnico próximo, via WhatsApp, e-mail ou presencial.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={getFaqSchema(faqs)} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <main className="min-h-screen bg-page-internal pt-16">
        <PageHero currentLabel="FAQ" />

        <div className="max-w-3xl mx-auto px-6 pt-8 pb-4">
          <span className="inline-block bg-[#EBF5FF] text-[#1A56DB] border border-[#1A56DB]/15 font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            // FAQ
          </span>
          <h1 className="font-display font-black text-4xl md:text-5xl uppercase leading-[0.95] text-[#1E293B] mb-4">
            Perguntas frequentes
          </h1>
          <p className="font-body text-slate-500 text-lg leading-relaxed mb-10">
            Reunimos as dúvidas mais comuns sobre internet fibra óptica e os serviços da
            Informais Fibra em Jataí (GO). Não encontrou o que precisa?{" "}
            <Link href="/contato" className="text-[#1A56DB] font-medium hover:underline">
              Fale com a gente
            </Link>
            .
          </p>

          <FaqAccordion faqs={faqs} />
        </div>

        <InternalCta title="Não encontrou sua resposta?" buttonLabel="Falar com um especialista" />
      </main>
      <Footer />
    </>
  );
}
