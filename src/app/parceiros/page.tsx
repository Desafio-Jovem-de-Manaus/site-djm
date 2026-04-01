import { Building2, Landmark, Briefcase, HandHeart, Image as ImageIcon } from "lucide-react";
import PageSidebar from "@/components/PageSidebar";

export default function ParceirosPage() {
  const sidebarItems = [
    { label: "Parceiros governamentais", anchor: "parceiros-governamentais", icon: <Landmark className="w-5 h-5" /> },
    { label: "Parceiros empresariais", anchor: "parceiros-empresariais", icon: <Briefcase className="w-5 h-5" /> },
    { label: "Parceiros institucionais", anchor: "parceiros-institucionais", icon: <Building2 className="w-5 h-5" /> },
  ];

  const governamentais = [
    { title: "DEPAD", desc: "Órgão parceiro de atuação Federal." },
    { title: "MDS", desc: "Órgão parceiro de atuação Federal." },
    { title: "SEAS", desc: "Responsável master pelos Termos de Fomento e amparo orçamentário do Abrigo." },
    { title: "FPS", desc: "Órgão parceiro de atuação Estadual (Amazonas)." },
    { title: "SEJUSC", desc: "Órgão parceiro de atuação Estadual (Amazonas)." },
    { title: "SEAP", desc: "Suporte na regularização criminal e judicial dos encarcerados abrigados em triagem civil progressiva." },
    { title: "ADS", desc: "Órgão parceiro de atuação Estadual (Amazonas)." },
    { title: "SEPROR", desc: "Apoio produtivo que provê recursos para todos os braços de atuação vigentes." },
    { title: "SEMASC", desc: "Órgão parceiro de atuação Municipal (Manaus)." },
    { title: "SEMSA", desc: "Retaguarda gigante em Atendimento macro de saúde nas vias clínicas no polo físico raiz." },
    { title: "SEMJEL", desc: "Órgão parceiro de atuação Municipal (Manaus)." },
    { title: "FMS", desc: "Órgão parceiro de atuação Municipal (Manaus)." },
    { title: "CEAS", desc: "Conselho Estadual parceiro." },
    { title: "CONEN", desc: "Conselho Estadual parceiro." },
    { title: "CIAMP", desc: "Comitê Municipal parceiro." },
    { title: "COMAD", desc: "Conselho Municipal parceiro." },
    { title: "CMAS", desc: "Conselho Municipal parceiro." },
    { title: "VEMEPA", desc: "Repassador implacável das penas legais pecuniárias convertidas e doações prestacionais da Vara Comum." },
  ];

  const empresariais = [
    { title: "Bodega do Pão", desc: "Fábrica e doação limpa diuturna de pães fresquinhos assados para alimentar os famintos de rua." },
    { title: "Casa Queiroz Refrigeração", desc: "Parceiro do setor empresarial." },
    { title: "Virrosas", desc: "Parceiro do setor empresarial." },
    { title: "Mikito's", desc: "A indústria implaca doações e entregas massivas recorrentes e fixas enchendo as cestas básicas cruas." },
  ];

  const institucionais = [
    { title: "Sesc Mesa Brasil", desc: "Parceria titânica presente em absolutamente todos os pátios alimentícios da filial." },
    { title: "Rede Acolher", desc: "Parceiro do setor institucional." },
    { title: "SOMAP", desc: "Estrutura doou espaço de quadra fechada climatizada inteira pra suor corporativo esportivo." },
    { title: "Sociedade Bíblica do Brasil SBB", desc: "Imprimidora e enviadora implacável das literaturas teológicas e papel impresso nas ruas." },
    { title: "Global Teen Challenge", desc: "A cabeça matriz central Norte-Americana detentora da tecnologia espiritual global empregada e filiada." },
    { title: "Desafio Jovem do Brasil", desc: "Parceiro do setor institucional." },
    { title: "Rede Recomeçar", desc: "Parceiro do setor institucional." },
  ];

  // Renderizador genérico de listagem de parceiros
  const ParceiroCard = ({ title, desc }: { title: string, desc: string }) => (
    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center md:items-start group hover:-translate-y-1 hover:shadow-xl hover:bg-white hover:border-primary/50 transition-all cursor-crosshair">
       <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 mr-5 group-hover:bg-slate-50 transition-colors shadow-inner overflow-hidden relative">
         <ImageIcon className="w-8 h-8 text-slate-300 absolute" />
         <span className="text-[9px] font-black uppercase text-slate-400 opacity-60 z-10 text-center tracking-widest leading-none p-1">[ Logo ]</span>
       </div>
       <div className="flex-1">
         <h4 className="font-bold text-primary-dark text-lg md:text-xl tracking-tight mb-2 group-hover:text-primary transition-colors leading-tight">{title}</h4>
         <p className="text-slate-500 font-medium text-xs md:text-sm leading-relaxed">{desc}</p>
       </div>
    </div>
  );

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
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">Nossos Parceiros</h1>
          <p className="text-2xl text-yellow-100 font-medium max-w-4xl mx-auto leading-relaxed">
            As colunas de concreto estatais, empresários anônimos e igrejas incansáveis: Descubra e contemple que <strong className="text-yellow-400">Juntos nós somos Imbatíveis</strong>.
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
                  <p className="text-lg text-slate-500 font-medium max-w-3xl">A infinita base estrutural macro que regula as Secretarias vitais para o acolhimento burocrático e ampara legalmente nossas ações nas ruas.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                   {governamentais.map((item, idx) => (
                     <ParceiroCard key={`gov-${idx}`} title={item.title} desc={item.desc} />
                   ))}
                </div>
              </section>

              {/* Parceiros Empresariais */}
              <section id="parceiros-empresariais" className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 scroll-mt-32">
                <div className="mb-10">
                  <h2 className="text-3xl font-black text-primary-dark tracking-tight flex items-center mb-4 border-b-2 border-slate-100 pb-4">
                    <Briefcase className="w-8 h-8 text-primary mr-4" /> Parceiros Empresariais
                  </h2>
                  <p className="text-lg text-slate-500 font-medium max-w-3xl">Os colossos donos de indústrias e engrenagens do comércio alimentício que não fecham os olhos para o lado invisível da sociedade e investem pesado em doações materiais e logísticas.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                   {empresariais.map((item, idx) => (
                     <ParceiroCard key={`emp-${idx}`} title={item.title} desc={item.desc} />
                   ))}
                </div>
              </section>

              {/* Parceiros Institucionais */}
              <section id="parceiros-institucionais" className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 scroll-mt-32">
                <div className="mb-10">
                  <h2 className="text-3xl font-black text-primary-dark tracking-tight flex items-center mb-4 border-b-2 border-slate-100 pb-4">
                    <Building2 className="w-8 h-8 text-purple-700 mr-4" /> Parceiros Institucionais & Sociedade Civil
                  </h2>
                  <p className="text-lg text-slate-500 font-medium max-w-3xl">Desde fundações legislativas a conselhos religiosos gigantescos, a rede de apoio que alicerça o fortalecimento moral, jurídico e teológico das vidas resgatadas.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                   {institucionais.map((item, idx) => (
                     <ParceiroCard key={`inst-${idx}`} title={item.title} desc={item.desc} />
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
