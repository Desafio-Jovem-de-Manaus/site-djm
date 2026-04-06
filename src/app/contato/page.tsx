"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  Home, 
  Heart, 
  HeartHandshake, 
  Users, 
  Info, 
  Building2, 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Send,
  ChevronRight,
  X
} from "lucide-react";

type Reason = {
  id: string;
  title: string;
  description?: string;
  icon: React.ElementType;
  classes: string;
  isOrange?: boolean;
};

const reasons: Reason[] = [
  {
    id: "ajuda-mim",
    title: "Preciso de ajuda para mim",
    description: "Dependência química, tratamento e orientação",
    icon: Home,
    classes: "bg-orange-50 text-orange-600",
    isOrange: true,
  },
  {
    id: "ajudar-alguem",
    title: "Quero ajudar alguém",
    description: "Orientação sobre dependência química para familiares e amigos",
    icon: Heart,
    classes: "bg-orange-50 text-orange-600",
    isOrange: true,
  },
  {
    id: "doacao",
    title: "Quero fazer uma doação",
    description: "Contribua financeiramente ou com materiais",
    icon: HeartHandshake,
    classes: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "voluntario",
    title: "Quero ser voluntário(a)",
    description: "Doe seu tempo e habilidades",
    icon: Users,
    classes: "bg-blue-50 text-blue-600",
  },
  {
    id: "informacoes",
    title: "Informações sobre os programas",
    description: "Conheça nossos serviços",
    icon: Info,
    classes: "bg-purple-50 text-purple-600",
  },
  {
    id: "parceria",
    title: "Parceria institucional / imprensa",
    description: "Empresas e veículos de comunicação",
    icon: Building2,
    classes: "bg-slate-50 text-slate-600",
  },
  {
    id: "outro",
    title: "Outro assunto",
    icon: Mail,
    classes: "bg-blue-50 text-blue-600",
  },
];

export default function ContatoPage() {
  const [selectedReason, setSelectedReason] = useState<Reason | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Scroll to form on mobile when selection changes
  useEffect(() => {
    if (selectedReason && window.innerWidth < 1024 && formRef.current) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [selectedReason]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#222F6D] mb-4">
            Como podemos ajudar?
          </h1>
          <p className="text-xl text-slate-500 font-medium">
            Selecione uma opção e envie sua mensagem
          </p>
        </div>

        {/* Main 2-Column Section */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start mb-24">
          
          {/* Left Column: Reasons List */}
          <div className="lg:col-span-5 space-y-3 mb-10 lg:mb-0">
            {reasons.map((reason) => {
              const isSelected = selectedReason?.id === reason.id;
              const Icon = reason.icon;

              return (
                <button
                  key={reason.id}
                  onClick={() => setSelectedReason(reason)}
                  className={`
                    w-full flex items-center p-4 rounded-2xl border-2 transition-all duration-300 group
                    ${isSelected 
                      ? (reason.isOrange ? "border-[#DE4A19] bg-orange-50/50" : "border-[#222F6D] bg-blue-50/50") 
                      : (reason.isOrange ? "border-orange-100 bg-white" : "border-slate-100 bg-white hover:border-slate-200 hover:shadow-md")
                    }
                  `}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0 transition-transform group-hover:scale-105 ${reason.classes}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-grow text-left">
                    <h3 className={`font-bold text-sm leading-tight ${reason.isOrange ? "text-[#DE4A19]" : "text-slate-800"}`}>
                      {reason.title}
                    </h3>
                    {reason.description && (
                      <p className="text-[11px] text-slate-400 font-medium mt-0.5 leading-tight">
                        {reason.description}
                      </p>
                    )}
                  </div>
                  <ChevronRight className={`w-5 h-5 ml-2 transition-opacity ${isSelected ? "opacity-100 text-primary" : "opacity-30 group-hover:opacity-100"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Form Card */}
          <div ref={formRef} className="lg:col-span-7 h-full">
            <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden h-full flex flex-col relative animate-fade-in">
              
              {/* Overlay / Disabled Message */}
              {!selectedReason && (
                <div className="absolute inset-x-0 top-0 z-10 p-6 bg-slate-50/80 backdrop-blur-sm border-b border-slate-100 text-center animate-pulse">
                  <div className="flex items-center justify-center gap-2 text-slate-500 font-bold text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary mb-0.5"></div>
                    Selecione um motivo ao lado para enviar sua mensagem
                  </div>
                </div>
              )}

              {/* Badge Selection Header */}
              {selectedReason && (
                <div className="bg-slate-50 px-8 py-6 border-b border-slate-100 flex items-center justify-between animate-slide-down">
                  <div className="flex items-center">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mr-4 hidden sm:block">Motivo:</span>
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold border flex items-center ${selectedReason.classes} ${selectedReason.isOrange ? 'border-orange-200' : 'border-blue-200'}`}>
                      <selectedReason.icon className="w-3.5 h-3.5 mr-2" />
                      {selectedReason.title}
                    </span>
                  </div>
                  <button 
                    onClick={() => setSelectedReason(null)}
                    className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                    title="Desselecionar"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* Form Body */}
              <form className={`p-8 md:p-10 space-y-6 flex-grow transition-opacity duration-300 ${!selectedReason ? "opacity-40 grayscale pointer-events-none" : "opacity-100"}`}>
                <div>
                  <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Nome completo <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    required
                    placeholder="Como devemos chamar você?"
                    className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-600 placeholder:text-slate-400"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">E-mail</label>
                    <input 
                      type="email" 
                      placeholder="seu@email.com"
                      className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-600 placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Telefone</label>
                    <input 
                      type="tel" 
                      placeholder="(xx) xxxxx-xxxx"
                      className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-600 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Mensagem <span className="text-red-500">*</span></label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="Escreva sua mensagem..."
                    className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-600 placeholder:text-slate-400 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={!selectedReason}
                  className={`
                    w-full py-5 text-white font-black text-sm uppercase tracking-[0.2em] rounded-2xl transition-all duration-300 flex items-center justify-center group
                    ${selectedReason 
                      ? "bg-[#222F6D] hover:bg-[#1a2557] shadow-xl shadow-blue-900/20 active:scale-[0.98]" 
                      : "bg-slate-300 cursor-not-allowed"
                    }
                  `}
                >
                  Enviar mensagem
                  <Send className={`w-5 h-5 ml-3 transition-transform ${selectedReason ? "group-hover:translate-x-1 group-hover:-translate-y-0.5" : ""}`} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Info Grid (4 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-slate-50 text-primary rounded-xl flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-800 mb-2 tracking-tight">Onde estamos</h4>
            <div className="text-[11px] text-slate-500 leading-relaxed font-medium">
              <p>Rua Fragata, 100 — Conj. Jardim Petrópolis</p>
              <p>Bairro Petrópolis — Manaus/AM</p>
              <p>CEP 69067-110</p>
              <p className="mt-2 text-primary font-bold">Ref: Rua da Gráfica Amazonas / Próximo ao Comando Geral da PM</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-slate-50 text-primary rounded-xl flex items-center justify-center mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-800 mb-2 tracking-tight">Fale conosco</h4>
            <div className="text-[11px] text-slate-500 leading-relaxed font-medium space-y-1">
              <p><span className="font-bold text-slate-700">Fixo:</span> (92) 3304-7704</p>
              <p><span className="font-bold text-slate-700">Whats Geral:</span> (92) 98444-6540</p>
              <p><span className="font-bold text-slate-700">Whats Acolhimento:</span> (92) 98432-1699</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-slate-50 text-primary rounded-xl flex items-center justify-center mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-800 mb-2 tracking-tight">E-mail</h4>
            <p className="text-[11px] text-primary font-bold break-all">
              contato@desafiojovemmanaus.org.br
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-slate-50 text-primary rounded-xl flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-800 mb-2 tracking-tight">Horário</h4>
            <div className="text-[11px] text-slate-500 leading-relaxed font-medium space-y-1">
              <p><span className="font-bold text-slate-700">Admin:</span> Seg a Sex, 8h às 17h</p>
              <p><span className="font-bold text-slate-700">Externo:</span> Seg a Sex, 9h às 16h</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
