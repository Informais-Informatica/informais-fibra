import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import PlansTeaser from "@/components/PlansTeaser";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Internet Fibra Óptica em Jataí (GO) — Planos Residenciais e Empresariais",
  description:
    "Provedor de internet fibra óptica em Jataí (GO). Planos residenciais a partir de 500 Mega, link dedicado para empresas, Wi-Fi 6 grátis e suporte técnico 24/7.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: siteConfig.url,
    title: "Internet Fibra Óptica em Jataí (GO) — Informais Fibra",
    description:
      "Planos residenciais e empresariais de fibra óptica em Jataí (GO). Wi-Fi 6 grátis, link dedicado e suporte 24/7.",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0D0D1A]">
        <Hero />
        <About />
        <Services />
        <PlansTeaser />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
