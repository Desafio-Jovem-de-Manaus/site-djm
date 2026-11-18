import { FileText, Scale, ArrowRight } from "lucide-react";
import PageSidebar from "@/components/PageSidebar";
import Link from "next/link";

export default function TransparenciaPage() {
  const sidebarItems = [
    { label: "Prestações de Conta", anchor: "prestacao-contas", icon: <FileText className="w-5 h-5" /> },
    { label: "Compliance", anchor: "legislacao", icon: <Scale className="w-5 h-5" /> },
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
                  <FileText className="w-8 h-8 text-primary mr-3" /> Prestações de Conta — Lei 13.019/2014
                </h2>
                <p className="text-slate-600 mb-8 font-medium">A prestação de contas é um compromisso com a sociedade. Ao divulgar os termos de fomento firmados, com seus valores, parcelas, equipe, despesas e aditivos, a Desafio Jovem de Manaus cumpre a Lei 13.019/2014 e permite que qualquer pessoa acompanhe a aplicação dos recursos públicos.</p>
                <Link
                  href="/transparencia/termos"
                  className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Ver Projetos e Parcerias <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              {/* Legislação de Compliance */}
              <div id="legislacao">
                <h2 className="text-2xl font-bold text-primary-dark mb-6 flex items-center pl-2 border-l-4 border-slate-300">
                  Compliance
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


