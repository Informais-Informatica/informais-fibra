import Link from "next/link";

export default function PageHero({ currentLabel }: { currentLabel: string }) {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-8">
      <nav aria-label="Breadcrumb" className="inline-block">
        <ol className="inline-flex items-center gap-2 bg-white text-[#1A56DB] border border-[#1A56DB]/15 font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-sm shadow-[#1A56DB]/5">
          <li><Link href="/" className="hover:underline">Início</Link></li>
          <li aria-hidden="true" className="text-slate-300">/</li>
          <li aria-current="page">{currentLabel}</li>
        </ol>
      </nav>
    </div>
  );
}
