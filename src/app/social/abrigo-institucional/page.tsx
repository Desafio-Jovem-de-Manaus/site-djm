import { Building, HandHeart, Users, GraduationCap, PlayCircle, Star, ArrowRight } from "lucide-react";
import ServiceSidebar from "@/components/ServiceSidebar";
import React from "react";

const sidebarItems = [
  { label: "Abrigo Institucional", href: "/social/abrigo-institucional", icon: <Building className="w-5 h-5" /> },
  { label: "Abordagem Social", href: "/social/abordagem-social", icon: <HandHeart className="w-5 h-5" /> },
  { label: "Comunidade Eficiente — COMEFI", href: "/social/comunidade-eficiente", icon: <Users className="w-5 h-5" /> },
  { label: "Capacitar — Qualificação Profissional", href: "/social/capacitar", icon: <GraduationCap className="w-5 h-5" /> },
];

export default function AbrigoInstitucionalPage() {
  const servicos = [
    "Habilitação e Reabilitação Cognitiva",
    "Oficinas de Alfabetização Funcional",
    "Alimentação Balanceada Completa Diária",
    "Cuidados e Higiene Básica da Saúde"
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-slate-50">
      
      {/* Hero */}
      <section className="bg-primary-dark border-b-8 border-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5">
           <Building className="w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Abrigo Institucional — Acolher para Viver</h1>
          <p className="text-xl md:text-2xl text-teal-200 font-medium max-w-2xl">
            Projeto: Ressocialização Familiar e Comunitária (desde 2018, convênio SEAS)
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 relative">
            
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <ServiceSidebar items={sidebarItems} currentPath="/social/abrigo-institucional" />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-9 space-y-16">
              
              {/* Descrição e Serviços */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
                <div className="flex flex-col md:flex-row gap-12 mb-8 items-start">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-primary-dark mb-6 border-l-4 border-primary pl-4">O que é o Abrigo</h2>
                    <div className="text-lg text-slate-600 leading-relaxed font-medium">
                      <p className="mb-4">Funciona como um robusto ponto de acolhimento temporário especializado para <strong className="text-primary-dark">Homens entre 18 e 60 anos</strong> em fragilidade e extrema situação de rua.</p>
                      <p>O abrigo possui lotação de total capacidade para acomodar <strong className="text-primary bg-blue-50 px-2 py-1 rounded">25 vagas confortáveis simultâneas</strong>, oferecendo leito e esperança diuturna.</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex-1 w-full">
                    <h3 className="font-bold text-primary-dark mb-4 flex items-center"><Star className="w-5 h-5 text-primary mr-2" /> Pacote de Serviços Inclusos</h3>
                    <ul className="space-y-3 font-medium text-slate-600">
                      {servicos.map((srv, idx) => (
                        <li key={idx} className="flex items-center">
                          <ArrowRight className="w-4 h-4 mr-2 text-teal-500" /> {srv}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Métricas e Entregas em 2024 */}
                <div className="bg-primary-dark text-white rounded-3xl p-8 mb-4 border border-teal-800 shadow-lg">
                  <h3 className="text-2xl font-bold text-teal-200 mb-8 border-l-4 border-teal-400 pl-4">Métricas Brutas de 2024</h3>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="bg-primary/50 p-6 rounded-2xl text-center border border-teal-700/50 hover:bg-primary transition-colors">
                      <div className="text-5xl font-black mb-2">51</div>
                      <div className="text-xs uppercase tracking-widest font-bold text-teal-300">Acolhimentos Novos Registrados</div>
                    </div>
                    <div className="bg-primary/50 p-6 rounded-2xl text-center border border-teal-700/50 hover:bg-primary transition-colors">
                      <div className="text-5xl font-black mb-2">838</div>
                      <div className="text-xs uppercase tracking-widest font-bold text-teal-300">Encaminhamentos Sócio Assistenciais</div>
                    </div>
                    <div className="bg-primary/50 p-6 rounded-2xl text-center border border-teal-700/50 hover:bg-primary transition-colors">
                      <div className="text-5xl font-black mb-2 text-primary bg-white/10 rounded-xl py-1">71%</div>
                      <div className="text-xs uppercase tracking-widest font-bold text-teal-300 mt-3">Restauração Limpa de Laços Familiares</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Histórias e Vídeo (Placeholders) */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-dashed border-slate-200 text-center flex flex-col items-center justify-center">
                  <h3 className="text-xl font-bold text-primary-dark mb-2">Histórias de Transformação</h3>
                  <p className="text-slate-500 text-sm mb-4">Relatos emocionantes e vitoriosos dos concluintes da nossa casa.</p>
                  <span className="text-slate-400 italic bg-slate-50 px-4 py-2 rounded mt-auto w-full">[ Conteúdo dos Depoimentos a ser adicionado ]</span>
                </div>
                
                <div className="aspect-video bg-slate-100 rounded-3xl border-2 border-dashed border-teal-200 flex flex-col items-center justify-center p-6 text-slate-400 cursor-default shadow-inner">
                  <PlayCircle className="w-16 h-16 mb-4 text-slate-300" />
                  <span className="font-bold text-lg text-slate-500 text-center mb-1">Vídeo Institucional do Abrigo</span>
                  <span className="text-sm italic text-slate-400">[ Placeholder para o link oficial do YouTube ]</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
