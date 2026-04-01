"use client";

import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useEffect, useState, useRef } from "react";

// Componente simples de contator animado customizado
const AnimatedCounter = ({ targetString, label }: { targetString: string, label: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const numericTarget = parseInt(targetString.replace(/\D/g, ''));
  const symbol = targetString.replace(/[0-9.]/g, ''); // Extract things like '+'

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    
    let start = 0;
    const duration = 2000;
    const increment = numericTarget / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasAnimated, numericTarget]);

  // Formata o numero com ponto de milhares
  const formattedCount = new Intl.NumberFormat('pt-BR').format(count);

  return (
    <div className="px-4" ref={elementRef}>
      <div className="text-3xl md:text-4xl font-extrabold text-white mb-2 tabular-nums">
        {formattedCount}{symbol}
      </div>
      <div className="text-xs md:text-sm text-highlight font-bold uppercase tracking-widest leading-tight">{label}</div>
    </div>
  );
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-primary-dark text-white overflow-hidden pt-20">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 bg-primary z-0">
        <div className="w-full h-full flex items-center justify-center bg-primary-dark/80">
           <span className="text-blue-300/50 font-medium tracking-widest uppercase">[ Imagem de Fundo Escurecida ]</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-primary-dark/40"></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in shadow-black drop-shadow-lg">
              Desde 1981 resgatando vidas na Amazônia
            </h1>
            <p className="text-xl md:text-2xl text-highlight font-medium mb-6 animate-fade-in animation-delay-100">
              Promovendo o cuidado integral e a reinserção social de pessoas em situação de vulnerabilidade em Manaus.
            </p>
            <p className="text-lg text-blue-100 mb-8 animate-fade-in animation-delay-200 leading-relaxed">
              Somos uma Organização da Sociedade Civil (OSC) dedicada à prevenção, acolhimento e reinserção social de pessoas em situação de vulnerabilidade, dependência química e situação de rua.
              <br/><br/>
              Desde a nossa fundação, temos atuado de forma contínua na promoção da dignidade humana, já tendo realizado mais de 40.000 atendimentos e impactado diretamente milhares de vidas e famílias na região amazônica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-300">
              <Link href="/contato" className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-1">
                Precisa de Ajuda?
              </Link>
              <Link href="/o-que-fazemos" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-200 border border-white/20 backdrop-blur-sm">
                Conheça Nossos Serviços
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="w-full aspect-video rounded-2xl overflow-hidden border-4 border-primary/50 shadow-2xl relative bg-primary/40 flex items-center justify-center animate-fade-in animation-delay-400 group cursor-pointer hover:border-highlight transition-colors">
            <div className="text-center p-6 transition-transform group-hover:scale-105">
              <div className="w-20 h-20 bg-red-600/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <PlayCircle className="w-10 h-10" />
              </div>
              <p className="text-slate-300 font-medium text-lg">Vídeo institucional</p>
              <p className="text-slate-500 text-sm mt-1">(adicionar link do YouTube)</p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Bottom Impact Numbers */}
      <div className="relative z-20 mt-auto bg-primary-dark/90 backdrop-blur-md border-t border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-primary/50 text-center">
            <AnimatedCounter targetString="44+" label="anos de atuação" />
            <AnimatedCounter targetString="40000+" label="atendimentos realizados" />
            <AnimatedCounter targetString="4000+" label="pessoas acolhidas diretamente" />
            <AnimatedCounter targetString="12000+" label="familiares beneficiados" />
          </div>
        </div>
      </div>
    </section>
  );
}
