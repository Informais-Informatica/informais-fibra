import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contato — Fale com a Informais Fibra em Jataí (GO)",
  description:
    "Fale com a Informais Fibra pelo WhatsApp, e-mail ou presencialmente em Jataí (GO). Atendimento rápido para contratar internet fibra óptica residencial ou empresarial.",
  alternates: {
    canonical: "/contato",
  },
  openGraph: {
    url: `${siteConfig.url}/contato`,
    title: "Contato — Informais Fibra | Internet Fibra Óptica em Jataí (GO)",
    description:
      "WhatsApp, e-mail e localização da Informais Fibra em Jataí (GO). Fale com a nossa equipe e contrate internet fibra óptica.",
  },
};

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Contato", path: "/contato" },
        ])}
      />
      <main className="min-h-screen bg-page-internal pt-16">
        <PageHero currentLabel="Contato" />
        <Contact headingLevel="h1" />
      </main>
      <Footer />
    </>
  );
}
