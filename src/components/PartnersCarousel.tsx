import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PartnersCarousel() {
  const partners = [
    { name: "Bodega do Pão", image: "/Parceiros-Logo-Empresariais-Bodega-do-Pao.png" },
    { name: "Casa Queiroz Refrigeração", image: "/Parceiros-Logo-Empresariais-Casa-Queiroz.png" },
    { name: "Mikito's", image: "/Parceiros-Logo-Empresariais-Mikitos.png" },
    { name: "Virrosas", image: "/Parceiros-Logo-Empresariais-Virrosas.png" },
    { name: "SESC Mesa Brasil", image: "/Parceiros-Logo-Institucional-Mesa-Brasil.png" },
    { name: "Rede Acolher", image: "/Parceiros-Logo-Institucional-Rede-Acolher.png" },
    { name: "SOMAP", image: "/Parceiros-Logo-Institucional-Somap.jpg" },
    { name: "Sociedade Bíblica do Brasil", image: "/Parceiros-Logo-Institucional-SBB.png" },
    { name: "Global Teen Challenge", image: "/Parceiros-Logo-Institucional-Global-Teen-Challenge.png" },
    { name: "Desafio Jovem do Brasil", image: "/Parceiros-Logo-Institucional-Desafio-Jovem-do-Brasil.png" },
    { name: "Rede Recomeçar", image: "/Parceiros-Logo-Rede-Institucional-Recomecar-Amazonas1.png" },
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
              className="w-72 h-32 bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow cursor-default group"
            >
               <img src={partner.image} alt={partner.name} className="w-full h-14 object-contain mb-2 group-hover:scale-105 transition-transform duration-300" />
               <span className="text-slate-400 font-semibold text-center group-hover:text-primary transition-colors whitespace-break-spaces text-xs md:text-sm leading-tight line-clamp-1 w-full max-w-[90%]">
                 {partner.name}
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
