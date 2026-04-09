"use client";

import { useState, useEffect } from "react";
import { 
  PlayCircle, HeartHandshake, PackageOpen, Droplet, 
  Shirt, MapPin, HandCoins, Heart, Briefcase, ChevronRight, Handshake,
  Landmark, Package, HandHeart, GraduationCap, Clock, Camera, X,
  Drumstick, Bath, Footprints
} from "lucide-react";
import PageSidebar from "@/components/PageSidebar";

export default function ComoAjudarPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cardImages, setCardImages] = useState<Record<number, string | null>>({});

  const handleImageUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("O arquivo é muito grande (máximo 5MB).");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setCardImages(prev => ({ ...prev, [index]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (index: number) => {
    setCardImages(prev => ({ ...prev, [index]: null }));
  };

  const images = [
    "/Como-ajudar-capa-1.png",
    "/Como-ajudar-capa-2.png",
    "/Como-ajudar-capa-3.png"
  ];

  useEffect(() => {
    // Sorteia uma imagem inicial para não ser sempre a mesma
    setCurrentImageIndex(Math.floor(Math.random() * images.length));

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 6000); // Troca a cada 6 segundos

    return () => clearInterval(interval);
  }, []);

  const sidebarItems = [
    { label: "Doações materiais", anchor: "doacoes-materiais", icon: <Package className="w-5 h-5" /> },
    { label: "Doação financeira", anchor: "doacao-financeira", icon: <Heart className="w-5 h-5" /> },
    { label: "Voluntariado", anchor: "voluntariado", icon: <HandHeart className="w-5 h-5" /> },
    { label: "Estágios", anchor: "estagios", icon: <GraduationCap className="w-5 h-5" /> },
    { label: "Doe seu tempo", anchor: "doe-seu-tempo", icon: <Clock className="w-5 h-5" /> },
    { label: "Parcerias empresariais", anchor: "parcerias-empresariais", icon: <Handshake className="w-5 h-5" /> },
  ];

  const doacoes = [
    { icon: PackageOpen, color: "text-amber-600 bg-amber-100", title: "Alimentos não perecíveis", desc: "Arroz, feijão, açúcar, óleo, macarrão, leite em pó, café, etc." },
    { icon: Drumstick, color: "text-rose-600 bg-rose-100", title: "Proteínas", desc: "Frango, ovos, linguiça, carne enlatada." },
    { icon: Bath, color: "text-primary bg-teal-100", title: "Higiene pessoal", desc: "Sabonete, creme dental, escova de dente, papel higiênico, desodorante." },
    { icon: SparklesIcon, color: "text-blue-600 bg-blue-100", title: "Produtos de limpeza", desc: "Água sanitária, desinfetante, sabão em pó, detergente." },
    { icon: Shirt, color: "text-indigo-600 bg-indigo-100", title: "Roupas", desc: "Camisas, calças e bermudas masculinas (novas ou usadas em bom estado)." },
    { icon: BedSingleIcon, color: "text-purple-600 bg-purple-100", title: "Cama, mesa e banho", desc: "Lençóis, fronhas, toalhas, cobertores." },
    { icon: Footprints, color: "text-slate-600 bg-slate-200", title: "Calçados", desc: "Tênis, sandálias e chinelos (preferencialmente masculinos)." },
  ];

  const voluntariado = [
    "Psicologia", "Serviço Social", "Educação", "Saúde",
    "Administração e Recursos Humanos", "Arquitetura", "Tecnologia da Informação", "Manutenção",
    "Culinária", "Barbearia", "Arte e Artesanato", "Música", "Educação Física"
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-slate-50">

      {/* Hero */}
      <section className="relative h-[65vh] flex items-center justify-center bg-black overflow-hidden">
        {/* Background Images Slider */}
        <div className="absolute inset-0 z-0">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out ${
                idx === currentImageIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 z-10"></div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-md border border-white/20">
            <HeartHandshake className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md">Como Ajudar</h1>
          <p className="text-2xl text-white font-medium drop-shadow px-4 opacity-90">
            Sua solidariedade transforma vidas. Conheça as formas de contribuir com o Desafio Jovem de Manaus.
          </p>
        </div>
      </section>

      {/* Main Layout Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 relative">
            
            {/* Sidebar Sticky de Navegação */}
            <div className="lg:col-span-3">
              <PageSidebar items={sidebarItems} />
            </div>

            {/* Coluna Principal de Conteúdo */}
            <div className="lg:col-span-9 space-y-24 pb-20">

              {/* Doações de Materiais */}
              <section id="doacoes-materiais" className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                  <h2 className="text-4xl font-bold text-primary-dark mb-6">Doações Materiais</h2>
                  <p className="text-lg text-slate-600 font-medium">Mantemos quatro programas ativos que atendem diariamente dezenas de pessoas em situação de vulnerabilidade. Para garantir o funcionamento contínuo dos serviços, precisamos de doações regulares dos seguintes itens:</p>
                </div>


                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                  {doacoes.map((item, idx) => {
                    const Icon = item.icon;
                    const hasImage = cardImages[idx];

                    return (
                      <div key={idx} className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-6 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col h-full">
                        
                        {/* Upload de Imagem */}
                        <div 
                          className={`relative w-full h-32 mb-6 rounded-3xl border-2 border-dashed transition-all overflow-hidden flex items-center justify-center cursor-pointer 
                            ${hasImage ? 'border-transparent' : 'border-slate-300 bg-slate-100 group-hover:border-[#DE4A19] group-hover:bg-orange-50/30'}`}
                          onClick={() => !hasImage && document.getElementById(`upload-${idx}`)?.click()}
                        >
                          {hasImage ? (
                            <>
                              <img src={hasImage} alt={item.title} className="w-full h-full object-cover" />
                              <button 
                                onClick={(e) => { e.stopPropagation(); handleRemoveImage(idx); }}
                                className="absolute top-2 right-2 bg-black/60 hover:bg-red-500 text-white p-1.5 rounded-full transition-colors z-10"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </>
                          ) : (
                            <div className="flex flex-col items-center justify-center text-slate-400 group-hover:text-[#DE4A19] transition-colors">
                              <Camera className="w-8 h-8 mb-2 opacity-60 group-hover:opacity-100" />
                              <span className="text-[10px] font-bold uppercase tracking-widest">Adicionar foto</span>
                            </div>
                          )}
                          <input 
                            type="file" 
                            id={`upload-${idx}`} 
                            accept="image/png, image/jpeg, image/webp" 
                            className="hidden" 
                            onChange={(e) => handleImageUpload(idx, e)}
                          />
                        </div>

                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mr-auto ${item.color}`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <h4 className="font-bold text-primary-dark text-lg mb-2 leading-tight">{item.title}</h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed mb-4">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-primary-dark text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-slate-700/50 rounded-full blur-3xl -mr-20 -mt-20"></div>
                   <div className="flex items-start md:items-center relative z-10 mb-6 md:mb-0">
                     <div className="bg-blue-500/20 p-4 rounded-full mr-6 border border-teal-500/30">
                       <MapPin className="w-8 h-8 text-highlight" />
                     </div>
                     <div>
                       <p className="text-highlight font-bold uppercase tracking-widest text-xs mb-1">Local de entrega</p>
                       <p className="text-xl md:text-2xl font-bold mb-1">Rua Fragata, 100 — Petrópolis</p>
                       <p className="text-slate-400 font-medium">Manaus/AM — Atendimento p/ Recebimento: <span className="text-white">Seg. a Sex. das 09h às 17h</span></p>
                     </div>
                   </div>
                   <button className="whitespace-nowrap bg-blue-500 hover:bg-teal-400 text-primary-dark font-bold px-8 py-4 rounded-xl transition-colors relative z-10 hidden md:block">
                     Ver no mapa
                   </button>
                </div>
              </section>

              {/* Doação Financeira (PIX e Bancos) */}
              <section id="doacao-financeira" className="bg-blue-50 p-8 md:p-10 rounded-3xl shadow-sm border border-teal-100">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  
                  <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-primary-dark mb-6 flex items-center">
                      <HandCoins className="w-10 h-10 text-primary mr-4 flex-shrink-0" /> Doação Financeira
                    </h2>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed mb-4">Sua doação financeira garante a continuidade dos nossos serviços e amplia o número de pessoas atendidas. Você pode fazer uma doação única ou contribuir mensalmente.</p>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">Em breve, disponibilizaremos doações recorrentes por cartão de crédito para facilitar sua contribuição.</p>
                    
                    {/* O aviso anterior foi removido pois a informação agora está no parágrafo acima conforme pedido */}
                  </div>

                  <div className="grid md:grid-cols-1 gap-6 relative">
                     <div className="bg-white p-8 rounded-3xl shadow-xl border-t-4 border-emerald-500 group hover:-translate-y-2 transition-transform cursor-pointer">
                       <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center mb-6">
                         <Landmark className="w-6 h-6" />
                       </div>
                        <h4 className="font-bold text-primary-dark text-lg mb-2">Transferência bancária (TED/DOC)</h4>
                       <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-slate-400 text-center font-medium mt-4">
                         [ Dados Bancários Estritamente Auditados em processamento ]
                       </div>
                     </div>

                     <div className="bg-white p-8 rounded-3xl shadow-xl border-t-4 border-teal-600 group hover:-translate-y-2 transition-transform cursor-pointer">
                       <div className="w-12 h-12 bg-teal-100 text-primary rounded-full flex items-center justify-center mb-6">
                         <Heart className="w-6 h-6" />
                       </div>
                        <h4 className="font-bold text-primary-dark text-lg mb-2">PIX</h4>
                       <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-slate-400 text-center font-medium mt-4 flex items-center justify-center h-[76px] relative overflow-hidden">
                         [ Chave Estática PIX - Aguardando liberação ]
                       </div>
                     </div>
                  </div>

                </div>
              </section>

              {/* Voluntariado & Formulário */}
              <section id="voluntariado" className="bg-primary-dark text-white rounded-3xl p-8 md:p-10 shadow-xl overflow-hidden relative">
                <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                  <div className="space-y-8">
                    <h2 className="text-4xl font-bold text-white leading-tight">Voluntariado</h2>
                    
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                      <img 
                        src="/Como-ajudar-voluntarios-1.png" 
                        alt="Nossos Voluntários" 
                        className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-transparent transition-colors"></div>
                    </div>

                    <p className="text-lg text-slate-300 font-medium leading-relaxed">Nosso trabalho só é possível graças ao engajamento de voluntários que doam seu tempo e conhecimento. Se você tem habilidades em alguma das áreas abaixo, junte-se à nossa equipe.</p>
                    
                    <div className="bg-primary-dark border border-slate-700 rounded-3xl p-6 shadow-inner">
                      <p className="font-bold text-sm text-slate-400 uppercase tracking-widest mb-4">Áreas disponíveis:</p>
                      <div className="flex flex-wrap gap-2">
                        {voluntariado.map((vol, i) => (
                          <span key={i} className="bg-primary-dark border border-slate-700 text-teal-100 text-xs px-3 py-1.5 rounded-md cursor-default">{vol}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <form className="bg-white rounded-3xl p-8 shadow-2xl relative text-primary-dark">
                    
                    
                    <h3 className="text-2xl font-bold text-primary-dark mb-8">Central de Recrutamento</h3>
                    
                    <div className="grid sm:grid-cols-1 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Nome Completo (RG)</label>
                        <input type="text" disabled placeholder="Maria Silva" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none opacity-60 cursor-not-allowed" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Linha Telefônica (WhatsApp)</label>
                        <input type="text" disabled placeholder="(92) 99000-0000" className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none opacity-60 cursor-not-allowed" />
                      </div>
                      <div>
                         <label className="block text-sm font-bold text-slate-700 mb-2">Área de interesse</label>
                        <select disabled className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none opacity-60 cursor-not-allowed appearance-none">
                          <option>Selecione uma especialidade...</option>
                        </select>
                      </div>
                    </div>
                    
                     <button disabled className="w-full bg-primary-dark text-white font-bold py-4 rounded-xl mt-4 opacity-50 cursor-not-allowed flex items-center justify-center uppercase tracking-widest text-sm transition-all hover:bg-slate-700">
                      Enviar cadastro <ChevronRight className="w-5 h-5 ml-2" />
                    </button>
                  </form>
                </div>
              </section>

              {/* Estágios e Parcerias Empresariais */}
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Estágios */}
                <section id="estagios" className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between group">
                  <div>
                    <Briefcase className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform origin-left" />
                     <h3 className="text-3xl font-bold text-primary-dark mb-4">Central de Estágios</h3>
                    <p className="text-slate-600 leading-relaxed font-medium mb-8">Oferecemos oportunidades de estágio supervisionado nas áreas de Serviço Social, Psicologia, Administração, Direito e Pedagogia. Nossos estagiários têm experiência prática no atendimento a pessoas em situação de vulnerabilidade, com supervisão técnica registrada no CRESS e CRP.</p>
                    <div className="bg-blue-50 border border-blue-100 text-blue-800 px-4 py-3 rounded-lg text-sm font-bold shadow-sm mb-8 inline-block hidden">
                      A instituição mantém supervisão contínua 100% amparada pelas assinaturas técnicas do <strong>CRESS e CRP</strong> estaduais.
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-2">Envie seu Currículo em PDF:</p>
                    <a href="mailto:contato@desafiojovemmanaus.org.br" className="text-lg font-black text-blue-600 hover:text-blue-800 transition-colors break-words">contato@desafiojovemmanaus.org.br</a>
                  </div>
                </section>

                {/* Parcerias B2B */}
                <section id="parcerias-empresariais" className="bg-gradient-to-br from-primary to-primary-dark p-10 rounded-3xl shadow-xl text-white flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform">
                     <Handshake className="w-64 h-64" />
                  </div>
                  <div className="relative z-10">
                    <Handshake className="w-12 h-12 text-teal-300 mb-6" />
                    <h3 className="text-3xl font-bold mb-4">Parcerias B2B</h3>
                    <p className="text-teal-50 leading-relaxed font-medium mb-6">Empresas podem contribuir de diferentes formas: doações regulares de produtos, repasses financeiros ou destinação de valores de penas pecuniárias.</p>
                    
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 mb-8">
                      <h4 className="font-bold text-yellow-300 mb-2 uppercase tracking-wider text-xs flex items-center">Tribunal de Justiça do Estado do Amazonas</h4>
                      <p className="text-sm font-medium hover:text-white transition-colors">Chancela da absorção e destinação de sentenças de <strong>Penas Pecuniárias na VEMEPA</strong> à causa.</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <p className="text-xs uppercase font-bold text-teal-300 tracking-widest mb-3">Linha Direta P/ Lojistas Parceiros:</p>
                     <button className="w-full bg-white text-primary font-black px-6 py-4 rounded-xl hover:bg-slate-100 transition-colors shadow-lg">
                      Falar sobre parcerias
                    </button>
                  </div>
                </section>
              </div>

              {/* Doe Seu Tempo / Visitas Institucionais */}
              <section id="doe-seu-tempo" className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 text-center py-20 flex flex-col items-center justify-center">
                 <Clock className="w-16 h-16 text-slate-200 mb-4" />
                <h2 className="text-3xl font-bold text-primary-dark mb-4">Visitas</h2>
                <p className="text-lg text-slate-500 mb-8 max-w-2xl font-medium">Visitas da comunidade fortalecem o vínculo social dos nossos atendidos. Agende sua visita e conheça nosso trabalho de perto.</p>
                <div className="px-6 py-4 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 font-bold uppercase tracking-widest text-sm">
                  Horários de visita e orientações serão divulgados em breve. Entre em contato para mais informações.
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Mini Icons helper
const SparklesIcon = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.9 5.8a2 2 0 0 1-1.29 1.29L3 12l5.8 1.9a2 2 0 0 1 1.29 1.29L12 21l1.9-5.8a2 2 0 0 1-1.29-1.29L21 12l-5.8-1.9a2 2 0 0 1-1.29-1.29L12 3Z"/></svg>);
const BedSingleIcon = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"/><path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"/><path d="M3 18h18"/></svg>);
