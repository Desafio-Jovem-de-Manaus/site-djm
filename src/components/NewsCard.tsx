import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";
import { getCategoryConfig } from "@/utils/categoryColors";

interface NewsCardProps {
  slug: string;
  date: string;
  category: string;
  title: string;
  resume?: string;
  image?: string;
}

export default function NewsCard({ slug, date, category, title, resume, image }: NewsCardProps) {
  const config = getCategoryConfig(category);
  const CategoryIcon = config.icon;

  return (
    <div className="relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-primary/50 transition-all duration-300 group flex flex-col h-full hover:-translate-y-2 cursor-pointer">
      
      {/* Imagem da Notícia */}
      <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden group-hover:bg-slate-200 transition-colors">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
            <span className="text-xs font-black uppercase tracking-widest bg-white/50 px-3 py-1 rounded-full text-slate-500 backdrop-blur-sm shadow-sm z-10">
              [ Placeholder Imagem ]
            </span>
          </div>
        )}
        
        {/* Overlay do hover para engajamento */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
        
        {/* Tag Flutuante Colorida Dinâmica com Ícone */}
        <div className={`absolute top-4 left-4 border text-[10px] font-bold px-4 py-1.5 rounded-full shadow-sm z-20 flex items-center ${config.classes}`}>
          <CategoryIcon className="w-3 h-3 mr-1.5" />
          {category}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        {/* Datação Oficial */}
        <div className="flex items-center text-xs text-slate-500 font-bold tracking-wider uppercase mb-4">
          <Calendar className="w-4 h-4 mr-2 text-slate-400 group-hover:text-primary transition-colors" /> {date}
        </div>
        
        {/* Título Forte */}
        <h3 className="font-extrabold text-xl text-primary-dark mb-4 leading-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        {/* Lide Jornalistico (Resumo) Opcional */}
        {(resume) && (
          <p className="text-slate-600 font-medium leading-relaxed flex-1 text-sm mb-6">
            {resume}
          </p>
        )}
        
        {/* Botão de Ler Tudo caindo pra base */}
        <div className="mt-auto border-t border-slate-100 pt-5 mt-5">
           <Link 
             href={slug.startsWith('http') ? slug : `/noticias/${slug}`}
             target={slug.startsWith('http') ? "_blank" : undefined}
             className="flex items-center text-primary font-bold text-sm tracking-widest uppercase hover:text-primary-dark transition-colors group-hover:tracking-[0.2em] after:absolute after:inset-0"
           >
             Ler Matéria Oficial <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>
      </div>
      
    </div>
  );
}
