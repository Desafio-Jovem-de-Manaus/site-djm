"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

type SubItem = { name: string; href: string };
type NavItem = {
  name: string;
  href?: string;
  isButton?: boolean;
  subItems: SubItem[];
};

const navigation: NavItem[] = [
  {
    name: "Quem somos",
    href: "/quem-somos",
    subItems: [
      { name: "Histórico", href: "/quem-somos#historico" },
      { name: "Diretoria", href: "/quem-somos#diretoria" },
      { name: "Equipe de trabalho", href: "/quem-somos#equipe" },
      { name: "Estrutura física", href: "/quem-somos#estrutura" },
      { name: "Missão e Valores", href: "/quem-somos#missao" },
      { name: "Prêmios e homenagens", href: "/quem-somos#premios" },
    ],
  },
  {
    name: "O que fazemos",
    href: "/o-que-fazemos",
    subItems: [
      { name: "Dependência química", href: "/dep-quimica" },
      { name: "Assistência social", href: "/social" },
    ],
  },
  {
    name: "Transparência",
    href: "/transparencia",
    subItems: [
      { name: "Prestação de contas", href: "/transparencia#prestacao-contas" },
      { name: "Relatórios anuais", href: "/transparencia#relatorios" },
      { name: "Documentos institucionais", href: "/transparencia#documentos" },
      { name: "Convênios e parcerias", href: "/transparencia#convenios" },
      { name: "Lei 13.019/2014", href: "/transparencia#legislacao" },
    ],
  },
  {
    name: "Como ajudar",
    href: "/como-ajudar",
    isButton: true,
    subItems: [
      { name: "Doações materiais", href: "/como-ajudar#doacoes" },
      { name: "Doação financeira", href: "/como-ajudar#financeiro" },
      { name: "Voluntariado", href: "/como-ajudar#voluntariado" },
      { name: "Estágios", href: "/como-ajudar#estagios" },
      { name: "Doe seu tempo", href: "/como-ajudar#voluntariado" },
      { name: "Parcerias empresariais", href: "/como-ajudar#parcerias" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMobileSubmenu = (name: string) => {
    setOpenMobileMenu(openMobileMenu === name ? null : name);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img 
              src="/Logo-Desafio-Azul.png" 
              alt="Desafio Jovem de Manaus" 
              className="h-16 w-auto object-contain drop-shadow-sm" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center h-full">
            {navigation.map((item) => {
              const Content = () => (
                <span className={`flex items-center transition-colors duration-200 ${
                  item.isButton 
                    ? "px-5 py-2.5 bg-accent text-white hover:bg-accent-light rounded-lg font-bold"
                    : "text-primary-dark hover:text-primary font-medium"
                }`}>
                  {item.name}
                  <ChevronDown className={`w-4 h-4 ml-1 ${item.isButton ? "text-white" : "text-slate-400"}`} />
                </span>
              );

              return (
                <div key={item.name} className="relative group h-full flex items-center px-3">
                  {item.href ? (
                    <Link href={item.href} className="peer flex items-center h-full" onClick={() => setIsOpen(false)}>
                      <Content />
                    </Link>
                  ) : (
                    <button className="peer flex items-center h-full cursor-pointer">
                      <Content />
                    </button>
                  )}

                  {/* Desktop Dropdown via Group Hover */}
                  <div className="absolute top-[80px] left-3 hidden group-hover:block w-64 bg-white border border-slate-100 shadow-xl rounded-xl overflow-hidden transition-all duration-300 transform origin-top">
                    {/* Invisible spacer to prevent hover loss */}
                    <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>
                    <div className="flex flex-col py-2">
                      {item.subItems.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.href}
                          className="px-5 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 max-h-[80vh] overflow-y-auto shadow-inner absolute w-full">
          <div className="flex flex-col px-4 py-4 space-y-2">
            {navigation.map((item) => {
              const isExpanded = openMobileMenu === item.name;
              
              return (
                <div key={item.name} className="flex flex-col border-b border-slate-50 last:border-0 pb-2">
                  <div className="flex justify-between items-center w-full">
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex-1 py-3 text-lg font-semibold ${
                          item.isButton ? "text-accent" : "text-primary-dark"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="flex-1 py-3 text-lg font-semibold text-primary-dark">
                        {item.name}
                      </span>
                    )}
                    
                    <button 
                      onClick={() => toggleMobileSubmenu(item.name)}
                      className="p-3 text-slate-500 bg-slate-50 hover:bg-slate-100 rounded-lg"
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </button>
                  </div>

                  {/* Mobile Dropdown */}
                  {isExpanded && (
                    <div className="flex flex-col pl-4 py-2 space-y-3 bg-slate-50 rounded-lg mt-2 px-3">
                      {item.subItems.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.href}
                          className="text-slate-600 py-2 border-l-2 border-transparent hover:border-primary hover:text-primary pl-2 transition-all"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
