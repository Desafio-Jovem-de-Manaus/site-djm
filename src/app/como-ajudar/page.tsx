import { 
  PlayCircle, HeartHandshake, PackageOpen, Droplet, 
  Shirt, MapPin, HandCoins, Heart, Briefcase, ChevronRight, Handshake,
  Landmark, Package, HandHeart, GraduationCap, Clock
} from "lucide-react";
import PageSidebar from "@/components/PageSidebar";

export default function ComoAjudarPage() {
  const sidebarItems = [
    { label: "Doações materiais", anchor: "doacoes-materiais", icon: <Package className="w-5 h-5" /> },
    { label: "Doação financeira", anchor: "doacao-financeira", icon: <Heart className="w-5 h-5" /> },
    { label: "Voluntariado", anchor: "voluntariado", icon: <HandHeart className="w-5 h-5" /> },
    { label: "Estágios", anchor: "estagios", icon: <GraduationCap className="w-5 h-5" /> },
    { label: "Doe seu tempo", anchor: "doe-seu-tempo", icon: <Clock className="w-5 h-5" /> },
    { label: "Parcerias empresariais", anchor: "parcerias-empresariais", icon: <Handshake className="w-5 h-5" /> },
  ];

  const doacoes = [
    { icon: PackageOpen, color: "text-amber-600 bg-amber-100", title: "Cesta Básica Restrita", desc: "Arroz, feijão, açúcar, óleo, macarrão, leite pesado, etc." },
    { icon: Droplet, color: "text-rose-600 bg-rose-100", title: "Carga Proteica Fria", desc: "Frangos, bandejas de ovos, linguiças, enlatados cárneos." },
    { icon: HeartPulseIcon, color: "text-primary bg-teal-100", title: "Higiene Pessoal Intima", desc: "Sabonetes fechados, creme dental, prestobarbas e desodorante." },
    { icon: SparklesIcon, color: "text-blue-600 bg-blue-100", title: "Armas de Limpeza Escolar", desc: "Galões de água sanitária, desinfetante concentrado, sabão." },
    { icon: Shirt, color: "text-indigo-600 bg-indigo-100", title: "Roupa Masculina Ligeira", desc: "Camisas, calças e bermudas (Usadas porém)." },
    { icon: BedSingleIcon, color: "text-purple-600 bg-purple-100", title: "Guarita (Cama e Banho)", desc: "Lençóis de colchão, fronhas padrão, toalhas inteiras, mantas." },
    { icon: ShoePrintsIcon, color: "text-slate-600 bg-slate-200", title: "Calçados Robustos", desc: "Tênis, botas e sandálias focados em tamanho masculino." },
  ];

  const voluntariado = [
    "Psicologia Clínica", "Perícia", "Educação Integrada", "Saúde Contínua",
    "Gestão Financeira & RH", "Arquitetura e Informática", "Manutenção Física",
    "Cozinha Industrial (Culinária)", "Barbearia de Asilo", "Arte & Olaria", "Música Aplicada", "Educador Físico"
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-slate-50">

      {/* Hero */}
      <section className="relative h-[65vh] flex items-center justify-center bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary-dark">
           <div className="w-full h-full flex items-center justify-center bg-teal-950/80">
              <PlayCircle className="w-20 h-20 text-white/20 hover:text-white/40 cursor-pointer transition-colors" />
              <span className="text-white/30 ml-4 font-bold tracking-widest uppercase hidden md:inline-block">[ Vídeo das Duras Necessidades Internas ]</span>
           </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/95 via-teal-900/80 to-transparent z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 backdrop-blur-md border border-white/20">
            <HeartHandshake className="w-10 h-10 text-teal-300" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md">Como Ajudar</h1>
          <p className="text-2xl text-teal-100 font-medium drop-shadow">Existem centenas de formas silenciosas de fazer a verdadeira diferença hoje.</p>
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
                  <h2 className="text-4xl font-bold text-primary-dark mb-6">Insumos Físicos Urgentes</h2>
                  <p className="text-lg text-slate-600 font-medium">Os motores do asilo funcionam impiedosamente <strong>24 horas por dia</strong>. Com dezenas de bocas ativas diariamente nos serviços totais de lavagem e acolhimento, queimamos estoques. Precisamos desesperadamente de reposição semanal em:</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                  {doacoes.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="bg-slate-50 border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all group">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mr-auto ${item.color}`}>
                          <Icon className="w-7 h-7" />
                        </div>
                        <h4 className="font-bold text-primary-dark text-lg mb-2 leading-tight">{item.title}</h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
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
                       <p className="text-highlight font-bold uppercase tracking-widest text-xs mb-1">Centro Físico de Entrega Solidária</p>
                       <p className="text-xl md:text-2xl font-bold mb-1">Rua Fragata, 100 — Petrópolis</p>
                       <p className="text-slate-400 font-medium">Manaus/AM — Atendimento p/ Recebimento: <span className="text-white">Seg. a Sex. das 09h às 17h</span></p>
                     </div>
                   </div>
                   <button className="whitespace-nowrap bg-blue-500 hover:bg-teal-400 text-primary-dark font-bold px-8 py-4 rounded-xl transition-colors relative z-10 hidden md:block">
                     Traçar Rota via Maps
                   </button>
                </div>
              </section>

              {/* Doação Financeira (PIX e Bancos) */}
              <section id="doacao-financeira" className="bg-blue-50 p-8 md:p-10 rounded-3xl shadow-sm border border-teal-100">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  
                  <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-primary-dark mb-6 flex items-center">
                      <HandCoins className="w-10 h-10 text-primary mr-4 flex-shrink-0" /> Apadrinhamento Financeiro
                    </h2>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed">Milhares de pratos de comida nascem aqui. Sua contribuição mensal isolada é o que freia a escassez e destrava vagas para tirar mais corpos vulneráveis das marquises de Manaus.</p>
                    
                    <div className="bg-yellow-100 border border-yellow-200 text-yellow-800 px-5 py-4 rounded-xl flex items-start font-medium mt-8 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0 animate-pulse"></span>
                      Em breve abriremos a gigantesca Máquina de Recorrência (Cartão de Crédito) para doadores fiéis!
                    </div>
                  </div>

                  <div className="grid md:grid-cols-1 gap-6 relative">
                     <div className="bg-white p-8 rounded-3xl shadow-xl border-t-4 border-emerald-500 group hover:-translate-y-2 transition-transform cursor-pointer">
                       <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center mb-6">
                         <Landmark className="w-6 h-6" />
                       </div>
                       <h4 className="font-bold text-primary-dark text-lg mb-2">Transferência (TED)</h4>
                       <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-slate-400 text-center font-medium mt-4">
                         [ Dados Bancários Estritamente Auditados em processamento ]
                       </div>
                     </div>

                     <div className="bg-white p-8 rounded-3xl shadow-xl border-t-4 border-teal-600 group hover:-translate-y-2 transition-transform cursor-pointer">
                       <div className="w-12 h-12 bg-teal-100 text-primary rounded-full flex items-center justify-center mb-6">
                         <Heart className="w-6 h-6" />
                       </div>
                       <h4 className="font-bold text-primary-dark text-lg mb-2">Chave PIX Oficial</h4>
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
                    <h2 className="text-4xl font-bold text-white leading-tight">Nosso Exército:<br/><span className="text-highlight">Torne-se Voluntário.</span></h2>
                    <p className="text-lg text-slate-300 font-medium leading-relaxed">A espinha dorsal das nossas glórias diárias não é o dinheiro, é a carne. O suor voluntário movimenta gigantescas massas humanas lá dentro.</p>
                    
                    <div className="bg-primary-dark border border-slate-700 rounded-3xl p-6 shadow-inner">
                      <p className="font-bold text-sm text-slate-400 uppercase tracking-widest mb-4">Esquadrões Com Cadeira Vazia:</p>
                      <div className="flex flex-wrap gap-2">
                        {voluntariado.map((vol, i) => (
                          <span key={i} className="bg-primary-dark border border-slate-700 text-teal-100 text-xs px-3 py-1.5 rounded-md cursor-default">{vol}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <form className="bg-white rounded-3xl p-8 shadow-2xl relative text-primary-dark">
                    <p className="absolute -top-4 right-10 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg uppercase tracking-wide">Integração RH</p>
                    
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
                        <label className="block text-sm font-bold text-slate-700 mb-2">Batalhão de Interesse</label>
                        <select disabled className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none opacity-60 cursor-not-allowed appearance-none">
                          <option>Selecione uma especialidade...</option>
                        </select>
                      </div>
                    </div>
                    
                    <button disabled className="w-full bg-primary-dark text-white font-bold py-4 rounded-xl mt-4 opacity-50 cursor-not-allowed flex items-center justify-center uppercase tracking-widest text-sm transition-all hover:bg-slate-700">
                      Cadastrar Disponibilidade na Tropa <ChevronRight className="w-5 h-5 ml-2" />
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
                    <p className="text-slate-600 leading-relaxed font-medium mb-8">Forjamos estagiários brutalmente experimentados no caos da rua no tocante às áreas de Serviço Social, Psicologia Fina, Administração, Direito e Pedagogia.</p>
                    <div className="bg-blue-50 border border-blue-100 text-blue-800 px-4 py-3 rounded-lg text-sm font-bold shadow-sm mb-8 inline-block">
                      A instituição mantém supervisão contínua 100% amparada pelas assinaturas técnicas do <strong>CRESS e CRP</strong> estaduais.
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-slate-400 tracking-widest mb-2">Envie seu Currículo em PDF:</p>
                    <a href="mailto:desafiojovemmanaus@gmail.com" className="text-lg font-black text-blue-600 hover:text-blue-800 transition-colors break-words">desafiojovemmanaus@gmail.com</a>
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
                    <p className="text-teal-50 leading-relaxed font-medium mb-6">Muitos empresários limpam seu passivo social atrelando a engrenagem de suas corporações à base do Desafio. Podem destinar repasses (como pães diários) ou doações pesadas.</p>
                    
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 mb-8">
                      <h4 className="font-bold text-yellow-300 mb-2 uppercase tracking-wider text-xs flex items-center">Tribunal do Estado do Amazonas</h4>
                      <p className="text-sm font-medium hover:text-white transition-colors">Chancela da absorção e destinação de sentenças de <strong>Penas Pecuniárias na VEMEPA</strong> à causa.</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <p className="text-xs uppercase font-bold text-teal-300 tracking-widest mb-3">Linha Direta P/ Lojistas Parceiros:</p>
                    <button className="w-full bg-white text-primary font-black px-6 py-4 rounded-xl hover:bg-slate-100 transition-colors shadow-lg">
                      Agendar Call Institucional
                    </button>
                  </div>
                </section>
              </div>

              {/* Doe Seu Tempo / Visitas Institucionais */}
              <section id="doe-seu-tempo" className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200 text-center py-20 flex flex-col items-center justify-center">
                <Clock className="w-16 h-16 text-slate-200 mb-4" />
                <h2 className="text-3xl font-bold text-primary-dark mb-4">Doe Seu Tempo de Conversa</h2>
                <p className="text-lg text-slate-500 mb-8 max-w-2xl font-medium">As visitas programadas da sociedade têm um peso emocional fortíssimo no fortalecimento espiritual dos nossos acolhidos e internados diários. Marque uma data e traga o abraço e a atenção de um amigo!</p>
                <div className="px-6 py-4 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 font-bold uppercase tracking-widest text-sm">
                  [ Placeholder: Inserir Orientações sobre Visitas, Horários e Restrições ]
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
const HeartPulseIcon = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>);
const SparklesIcon = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.9 5.8a2 2 0 0 1-1.29 1.29L3 12l5.8 1.9a2 2 0 0 1 1.29 1.29L12 21l1.9-5.8a2 2 0 0 1-1.29-1.29L21 12l-5.8-1.9a2 2 0 0 1-1.29-1.29L12 3Z"/></svg>);
const BedSingleIcon = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"/><path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"/><path d="M3 18h18"/></svg>);
const ShoePrintsIcon = (props: any) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 12c4 1 5 1 5 1h6s0 .5 2 .5c3 0 5-1 4-5S15 4 10 4s-4 4-4 4-1 2-4 4z"/><path d="m2 20 4.19-2.52M22 20l-4.19-2.52"/></svg>);
