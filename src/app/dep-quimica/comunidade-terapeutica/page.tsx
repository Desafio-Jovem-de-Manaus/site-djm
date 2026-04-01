import { Home, Users, BookOpen, HeartPulse, PlayCircle, ImageIcon, Brain, Heart, Dumbbell, Film, Music, ShieldCheck, FileCheck, Activity } from "lucide-react";
import ServiceSidebar from "@/components/ServiceSidebar";
import React from "react";

const UtensilsIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
);

const sidebarItems = [
  { label: "Comunidade Terapêutica", href: "/dep-quimica/comunidade-terapeutica", icon: <Home className="w-5 h-5" /> },
  { label: "Grupo de Apoio Familiar — GAF", href: "/dep-quimica/grupo-apoio-familiar", icon: <Users className="w-5 h-5" /> },
  { label: "Grupo Palavra Viva", href: "/dep-quimica/palavra-viva", icon: <BookOpen className="w-5 h-5" /> },
  { label: "Recomeço — Ambulatório", href: "/dep-quimica/recomeco", icon: <HeartPulse className="w-5 h-5" /> },
];

export default function ComunidadeTerapeuticaPage() {
  const steps = [
    { title: "Triagem", desc: "Avaliação diagnóstica cuidadosa." },
    { title: "Acolhimento", desc: "Acolhida inicial de forma solidária." },
    { title: "PAS", desc: "Construção do Plano Pessoal de Atendimento." },
    { title: "Social", desc: "Suporte e readaptação socioassistencial." },
    { title: "Psicológico", desc: "Tratamento terapêutico clínico." },
    { title: "Oficinas", desc: "Laborterapia e habilidades motoras." },
    { title: "Prevenção", desc: "Técnicas de tolerância e quebra de gatilhos." },
    { title: "Projeto Vida", desc: "Perspectivismo para fora do Centro." },
    { title: "Formatura", desc: "Cerimônia de conclusão no 6º mês!" },
  ];

  const atividades = [
    { icon: Brain, label: "Resolução de conflitos / 12 passos" },
    { icon: Users, label: "Rodas imersivas de conversa" },
    { icon: Heart, label: "Dinâmicas de relaxamento" },
    { icon: UtensilsIcon, label: "Oficinas de Corte/Costura e Massas" },
    { icon: Dumbbell, label: "Educação Física Diária" },
    { icon: Film, label: "Videoterapia & Cinema Inclusivo" },
    { icon: Music, label: "Oficina de Música, Teclado e Artes" },
    { icon: BookOpen, label: "Alfabetização e Reforço Escolar" },
    { icon: Activity, label: "Ecossistema Espiritual" },
    { icon: FileCheck, label: "Atividades de Preservação Contínua" },
    { icon: ShieldCheck, label: "Programa de Prevenção à Recaída (PPR)" },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-slate-50">
      
      {/* Hero */}
      <section className="bg-primary-dark border-b-8 border-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5">
           <Home className="w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Comunidade Terapêutica Acolhedora</h1>
          <p className="text-xl md:text-2xl text-teal-200 font-medium max-w-2xl">
            Projeto: Recuperação e Ressocialização Familiar (desde 1985)
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 relative">
            
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <ServiceSidebar items={sidebarItems} currentPath="/dep-quimica/comunidade-terapeutica" />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-9 space-y-16">
              
              {/* Description */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
                  <div className="w-full aspect-video bg-slate-100 rounded-3xl border-2 border-dashed border-teal-200 flex flex-col items-center justify-center p-6 text-slate-400 group hover:border-primary cursor-pointer transition-colors shadow-inner">
                    <PlayCircle className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform group-hover:text-primary" />
                    <span className="font-medium text-lg text-slate-500 group-hover:text-primary transition-colors text-center">[ Vídeo curto sobre a jornada local ]</span>
                  </div>
                  <div className="text-lg text-slate-600 leading-relaxed font-medium">
                    <p className="mb-4">O núcleo de salvação do Desafio funciona como <strong>Tratamento absolutamente voluntário</strong> dentro do rígido regime residencial continuado em um lapso de 6 meses ininterruptos.</p>
                    <p className="mb-4">O ciclo destina-se ao público prioritário de Homens entre <strong className="text-primary-dark">18 a 59 anos</strong> mergulhados na linha do vício.</p>
                    <p>Trabalhamos rodeados por nossa valiosa Equipe Multiprofissional 24h, visando a quebra imediata do sedentarismo, readaptação mental aos estímulos cotidianos purificados e a ressureição de laços civis rompidos de longo prazo.</p>
                  </div>
                </div>
              </div>

              {/* Metodologia */}
              <div>
                <h3 className="text-3xl font-bold text-primary-dark mb-8 border-l-4 border-primary pl-4">Metodologia Progressiva — A Jornada</h3>
                <div className="flex flex-wrap gap-4 items-stretch justify-center lg:justify-start">
                  {steps.map((s, idx) => (
                    <div key={idx} className="bg-white flex flex-col items-center p-5 rounded-xl border border-slate-200 w-44 text-center hover:bg-primary hover:text-white transition-colors group cursor-default shadow-sm hover:shadow-lg hover:-translate-y-1">
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-primary group-hover:bg-white group-hover:text-primary flex items-center justify-center font-bold mb-3 shadow-inner">{idx + 1}</div>
                      <h4 className="font-bold mb-2 leading-tight">{s.title}</h4>
                      <p className="text-xs font-medium text-slate-500 group-hover:text-teal-100">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Laborterapia & Atividades Livres */}
              <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200">
                <h3 className="text-2xl font-bold text-primary-dark mb-8 border-l-4 border-primary pl-4">Laborterapia & Atividades Livres</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {atividades.map((atv, i) => {
                    const AtvIcon = atv.icon;
                    return (
                      <div key={i} className="flex items-start bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                        <AtvIcon className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                        <span className="font-medium text-slate-700 leading-tight">{atv.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Prevenção Direta e Agressiva */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 flex-shrink-0">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary-dark mb-4">Prevenção Direta e Agressiva</h2>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium mb-6">
                      Tão importante quanto recuperar o caído, é impedir a queda dos em pé. Realizamos uma força tarefa de conscientização pesada por meio de vastas palestras agendadas nas veias abertas do Amazonas: Chão de Escolas, pátio de Empresas e coraçao de Comunidades rurais.
                    </p>
                    <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                      <h4 className="text-rose-600 font-bold uppercase tracking-widest text-sm mb-3">Dados Contextuais Alarmantes (Amostragem)</h4>
                      <p className="text-slate-700 font-medium mb-4">
                        A idade média para o primeiro uso infeliz de drogas no Brasil atual caiu bizarramente para <strong className="text-rose-700 font-bold bg-rose-100 px-2 py-1 rounded">12 Anos</strong>.
                      </p>
                      <p className="text-slate-700 font-medium">
                        A nossa amostra fria do DJM revelou que em 2024, estonteantes <strong className="text-rose-700">52% dos acolhidos foram raptados pelo vício iniciante na Maconha</strong>, e a esmagadora maioria cravou o contato experimental entre <strong className="text-rose-700">14 e 17 preciosos anos de idade</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Retorno Social Direto */}
              <div>
                <h3 className="text-2xl font-bold text-primary-dark mb-8 border-l-4 border-primary pl-4">Retorno Social Direto (Resultados 2024)</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-3xl shadow-sm border-t-4 border-primary text-center">
                    <div className="text-4xl font-black text-primary-dark mb-3">50</div>
                    <div className="text-xs font-bold uppercase text-primary tracking-wider">Triagens Complexas Diárias Realizadas</div>
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-sm border-t-4 border-primary text-center">
                    <div className="text-4xl font-black text-primary-dark mb-3">27</div>
                    <div className="text-xs font-bold uppercase text-primary tracking-wider">Acolhimentos Profundos Concretizados</div>
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-sm border-t-4 border-primary text-center">
                    <div className="text-4xl font-black text-primary-dark mb-3">237</div>
                    <div className="text-xs font-bold uppercase text-primary tracking-wider">Familiares Tratados Semanalmente no GAF</div>
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-sm border-t-4 border-teal-500 text-center">
                    <div className="text-4xl font-black text-primary-dark mb-3">37%</div>
                    <div className="text-xs font-bold uppercase text-primary tracking-wider">Taxa Pura de Conclusão Gloriosa C/ Sucesso</div>
                  </div>
                  <div className="bg-primary-dark p-6 rounded-3xl shadow-sm border-t-4 border-white text-center">
                    <div className="text-4xl font-black text-white mb-3">2K+</div>
                    <div className="text-xs font-bold uppercase text-teal-300 tracking-wider">Acolhimentos Históricos Vivos Desde 1985</div>
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
