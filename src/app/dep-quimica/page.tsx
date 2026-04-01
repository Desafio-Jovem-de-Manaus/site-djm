import { Home, Users, BookOpen, HeartPulse, ArrowRight, Activity } from "lucide-react";
import ServiceSidebar from "@/components/ServiceSidebar";
import Link from "next/link";

export default function DepQuimicaPage() {
  const sidebarItems = [
    { label: "Comunidade Terapêutica", href: "/dep-quimica/comunidade-terapeutica", icon: <Home className="w-5 h-5" /> },
    { label: "Grupo de Apoio Familiar — GAF", href: "/dep-quimica/grupo-apoio-familiar", icon: <Users className="w-5 h-5" /> },
    { label: "Grupo Palavra Viva", href: "/dep-quimica/palavra-viva", icon: <BookOpen className="w-5 h-5" /> },
    { label: "Recomeço — Ambulatório", href: "/dep-quimica/recomeco", icon: <HeartPulse className="w-5 h-5" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-slate-50">
      
      {/* Hero */}
      <section className="bg-primary-dark border-b-8 border-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5">
           <Activity className="w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">Dependência Química</h1>
          <p className="text-2xl text-teal-200 font-medium max-w-2xl">
            Desde 1985 promovendo recuperação, acolhimento e reinserção social de pessoas em situação de dependência química em Manaus.
          </p>
        </div>
      </section>

      {/* Grid de Conteúdo Principal */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 relative">
            
            {/* Sidebar de Navegação */}
            <div className="lg:col-span-3">
              <ServiceSidebar items={sidebarItems} currentPath="/dep-quimica" />
            </div>

            {/* Coluna principal */}
            <div className="lg:col-span-9 space-y-12">
              
              {/* Seção 1 — O problema */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
                <h2 className="text-3xl font-bold text-primary-dark mb-6 relative pl-4 border-l-4 border-primary">
                  A realidade da dependência química no Brasil
                </h2>
                <div className="text-slate-600 space-y-4 font-medium leading-relaxed text-lg">
                  <p>O Brasil enfrenta uma crise de saúde pública relacionada ao uso de substâncias psicoativas.</p>
                  <p>A idade média para o primeiro uso de drogas caiu para aproximadamente 12 anos.</p>
                  <p>O crack e o álcool são as substâncias mais devastadoras nas comunidades vulneráveis.</p>
                  <p>Em Manaus, a situação é agravada pela posição geográfica como rota do tráfico internacional.</p>
                  <p>A falta de equipamentos públicos de saúde mental amplia o desafio.</p>
                </div>
              </div>

              {/* Seção 2 — A atuação do DJM */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
                <h2 className="text-3xl font-bold text-primary-dark mb-6 relative pl-4 border-l-4 border-primary">
                  O Desafio Jovem de Manaus na linha de frente
                </h2>
                <ul className="text-slate-600 space-y-4 font-medium leading-relaxed text-lg list-none">
                  <li className="flex items-start">
                    <ArrowRight className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-0.5" />
                    <span>Mais de 40 anos de atuação (desde 1981, com a CT funcionando desde 1985).</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-0.5" />
                    <span>Uma das primeiras organizações de Manaus a oferecer tratamento para dependência química.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-0.5" />
                    <span>Abordagem integral: acolhimento, tratamento terapêutico, apoio familiar e reinserção social.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-0.5" />
                    <span>Modelo baseado em metodologia progressiva com fases de recuperação.</span>
                  </li>
                </ul>
              </div>

              {/* Seção 3 — Números de impacto */}
              <div>
                <h2 className="text-2xl font-bold text-primary-dark mb-6 pl-2">Números de Impacto</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
                    <div className="text-4xl font-black text-primary-dark mb-3">2.000+</div>
                    <div className="text-sm font-bold uppercase tracking-wider text-primary">Acolhimentos na Comunidade Terapêutica desde 1985</div>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
                    <div className="text-4xl font-black text-primary-dark mb-3">237</div>
                    <div className="text-sm font-bold uppercase tracking-wider text-primary">Participantes no GAF em 2024</div>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
                    <div className="text-4xl font-black text-primary-dark mb-3">27</div>
                    <div className="text-sm font-bold uppercase tracking-wider text-primary">Acolhimentos na CT em 2024</div>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
                    <div className="text-4xl font-black text-primary-dark mb-3">50</div>
                    <div className="text-sm font-bold uppercase tracking-wider text-primary">Vagas simultâneas de acolhimento</div>
                  </div>
                </div>
              </div>

              {/* Seção 4 — Chamada para os serviços */}
              <div className="pt-6">
                <div className="text-center sm:text-left mb-8">
                  <h2 className="text-3xl font-bold text-primary-dark mb-3">Conheça nossos serviços</h2>
                  <p className="text-lg text-slate-500 font-medium">Oferecemos diferentes frentes de atuação para abranger todas as etapas da recuperação:</p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {sidebarItems.map((item, idx) => (
                     <Link href={item.href} key={idx} className="group flex flex-col items-center bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-primary hover:shadow-lg transition-all text-center">
                       <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                         {item.icon}
                       </div>
                       <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors">{item.label}</h3>
                       <p className="text-sm text-slate-500 font-medium mb-6 flex-grow">Acesse para conhecer os detalhes deste programa de tratamento oferecido pelo DJM.</p>
                       <div className="text-primary font-bold flex items-center group-hover:translate-x-1 transition-transform bg-blue-50 px-4 py-2 rounded-lg">
                         Acessar <ArrowRight className="w-4 h-4 ml-2" />
                       </div>
                     </Link>
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
