import MissaoVisaoValores from "@/components/MissaoVisaoValores";
import RecognitionsSection from "@/components/RecognitionsSection";
import PageSidebar from "@/components/PageSidebar";
import StructureCarousel from "@/components/StructureCarousel";
import { PlayCircle, MapPin, Bed, Users, Laptop, Car, Utensils, Award, BookOpen, History, Crown, Building, FileText, Shield, ImageIcon, Handshake } from "lucide-react";
import PartnersCarousel from "@/components/PartnersCarousel";

export default function QuemSomosPage() {
  const sidebarItems = [
    { label: "Histórico", anchor: "historico", icon: <History className="w-5 h-5" /> },
    { label: "Missão e Valores", anchor: "missao", icon: <Shield className="w-5 h-5" /> },
    { label: "Diretoria", anchor: "diretoria", icon: <Crown className="w-5 h-5" /> },
    { label: "Equipe", anchor: "equipe", icon: <Users className="w-5 h-5" /> },
    { label: "Estrutura física", anchor: "estrutura", icon: <Building className="w-5 h-5" /> },
    { label: "Parceiros", anchor: "parceiros", icon: <Handshake className="w-5 h-5" /> },
    { label: "Prêmios e reconhecimento", anchor: "premios", icon: <Award className="w-5 h-5" /> },
    { label: "Utilidade pública", anchor: "utilidade-publica", icon: <Shield className="w-5 h-5" /> },
  ];

  const timeline = [
    { year: "1981", title: "Fundação", text: "Nascimento do Desafio Jovem em Manaus." },
    { year: "1985", title: "Início CT", text: "Utilidade Pública Municipal e início da Comunidade." },
    { year: "1987", title: "Sede Própria", text: "Construção com apoio SUFRAMA e Prefeitura." },
    { year: "1991", title: "Reconhecimento", text: "Utilidade Pública Estadual alcançada." },
    { year: "2004", title: "Ass. Social", text: "Inscrito no Conselho Municipal de Assistência." },
    { year: "2012", title: "30 Anos", text: "Grande Homenagem concedida pela CMM." },
    { year: "2015", title: "Braços Abertos", text: "Nasce o Serviço de Abordagem Social." },
    { year: "2018", title: "Acolher p/ Viver", text: "Início do formato de Abrigo Institucional." },
    { year: "2023", title: "ALEAM", text: "Honraria por serviços prestados ao Amazonas." },
    { year: "2024", title: "10 Anos Braços Abertos", text: "Comemoração dos 10 anos do Projeto Braços Abertos." },
  ];

  const diretoria = [
    { name: "Francisco Carlos da Silva Salgado", role: "Presidente", course: "Teologia" },
    { name: "Rosiane Silva de Menezes", role: "Vice-presidente", course: "Serviço Social" },
    { name: "Danielle Nascimento dos Santos", role: "1ª Tesoureira", course: "Psicologia" },
    { name: "Adenauer de Oliveira Queiroz", role: "2º Tesoureiro", course: "Direito" },
    { name: "Priscilla Leão Rabelo", role: "1ª Secretária", course: "Publicidade" },
    { name: "Francisco Eraldo da Silva", role: "2º Secretário", course: "Mecânica" },
  ];

  const equipe = [
    "Diretora Executiva (Psicóloga)",
    "Coordenador Geral / Gerente Assistencial (Administrador)",
    "Administrador",
    "2 Assistentes Sociais",
    "2 Psicólogos",
    "Coordenadora de Abordagem Social (Asst. Social)",
    "4 Educadores Sociais",
    "2 Abordadores Sociais",
    "Pedagoga / Supervisora",
    "Auxiliares Administrativos",
    "Oficineiros",
    "Coordenador Logístico",
    "Auxiliar de Cozinha"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-20">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-primary-dark">
          <ImageIcon className="w-16 h-16 text-white/20" />
          <span className="text-white/40 font-bold ml-4 uppercase tracking-widest">[ Imagem da Fachada / Grupo ]</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md">Quem Somos</h1>
          <p className="text-2xl text-teal-100 font-medium drop-shadow">Mais de 44 anos transformando vidas no Amazonas</p>
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
              
              {/* Histórico */}
              <section id="historico" className="scroll-mt-[100px] bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
                <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
                  <div>
                    <h2 className="text-4xl font-bold text-primary-dark mb-6 relative inline-block">
                      Nossa História
                      <span className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-primary rounded-full"></span>
                    </h2>
                    <div className="space-y-4 text-slate-600 leading-relaxed font-medium">
                      <p>O Desafio Jovem de Manaus é uma Organização da Sociedade Civil fundada em 21 de dezembro de 1981. Nasceu a partir do interesse de uma jovem que se sensibilizou com a dor dos usuários de drogas e suas famílias, e compartilhou com os líderes de sua comunidade cristã a necessidade de um serviço que atendesse jovens em situação de vulnerabilidade no Amazonas.</p>
                      <p>Faz parte da rede internacional Global Teen Challenge, fundada em 1958 na cidade de Nova York pelo Pr. David Wilkerson, junto a jovens membros de gangues no Brooklyn. No Brasil, o modelo foi implantado em 1973, na cidade de Brasília.</p>
                      <p>Inicialmente como Comunidade Terapêutica por 34 anos ininterruptos, a instituição ampliou progressivamente suas ações: em 2015 iniciou o Serviço de Abordagem Social &apos;Braços Abertos&apos;; em 2018 passou a ofertar Acolhimento Institucional na modalidade Abrigo; e desenvolve o projeto Comunidade Eficiente voltado ao fortalecimento de vínculos com famílias do entorno.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-12">
                    <div className="relative group">
                      <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 shadow-lg border border-slate-200">
                        <img 
                          src="/historico-foto-contrucao-josani-e-joao.jpeg" 
                          alt="Josani e João na construção" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <p className="mt-4 text-sm text-slate-500 italic text-center font-medium leading-relaxed">
                        "Josani e João, fundadores do Desafio Jovem de Manaus, durante a construção da sede."
                      </p>
                    </div>

                    <div className="relative group">
                      <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 shadow-lg border border-slate-200">
                        <img 
                          src="/historico-foto-doação-josani-e-joao.jpeg" 
                          alt="João e Josani recebendo doação" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <p className="mt-4 text-sm text-slate-500 italic text-center font-medium leading-relaxed">
                        "João e Josani recebendo uma doação em 2025."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Horizontal */}
                <h3 className="text-xl font-bold text-primary-dark mb-6">Linha do Tempo Oficial</h3>
                <div className="w-full overflow-x-auto pb-4 hide-scrollbar">
                  <div className="flex space-x-6 min-w-max">
                    {timeline.map((point, index) => (
                      <div key={index} className="w-48 relative bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <div className="text-primary font-black text-2xl mb-2">{point.year}</div>
                        <h4 className="font-bold text-primary-dark mb-1 leading-snug">{point.title}</h4>
                        <p className="text-xs text-slate-500 font-medium">{point.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Missão e Valores */}
              <section id="missao" className="scroll-mt-[100px] overflow-hidden bg-white rounded-3xl border border-slate-200">
                <MissaoVisaoValores />
                <div className="bg-slate-50 pb-10 pt-4 text-center px-8">
                  <p className="max-w-3xl mx-auto text-sm md:text-base font-bold text-slate-600 uppercase tracking-widest border border-slate-200 py-4 px-6 rounded-xl bg-white shadow-sm">
                    <strong>Finalidade Estatutária:</strong> Promover educação, capacitação, assistência social, saúde física e psicológica, acolhimento, prevenção e recuperação.
                  </p>
                </div>
              </section>

              {/* Diretoria */}
              <section id="diretoria" className="scroll-mt-[100px]">
                <h2 className="text-3xl font-bold text-primary-dark mb-3 border-l-4 border-primary pl-4">Membros da Diretoria</h2>
                <p className="text-slate-500 mb-8 font-medium">Todos os membros colegiados atuam de forma voluntária em prol da causa social.</p>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {diretoria.map((dir, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col hover:-translate-y-1 transition-transform">
                       <h4 className="text-lg font-bold text-primary-dark mb-1 leading-tight">{dir.name}</h4>
                       <p className="text-primary font-bold text-sm mb-4 uppercase tracking-wider">{dir.role}</p>
                       <div className="mt-auto flex items-center text-slate-500 text-sm font-medium bg-slate-50 p-2 rounded-lg w-fit">
                         <BookOpen className="w-4 h-4 mr-2" />
                         {dir.course}
                       </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Equipe Multiprofissional */}
              <section id="equipe" className="scroll-mt-[100px] bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
                <h2 className="text-3xl font-bold text-primary-dark mb-3 border-l-4 border-primary pl-4">Nossa Equipe Técnica</h2>
                <p className="text-slate-600 mb-10 max-w-3xl leading-relaxed font-medium">
                  A organização conta com mais de 23 profissionais fixos em sua base. A equipe técnica matriz central é composta por 3 psicólogos, 3 assistentes sociais e 1 pedagoga, todos com experiência diária no Terceiro Setor.
                </p>

                <div className="flex flex-wrap gap-3">
                  {equipe.map((cargo, i) => (
                    <div key={i} className="bg-slate-50/50 border border-slate-200 text-slate-700 px-5 py-3 rounded-xl font-bold text-sm hover:border-primary/50 hover:bg-blue-50 hover:text-primary transition-colors cursor-default">
                      {cargo}
                    </div>
                  ))}
                </div>
              </section>

              {/* Estrutura Física */}
              <section id="estrutura" className="scroll-mt-[100px] bg-primary-dark text-white rounded-3xl overflow-hidden shadow-xl border border-slate-700">
                <div className="p-8 md:p-10">
                  <h2 className="text-3xl font-bold text-white mb-10 border-l-4 border-teal-400 pl-4">Estrutura Física</h2>
                  
                  <div className="grid lg:grid-cols-2 gap-10 items-start">
                    
                    {/* Lista */}
                    <div className="space-y-3 text-slate-300">
                      <div className="flex items-center p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors">
                         <MapPin className="w-6 h-6 text-highlight mr-4 flex-shrink-0" />
                         <span className="font-medium text-white">Sede própria extensa no bairro Petrópolis</span>
                      </div>
                      <div className="flex items-center p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors">
                         <Bed className="w-6 h-6 text-highlight mr-4 flex-shrink-0" />
                         <span className="font-medium text-white">10 dormitórios climatizados completos</span>
                      </div>
                      <div className="flex items-center p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors">
                         <Users className="w-6 h-6 text-highlight mr-4 flex-shrink-0" />
                         <span className="font-medium text-white">Residência de 50 vagas prontas</span>
                      </div>
                      <div className="flex items-center p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors">
                         <Utensils className="w-6 h-6 text-highlight mr-4 flex-shrink-0" />
                         <span className="font-medium text-white">Salão de Convivência e Cozinha Industrial</span>
                      </div>
                      <div className="flex items-center p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors">
                         <Award className="w-6 h-6 text-highlight mr-4 flex-shrink-0" />
                         <span className="font-medium text-white">Consultórios Psicológicos e Clínicos</span>
                      </div>
                      <div className="flex items-center p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors">
                         <Laptop className="w-6 h-6 text-highlight mr-4 flex-shrink-0" />
                         <span className="font-medium text-white">Laboratório de Informática (17 computadores)</span>
                      </div>
                      <div className="flex items-center p-4 bg-slate-700/50 rounded-xl hover:bg-slate-700 transition-colors">
                         <Car className="w-6 h-6 text-highlight mr-4 flex-shrink-0" />
                         <span className="font-medium text-white">Frota Operacional: 5 veículos fixos</span>
                      </div>
                    </div>

                    {/* Galeria de Fotos */}
                    <div className="w-full h-full min-h-[350px] md:min-h-[450px]">
                      <StructureCarousel />
                    </div>

                  </div>
                </div>
              </section>

              {/* Quem nos apoia (Parceiros) */}
              <section id="parceiros" className="scroll-mt-[100px] bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <PartnersCarousel />
              </section>

              {/* Prêmios e Reconhecimentos */}
              <section id="premios" className="scroll-mt-[100px] bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
                <h2 className="text-3xl font-bold text-primary-dark mb-10 border-l-4 border-primary pl-4">Prêmios e Reconhecimentos</h2>
                {/* Reutilizando componente de Reconhecimentos que já existia na estrutura e apenas limpando margens se necessário */}
                <div className="-mx-4 md:-mx-8">
                   <RecognitionsSection showTitle={false} />
                </div>
              </section>

              {/* Utilidade Pública */}
              <section id="utilidade-publica" className="scroll-mt-[100px] bg-gradient-to-br from-primary to-primary-dark text-white p-8 md:p-10 rounded-3xl shadow-xl flex flex-col justify-center items-center text-center py-20 relative overflow-hidden">
                <Shield className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] text-white/5" />
                
                <h2 className="text-3xl font-bold mb-4 relative z-10">Títulos de Utilidade Pública</h2>
                <p className="text-teal-100 text-lg font-medium max-w-2xl mb-10 relative z-10">
                  O selo de Utilidade Pública atesta o valor irrefutável e a seriedade absoluta dos serviços prestados pelo DJM à população da Amazônia de forma contínua desde as décadas de 80 e 90, sendo validado pelas esferas do poder.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 w-full max-w-3xl relative z-10">
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
                    <Shield className="w-10 h-10 text-teal-300 mx-auto mb-4" />
                    <h4 className="font-bold text-xl mb-1 text-teal-50">Qualificação Municipal</h4>
                    <p className="text-sm text-teal-100 italic font-medium opacity-60 mt-2 tracking-tighter">Concedida desde 1985</p>
                  </div>
                  
                  <a 
                    href="/Utilidade-publica-estadual.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group bg-white/20 p-6 rounded-2xl border border-teal-300/50 backdrop-blur-md hover:bg-white/30 transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                      <FileText className="w-5 h-5 text-teal-300" />
                    </div>
                    
                    <Shield className="w-10 h-10 text-teal-300 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-xl mb-1 text-white">Qualificação Estadual</h4>
                    <p className="text-sm text-teal-100 italic font-medium mt-2 tracking-tighter">Decreto Estadual n° 13.978-91</p>
                    
                    <div className="mt-6 flex items-center justify-center gap-2 bg-white text-primary px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg group-hover:bg-highlight group-hover:text-primary-dark transition-colors">
                      <FileText className="w-3.5 h-3.5" />
                      Visualizar Certificado
                    </div>
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
