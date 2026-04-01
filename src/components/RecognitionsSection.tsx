import { Award, Medal, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function RecognitionsSection() {
  const recognitions = [
    { title: "Utilidade Pública Municipal", year: "1985", icon: ShieldCheck },
    { title: "Utilidade Pública Estadual", year: "1991", icon: ShieldCheck },
    { title: "Conselho Municipal de Assistência Social nº 060/2004", year: "2004", icon: CheckCircle2 },
    { title: "COMAD — Conselho Municipal de Políticas sobre Drogas", year: "Membro", icon: CheckCircle2 },
    { title: "Homenagem CMM — 30 anos", year: "2012", icon: Medal },
    { title: "Homenagem CMM — Projetos Sociais", year: "2014", icon: Medal },
    { title: "Homenagem FETEB", year: "2019", icon: Award },
    { title: "Homenagem ALEAM", year: "2023", icon: Medal },
    { title: "Membro da rede Global Teen Challenge", year: "Membro", icon: CheckCircle2 },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Reconhecimento e credibilidade</h2>
          <p className="text-xl text-slate-600">Mais de 4 décadas de serviço reconhecido</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {recognitions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center bg-slate-50 border border-slate-200 rounded-full py-3 px-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-default"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-dark leading-tight">{item.title}</h4>
                  <p className="text-sm text-primary font-bold">{item.year}</p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
