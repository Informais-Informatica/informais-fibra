import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Plans from "@/components/Plans";
import InternalCta from "@/components/InternalCta";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getPlansSchema, getBreadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Planos de Internet Fibra Óptica em Jataí (GO)",
  description:
    "Compare os planos de internet fibra óptica da Informais Fibra em Jataí (GO): residencial a partir de 500 Mega, plano empresarial e link dedicado. Wi-Fi 6 grátis incluso.",
  alternates: {
    canonical: "/planos",
  },
  openGraph: {
    url: `${siteConfig.url}/planos`,
    title: "Planos de Internet Fibra Óptica em Jataí (GO) | Informais Fibra",
    description:
      "Residencial a partir de 500 Mega, plano Plus, Premium e Link Dedicado para empresas. Fibra óptica real com Wi-Fi 6 grátis em Jataí (GO).",
  },
};

const plansForSchema = [
  { name: "Plano Residencial", speed: "500", price: "109", description: "Ideal para residências." },
  { name: "Plano Plus", speed: "700", price: "129", description: "O mais escolhido. Perfeito para pequenas empresas e famílias exigentes." },
  { name: "Plano Premium", speed: "1000", price: "159", description: "Conexão ultra rápida para streaming, jogos e trabalho sem interrupções." },
  { name: "Link Dedicado", speed: null, price: null, description: "Solução voltada para o setor corporativo, garantindo segurança e estabilidade na conexão." },
];

const faqs = [
  {
    question: "Qual a diferença entre internet residencial e link dedicado?",
    answer:
      "Nos planos residenciais e no Plano Plus/Premium, a banda é compartilhada com outros clientes da mesma região, o que já garante boa estabilidade para uso doméstico. O link dedicado reserva uma banda exclusiva para a sua empresa, sem compartilhamento, com IP público fixo — ideal para operações que não podem ficar offline.",
  },
  {
    question: "O Wi-Fi 6 tem custo adicional?",
    answer:
      "Não. Todos os planos da Informais Fibra incluem instalação com roteador Wi-Fi 6 sem custo adicional.",
  },
  {
    question: "Qual plano é indicado para pequenas empresas?",
    answer:
      "Para comércios e escritórios com uso intenso de PDV, sistemas na nuvem e videochamadas, o Plano Plus ou Premium costumam atender bem. Para operações que não podem ter nenhuma instabilidade, como supermercados e clínicas, o Link Dedicado é a opção mais indicada.",
  },
];

export default function PlanosPage() {
  return (
    <>
      <Navbar />
      <JsonLd data={getPlansSchema(plansForSchema)} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Planos", path: "/planos" },
        ])}
      />
      <main className="min-h-screen bg-page-internal pt-16">
        <PageHero currentLabel="Planos" />

        <Plans headingLevel="h1" />

        {/* Separação evidente entre os cards e o FAQ, como pedido: um bloco
            branco próprio com sombra, em vez do FAQ flutuar solto no mesmo fundo. */}
        <section aria-labelledby="planos-faq-heading" className="max-w-3xl mx-auto px-6 pb-8">
          <div className="card-surface rounded-2xl px-6 py-10 sm:px-10 sm:py-12">
            <span className="inline-block bg-[#EBF5FF] text-[#1A56DB] border border-[#1A56DB]/15 font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              // Dúvidas
            </span>
            <h2 id="planos-faq-heading" className="font-display font-black text-3xl md:text-4xl uppercase text-[#1E293B] mb-8">
              Dúvidas sobre os planos
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                  <h3 className="font-body font-semibold text-[#1E293B] mb-2">{faq.question}</h3>
                  <p className="font-body text-slate-500 leading-relaxed text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <InternalCta title="Ainda está em dúvida?" buttonLabel="Falar no WhatsApp" />
      </main>
      <Footer />
    </>
  );
}
