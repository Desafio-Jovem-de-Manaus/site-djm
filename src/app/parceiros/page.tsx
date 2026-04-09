import { Building2, Landmark, Briefcase, HandHeart, Image as ImageIcon } from "lucide-react";
import PageSidebar from "@/components/PageSidebar";

export default function ParceirosPage() {
  const sidebarItems = [
    { label: "Parceiros governamentais", anchor: "parceiros-governamentais", icon: <Landmark className="w-5 h-5" /> },
    { label: "Parceiros empresariais", anchor: "parceiros-empresariais", icon: <Briefcase className="w-5 h-5" /> },
    { label: "Parceiros institucionais", anchor: "parceiros-institucionais", icon: <Building2 className="w-5 h-5" /> },
  ];

  const governamentais = [
    { title: "DEPAD", subtitle: "Departamento de Entidades de Apoio e Acolhimento Atuantes em Álcool e Drogas", image: "/Parceiros-Logo-Governamentais-Brasil.png" },
    { title: "MDS", subtitle: "Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome", image: "/Parceiros-Logo-Governamentais-Brasil.png" },
    { title: "SEAS", subtitle: "Secretaria de Estado de Assistência Social e Combate à Fome", image: "/Parceiros-Logo-Governamentais-Amazonas.png" },
    { title: "FPS", subtitle: "Fundo de Promoção Social e Erradicação da Pobreza", image: "/Parceiros-Logo-Governamentais-Amazonas.png" },
    { title: "SEJUSC", subtitle: "Secretaria de Estado de Justiça, Direitos Humanos e Cidadania", image: "/Parceiros-Logo-Governamentais-Amazonas.png" },
    { title: "SEAP", subtitle: "Secretaria de Estado de Administração Penitenciária", image: "/Parceiros-Logo-Governamentais-Amazonas.png" },
    { title: "ADS", subtitle: "Agência de Desenvolvimento Sustentável do Amazonas", image: "/Parceiros-Logo-Governamentais-Amazonas.png" },
    { title: "SEPROR", subtitle: "Secretaria de Estado de Produção Rural", image: "/Parceiros-Logo-Governamentais-Amazonas.png" },
    { title: "SEMASC", subtitle: "Secretaria Municipal da Mulher, Assistência Social e Cidadania", image: "/Parceiros-Logo-Governamentais-Manaus.png" },
    { title: "SEMSA", subtitle: "Secretaria Municipal de Saúde", image: "/Parceiros-Logo-Governamentais-Manaus.png" },
    { title: "SEMJEL", subtitle: "Secretaria Municipal de Juventude, Esporte e Lazer", image: "/Parceiros-Logo-Governamentais-Manaus.png" },
    { title: "FMS", subtitle: "Fundo Manaus Solidária", image: "/Parceiros-Logo-Governamentais-Manaus.png" },
    { title: "CEAS", subtitle: "Conselho Estadual de Assistência Social", image: "/Parceiros-Logo-Conselho-CEAS.png" },
    { title: "CIAMP", subtitle: "Comitê Intersetorial de Acompanhamento e Monitoramento da Política Municipal para a População em Situação de Rua", image: "/Parceiros-Logo-Governamentais-Manaus.png" },
    { title: "COMAD", subtitle: "Conselho Municipal de Políticas sobre Drogas", image: "/Parceiros-Logo-Conselho-COMAD.png" },
    { title: "CMAS", subtitle: "Conselho Municipal de Assistência Social", image: "/Parceiros-Logo-Governamentais-Manaus.png" },
    { title: "VEMEPA", subtitle: "Vara de Execuções de Medidas e Penas Alternativas", image: "/Parceiros-Logo-Governamentais-TJAM.png" },
  ];

  const empresariais = [
    { title: "Bodega do Pão", desc: "Parceiro na doação de gêneros alimentícios.", url: "https://bodegadopao.com.br/", image: "/Parceiros-Logo-Empresariais-Bodega-do-Pao.png" },
    { title: "Casa Queiroz Refrigeração", desc: "Parceiro na prestação de serviços.", url: "https://www.casaqueiroz.com.br/", image: "/Parceiros-Logo-Empresariais-Casa-Queiroz.png" },
    { title: "Virrosas", desc: "Parceiro na doação de gêneros alimentícios.", url: "https://virrosas.com.br/", image: "/Parceiros-Logo-Empresariais-Virrosas.png" },
    { title: "Mikito's", desc: "Parceiro na doação de gêneros alimentícios.", url: "https://api.mikitos.com.br/", image: "/Parceiros-Logo-Empresariais-Mikitos.png" },
  ];

  const institucionais = [
    { title: "Sesc Mesa Brasil", desc: "Doação de gêneros alimentícios.", image: "/Parceiros-Logo-Institucional-Mesa-Brasil.png" },
    { title: "Rede Acolher", desc: "Representação institucional e apoio nas ações e projetos.", image: "/Parceiros-Logo-Institucional-Rede-Acolher.png" },
    { title: "SOMAP", desc: "Cessão do espaço institucional para realização de projetos.", image: "/Parceiros-Logo-Institucional-Somap.jpg" },
    { title: "Sociedade Bíblica do Brasil SBB", desc: "Doação de literaturas.", image: "/Parceiros-Logo-Institucional-SBB.png", url: "https://www.sbb.com.br/" },
    { title: "Global Teen Challenge", desc: "Representação institucional, treinamentos e apoio nos projetos.", image: "/Parceiros-Logo-Institucional-Global-Teen-Challenge.png", url: "https://globaltc.org/" },
    { title: "Desafio Jovem do Brasil", desc: "Representação institucional, treinamentos e apoio nos projetos.", image: "/Parceiros-Logo-Institucional-Desafio-Jovem-do-Brasil.png", url: "https://desafiojovemdobrasil.org.br/" },
    { title: "Rede Recomeçar", desc: "Representação institucional e apoio nas ações e projetos.", image: "/Parceiros-Logo-Rede-Institucional-Recomecar-Amazonas1.png" },
  ];

  // Renderizador genérico de listagem de parceiros
  const ParceiroCard = ({ title, desc, subtitle, image, url }: { title: string, desc?: string, subtitle?: string, image?: string, url?: string }) => {
    const Content = (
      <div className={`bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center md:items-start group hover:-translate-y-1 hover:shadow-xl hover:bg-white hover:border-primary/50 transition-all h-full ${url ? 'cursor-pointer' : 'cursor-crosshair'}`}>
       <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 mr-5 group-hover:bg-slate-50 transition-colors shadow-inner overflow-hidden relative">
         {image ? (
           <img src={image} alt={title} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
         ) : (
           <>
             <ImageIcon className="w-8 h-8 text-slate-300 absolute" />
             <span className="text-[9px] font-black uppercase text-slate-400 opacity-60 z-10 text-center tracking-widest leading-none p-1">[ Logo ]</span>
           </>
         )}
       </div>
       <div className="flex-1">
         <h4 className="font-bold text-primary-dark text-lg md:text-xl tracking-tight mb-1 group-hover:text-primary transition-colors leading-tight">{title}</h4>
         {subtitle && <div className="text-sm text-gray-500 mb-2 leading-tight">{subtitle}</div>}
         {desc && <p className="text-slate-500 font-medium text-xs md:text-sm leading-relaxed">{desc}</p>}
       </div>
      </div>
    );
    
    return url ? (
      <a href={url} target="_blank" rel="noopener noreferrer" className="block outline-none h-full" title={`Acessar site de ${title}`}>
        {Content}
      </a>
    ) : Content;
  };

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-slate-50">
      
      {/* Hero */}
      <section className="bg-primary-dark border-b-8 border-yellow-500 py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary-dark pointer-events-none">
           <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
             <HandHeart className="w-[500px] h-[500px]" />
           </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">Nenhuma transformação acontece sozinha.</h1>
          <p className="text-2xl text-yellow-100 font-medium max-w-4xl mx-auto leading-relaxed">
            O trabalho do Desafio Jovem de Manaus é ampliado por uma rede de parceiros governamentais, empresariais e institucionais que acreditam que toda vida merece uma segunda chance. Conheça quem torna isso possível.
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

              {/* Perceiros Governamentais */}
              <section id="parceiros-governamentais" className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 scroll-mt-32">
                <div className="mb-10">
                  <h2 className="text-3xl font-black text-primary-dark tracking-tight flex items-center mb-4 border-b-2 border-slate-100 pb-4">
                    <Landmark className="w-8 h-8 text-blue-700 mr-4" /> Parceiros Governamentais
                  </h2>
                  <p className="text-lg text-slate-500 font-medium max-w-3xl">Onde o poder público precisa chegar e nem sempre consegue, o DJM está — reconhecido pelo Estado como parceiro estratégico na execução de serviços essenciais. Por meio de parcerias e termos de fomento, investem na nossa atuação como extensão das políticas públicas do Amazonas.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                   {governamentais.map((item, idx) => (
                     <ParceiroCard key={`gov-${idx}`} title={item.title} subtitle={item.subtitle} image={item.image} />
                   ))}
                </div>
              </section>

              {/* Parceiros Empresariais */}
              <section id="parceiros-empresariais" className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 scroll-mt-32">
                <div className="mb-10">
                  <h2 className="text-3xl font-black text-primary-dark tracking-tight flex items-center mb-4 border-b-2 border-slate-100 pb-4">
                    <Briefcase className="w-8 h-8 text-primary mr-4" /> Parceiros Empresariais
                  </h2>
                  <p className="text-lg text-slate-500 font-medium max-w-3xl">São empresas que enxergam na parceria com o DJM uma forma direta de impactar a comunidade. Suas doações de alimentos, insumos e suporte operacional são parte essencial do funcionamento diário da organização.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                   {empresariais.map((item, idx) => (
                     <ParceiroCard key={`emp-${idx}`} title={item.title} desc={item.desc} image={item.image} url={item.url} />
                   ))}
                </div>
              </section>

              {/* Parceiros Institucionais */}
              <section id="parceiros-institucionais" className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 scroll-mt-32">
                <div className="mb-10">
                  <h2 className="text-3xl font-black text-primary-dark tracking-tight flex items-center mb-4 border-b-2 border-slate-100 pb-4">
                    <Building2 className="w-8 h-8 text-purple-700 mr-4" /> Parceiros Institucionais & Sociedade Civil
                  </h2>
                  <p className="text-lg text-slate-500 font-medium max-w-3xl">Da sociedade civil ao terceiro setor, nossos parceiros institucionais representam a diversidade de quem acredita que é possível mudar realidades. Juntos, formamos uma rede que vai muito além de uma única organização.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                   {institucionais.map((item, idx) => (
                     <ParceiroCard key={`inst-${idx}`} title={item.title} desc={item.desc} image={item.image} url={item.url} />
                   ))}
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
