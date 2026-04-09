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
  X,
  MousePointerClick,
  ArrowLeft,
  ArrowUp,
  Loader2
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
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const formRef = useRef<HTMLDivElement>(null);

  const handleSelectReason = (reason: Reason) => {
    setSelectedReason(reason);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedReason || isSending) return;

    setIsSending(true);

    // Mapeamento de números de WhatsApp
    const whatsappNum = (selectedReason.id === "ajuda-mim" || selectedReason.id === "ajudar-alguem")
      ? "5592984321699"
      : "5592984446540";

    const text = `*Novo Contato via Site*\n\n` +
      `*Assunto:* ${selectedReason.title}\n` +
      `*Nome:* ${formData.name}\n` +
      `*E-mail:* ${formData.email || "Não informado"}\n` +
      `*Telefone:* ${formData.phone || "Não informado"}\n\n` +
      `*Mensagem:* ${formData.message}`;

    // 1. Enviar para E-mail via Web3Forms (Ação Automática)
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "f9d29ff6-ac02-4214-a675-091498acafae",
          to: "contato@desafiojovemmanaus.org.br",
          subject: `Site Contato: ${selectedReason.title}`,
          from_name: formData.name,
          replyto: formData.email,
          message: formData.message,
          // Campos extras para organização
          motivo_selecionado: selectedReason.title,
          telefone: formData.phone || "Não informado",
          email_contato: formData.email || "Não informado"
        })
      });
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
    }

    // 2. Abrir WhatsApp (Com um pequeno delay para garantir que o fetch iniciou)
    const waUrl = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");

    setIsSending(false);
  };

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
          <p className="text-xl text-slate-500 font-medium tracking-tight">
            Selecione uma opção e envie sua mensagem no WhatsApp
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
                  onClick={() => handleSelectReason(reason)}
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
                <div className="absolute inset-x-0 top-0 z-20 p-8 md:p-12 bg-white/95 backdrop-blur-md border-b border-slate-100 text-center animate-fade-in flex flex-col items-center justify-center h-full text-balance">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <MousePointerClick className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-[#222F6D] mb-4 leading-tight max-w-sm">
                    Selecione um motivo ao lado para enviar sua mensagem em um dos nossos WhatsApps
                  </h3>
                  <div className="hidden lg:flex items-center text-primary font-bold text-sm animate-pulse">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Escolha uma categoria na lista à esquerda
                  </div>
                  <div className="lg:hidden flex items-center text-primary font-bold text-sm animate-pulse">
                    <ArrowUp className="w-5 h-5 mr-2" />
                    Escolha uma categoria acima
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
              <form 
                onSubmit={handleSubmit}
                className={`p-8 md:p-10 space-y-6 flex-grow transition-opacity duration-300 ${!selectedReason ? "opacity-40 grayscale pointer-events-none" : "opacity-100"}`}
              >
                <div>
                  <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Nome completo <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Como devemos chamar você?"
                    className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-600 placeholder:text-slate-400"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">E-mail</label>
                    <input 
                      type="email" 
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-600 placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Telefone</label>
                    <input 
                      type="tel" 
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(xx) xxxxx-xxxx"
                      className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-600 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-bold text-slate-700 mb-2 uppercase tracking-wide">Mensagem <span className="text-red-500">*</span></label>
                  <textarea 
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Escreva sua mensagem..."
                    className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-600 placeholder:text-slate-400 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={!selectedReason || isSending}
                  className={`
                    w-full py-5 text-white font-black text-sm uppercase tracking-[0.2em] rounded-2xl transition-all duration-300 flex items-center justify-center group
                    ${selectedReason 
                      ? (isSending ? "bg-slate-400 cursor-wait" : "bg-[#25D366] hover:bg-[#20BD5A] shadow-xl shadow-green-900/20 active:scale-[0.98]") 
                      : "bg-slate-300 cursor-not-allowed"
                    }
                  `}
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      {selectedReason && (
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="20" 
                          height="20" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                          className="mr-3"
                        >
                          <path d="M12.031 0C5.396 0 .012 5.385.01 12.022a11.966 11.966 0 0 0 1.61 5.952L0 24l6.196-1.624a11.986 11.986 0 0 0 5.836 1.517h.005c6.634 0 12.018-5.385 12.02-12.022A12.015 12.015 0 0 0 12.031 0zm0 21.849h-.004a9.98 9.98 0 0 1-5.077-1.385l-.364-.216-3.774.99.99-3.682-.236-.376a9.957 9.957 0 0 1-1.523-5.309c.002-5.503 4.484-9.986 9.989-9.986 2.668.001 5.176 1.042 7.061 2.929s2.925 4.394 2.924 7.06c-.002 5.505-4.485 9.985-9.986 9.985zm5.494-7.498c-.301-.151-1.78-.881-2.057-.981-.277-.101-.48-.152-.682.151-.202.302-.777.981-.952 1.181-.176.202-.352.227-.654.076a8.214 8.214 0 0 1-2.42-1.498 9.07 9.07 0 0 1-1.666-2.073c-.176-.303-.019-.467.132-.617.135-.135.302-.353.453-.531.152-.176.202-.301.303-.502.102-.202.051-.378-.025-.529-.076-.151-.682-1.644-.934-2.253-.245-.592-.494-.512-.681-.522-.177-.008-.378-.008-.579-.008s-.529.076-.806.378c-.277.302-1.059 1.035-1.059 2.525s1.085 2.925 1.236 3.125c.151.202 2.128 3.253 5.158 4.56.721.311 1.284.496 1.724.636.722.228 1.379.196 1.895.118.577-.087 1.78-.727 2.03-1.429.251-.703.251-1.306.176-1.432-.075-.126-.276-.201-.577-.352z"/>
                        </svg>
                      )}
                      Enviar mensagem
                    </>
                  )}
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
