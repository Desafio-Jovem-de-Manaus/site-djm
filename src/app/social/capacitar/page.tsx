import { Building, HandHeart, Users, GraduationCap, Briefcase, BookMarked, Wrench } from "lucide-react";
import ServiceSidebar from "@/components/ServiceSidebar";
import React from "react";

const sidebarItems = [
  { label: "Abrigo Institucional", href: "/social/abrigo-institucional", icon: <Building className="w-5 h-5" /> },
  { label: "Abordagem Social", href: "/social/abordagem-social", icon: <HandHeart className="w-5 h-5" /> },
  { label: "Comunidade Eficiente — COMEFI", href: "/social/comunidade-eficiente", icon: <Users className="w-5 h-5" /> },
  { label: "Capacitar — Qualificação Profissional", href: "/social/capacitar", icon: <GraduationCap className="w-5 h-5" /> },
];

export default function QualificacaoProfissionalPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-slate-50">
      
      {/* Hero */}
      <section className="bg-primary-dark border-b-8 border-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5">
           <GraduationCap className="w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Capacitar — Promoção Profissional</h1>
          <p className="text-xl md:text-2xl text-teal-200 font-medium max-w-2xl">
            Construindo autonomia através da formação e do trabalho
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 relative">
            
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <ServiceSidebar items={sidebarItems} currentPath="/social/capacitar" />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-9 space-y-12">
              
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 text-center py-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-teal-400 to-primary"></div>
                <div className="w-20 h-20 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-teal-100">
                  <GraduationCap className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold text-primary-dark mb-6">Em Formulação Ativa</h2>
                
                <div className="grid md:grid-cols-2 gap-8 text-left mt-10">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4">
                    <Briefcase className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary-dark mb-2">Visão do Programa</h4>
                      <p className="text-sm text-slate-500 italic">[ Adicionar a descrição do projeto como uma inciativa para qualificação empregatícia e reinserção remunerada para as pessoas de alta vulnerabilidade. ]</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4">
                    <BookMarked className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary-dark mb-2">Cursos & Critérios</h4>
                      <p className="text-sm text-slate-500 italic">[ Placeholder listando os tipos de cursos oferecidos pela entidade, as parcerias de formação (SENAI/SEBRAE/etc) e o público alvo permitido. ]</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-8 max-w-full text-slate-400 flex flex-col items-center">
                  <Wrench className="w-10 h-10 mb-3 text-slate-300" />
                  <p className="font-semibold px-4">[ Placeholder Fixo para métricas, fotos das salas de informática, tabelas de matriculados e resultados oficiais consolidados ]</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
