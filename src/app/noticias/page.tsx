"use client";

import { useState } from "react";
import NewsCard from "@/components/NewsCard";
import SocialCard from "@/components/SocialCard";
import { socialAccounts } from "@/components/InstagramSection";
import { allNews } from "@/data/news";
import { Newspaper, FilterX, Hash } from "lucide-react";

export default function NoticiasPage() {
  const categories = ["Todos", "Ações Sociais", "Eventos", "Institucional", "Campanhas"];
  
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredNews = activeFilter === "Todos" 
    ? allNews 
    : allNews.filter(news => news.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-slate-50">
      
      {/* Hero Portfólio Gráfico */}
      <section className="bg-primary-dark border-b-[24px] border-emerald-500 pt-24 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5 -translate-y-1/4 translate-x-1/4">
           <Newspaper className="w-[800px] h-[800px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-xl">Notícias e Imprensa Viva</h1>
          <p className="text-xl md:text-2xl text-emerald-200 font-medium max-w-4xl mx-auto leading-relaxed drop-shadow">Varra as camadas orgânicas do pó jornalístico da cidade e acompanhe em dados duros as atividades que mudam pontes de desespero nas ladeiras diárias de Manaus do Amazonas.</p>
        </div>
      </section>

      {/* Grid Filter Engine */}
      <section className="py-16 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Caixa de Comandos */}
          <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between p-6 border border-slate-200 mb-16">
             <div className="flex items-center text-primary-dark font-bold mb-4 md:mb-0 mr-8">
               <Hash className="w-5 h-5 mr-3 text-primary" />
               Filtrar Tópico da Pauta:
             </div>
             
             {/* Componente dos Filtros */}
             <div className="flex flex-wrap gap-2 w-full md:w-auto">
               {categories.map((cat, i) => (
                 <button 
                   key={i}
                   onClick={() => setActiveFilter(cat)}
                   className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all focus:outline-none flex-grow md:flex-grow-0 ${
                     activeFilter === cat 
                     ? 'bg-emerald-600 text-white shadow-md -translate-y-0.5' 
                     : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border-transparent hover:border-slate-300 border'
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
                   <p className="font-bold text-lg text-slate-500">Nenhum marco achado nesse filtro denso de buscas. Volte ou procure mais fundo por lá!</p>
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
          
        </div>
      </section>

    </div>
  );
}
