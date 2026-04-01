import Link from "next/link";
import { MessageSquarePlus, HeartHandshake } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  bg?: string;
}

export default function CTASection({ 
    title = "Sua ajuda é a nossa continuidade.", 
    subtitle = "Existem dezenas de formas de amparar os invisíveis da nossa sociedade. Não feche os braços para eles.",
    bg = "bg-primary"
}: CTASectionProps) {
  return (
    <section className={`${bg} pt-24 pb-28 text-white relative overflow-hidden border-b-[16px] border-yellow-500`}>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-dark rounded-full mix-blend-multiply opacity-50 -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500 rounded-full mix-blend-multiply opacity-50 translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight drop-shadow-lg">{title}</h2>
        <p className="text-xl md:text-2xl opacity-90 mb-12 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-sm">{subtitle}</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
             href="/como-ajudar" 
             className="w-full sm:w-auto flex items-center justify-center px-10 py-5 bg-white text-primary hover:bg-slate-50 font-black rounded-2xl transition-all shadow-[0_10px_40px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.4)] hover:-translate-y-1 text-lg"
          >
            <HeartHandshake className="w-6 h-6 mr-3" /> Fazer uma Doação Hoje
          </Link>
          <a 
             href="https://wa.me/5592984446540" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="w-full sm:w-auto flex items-center justify-center px-10 py-5 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-2xl transition-all border-2 border-teal-400 hover:-translate-y-1 shadow-lg text-lg"
          >
            <MessageSquareText className="w-6 h-6 mr-3" /> Fale via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// Inline fallback para ícone temporário pro Link do wpp
const MessageSquareText = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M13 8H7"/><path d="M17 12H7"/></svg>);
