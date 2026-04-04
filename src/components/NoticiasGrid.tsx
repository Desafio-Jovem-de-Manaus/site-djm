"use client";

import { useState } from "react";
import NewsCard from "@/components/NewsCard";
import SocialCard from "@/components/SocialCard";
import { socialAccounts } from "@/components/InstagramSection";
import { FilterX, Hash } from "lucide-react";

export type NoticiasItem = {
  slug: string;
  title: string;
  date: string;
  category: string;
  resume: string;
  coverImage?: string;
};

const CATEGORIES = ["Todos", "Ações Sociais", "Eventos", "Institucional", "Campanhas"];

export default function NoticiasGrid({ news }: { news: NoticiasItem[] }) {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredNews =
    activeFilter === "Todos"
      ? news
      : news.filter((n) => n.category === activeFilter);

  return (
    <>
      {/* Caixa de Comandos (Filtros) */}
      <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between p-6 border border-slate-200 mb-16">
        <div className="flex items-center text-primary-dark font-bold mb-4 md:mb-0 mr-8">
          <Hash className="w-5 h-5 mr-3 text-primary" />
          Filtrar Tópico da Pauta:
        </div>
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {CATEGORIES.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all focus:outline-none flex-grow md:flex-grow-0 ${
                activeFilter === cat
                  ? "bg-emerald-600 text-white shadow-md -translate-y-0.5"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 border-transparent hover:border-slate-300 border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Layout flex: grid de notícias + sidebar */}
      <div className="flex gap-6 items-start">

        {/* Área principal — notícias */}
        <div className="flex-1 min-w-0">
          {filteredNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((n, i) => (
                <NewsCard
                  key={i}
                  slug={n.slug}
                  title={n.title}
                  date={n.date}
                  category={n.category}
                  resume={n.resume}
                />
              ))}
            </div>
          ) : (
            <div className="bg-slate-100/50 border-2 border-dashed border-slate-300 rounded-3xl p-20 flex flex-col items-center justify-center text-slate-400">
              <FilterX className="w-16 h-16 mb-4" />
              <p className="font-bold text-lg text-slate-500">
                {activeFilter === "Todos"
                  ? "Nenhuma notícia publicada ainda."
                  : "Nenhum marco achado nesse filtro denso de buscas. Volte ou procure mais fundo por lá!"}
              </p>
            </div>
          )}
        </div>

        {/* Sidebar redes sociais */}
        <aside className="hidden lg:block w-[280px] shrink-0 sticky top-24 space-y-4">
          {socialAccounts.map((account) => (
            <SocialCard key={account.id} account={account} />
          ))}
        </aside>

      </div>

      {/* Aviso Fixado Cível do Final da Grade */}
      <div className="mt-16 text-center">
        <span className="inline-block bg-yellow-100 text-yellow-800 border border-yellow-200 px-6 py-3 rounded-2xl font-bold text-sm shadow-sm ring-1 ring-yellow-500/20">
          📌 MURAL DA IMPRENSA: Fique grudado e engatilhado nisto. Tão breve nascerão novos frutos do asfalto, e esta robusta seção de banco de notícias será crivada pesadamente com notícias mais recentes deste exato final-corrente de mês.
        </span>
      </div>
    </>
  );
}
