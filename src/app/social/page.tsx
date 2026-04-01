import { Building, HandHeart, Users, GraduationCap, ArrowRight, HeartHandshake } from "lucide-react";
import ServiceSidebar from "@/components/ServiceSidebar";
import Link from "next/link";
import React from "react";

export default function SocialPage() {
  const sidebarItems = [
    { label: "Abrigo Institucional", href: "/social/abrigo-institucional", icon: <Building className="w-5 h-5" /> },
    { label: "Abordagem Social", href: "/social/abordagem-social", icon: <HandHeart className="w-5 h-5" /> },
    { label: "Comunidade Eficiente — COMEFI", href: "/social/comunidade-eficiente", icon: <Users className="w-5 h-5" /> },
    { label: "Capacitar — Qualificação Profissional", href: "/social/capacitar", icon: <GraduationCap className="w-5 h-5" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-slate-50">
      
      {/* Hero */}
      <section className="bg-primary-dark border-b-8 border-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5">
           <HeartHandshake className="w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">Assistência Social</h1>
          <p className="text-2xl text-teal-200 font-medium max-w-3xl leading-relaxed">
            Desde 2015 estendendo braços abertos para acolher, proteger e transformar vidas em situação de vulnerabilidade em Manaus.
          </p>
        </div>
      </section>

      {/* Grid de Conteúdo Principal */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 relative">
            
            {/* Sidebar de Navegação */}
            <div className="lg:col-span-3">
              <ServiceSidebar items={sidebarItems} currentPath="/social" />
            </div>

            {/* Coluna principal */}
            <div className="lg:col-span-9 space-y-12">
              
              {/* Seção 1 — O problema */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
                <h2 className="text-3xl font-bold text-primary-dark mb-6 relative pl-4 border-l-4 border-primary">
                  A realidade da vulnerabilidade social em Manaus
                </h2>
                <div className="text-slate-600 space-y-4 font-medium leading-relaxed text-lg">
                  <p>Manaus possui uma das maiores populações em situação de rua da região Norte.</p>
                  <p>A vulnerabilidade social é agravada pela desigualdade econômica e pela falta de políticas públicas efetivas.</p>
                  <p>Famílias em situação de extrema pobreza enfrentam insegurança alimentar, falta de moradia e exclusão social.</p>
                  <p>Crianças, adolescentes e idosos são os grupos mais afetados.</p>
                </div>
              </div>

              {/* Seção 2 — A atuação do DJM */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
                <h2 className="text-3xl font-bold text-primary-dark mb-6 relative pl-4 border-l-4 border-primary">
                  O Desafio Jovem de Manaus como rede de proteção
                </h2>
                <ul className="text-slate-600 space-y-4 font-medium leading-relaxed text-lg list-none">
                  <li className="flex items-start">
                    <ArrowRight className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-0.5" />
                    <span>Atuação na assistência social desde 2015, com convênio junto à SEAS.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-0.5" />
                    <span>Rede de 61 articulações com a rede socioassistencial de Manaus.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-0.5" />
                    <span>Abordagem humanizada: acolhimento, encaminhamentos, reinserção social e fortalecimento de vínculos.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-6 h-6 mr-3 text-primary flex-shrink-0 mt-0.5" />
                    <span>Atuação em múltiplas frentes: abrigo, abordagem de rua, convivência comunitária e qualificação profissional.</span>
                  </li>
                </ul>
              </div>

              {/* Seção 3 — Números de impacto */}
              <div>
                <h2 className="text-2xl font-bold text-primary-dark mb-6 pl-2">Números de Impacto</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
                    <div className="text-3xl font-black text-primary-dark mb-3">500+</div>
                    <div className="text-sm font-bold uppercase tracking-wider text-primary">Acolhimentos no Abrigo Institucional desde 2018</div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
                    <div className="text-3xl font-black text-primary-dark mb-3">10.000+</div>
                    <div className="text-sm font-bold uppercase tracking-wider text-primary">Atendimentos na Abordagem Social desde 2015</div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
                    <div className="text-3xl font-black text-primary-dark mb-3">78</div>
                    <div className="text-sm font-bold uppercase tracking-wider text-primary">Usuários atendidos pela Abordagem Social em 2024</div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
                    <div className="text-3xl font-black text-primary-dark mb-3">2.453</div>
                    <div className="text-sm font-bold uppercase tracking-wider text-primary">Beneficiários indiretos amparados em 2024</div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
                    <div className="text-3xl font-black text-primary-dark mb-3">838</div>
                    <div className="text-sm font-bold uppercase tracking-wider text-primary">Encaminhamentos realizados pelo Abrigo em 2024</div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
                    <div className="text-3xl font-black text-primary-dark mb-3">20</div>
                    <div className="text-sm font-bold uppercase tracking-wider text-primary">Famílias atendidas na Comunidade Eficiente em 2024</div>
                  </div>

                </div>
              </div>

              {/* Seção 4 — Chamada para os serviços */}
              <div className="pt-6">
                <div className="text-center sm:text-left mb-8">
                  <h2 className="text-3xl font-bold text-primary-dark mb-3">Conheça nossos serviços</h2>
                  <p className="text-lg text-slate-500 font-medium">Oferecemos diferentes frentes de atuação para garantir um atendimento contínuo na rede assistencial:</p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {sidebarItems.map((item, idx) => (
                     <Link href={item.href} key={idx} className="group flex flex-col items-center bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-primary hover:shadow-lg transition-all text-center">
                       <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                         {item.icon}
                       </div>
                       <h3 className="text-xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors">{item.label}</h3>
                       <p className="text-sm text-slate-500 font-medium mb-6 flex-grow">Acesse para conhecer os detalhes e o público-alvo deste programa assistencial e social do DJM.</p>
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
