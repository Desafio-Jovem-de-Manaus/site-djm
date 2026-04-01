"use client";

import { Award, Medal, ShieldCheck, CheckCircle2, Network, Globe, BookOpen } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ─── Vertical auto‑scroll carousel ─── */
function VerticalCarousel({ children, speed = 30 }: { children: React.ReactNode; speed?: number }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let raf: number;
    let pos = 0;
    // Height of one "set" of items (the first copy)
    const singleHeight = inner.scrollHeight / 2;

    const step = () => {
      if (!paused) {
        pos += speed / 60; // pixels per frame at 60fps
        if (pos >= singleHeight) pos = 0;
        inner.style.transform = `translateY(-${pos}px)`;
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [paused, speed]);

  return (
    <div
      ref={outerRef}
      className="overflow-hidden relative"
      style={{ maxHeight: 360 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Fade masks top & bottom */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent z-10"></div>

      <div ref={innerRef} className="will-change-transform">
        {/* Render children twice for seamless loop */}
        {children}
        {children}
      </div>
    </div>
  );
}

/* ─── Main section ─── */
export default function RecognitionsSection() {
  const titulos = [
    { title: "Título de Utilidade Pública Municipal", detail: "Desde 1985", icon: ShieldCheck },
    { title: "Título de Utilidade Pública Estadual", detail: "Desde 1991", icon: ShieldCheck },
    { title: "Inscrição no Conselho Municipal de Assistência Social (CMAS)", detail: "Nº 060 / 2004", icon: CheckCircle2 },
    { title: "Homenagem da Câmara Municipal de Manaus — 30 Anos", detail: "2012", icon: Medal },
    { title: "Homenagem da Câmara Municipal de Manaus — Projetos Sociais", detail: "2014", icon: Medal },
    { title: "Homenagem da Federação das Comunidades Terapêuticas Evangélicas (FETEB)", detail: "2019", icon: Award },
    { title: "Homenagem da Assembleia Legislativa do Amazonas (ALEAM)", detail: "2023", icon: Medal },
  ];

  const representacoes = [
    { title: "Federação Desafio Jovem do Brasil", role: "Membro da Diretoria", icon: Award },
    { title: "Federação das Comunidades Terapêuticas Evangélicas (FETEB)", role: "Membro da Diretoria", icon: Award },
    { title: "Comitê Intersetorial de Monitoramento da Política Municipal para a População em Situação de Rua (CIAMP)", role: "Membro", icon: Network },
    { title: "Conselho Municipal de Políticas sobre Drogas (COMAD)", role: "Membro Conselheiro", icon: BookOpen },
    { title: "Rede Global Teen Challenge", role: "Membro Afiliado", icon: Globe },
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="w-12 h-1 bg-primary rounded-full mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4 tracking-tight">Reconhecimento e Credibilidade</h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Ao longo de mais de quatro décadas, nossa atuação tem sido reconhecida pelo poder público e por entidades nacionais e internacionais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Coluna 1 — Títulos e Homenagens */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-6 pb-3 border-b-2 border-primary/20">
              Títulos e Homenagens
            </h3>
            <VerticalCarousel speed={25}>
              <div className="space-y-4 pb-4">
                {titulos.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200 transition-all">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-800 leading-snug">{item.title}</p>
                        <p className="text-sm text-slate-400 mt-0.5 font-medium">{item.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </VerticalCarousel>
          </div>

          {/* Coluna 2 — Representação Institucional */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-6 pb-3 border-b-2 border-primary/20">
              Representação Institucional
            </h3>
            <VerticalCarousel speed={20}>
              <div className="space-y-4 pb-4">
                {representacoes.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4 p-5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200 transition-all">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-slate-800 leading-snug">{item.title}</p>
                        <p className="text-sm text-primary font-bold mt-1">{item.role}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </VerticalCarousel>
          </div>

        </div>
      </div>
    </section>
  );
}
