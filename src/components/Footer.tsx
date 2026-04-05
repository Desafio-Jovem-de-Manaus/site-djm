import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <Link href="/" className="inline-block">
                <img 
                  src="/Logo-Desafio-Branco.png" 
                  alt="Desafio Jovem de Manaus" 
                  className="h-20 w-auto object-contain drop-shadow-sm"
                />
              </Link>
            </div>
            <p className="text-slate-400 text-sm max-w-md mb-6">
              Organização da Sociedade Civil dedicada desde 1981 à prevenção, recuperação e reinserção social de jovens e adultos dependentes químicos em Manaus e em todo o Amazonas.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary/50 border border-primary rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/50 border border-primary rounded-full flex items-center justify-center hover:bg-accent hover:border-accent transition-all hover:text-white"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center border-l-4 border-highlight pl-3 bg-primary/50 py-1 shadow-sm">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/quem-somos" className="text-blue-100 hover:text-highlight transition-colors font-medium">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/o-que-fazemos" className="text-blue-100 hover:text-highlight transition-colors font-medium">
                  O que fazemos
                </Link>
              </li>
              <li>
                <Link href="/transparencia" className="text-blue-100 hover:text-highlight transition-colors font-medium">
                  Transparência
                </Link>
              </li>
              <li>
                <Link href="/como-ajudar" className="text-blue-100 hover:text-highlight transition-colors font-medium">
                  Como ajudar
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-blue-100 hover:text-highlight transition-colors font-medium">
                  Perguntas Frequentes (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center border-l-4 border-highlight pl-3 bg-primary/50 py-1 shadow-sm">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                <span className="text-blue-100 text-sm font-medium">
                  Rua Fragata, 100 — Conj. Jardim Petrópolis<br />
                  Bairro Petrópolis — Manaus/AM<br />
                  CEP: 69067-110
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                <span className="text-blue-100 text-sm font-medium flex flex-col gap-1">
                  <span>(92) 3304-7704</span>
                  <span>(92) 98412-4324 / 98160-1574 (Whats)</span>
                  <span>(92) 98444-6540 / 98432-1699 (Social)</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent-light flex-shrink-0" />
                <span className="text-blue-100 text-sm font-medium">desafiojovemmanaus@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-accent-light flex-shrink-0 mt-0.5" />
                <span className="text-blue-100 text-sm font-medium flex flex-col gap-1">
                  <span>Administrativo: Seg a Sex, 8h às 17h</span>
                  <span>Público Externo: Seg a Sex, 9h às 16h</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/50 mt-12 pt-8 text-center md:flex md:justify-between md:text-left text-blue-200/60 text-sm font-medium">
          <p>© {currentYear} Desafio Jovem de Manaus. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 text-blue-200">Organização sem fins lucrativos desenvolvendo vidas.</p>
        </div>
      </div>
    </footer>
  );
}
/*  */