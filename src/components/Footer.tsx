import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0F172A] overflow-hidden">
      {/* Top gradient bar */}
      <div
        className="h-1.5 w-full"
        style={{ background: "linear-gradient(90deg, #1A56DB 0%, #FBBF24 50%, #1A56DB 100%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Conteúdo — logo à esquerda, texto + link à direita */}
        <div className="flex items-center gap-6 pb-8 border-b border-white/5">
          <Image
            src="/logo.png"
            alt="Informais Telecom"
            width={220}
            height={66}
            className="h-16 w-auto object-contain shrink-0"
          />

          <div className="flex flex-col gap-3">
            <p className="font-body text-slate-400 text-xs leading-relaxed max-w-[220px]">
              Internet de alta performance para residências e empresas.
            </p>
            <a
              href="https://www.instagram.com/informais_jti/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#1A56DB] border border-white/10 hover:border-[#1A56DB] flex items-center justify-center text-slate-400 hover:text-white transition-all"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-slate-500">
            © {currentYear} Informais Fibra — Todos os Direitos Reservados.
          </p>
          <p className="font-body text-xs text-slate-600">
            CNPJ: 27.816.328/0001-37  · Este site não coleta dados pessoais.
          </p>
        </div>

      </div>
    </footer>
  );
}
