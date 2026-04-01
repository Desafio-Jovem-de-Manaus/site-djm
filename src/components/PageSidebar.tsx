"use client";

import React, { useEffect, useState } from "react";

export interface SidebarItem {
  label: string;
  anchor: string; // ID da seção na página (sem o #)
  icon?: React.ReactNode;
}

export interface PageSidebarProps {
  items: SidebarItem[];
}

export default function PageSidebar({ items }: PageSidebarProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Definimos o observer
    const observer = new IntersectionObserver(
      (entries) => {
        // Encontra a entrada que mais está visível na tela
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px", // Margem para detectar o elemento na parte visível superior
        threshold: 0,
      }
    );

    // Observa todas as seções mapeadas pelos IDs nos items
    items.forEach((item) => {
      const element = document.getElementById(item.anchor);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [items]);

  return (
    <div className="lg:sticky lg:top-32 w-full lg:w-auto z-20">
      
      {/* Menu mobile (Horizontal Scroll) */}
      <div className="flex overflow-x-auto lg:hidden gap-3 pb-4 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide border-b border-slate-200">
        {items.map((item, idx) => {
          const isActive = activeId === item.anchor;
          return (
            <a
              key={idx}
              href={`#${item.anchor}`}
              className={`flex-shrink-0 flex items-center px-4 py-3 rounded-xl transition-all font-semibold whitespace-nowrap ${
                isActive 
                  ? "bg-white shadow-sm text-primary border border-slate-100 ring-1 ring-primary/10" 
                  : "bg-slate-100/50 text-slate-600 hover:bg-white hover:shadow-sm hover:text-primary border border-transparent"
              }`}
            >
              {item.icon && (
                <span className={`mr-2 flex items-center [&>svg]:w-4 [&>svg]:h-4 ${isActive ? 'text-primary' : 'text-slate-400'}`}>
                  {item.icon}
                </span>
              )}
              {item.label}
            </a>
          );
        })}
      </div>

      {/* Menu Desktop (Vertical empilhado) */}
      <div className="hidden lg:flex flex-col space-y-2">
        {items.map((item, idx) => {
          const isActive = activeId === item.anchor;
          return (
            <a
              key={idx}
              href={`#${item.anchor}`}
              className={`flex items-center p-3 rounded-lg transition-all font-semibold ${
                isActive 
                  ? "bg-white shadow-sm text-primary ring-1 ring-slate-100 shadow-primary/5" 
                  : "text-slate-600 hover:bg-white hover:shadow-sm hover:text-primary"
              }`}
            >
              {item.icon && (
                <span className={`mr-3 flex items-center [&>svg]:w-5 [&>svg]:h-5 transition-colors ${isActive ? 'text-primary' : 'text-slate-400'}`}>
                  {item.icon}
                </span>
              )}
              {item.label}
            </a>
          );
        })}
      </div>
      
    </div>
  );
}
