import { siteConfig } from "@/lib/site-config";

export default function InternalCta({
  title,
  buttonLabel,
}: {
  title: string;
  buttonLabel: string;
}) {
  return (
    <section className="max-w-4xl mx-auto px-6 pb-24">
      <div className="bg-[#1A56DB] rounded-2xl px-8 py-12 text-center overflow-hidden relative shadow-xl shadow-[#1A56DB]/20">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px",
          }}
        />
        <div className="relative">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-white mb-6">
            {title}
          </h2>
          <a
            href={siteConfig.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block bg-[#FBBF24] hover:bg-[#D97706] text-[#1E293B] font-body font-semibold px-8 py-4 rounded-xl transition-all text-base"
          >
            {buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
