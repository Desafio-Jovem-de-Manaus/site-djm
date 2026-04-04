"use client";

import { allNews } from "@/data/news";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { useState, use } from "react";

const categoryColors: Record<string, string> = {
  "Ações Sociais": "bg-emerald-100 text-emerald-800",
  "Eventos":       "bg-blue-100 text-blue-800",
  "Institucional": "bg-purple-100 text-purple-800",
  "Campanhas":     "bg-yellow-100 text-yellow-800",
};

export default function NoticiaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const news = allNews.find((n) => n.slug === slug);

  if (!news) notFound();

  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [imgError, setImgError] = useState(false);

  const prevPhoto = () =>
    setCurrentPhoto((i) => (i === 0 ? news.galleryImages.length - 1 : i - 1));
  const nextPhoto = () =>
    setCurrentPhoto((i) => (i === news.galleryImages.length - 1 ? 0 : i + 1));

  const firstBlock = news.content.slice(0, 3);
  const secondBlock = news.content.slice(3);

  const badgeClass =
    categoryColors[news.category] ?? "bg-slate-100 text-slate-700";

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 py-20">

        {/* 1. Botão Voltar */}
        <Link
          href="/noticias"
          className="inline-flex items-center gap-1.5 text-sm text-[#30449C] hover:underline mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Voltar para notícias
        </Link>

        {/* 2. Cabeçalho */}
        <header className="mb-8">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${badgeClass}`}>
            {news.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-3">
            {news.title}
          </h1>
          <p className="text-sm text-slate-500">Publicado em {news.date}</p>
        </header>

        {/* 3. Foto principal */}
        <div className="mb-10 rounded-2xl overflow-hidden bg-slate-200 aspect-video flex items-center justify-center">
          {!imgError ? (
            <img
              src={news.mainImage}
              alt={news.title}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-slate-400 gap-3 p-12">
              <ImageIcon className="w-12 h-12" />
              <span className="text-sm font-medium">Imagem não disponível</span>
            </div>
          )}
        </div>

        {/* 4. Primeiro bloco de texto */}
        <div className="mb-10 space-y-5">
          {firstBlock.map((paragraph, i) => (
            <p key={i} className="text-lg text-slate-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* 5. Carrossel de fotos */}
        {news.galleryImages.length > 0 && (
          <div className="mb-10">
            <div className="relative rounded-xl overflow-hidden bg-slate-200 aspect-video">
              <img
                src={news.galleryImages[currentPhoto]}
                alt={`Foto ${currentPhoto + 1}`}
                className="w-full h-full object-cover transition-opacity duration-300"
              />

              {/* Seta esquerda */}
              <button
                onClick={prevPhoto}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Seta direita */}
              <button
                onClick={nextPhoto}
                aria-label="Próxima foto"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {news.galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPhoto(i)}
                  aria-label={`Ver foto ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    i === currentPhoto
                      ? "bg-[#30449C] scale-125"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* 6. Segundo bloco de texto */}
        {secondBlock.length > 0 && (
          <div className="mb-10 space-y-5">
            {secondBlock.map((paragraph, i) => (
              <p key={i} className="text-lg text-slate-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* 7. Divisor e rodapé da matéria */}
        <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500">
          Publicado em <strong>{news.date}</strong> | Categoria:{" "}
          <strong>{news.category}</strong>
        </footer>

      </div>
    </div>
  );
}
