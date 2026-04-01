import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PartnersCarousel() {
  const partners = [
    "SEAS (Secr. de Estado de Assistência Social)",
    "VEMEPA (Vara de Execuções de Penas Alternativas)",
    "Programa Mesa Brasil — SESC",
    "SEPROR (Secretaria de Produção Rural)",
    "Bodega do Pão",
    "Mikitos",
    "Sociedade Bíblica do Brasil",
    "DEPAD (Dep. de Entidades de Apoio)",
    "SEAP (Secr. de Administração Penitenciária)",
    "Global Teen Challenge"
  ];

  return (
    <section className="bg-slate-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-3xl font-bold text-primary-dark mb-2 border-b-2 border-primary inline-block pb-2">Quem nos apoia</h2>
      </div>

      {/* Infinite marquee wrapper */}
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[15%] before:bg-gradient-to-r before:from-slate-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[15%] after:bg-gradient-to-l after:from-slate-50 after:to-transparent">
        <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused] whitespace-nowrap px-4 py-2">
          {/* Duplicated maps to create infinite scroll effect without jumping */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="w-72 h-32 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-default group"
            >
               <span className="text-slate-400 font-semibold text-center px-4 group-hover:text-primary transition-colors whitespace-break-spaces text-sm leading-tight">
                 {partner}
               </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link 
          href="/parceiros" 
          className="inline-flex items-center px-6 py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
        >
          Conheça todos os nossos parceiros
          <ArrowRight className="w-5 h-5 ml-2 text-primary" />
        </Link>
      </div>
    </section>
  );
}
