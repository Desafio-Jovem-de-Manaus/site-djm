import React from 'react';

const MissaoVisaoValores = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">
            IDENTIDADE INSTITUCIONAL
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Missão, Visão e Valores
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Os princípios que orientam tudo o que fazemos desde 1981
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Missão */}
          <div className="bg-[#0F6E56] rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white/15 rounded-full flex items-center justify-center mb-6">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="22" cy="22" r="16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="22" cy="22" r="3" fill="white"/>
                <polygon points="22,8 20,18 22,21 24,18" fill="white"/>
                <polygon points="22,36 20,26 22,23 24,26" fill="rgba(255,255,255,0.35)"/>
                <line x1="22" y1="5" x2="22" y2="8" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="22" y1="36" x2="22" y2="39" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="5" y1="22" x2="8" y2="22" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="36" y1="22" x2="39" y2="22" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <h4 className="text-white text-xl font-medium mb-4">Missão</h4>
            <div className="w-full border-t border-white/25 mb-4"></div>
            <p className="text-white/85 text-sm leading-relaxed">
              "Promover o cuidado integral do ser humano, visando a qualidade de vida, através de relacionamentos saudáveis consigo, com Deus, com a família e sociedade."
            </p>
          </div>

          {/* Card 2: Visão */}
          <div className="bg-[#E07B39] rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white/15 rounded-full flex items-center justify-center mb-6">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4,22 Q14,8 22,8 Q30,8 40,22 Q30,36 22,36 Q14,36 4,22 Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="22" cy="22" r="7" stroke="white" strokeWidth="2"/>
                <circle cx="22" cy="22" r="3.5" fill="white"/>
                <circle cx="24.5" cy="19.5" r="1.5" fill="#E07B39"/>
              </svg>
            </div>
            <h4 className="text-white text-xl font-medium mb-4">Visão</h4>
            <div className="w-full border-t border-white/25 mb-4"></div>
            <p className="text-white/85 text-sm leading-relaxed">
              "Ser uma instituição de referência no Estado do Amazonas, no atendimento de pessoas em situação de vulnerabilidade, produzindo resultados positivos na vida pessoal, familiar e social."
            </p>
          </div>

          {/* Card 3: Valores */}
          <div className="bg-[#2B6CB0] rounded-2xl p-8 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white/15 rounded-full flex items-center justify-center mb-6">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22,36 L6,20 Q4,10 14,8 Q19,7 22,14 Q25,7 30,8 Q40,10 38,20 Z" fill="rgba(255,255,255,0.18)" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13,14 Q17,8 22,14" stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity="0.65"/>
              </svg>
            </div>
            <h4 className="text-white text-xl font-medium mb-4">Valores</h4>
            <div className="w-full border-t border-white/25 mb-4"></div>
            <ul className="text-white/85 text-sm space-y-2 text-left w-full max-w-[200px] mx-auto">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 mr-3 shrink-0"></span>
                Respeito ao ser humano
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 mr-3 shrink-0"></span>
                Valorização da cidadania
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 mr-3 shrink-0"></span>
                Comprometimento com a verdade
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 mr-3 shrink-0"></span>
                Ética
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 mr-3 shrink-0"></span>
                Esperança
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40 mr-3 shrink-0"></span>
                Fé
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissaoVisaoValores;
