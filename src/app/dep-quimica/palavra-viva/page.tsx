import { Home, Users, BookOpen, HeartPulse } from "lucide-react";
import ServiceSidebar from "@/components/ServiceSidebar";
import React from "react";

const sidebarItems = [
  { label: "Comunidade Terapêutica", href: "/dep-quimica/comunidade-terapeutica", icon: <Home className="w-5 h-5" /> },
  { label: "Grupo de Apoio Familiar — GAF", href: "/dep-quimica/grupo-apoio-familiar", icon: <Users className="w-5 h-5" /> },
  { label: "Grupo Palavra Viva", href: "/dep-quimica/palavra-viva", icon: <BookOpen className="w-5 h-5" /> },
  { label: "Recomeço — Ambulatório", href: "/dep-quimica/recomeco", icon: <HeartPulse className="w-5 h-5" /> },
];

export default function GrupoPalavraVivaPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-slate-50">
      
      {/* Hero */}
      <section className="bg-primary-dark border-b-8 border-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5">
           <BookOpen className="w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Grupo Palavra Viva</h1>
          <p className="text-xl md:text-2xl text-teal-200 font-medium max-w-2xl">
            Espaço de reflexão, partilha e fortalecimento espiritual
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 relative">
            
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <ServiceSidebar items={sidebarItems} currentPath="/dep-quimica/palavra-viva" />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-9 space-y-12">
              
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 text-center py-20">
                <div className="w-20 h-20 bg-blue-50 text-tertiary text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">Conteúdo em construção</h2>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                  [Este é um placeholder para a descrição geral do grupo como espaço de apoio espiritual e reflexivo, incluindo o público-alvo, a frequência dos encontros, detalhamento da metodologia e dinâmica das reuniões.]
                </p>
                <div className="mt-8 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl p-8 max-w-2xl mx-auto text-slate-400">
                  <p className="font-semibold">[ Placeholder para depoimentos e dados do Palavra Viva ]</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
