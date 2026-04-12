"use client";

import { useState, useEffect } from "react";
import { 
  HeartHandshake, PackageOpen, Drumstick, Shirt,
  MapPin, HandCoins, Heart, Briefcase, Handshake,
  Landmark, Package, HandHeart, GraduationCap, Clock, Footprints
} from "lucide-react";
import PageSidebar from "@/components/PageSidebar";

export default function ComoAjudarPage() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [alimentosHovered, setAlimentosHovered] = useState(false);
  const [resolvedImages, setResolvedImages] = useState<Record<string, string>>({});

  const heroImages = [
    "/Como-ajudar-capa-1.png",
    "/Como-ajudar-capa-2.png",
    "/Como-ajudar-capa-3.png"
  ];

  // Resolve all card image paths: tries .jpg first, falls back to .png
  useEffect(() => {
    const bases = [
      "/como-ajudar-alimentos-não-perecíveis-1",
      "/como-ajudar-alimentos-não-perecíveis-2",
      "/como-ajudar-proteinas-1", "/como-ajudar-proteinas-2",
      "/como-ajudar-higiene-pessoal-1", "/como-ajudar-higiene-pessoal-2",
      "/como-ajudar-produtos-limpeza-1", "/como-ajudar-produtos-limpeza-2",
      "/como-ajudar-roupas-1", "/como-ajudar-roupas-2",
      "/como-ajudar-calcados-1", "/como-ajudar-calcados-2",
    ];
    bases.forEach(base => {
      const tryJpg = new window.Image();
      tryJpg.onload = () => setResolvedImages(prev => ({ ...prev, [base]: `${base}.jpg` }));
      tryJpg.onerror = () => {
        const tryPng = new window.Image();
        tryPng.onload = () => setResolvedImages(prev => ({ ...prev, [base]: `${base}.png` }));
        tryPng.src = `${base}.png`;
      };
      tryJpg.src = `${base}.jpg`;
    });
  }, []);

  // Returns the resolved URL (or the .jpg default while probing)
  const resolveImg = (base: string) => resolvedImages[base] ?? `${base}.jpg`;

  useEffect(() => {
    setCurrentHeroIndex(Math.floor(Math.random() * heroImages.length));
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(heroInterval);
  }, []);

  const sidebarItems = [
    { label: "Doações materiais", anchor: "doacoes-materiais", icon: <Package className="w-5 h-5" /> },
    { label: "Doação financeira", anchor: "doacao-financeira", icon: <Heart className="w-5 h-5" /> },
    { label: "Voluntariado", anchor: "voluntariado", icon: <HandHeart className="w-5 h-5" /> },
    { label: "Estágios", anchor: "estagios", icon: <GraduationCap className="w-5 h-5" /> },
    { label: "Doe seu tempo", anchor: "doe-seu-tempo", icon: <Clock className="w-5 h-5" /> },
    { label: "Parcerias empresariais", anchor: "parcerias-empresariais", icon: <Handshake className="w-5 h-5" /> },
  ];

  // Donation cards — 6 items ("Cama, mesa e banho" removed)
  // badgeBg: background of icon badge | badgeIcon: contrasting icon colour
  const doacoes = [
    { icon: Drumstick,    badgeBg: "bg-rose-100",   badgeIcon: "text-rose-600",   title: "Proteínas",           desc: "Carnes, frango, peixes, ovos, embutidos, enlatados em conserva, etc.",           bg: "/como-ajudar-proteinas-1",         bg2: "/como-ajudar-proteinas-2" },
    { icon: SparklesIcon, badgeBg: "bg-teal-100",   badgeIcon: "text-teal-600",   title: "Higiene pessoal",     desc: "Sabonete, creme dental, escova de dente, papel higiênico, desodorante, etc.",  bg: "/como-ajudar-higiene-pessoal-1",   bg2: "/como-ajudar-higiene-pessoal-2" },
    { icon: SparklesIcon, badgeBg: "bg-blue-100",   badgeIcon: "text-blue-600",   title: "Produtos de limpeza", desc: "Água sanitária, desinfetante, sabão em pó, detergente, esponjas, escovas, etc.", bg: "/como-ajudar-produtos-limpeza-1",  bg2: "/como-ajudar-produtos-limpeza-2" },
    { icon: Shirt,        badgeBg: "bg-indigo-100", badgeIcon: "text-indigo-600", title: "Roupas",              desc: "Camisas, calças, bermudas e vestidos, novos ou usados em bom estado.",          bg: "/como-ajudar-roupas-1",           bg2: "/como-ajudar-roupas-2" },
    { icon: Footprints,   badgeBg: "bg-slate-200",  badgeIcon: "text-slate-600",  title: "Calçados",            desc: "Tênis, sandálias e chinelos (preferencialmente masculinos).",               bg: "/como-ajudar-calcados-1",         bg2: "/como-ajudar-calcados-2" },
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
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out ${
                idx === currentHeroIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
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

                  {/* Card 1: Alimentos não perecíveis — hover-based image fade */}
                  <div
                    className="relative rounded-[2rem] overflow-hidden min-h-[320px] flex flex-col justify-end"
                    style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                    onMouseEnter={e => {
                      setAlimentosHovered(true);
                      (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.25)";
                    }}
                    onMouseLeave={e => {
                      setAlimentosHovered(false);
                      (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "";
                    }}
                  >
                    {/* Image 1 — default */}
                    <div
                      className="absolute inset-0 bg-[#d1d5db] bg-cover bg-center transition-opacity duration-500 ease-in-out"
                      style={{
                        backgroundImage: `url(${resolveImg("/como-ajudar-alimentos-não-perecíveis-1")})`,
                        opacity: alimentosHovered ? 0 : 1,
                      }}
                    />
                    {/* Image 2 — shown on hover */}
                    <div
                      className="absolute inset-0 bg-[#d1d5db] bg-cover bg-center transition-opacity duration-500 ease-in-out"
                      style={{
                        backgroundImage: `url(${resolveImg("/como-ajudar-alimentos-não-perecíveis-2")})`,
                        opacity: alimentosHovered ? 1 : 0,
                      }}
                    />
                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)" }}
                    />
                    {/* Icon — absolute centre-left */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-7 z-10">
                      <div className="w-11 h-11 rounded-2xl bg-amber-100 flex items-center justify-center">
                        <PackageOpen className="w-6 h-6 text-amber-600" />
                      </div>
                    </div>
                    {/* Text — bottom-left */}
                    <div className="relative z-10 p-7">
                      <h4 className="font-bold text-white text-lg leading-tight mb-1">Alimentos não perecíveis</h4>
                      <p className="text-white/85 text-sm font-medium leading-relaxed">Arroz, feijão, açúcar, óleo, macarrão, leite em pó, etc.</p>
                    </div>
                  </div>

                  {/* Cards 2–6: bg-1 always visible; bg-2 fades in on hover via group */}
                  {doacoes.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="group relative rounded-[2rem] overflow-hidden min-h-[320px] flex flex-col justify-end"
                        style={{ transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(0,0,0,0.25)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
                      >
                        {/* Image 1 — always visible */}
                        <div
                          className="absolute inset-0 bg-[#d1d5db] bg-cover bg-center"
                          style={{ backgroundImage: `url(${resolveImg(item.bg)})` }}
                        />
                        {/* Image 2 — fades in on hover (shows only when file exists) */}
                        <div
                          className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                          style={{ backgroundImage: `url(${resolveImg(item.bg2)})` }}
                        />
                        {/* Gradient overlay */}
                        <div
                          className="absolute inset-0"
                          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)" }}
                        />
                        {/* Icon — absolute centre-left */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-7 z-10">
                          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${item.badgeBg}`}>
                            <Icon className={`w-6 h-6 ${item.badgeIcon}`} />
                          </div>
                        </div>
                        {/* Text — bottom-left */}
                        <div className="relative z-10 p-7">
                          <h4 className="font-bold text-white text-lg leading-tight mb-1">{item.title}</h4>
                          <p className="text-white/85 text-sm font-medium leading-relaxed">{item.desc}</p>
                        </div>
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
                       <p className="text-slate-400 font-medium">Manaus/AM — Atendimento p/ Recebimento: <span className="text-white">Seg. a Sex. das 9h às 16h</span></p>
                     </div>
                   </div>
                   <button className="whitespace-nowrap bg-blue-500 hover:bg-teal-400 text-primary-dark font-bold px-8 py-4 rounded-xl transition-colors relative z-10 hidden md:block">
                     Ver no mapa
                   </button>
                </div>
                
                {/* CTA Doações */}
                <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left bg-slate-50 p-8 rounded-[2rem] border border-slate-200/50">
                  <p className="text-slate-600 font-bold text-lg max-w-sm">
                    Quer agendar a entrega ou tem dúvidas sobre doações?
                  </p>
                  <a 
                    href="/contato" 
                    className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-black px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.031 0C5.396 0 .012 5.385.01 12.022a11.966 11.966 0 0 0 1.61 5.952L0 24l6.196-1.624a11.986 11.986 0 0 0 5.836 1.517h.005c6.634 0 12.018-5.385 12.02-12.022A12.015 12.015 0 0 0 12.031 0zm0 21.849h-.004a9.98 9.98 0 0 1-5.077-1.385l-.364-.216-3.774.99.99-3.682-.236-.376a9.957 9.957 0 0 1-1.523-5.309c.002-5.503 4.484-9.986 9.989-9.986 2.668.001 5.176 1.042 7.061 2.929s2.925 4.394 2.924 7.06c-.002 5.505-4.485 9.985-9.986 9.985zm5.494-7.498c-.301-.151-1.78-.881-2.057-.981-.277-.101-.48-.152-.682.151-.202.302-.777.981-.952 1.181-.176.202-.352.227-.654.076a8.214 8.214 0 0 1-2.42-1.498 9.07 9.07 0 0 1-1.666-2.073c-.176-.303-.019-.467.132-.617.135-.135.302-.353.453-.531.152-.176.202-.301.303-.502.102-.202.051-.378-.025-.529-.076-.151-.682-1.644-.934-2.253-.245-.592-.494-.512-.681-.522-.177-.008-.378-.008-.579-.008s-.529.076-.806.378c-.277.302-1.059 1.035-1.059 2.525s1.085 2.925 1.236 3.125c.151.202 2.128 3.253 5.158 4.56.721.311 1.284.496 1.724.636.722.228 1.379.196 1.895.118.577-.087 1.78-.727 2.03-1.429.251-.703.251-1.306.176-1.432-.075-.126-.276-.201-.577-.352z"/>
                    </svg>
                    Fale conosco
                  </a>
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

                {/* CTA Financeiro */}
                <div className="mt-12 pt-8 border-t border-teal-100/50 flex flex-col items-center text-center">
                  <p className="text-slate-600 font-bold text-lg mb-6 max-w-md">
                    Precisa de recibo de doação ou quer contribuir mensalmente?
                  </p>
                  <a 
                    href="/contato" 
                    className="inline-flex items-center bg-[#DE4A19] hover:bg-[#C53D12] text-white font-black px-10 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                  >
                    Entre em contato
                  </a>
                </div>
              </section>

              {/* Voluntariado */}
              <section id="voluntariado" className="bg-primary-dark text-white rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden relative">
                <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                  <div className="text-center space-y-8">
                    <h2 className="text-4xl font-bold text-white leading-tight">Voluntariado</h2>
                    <p className="text-lg text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto">Nosso trabalho só é possível graças ao engajamento de voluntários que doam seu tempo e conhecimento. Se você tem habilidades em alguma das áreas abaixo, junte-se à nossa equipe.</p>
                    
                    <div className="bg-primary-dark border border-slate-700/50 rounded-3xl p-8 shadow-inner max-w-3xl mx-auto">
                      <p className="font-bold text-sm text-slate-400 uppercase tracking-widest mb-6">Áreas disponíveis:</p>
                      <div className="flex flex-wrap justify-center gap-3">
                        {voluntariado.map((vol, i) => (
                          <span key={i} className="bg-slate-800/50 border border-slate-700 text-teal-100 text-xs px-4 py-2 rounded-lg cursor-default shadow-sm hover:border-teal-500/30 transition-colors uppercase font-bold tracking-wider">{vol}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
                    <img 
                      src="/Como-ajudar-voluntarios-1.png" 
                      alt="Nossos Voluntários" 
                      className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent"></div>
                  </div>

                  <div className="flex flex-col items-center text-center space-y-8 pt-4">
                    <p className="text-2xl md:text-3xl text-white font-bold max-w-xl leading-snug">
                      Quer fazer parte da nossa equipe de voluntários?
                    </p>
                    <a 
                      href="/contato" 
                      className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-black px-12 py-5 rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 text-lg"
                    >
                      Quero ser voluntário
                    </a>
                  </div>
                </div>
              </section>

              {/* Estágios e Parcerias Empresariais */}
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Estágios */}
                <section id="estagios" className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 flex flex-col justify-between group">
                  <div>
                    <Briefcase className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform origin-left" />
                     <h3 className="text-3xl font-bold text-primary-dark mb-4">Central de Estágios</h3>
                    <p className="text-slate-600 leading-relaxed font-medium mb-8">Oferecemos oportunidades de estágio supervisionado nas áreas de Serviço Social, Psicologia, Administração e Pedagogia. Nossos estagiários têm experiência prática no atendimento a pessoas em situação de vulnerabilidade social.</p>
                    <div className="mt-8 space-y-4">
                      <p className="text-slate-600 font-bold text-base">Envie seu currículo e manifeste interesse:</p>
                      <a 
                        href="/contato" 
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-black px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
                      >
                        Candidatar-me a estágio
                      </a>
                    </div>
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
                <div className="mt-8">
                  <a 
                    href="/contato" 
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-black px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
                  >
                    Agendar visita
                  </a>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Inline icon helper (no lucide equivalent for "sparkles/cleaning")
const SparklesIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.29 1.29L3 12l5.8 1.9a2 2 0 0 1 1.29 1.29L12 21l1.9-5.8a2 2 0 0 1-1.29-1.29L21 12l-5.8-1.9a2 2 0 0 1-1.29-1.29L12 3Z"/>
  </svg>
);

