import { Building, HandHeart, Users, GraduationCap, ClipboardList, TrendingUp } from "lucide-react";
import ServiceSidebar from "@/components/ServiceSidebar";
import React from "react";

const sidebarItems = [
  { label: "Abrigo Institucional", href: "/social/abrigo-institucional", icon: <Building className="w-5 h-5" /> },
  { label: "Abordagem Social", href: "/social/abordagem-social", icon: <HandHeart className="w-5 h-5" /> },
  { label: "Comunidade Eficiente — COMEFI", href: "/social/comunidade-eficiente", icon: <Users className="w-5 h-5" /> },
  { label: "Capacitar — Qualificação Profissional", href: "/social/capacitar", icon: <GraduationCap className="w-5 h-5" /> },
];

export default function ComunidadeEficientePage() {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-slate-50">
      
      {/* Hero */}
      <section className="bg-primary-dark border-b-8 border-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5">
           <Users className="w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Comunidade Eficiente — COMEFI</h1>
          <p className="text-xl md:text-2xl text-teal-200 font-medium max-w-2xl">
            Serviço de Convivência e Fortalecimento de Vínculos (Proteção Social Básica)
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 relative">
            
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <ServiceSidebar items={sidebarItems} currentPath="/social/comunidade-eficiente" />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-9 space-y-12">
              
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
                <div className="mb-6 border-l-4 border-primary pl-4">
                  <h2 className="text-3xl font-bold text-primary-dark">Coração solidário do Terreno Valinial</h2>
                </div>
                <div className="text-lg text-slate-600 leading-relaxed font-medium space-y-4">
                  <p>
                    O COMEFI atua como um laboratório vital de <strong>Serviço Voluntário (sem fomento governamental exclusivo)</strong> focado nas famílias limítrofes que cercam a periferia do entorno da sede operacional.
                  </p>
                  <div className="flex bg-slate-50 rounded-2xl p-6 border border-slate-100 gap-4 mt-8 shadow-inner items-start">
                    <ClipboardList className="w-10 h-10 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary-dark mb-2">Censo Demográfico Valinial</h4>
                      <p className="text-slate-500 text-sm italic">[ Conteúdo detalhado sobre o censo habitacional, as carências primárias e a composição familiar mapeada pela instituição deve vir documentado neste campo ]</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Impacto Numérico */}
                <div className="bg-primary text-white p-8 rounded-3xl shadow-lg border-b-8 border-teal-900 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-8 flex items-center">
                    Milícias Multiplicadoras (2024)
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-white/10 p-4 rounded-xl">
                      <div className="text-4xl font-black mb-1">20</div>
                      <div className="uppercase tracking-widest text-xs font-bold text-teal-200">Famílias Periféricas Atendidas C/ Cestas</div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-xl">
                      <div className="text-4xl font-black mb-1">52</div>
                      <div className="uppercase tracking-widest text-xs font-bold text-teal-200">Pessoas CPF Beneficiadas no Eixo Valinial</div>
                    </div>
                  </div>
                </div>

                {/* Placeholders Complementares */}
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-3xl border-2 border-dashed border-slate-200 h-full flex flex-col items-center justify-center text-slate-400 text-center min-h-[250px]">
                    <TrendingUp className="w-12 h-12 mb-4 text-slate-300" />
                    <p className="font-bold text-slate-500 mb-2">Planos de Expansão Social</p>
                    <p className="text-sm italic px-4">[ Inserir dados complementares sobre oficinas lúdicas, eventos de bairro e parcerias beneficentes ]</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
