import { Building, HandHeart, Users, GraduationCap, Map, BarChart3, AlertTriangle } from "lucide-react";
import ServiceSidebar from "@/components/ServiceSidebar";
import React from "react";

const sidebarItems = [
  { label: "Abrigo Institucional", href: "/social/abrigo-institucional", icon: <Building className="w-5 h-5" /> },
  { label: "Abordagem Social", href: "/social/abordagem-social", icon: <HandHeart className="w-5 h-5" /> },
  { label: "Comunidade Eficiente — COMEFI", href: "/social/comunidade-eficiente", icon: <Users className="w-5 h-5" /> },
  { label: "Capacitar — Qualificação Profissional", href: "/social/capacitar", icon: <GraduationCap className="w-5 h-5" /> },
];

export default function AbordagemSocialPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20 bg-slate-50">
      
      {/* Hero */}
      <section className="bg-primary-dark border-b-8 border-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5">
           <HandHeart className="w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Abordagem Social — Braços Abertos</h1>
          <p className="text-xl md:text-2xl text-teal-200 font-medium max-w-2xl">
            Projeto: Na Perspectiva da Garantia de Direitos (desde 2015, convênio SEAS)
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 relative">
            
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <ServiceSidebar items={sidebarItems} currentPath="/social/abordagem-social" />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-9 space-y-12">
              
              {/* Descrição e Busca Ativa */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mr-5">
                    <HandHeart className="w-7 h-7" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary-dark">Média Complexidade e Busca Ativa</h2>
                </div>
                <div className="text-lg text-slate-600 leading-relaxed font-medium space-y-4">
                  <p>
                    O projeto "Braços Abertos" executa a dura <strong>Proteção Social Especial de Média Complexidade</strong> através de um constante policiamento protetivo nas madrugadas.
                  </p>
                  <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-slate-300 my-6 shadow-sm">
                    <h4 className="text-primary-dark font-bold mb-2 flex items-center"><Map className="w-5 h-5 mr-2 text-primary" /> A Busca Ativa sem Limites</h4>
                    <p className="text-slate-600 text-base">
                      Nossas equipes altamente especializadas adentram vielas, marquises e praças invisíveis guiadas por uma robusta metodologia de trabalho noturno visando resgate ético, mapeamento assistencial e convencimentos pacíficos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Impactos */}
              <div className="bg-primary-dark p-8 md:p-10 rounded-3xl shadow-lg border border-slate-800 text-white">
                <h3 className="text-2xl font-bold text-teal-300 mb-8 border-l-4 border-teal-500 pl-4">Impacto do Braços Abertos (2024)</h3>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/10 text-center">
                    <div className="text-6xl font-black text-white mb-2">78</div>
                    <div className="text-sm font-bold uppercase text-highlight tracking-wider">Usuários Resgatados Exclusivos</div>
                  </div>
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/10 text-center">
                    <div className="text-6xl font-black text-white mb-2">2.453</div>
                    <div className="text-sm font-bold uppercase text-highlight tracking-wider">Beneficiários Indiretos Pelo Serviço</div>
                  </div>
                </div>
                
                <div className="bg-primary-dark p-6 rounded-xl border-2 border-dashed border-slate-600 text-slate-300 italic text-center">
                  [ Adicionar Placeholder para Dados Detalhados: Nº de encaminhamentos totais mapeados, rondas semanais realizadas e distribuição de lanches na região portuária ]
                </div>
              </div>

              {/* Gráficos de Anatomia das Ruas */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
                <h3 className="text-2xl font-bold text-primary-dark mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-rose-500" /> A Anatomia Sombria das Ruas
                </h3>
                <p className="text-slate-600 mb-8 font-medium">Radiografia do perfil predominante mapeado pelas rondas noturnas no último censo.</p>
                
                <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl h-64 flex flex-col items-center justify-center text-slate-400 relative overflow-hidden">
                  <BarChart3 className="w-16 h-16 mb-4 text-slate-300" />
                  <span className="font-bold text-center z-10">[ Placeholder: Inserir Gráfico de Barras / Estatísticas demográficas do público na calçada ]</span>
                  
                  {/* Faux graph decorations */}
                  <div className="absolute bottom-0 left-10 w-12 h-20 bg-slate-200 rounded-t-md opacity-50"></div>
                  <div className="absolute bottom-0 left-32 w-12 h-32 bg-slate-200 rounded-t-md opacity-50"></div>
                  <div className="absolute bottom-0 left-52 w-12 h-16 bg-slate-200 rounded-t-md opacity-50"></div>
                  <div className="absolute bottom-0 right-32 w-12 h-44 bg-slate-300 rounded-t-md opacity-50"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
