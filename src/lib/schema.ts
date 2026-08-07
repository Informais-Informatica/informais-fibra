import { siteConfig } from "./site-config";

/**
 * Schema.org não possui um tipo dedicado "InternetServiceProvider".
 * A prática recomendada para provedores de internet locais é usar
 * "LocalBusiness", com "additionalType" apontando para a entidade
 * correspondente no Wikidata (Q10689397 = Internet service provider),
 * o que ajuda o Google a desambiguar o tipo de negócio.
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#organization`,
    additionalType: "https://www.wikidata.org/wiki/Q10689397",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    description: siteConfig.description,
    telephone: `+${siteConfig.contact.whatsapp}`,
    email: siteConfig.contact.email,
    priceRange: "R$109,90 - R$159,90",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.serviceArea.city,
    },
    sameAs: [siteConfig.social.instagram],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "pt-BR",
  };
}

export function getBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

type PlanForSchema = {
  name: string;
  speed: string | null;
  price: string | null;
  description: string;
};

export function getPlansSchema(plans: PlanForSchema[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Internet fibra óptica",
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: {
      "@type": "City",
      name: siteConfig.serviceArea.city,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Planos de internet fibra óptica",
      itemListElement: plans.map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        description: plan.description,
        ...(plan.price
          ? {
              price: `${plan.price}.90`,
              priceCurrency: "BRL",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: `${plan.price}.90`,
                priceCurrency: "BRL",
                unitCode: "MON",
              },
            }
          : {}),
      })),
    },
  };
}
