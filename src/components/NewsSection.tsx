import Link from "next/link";
import { ArrowRight, Calendar, ImageIcon } from "lucide-react";
import { allNews } from "@/data/news";
import { getCategoryConfig } from "@/utils/categoryColors";

export default function NewsSection() {
  // Pegamos as 3 notícias mais recentes
  const latestNews = allNews.slice(0, 3);

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Notícias e Eventos</h2>
            <p className="text-xl text-slate-600">Acompanhe as últimas realizações, conquistas e momentos de transformação do Desafio Jovem.</p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link href="/noticias" className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors group">
              Ver todas as notícias
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestNews.map((item, idx) => {
            const config = getCategoryConfig(item.category);
            const CategoryIcon = config.icon;
            
            return (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group flex flex-col">
                {/* Photo Placeholder / Image */}
                <div className="h-48 bg-slate-200 flex items-center justify-center relative overflow-hidden">
                  {item.mainImage && !item.mainImage.includes('placeholder') ? (
                    <img 
                      src={item.mainImage} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <>
                      <ImageIcon className="w-10 h-10 text-slate-400" />
                      <span className="text-slate-500 font-medium z-10 mx-4 text-center">[ Imagem da Notícia ]</span>
                    </>
                  )}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border flex items-center ${config.classes}`}>
                      <CategoryIcon className="w-3 h-3 mr-1.5" />
                      {item.category}
                    </span>
                    <div className="flex items-center text-slate-400 text-xs font-medium">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-primary-dark mb-4 group-hover:text-primary transition-colors leading-snug flex-grow line-clamp-3">
                    {item.title}
                  </h3>
                  
                  <Link 
                    href={`/noticias/${item.slug}`}
                    className="mt-4 inline-flex items-center text-primary text-xs font-bold uppercase tracking-widest hover:text-primary-dark transition-colors"
                  >
                    Ler mais <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
