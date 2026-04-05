import Link from 'next/link';
import { HeartHandshake, ShieldCheck } from 'lucide-react';
import NewsSection from '@/components/NewsSection';

export default function OQueFazemosPage() {
  return (
    <>
      <div className="min-h-[70vh] bg-slate-50 pt-32 pb-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header da Página */}
          <div className="text-center mb-16 max-w-3xl mx-auto animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Nossas Frentes de Atuação
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6 tracking-tight">
              O que fazemos
            </h1>
            <p className="text-lg text-slate-600">
              Trabalhamos de forma integrada para promover a recuperação, acolhimento e reinserção social de jovens e adultos, unindo tratamento especializado e compromisso comunitário. Escolha entre as opções abaixo para descobrir um pouco mais sobre os nossos serviços, ou acompanhe as notícias mais recentes sobre o trabalho que realizamos.
            </p>
          </div>

          {/* Grid de opções */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Card: Dependência Química */}
            <Link href="/dep-quimica" className="group bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100/50 hover:border-primary/30 flex flex-col h-full transform hover:-translate-y-1 animate-in slide-in-from-bottom-8 duration-700 fade-in delay-150">
              <div className="h-16 w-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4 group-hover:text-primary transition-colors">
                Dependência Química
              </h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed flex-grow">
                Oferecemos acolhimento, tratamento humanizado e suporte integral em nossa comunidade terapêutica, focado na recuperação e no fortalecimento de homens que buscam um novo começo.
              </p>
              <div className="mt-auto flex items-center text-primary font-semibold text-lg group-hover:translate-x-2 transition-transform">
                Conheça o tratamento
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>

            {/* Card: Assistência Social */}
            <Link href="/social" className="group bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100/50 hover:border-emerald-500/30 flex flex-col h-full transform hover:-translate-y-1 animate-in slide-in-from-bottom-8 duration-700 fade-in delay-300">
              <div className="h-16 w-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4 group-hover:text-primary transition-colors">
                Assistência Social
              </h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed flex-grow">
                Promovemos ações, projetos comunitários e apoio socioemocional visando amparar famílias, resgatar vínculos e fortalecer a nossa comunidade promovendo o bem-estar social.
              </p>
              <div className="mt-auto flex items-center text-primary font-semibold text-lg group-hover:translate-x-2 transition-transform">
                Ver ações e projetos
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>

          </div>
        </div>
      </div>
      
      {/* Seção de Notícias */}
      <NewsSection />
    </>
  );
}
