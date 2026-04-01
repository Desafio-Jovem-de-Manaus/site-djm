"use client";

import Link from "next/link";
import React from "react";

export interface ServiceSidebarProps {
  items: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  }[];
  currentPath: string; // para destacar o item ativo
}

export default function ServiceSidebar({ items, currentPath }: ServiceSidebarProps) {
  return (
    <div className="lg:sticky lg:top-32 w-full lg:w-auto z-20">
      
      {/* Menu mobile (Horizontal Scroll) */}
      <div className="flex overflow-x-auto lg:hidden gap-3 pb-4 mb-6 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
        {items.map((item, idx) => {
          const isActive = currentPath === item.href;
          return (
            <Link
              key={idx}
              href={item.href}
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
            </Link>
          );
        })}
      </div>

      {/* Menu Desktop (Vertical empilhado) */}
      <div className="hidden lg:flex flex-col space-y-2">
        {items.map((item, idx) => {
          const isActive = currentPath === item.href;
          return (
            <Link
              key={idx}
              href={item.href}
              className={`flex items-center p-3 rounded-lg transition-all font-semibold ${
                isActive 
                  ? "bg-white shadow-sm text-primary ring-1 ring-slate-100" 
                  : "text-slate-600 hover:bg-white hover:shadow-sm hover:text-primary"
              }`}
            >
              {item.icon && (
                <span className={`mr-3 flex items-center [&>svg]:w-5 [&>svg]:h-5 ${isActive ? 'text-primary' : 'text-slate-500'}`}>
                  {item.icon}
                </span>
              )}
              {item.label}
            </Link>
          );
        })}
      </div>
      
    </div>
  );
}
