import { Home, Users, BookOpen, HeartPulse } from "lucide-react";
import ServiceSidebar from "@/components/ServiceSidebar";
import React from "react";

const sidebarItems = [
  { label: "Comunidade Terapêutica", href: "/dep-quimica/comunidade-terapeutica", icon: <Home className="w-5 h-5" /> },
  { label: "Grupo de Apoio Familiar — GAF", href: "/dep-quimica/grupo-apoio-familiar", icon: <Users className="w-5 h-5" /> },
  { label: "Grupo Palavra Viva", href: "/dep-quimica/palavra-viva", icon: <BookOpen className="w-5 h-5" /> },
  { label: "Recomeço — Ambulatório", href: "/dep-quimica/recomeco", icon: <HeartPulse className="w-5 h-5" /> },
];

export default function RecomecoAmbulatorioPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-slate-50">
      
      {/* Hero */}
      <section className="bg-primary-dark border-b-8 border-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5">
           <HeartPulse className="w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Recomeço — Atendimento Ambulatorial</h1>
          <p className="text-xl md:text-2xl text-teal-200 font-medium max-w-2xl">
            Acompanhamento terapêutico para quem busca um novo caminho
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 relative">
            
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <ServiceSidebar items={sidebarItems} currentPath="/dep-quimica/recomeco" />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-9 space-y-12">
              
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 text-center py-20">
                <div className="w-20 h-20 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <HeartPulse className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold text-primary-dark mb-4">Conteúdo em construção</h2>
                <div className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed space-y-4">
                  <p>
                    [Placeholder para a descrição do ambulatório como serviço de acompanhamento pós-acolhimento ou atendimento externo.]
                  </p>
                  <p>
                    [Placeholder para detalhar o público-alvo, os rígidos critérios de acesso e a equipe de profissionais envolvida no atendimento clínico.]
                  </p>
                </div>
                <div className="mt-8 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl p-8 max-w-2xl mx-auto text-slate-400 flex flex-col items-center">
                  <p className="font-semibold">[ Placeholder para dados, resultados abertos e estatísticas ambulatoriais ]</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
