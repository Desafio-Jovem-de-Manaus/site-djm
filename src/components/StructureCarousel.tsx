"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const images = [
  { url: "/Estrutura-fisica-1.jpeg", alt: "Estrutura do Desafio Jovem de Manaus 1" },
  { url: "/Estrutura-fisica-2.jpeg", alt: "Estrutura do Desafio Jovem de Manaus 2" },
  { url: "/Estrutura-fisica-3.jpeg", alt: "Estrutura do Desafio Jovem de Manaus 3" },
  { url: "/Estrutura-fisica-4.jpeg", alt: "Estrutura do Desafio Jovem de Manaus 4" },
  { url: "/Estrutura-fisica-5.jpeg", alt: "Estrutura do Desafio Jovem de Manaus 5" },
  { url: "/Estrutura-fisica-6.jpeg", alt: "Estrutura do Desafio Jovem de Manaus 6" },
  { url: "/Estrutura-fisica-7.jpeg", alt: "Estrutura do Desafio Jovem de Manaus 7" },
  { url: "/Estrutura-fisica-8.jpeg", alt: "Estrutura do Desafio Jovem de Manaus 8" },
  { url: "/Estrutura-fisica-9.jpeg", alt: "Estrutura do Desafio Jovem de Manaus 9" },
  { url: "/Estrutura-fisica-10.jpeg", alt: "Estrutura do Desafio Jovem de Manaus 10" },
  { url: "/Estrutura-fisica-11.jpeg", alt: "Estrutura do Desafio Jovem de Manaus 11" },
  { url: "/Estrutura-fisica-12.jpeg", alt: "Estrutura do Desafio Jovem de Manaus 12" },
  { url: "/Estrutura-fisica-13.jpeg", alt: "Estrutura do Desafio Jovem de Manaus 13" },
  { url: "/Estrutura-fisica-14.jpeg", alt: "Estrutura do Desafio Jovem de Manaus 14" },
  { url: "/Estrutura-fisica-15.jpeg", alt: "Estrutura do Desafio Jovem de Manaus 15" },
];

export default function StructureCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isHovering]);

  return (
    <div 
      className="relative w-full h-full min-h-[350px] md:min-h-[450px] rounded-3xl overflow-hidden group shadow-2xl"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Images Slider */}
      <div 
        className="flex transition-transform duration-700 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, idx) => (
          <div key={idx} className="min-w-full h-full relative">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-primary transition-all opacity-0 group-hover:opacity-100 hidden md:block"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-primary transition-all opacity-0 group-hover:opacity-100 hidden md:block"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === idx 
                ? "w-8 h-2 bg-highlight" 
                : "w-2 h-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Badge/Count */}
      <div className="absolute top-6 right-6 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-white text-xs font-bold tracking-widest border border-white/20">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
