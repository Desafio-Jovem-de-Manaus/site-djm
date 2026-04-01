import { Building2, FileText, Scale, HandCoins, ArrowDownToLine, BadgeInfo, ArrowRight } from "lucide-react";
import PageSidebar from "@/components/PageSidebar";

export default function TransparenciaPage() {
  const sidebarItems = [
    { label: "Prestação de Contas", anchor: "prestacao-contas", icon: <FileText className="w-5 h-5" /> },
    { label: "Planos & Relatórios", anchor: "relatorios", icon: <Building2 className="w-5 h-5" /> },
    { label: "Documentos Fiscais", anchor: "documentos", icon: <BadgeInfo className="w-5 h-5" /> },
    { label: "Termos & Emendas", anchor: "convenios", icon: <HandCoins className="w-5 h-5" /> },
    { label: "Compliance SUAS", anchor: "legislacao", icon: <Scale className="w-5 h-5" /> },
  ];
  const conveniosFPS = [
    { num: "003/2015", orgao: "Fundo de Promoção Social (FPS)", objeto: "Veículo Minivan - Spin", valor: "R$ 50.938,65" },
    { num: "013/2018", orgao: "Fundo de Promoção Social (FPS)", objeto: "Van Furgão - Renault", valor: "R$ 150.000,00" },
    { num: "038/2020", orgao: "Fundo de Promoção Social (FPS)", objeto: "Mobiliários, Cama e Eletrodomésticos", valor: "R$ 140.183,64" },
    { num: "027/2023", orgao: "Fundo de Promoção Social (FPS)", objeto: "Qualificação Profissional do Serviço de Acolhimento", valor: "R$ 150.000,00" },
    { num: "068/2025", orgao: "Fundo de Promoção Social (FPS)", objeto: "Implementação da Poderosa Sala de Informática", valor: "R$ 190.522,86" },
  ];

  const legislacao = [
    { name: "Lei 13.019/2014", desc: "Marco Regulatório das Organizações da Sociedade Civil.", url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2014/lei/l13019.htm" },
    { name: "Resolução 109/2009", desc: "Tipificação Nacional dos Serviços Socioassistenciais.", url: "https://www.mds.gov.br/webarquivos/legislacao/assistencia_social/resolucoes/2009/Resolucao%20CNAS%20no%20109-%20de%2011%20de%20novembro%20de%202009.pdf" },
    { name: "Resolução 1/2015", desc: "Regulamentação e amparo de Comunidades Terapêuticas.", url: "https://www.in.gov.br/materia/-/asset_publisher/Kujrw0TZC2Mb/content/id/32425953/do1-2015-08-28-resolucao-n-1-de-19-de-agosto-de-2015-32425806" },
    { name: "RDC 29/2011", desc: "Requisitos de segurança e funcionamento para CT pela ANVISA.", url: "https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2011/res0029_30_06_2011.html" },
    { name: "Decreto 7.053/2009", desc: "Institui a Política Nacional para a População em Situação de Rua.", url: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2009/decreto/d7053.htm" },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-slate-50">
      
      {/* Hero */}
      <section className="bg-primary-dark border-b-8 border-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5">
           <Scale className="w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">Transparência</h1>
          <p className="text-2xl text-teal-200 font-medium max-w-2xl">O rigoroso compromisso moral com a prestação de contas impecável e com a exigente legislação vigente do Brasil.</p>
        </div>
      </section>

      {/* Grid de Conteúdo Principal */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 relative">
            
            {/* Sidebar Sticky de Navegação genérica (Componente reativo) */}
            <div className="lg:col-span-3">
              <PageSidebar items={sidebarItems} />
            </div>

            {/* Documentos & Tabelas */}
            <div className="lg:col-span-9 space-y-20">
              
              {/* Prestação de Contas */}
              <div id="prestacao-contas" className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
                <h2 className="text-3xl font-bold text-primary-dark mb-6 flex items-center border-b pb-4">
                  <FileText className="w-8 h-8 text-primary mr-3" /> Balanço Corrente (Auditorias)
                </h2>
                <p className="text-slate-600 mb-8 font-medium">Cumprimos religiosamente as emendas estipuladas pela colossal redatora governamental da <strong>Lei 13.019/2014 (MROSC)</strong>; Disponibilizamos publicamente na íntegra a saúde do fluxo de caixa e rubricas anuais do comitê auditor interno desta Organização Social.</p>
                
                <div className="space-y-4">
                  {[2024, 2023, 2022, 2021].map((year) => (
                    <div key={year} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl group hover:border-primary/40 hover:bg-blue-50/20 transition-all cursor-pointer">
                      <div className="flex items-center w-full mb-3 sm:mb-0">
                         <div className="bg-primary/10 text-primary font-black px-4 py-2 rounded-lg mr-4">{year}</div>
                         <div>
                           <p className="font-bold text-primary-dark">Relatório Executivo Anual e Balanço Contábil</p>
                           <p className="text-xs text-slate-400">PDF Assinado • 2.4 MB</p>
                         </div>
                      </div>
                      <button className="flex items-center border border-slate-200 bg-white text-slate-600 px-4 py-2 rounded-lg font-semibold whitespace-nowrap group-hover:bg-primary group-hover:text-white transition-colors group-hover:border-primary w-full sm:w-auto justify-center">
                        <ArrowDownToLine className="w-4 h-4 mr-2" /> Baixar PDF
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documentos Institucionais & Alvarás */}
              <div id="documentos" className="grid sm:grid-cols-2 gap-8">
                
                {/* Registros */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col items-start h-full">
                  <Building2 className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">Certidões Jurídicas</h3>
                  <p className="text-slate-500 font-medium text-sm mb-6 flex-grow">Cartilha estática comprovando o Estatuto da Instituição (Ata de Assembleia Vigente e Assinada). Possuímos todos os cadastros e alvarás limpos para emissão de certidoes CND perante à Prefeitura, Estado e União (Receita Federal).</p>
                  <button className="text-primary font-bold hover:underline flex items-center">Visualizar CNPJ (Cartão) <ArrowDownToLine className="w-4 h-4 ml-1" /></button>
                  <button className="text-primary font-bold hover:underline flex items-center mt-2">Acessar Estatuto Oficial de Fundação <ArrowDownToLine className="w-4 h-4 ml-1" /></button>
                </div>

                {/* Relatórios (CT, GAF, COMEFI) */}
                <div id="relatorios" className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col items-start h-full">
                  <BadgeInfo className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">Métricas Brutas</h3>
                  <p className="text-slate-500 font-medium text-sm mb-6 flex-grow">Os resultados brutos contabilizados porta-por-porta listados em Relatórios Trimestrais e Anuais divididos de ponta a ponta pelos coordenadores logísticos de cada Base Operacional (CT, GAF, Braços Abertos e Comefi).</p>
                  <button className="text-slate-400 bg-slate-100 hover:text-slate-600 hover:bg-slate-200 px-4 py-2 rounded font-semibold text-sm transition-colors border border-dashed border-slate-300 w-full mb-2">Relatório Abordagem Social (Em breve)</button>
                  <button className="text-slate-400 bg-slate-100 hover:text-slate-600 hover:bg-slate-200 px-4 py-2 rounded font-semibold text-sm transition-colors border border-dashed border-slate-300 w-full">Relatório Acolhimento C.T (Em breve)</button>
                </div>
              </div>

              {/* Termos de Fomento e Financeiros Macros */}
              <div id="convenios" className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <h2 className="text-3xl font-bold text-primary-dark mb-3 flex items-center">
                  <HandCoins className="w-8 h-8 text-primary mr-3" /> Termos de Fomento & Convênios
                </h2>
                <p className="text-slate-600 font-medium mb-8">Todos os frutos do repasse e destinações advindas inteiramente pelas mãos do Estado em prol da sobrevivência continuada do Desafio.</p>

                {/* Tabela de Licitacoes / Editais */}
                <div className="overflow-x-auto w-full mb-8">
                  <table className="w-full text-left text-sm text-slate-600 whitespace-nowrap">
                    <thead className="bg-slate-100 text-primary-dark font-bold uppercase rounded-t-xl overflow-hidden border-b-2 border-slate-200">
                      <tr>
                        <th className="px-6 py-4">Edital / Processo</th>
                        <th className="px-6 py-4">Fundo Patrono</th>
                        <th className="px-6 py-4">Objeto Licitado Integrado</th>
                        <th className="px-6 py-4 text-right">Repasse Limpo (Valor)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {conveniosFPS.map((doc, idx) => (
                        <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                          <td className="px-6 py-5 font-bold text-primary-dark">{doc.num}</td>
                          <td className="px-6 py-5">{doc.orgao}</td>
                          <td className="px-6 py-5 truncate font-medium max-w-[200px] md:max-w-none">{doc.objeto}</td>
                          <td className="px-6 py-5 text-right font-black text-primary">{doc.valor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Destaque Macro SEAS */}
                <div className="bg-gradient-to-tr from-slate-900 to-slate-800 p-8 rounded-2xl text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between">
                   <div className="mb-6 md:mb-0">
                     <p className="text-teal-300 uppercase tracking-widest text-xs font-bold mb-1">Termos Vigentes Secretariados</p>
                     <p className="text-2xl font-bold mb-2 text-white"><span className="text-highlight">SEAS</span> do Amazonas (Apoio Mensal SUAS)</p>
                     <p className="text-slate-400 text-sm max-w-sm">Este super edital anual traciona grande parte do motor respirador da instituição de 2024 perante as redes de amparo.</p>
                   </div>
                   <div className="space-y-3">
                     <div className="bg-white/10 px-6 py-3 rounded-xl border border-white/20">
                       <p className="text-xs text-slate-300 uppercase font-bold tracking-wider mb-1">Custeio do Abrigo (Acolhimento)</p>
                       <p className="text-2xl font-black text-white text-right">R$ 600.000,00</p>
                     </div>
                     <div className="bg-white/10 px-6 py-3 rounded-xl border border-white/20">
                       <p className="text-xs text-slate-300 uppercase font-bold tracking-wider mb-1">Custeio Abordagem de Ruas</p>
                       <p className="text-2xl font-black text-white text-right">R$ 269.400,00</p>
                     </div>
                   </div>
                </div>
              </div>

              {/* Legislação de Compliance */}
              <div id="legislacao">
                <h2 className="text-2xl font-bold text-primary-dark mb-6 flex items-center pl-2 border-l-4 border-slate-300">
                  Compliance Regulatório Estatal
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {legislacao.map((leg, idx) => (
                    <a key={idx} href={leg.url} target="_blank" rel="noopener noreferrer" className="p-5 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 hover:border-slate-300 transition-colors group">
                      <h4 className="font-bold text-primary-dark flex items-center mb-2">
                        {leg.name} <ArrowRight className="w-4 h-4 ml-2 text-slate-400 group-hover:text-primary transform group-hover:translate-x-1 transition-transform" />
                      </h4>
                      <p className="text-sm font-medium text-slate-500 leading-snug">{leg.desc}</p>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}


