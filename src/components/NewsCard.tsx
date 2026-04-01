import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

interface NewsCardProps {
  date: string;
  category: string;
  title: string;
  resume?: string;
}

export default function NewsCard({ date, category, title, resume }: NewsCardProps) {
  // Configuração rápida de Cores por TAG pra evitar um design monótono
  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "ações sociais": return "bg-blue-100 text-blue-800 border-blue-200";
      case "eventos": return "bg-purple-100 text-purple-800 border-purple-200";
      case "institucional": return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "campanhas": return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-slate-100 text-primary-dark border-slate-200";
    }
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-primary/50 transition-all duration-300 group flex flex-col h-full hover:-translate-y-2 cursor-pointer">
      
      {/* Imagem Placeholder */}
      <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden flex flex-col items-center justify-center text-slate-400 group-hover:bg-slate-200 transition-colors">
        <span className="text-xs font-black uppercase tracking-widest bg-white/50 px-3 py-1 rounded-full text-slate-500 backdrop-blur-sm shadow-sm z-10">
          [ Placeholder Imagem ]
        </span>
        {/* Overlay do hover para engajamento */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500"></div>
        
        {/* Tag Flutuante Colorida Dinâmica */}
        <div className={`absolute top-4 left-4 border text-xs font-bold px-4 py-1.5 rounded-full shadow-sm z-20 ${getCategoryColor(category)}`}>
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
           <Link href="/noticias" className="flex items-center text-primary font-bold text-sm tracking-widest uppercase hover:text-primary-dark transition-colors group-hover:tracking-[0.2em]">
             Ler Matéria Oficial <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>
      </div>
      
    </div>
  );
}
