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
      <div className="absolute inset-0 z-0">
        <img 
          src="/Home-Imagem%20-de-Fundo-3.jpeg" 
          alt="Fundo Institucional" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent"></div>
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
              Somos uma Organização da Sociedade Civil de base cristã, dedicada à prevenção, acolhimento, recuperação e reinserção social de pessoas em situação de vulnerabilidade, dependência química e situação de rua.
              <br/><br/>
              Desde a nossa fundação, temos atuado de forma contínua na promoção da dignidade humana, já tendo realizado mais de 40.000 atendimentos e impactado diretamente milhares de vidas e famílias no estado do Amazonas.
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

          <div className="w-full aspect-video rounded-2xl overflow-hidden border-4 border-primary/50 shadow-2xl relative bg-black flex items-center justify-center animate-fade-in animation-delay-400">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/VP5ZThcbB_Q?rel=0" 
              title="Vídeo Institucional Desafio Jovem de Manaus" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
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
