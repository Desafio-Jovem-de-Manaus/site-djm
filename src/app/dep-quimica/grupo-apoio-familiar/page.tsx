import { Home, Users, BookOpen, HeartPulse, ImageIcon } from "lucide-react";
import ServiceSidebar from "@/components/ServiceSidebar";
import React from "react";

const sidebarItems = [
  { label: "Comunidade Terapêutica", href: "/dep-quimica/comunidade-terapeutica", icon: <Home className="w-5 h-5" /> },
  { label: "Grupo de Apoio Familiar — GAF", href: "/dep-quimica/grupo-apoio-familiar", icon: <Users className="w-5 h-5" /> },
  { label: "Grupo Palavra Viva", href: "/dep-quimica/palavra-viva", icon: <BookOpen className="w-5 h-5" /> },
  { label: "Recomeço — Ambulatório", href: "/dep-quimica/recomeco", icon: <HeartPulse className="w-5 h-5" /> },
];

export default function GrupoApoioFamiliarPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-slate-50">
      
      {/* Hero */}
      <section className="bg-primary-dark border-b-8 border-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5">
           <Users className="w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Grupo de Apoio Familiar — GAF</h1>
          <p className="text-xl md:text-2xl text-teal-200 font-medium max-w-2xl">
            Fortalecendo famílias no processo de recuperação
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 relative">
            
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <ServiceSidebar items={sidebarItems} currentPath="/dep-quimica/grupo-apoio-familiar" />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-9 space-y-12">
              
              {/* Descrição do GAF */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mr-5">
                    <Users className="w-7 h-7" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary-dark">O Papel do GAF</h2>
                </div>
                <div className="text-lg text-slate-600 leading-relaxed font-medium space-y-4">
                  <p>
                    Reuniões mensais calorosas e vitais focadas nos familiares periféricos dos acolhidos, para instrução sobre os traços perigosos da <strong>codependência</strong> familiar. Tratamos a família para tratar o indivíduo.
                  </p>
                  <p>
                    O Grupo de Apoio Familiar é um pilar fundamental em nossa metodologia de trabalho com famílias, oferecendo um espaço seguro de escuta, acolhimento e suporte psicoemocional para aqueles que enfrentam os desafios de conviver e amar alguém que sofre com a dependência química.
                  </p>
                  <p className="text-slate-400 italic mt-6 bg-slate-50 p-4 border-l-4 border-slate-300 rounded-r-lg">
                    [Mais detalhes sobre a metodologia e fluxo das reuniões a serem adicionados aqui.]
                  </p>
                </div>
              </div>

              {/* Relatório Anual / Dados e Imagem */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-primary-dark text-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-800">
                  <h3 className="text-2xl font-bold text-teal-300 mb-6 border-l-4 border-teal-500 pl-4">Relatório GAF (Anual)</h3>
                  <div className="text-slate-300 leading-relaxed mb-8">
                    <p className="mb-4">
                      Em 2024, executamos impecáveis <strong>12 mega-reuniões</strong> com pico de engajamento atingindo <strong className="text-highlight border-b border-teal-400">237 familiares</strong> frequentes.
                    </p>
                    <p>
                      Desse grupo, cerca de 65% compunha o corajoso núcleo feminino de mães e esposas lutadoras que sustentam a base da recuperação.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/10 center text-center">
                    <div className="text-4xl font-black text-white mb-2">237</div>
                    <div className="text-sm font-bold uppercase text-highlight tracking-wider">Familiares Tratados em 2024</div>
                  </div>
                </div>

                <div className="aspect-video md:aspect-auto md:h-full bg-slate-100 rounded-3xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-8 text-slate-400 group cursor-default shadow-inner">
                  <ImageIcon className="w-16 h-16 mb-4 text-slate-300 group-hover:text-primary transition-colors" />
                  <span className="font-medium text-lg text-slate-500 text-center max-w-[250px]">[ Mídia Fotográfica das famosas Rodas do GAF ]</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
