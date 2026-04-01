import { Crosshair, Eye, HeartHandshake } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="py-20 bg-slate-100 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-50">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-6">
              <Crosshair className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary-dark mb-4">Missão</h3>
            <p className="text-slate-600 leading-relaxed">
              &quot;Promover o cuidado integral do ser humano, visando a qualidade de vida, através de relacionamentos saudáveis consigo, com Deus, com a família e sociedade.&quot;
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-50">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-6">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary-dark mb-4">Visão</h3>
            <p className="text-slate-600 leading-relaxed">
              &quot;Ser uma instituição de referência no Estado do Amazonas, no atendimento de pessoas em situação de vulnerabilidade, produzindo resultados positivos na vida pessoal, familiar e social.&quot;
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-50">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-6">
              <HeartHandshake className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary-dark mb-4">Valores</h3>
            <ul className="text-slate-600 space-y-3 leading-relaxed font-medium">
              <li className="flex items-center justify-center md:justify-start">
                <span className="w-2 h-2 rounded-full bg-primary mr-3"></span> Respeito ao ser humano
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <span className="w-2 h-2 rounded-full bg-primary mr-3"></span> Valorização da cidadania
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <span className="w-2 h-2 rounded-full bg-primary mr-3"></span> Comprometimento com a verdade
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <span className="w-2 h-2 rounded-full bg-primary mr-3"></span> Ética
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <span className="w-2 h-2 rounded-full bg-primary mr-3"></span> Esperança
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <span className="w-2 h-2 rounded-full bg-primary mr-3"></span> Fé
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
