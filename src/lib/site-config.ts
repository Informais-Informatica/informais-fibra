
export const siteConfig = {
  name: "Informais Fibra",
  legalName: "Informais Telecom",
  shortName: "Informais Fibra",
  description:
    "Provedor de internet fibra óptica em Jataí (GO). Planos de internet residencial e empresarial, link dedicado, Wi-Fi 6 grátis e suporte técnico 24/7.",
  url: "https://www.informaisfibra.com.br",
  ogImage: "/og-image.jpg",
  logo: "/logo.png",
  locale: "pt_BR",
  themeColor: "#1A56DB",

  contact: {
    whatsapp: "5564996768038",
    whatsappDisplay: "(64) 99676-8038",
    whatsappHref: "https://wa.me/5564996768038",
    email: "atendimento@informaisfibra.com.br",
    mapsUrl: "https://maps.app.goo.gl/7BV7c8MCdXD4LFpB8",
  },

  address: {
    addressLocality: "Jataí",
    addressRegion: "GO",
    addressCountry: "BR",
  },

  social: {
    instagram: "https://www.instagram.com/informais_jti/",
  },

  cnpj: "27.816.328/0001-37",

  serviceArea: {
    city: "Jataí",
    state: "Goiás",
    stateAbbr: "GO",
  },
} as const;

export type SiteConfig = typeof siteConfig;
