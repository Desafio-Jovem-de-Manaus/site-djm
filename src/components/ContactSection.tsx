import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Entre em contato</h2>
          <p className="text-xl text-slate-600">Estamos de braços abertos para tirar suas dúvidas e receber sua visita.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Column 1: Form */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-primary-dark mb-8 flex items-center">
              <MessageSquare className="w-6 h-6 mr-3 text-primary" />
              Envie uma mensagem
            </h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">Nome completo</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Como devemos chamar você?" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">E-mail</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="seu@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1">Telefone</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="(xx) xxxxx-xxxx" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">Mensagem</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder="Escreva sua dúvida, sugestão ou interesse em colaborar..."></textarea>
              </div>

              <button type="button" className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-colors flex items-center justify-center shadow-lg shadow-teal-900/20">
                Enviar Mensagem
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>

          {/* Column 2: Info */}
          <div className="flex flex-col justify-center space-y-10">
            
            <div className="flex">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary-dark mb-2">Onde estamos</h4>
                <p className="text-slate-600 leading-relaxed">
                  Rua Fragata, 100 — Conj. Jardim Petrópolis<br />
                  Bairro Petrópolis — Manaus/AM<br />
                  CEP 69067-110
                </p>
                <div className="mt-3 inline-block bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-600">
                  <span className="font-bold text-slate-700">Ref:</span> Na rua da Gráfica Amazonas / Próximo ao Comando Geral da PM
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary-dark mb-2">Fale conosco</h4>
                <div className="space-y-3">
                  <p className="text-slate-600 flex items-center leading-relaxed">
                    <span className="font-bold w-40 pb-0.5 border-b border-slate-200 mr-2 text-primary-dark">Telefone Fixo:</span> 
                    <a href="tel:9233047704" className="hover:text-primary transition-colors">(92) 3304-7704</a>
                  </p>
                  <p className="text-slate-600 flex items-center leading-relaxed">
                    <span className="font-bold w-40 pb-0.5 border-b border-slate-200 mr-2 text-primary-dark">WhatsApp Geral:</span> 
                    <a href="https://wa.me/5592984446540" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">(92) 98444-6540</a>
                  </p>
                  <p className="text-slate-600 flex items-center leading-relaxed">
                    <span className="font-bold w-40 pb-0.5 border-b border-slate-200 mr-2 text-primary-dark">WhatsApp Acolhimento:</span> 
                    <a href="https://wa.me/5592984321699" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">(92) 98432-1699</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="pt-2">
                <h4 className="text-xl font-bold text-primary-dark mb-2">E-mail corporativo</h4>
                <a href="mailto:contato@desafiojovemmanaus.org.br" className="text-primary font-bold hover:underline">
                  contato@desafiojovemmanaus.org.br
                </a>
              </div>
            </div>

            <div className="flex">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary-dark mb-2">Horário de funcionamento</h4>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="font-medium">Administrativo:</span>
                    <span>Seg a Sex, 8h às 17h</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="font-medium">Público Externo:</span>
                    <span>Seg a Sex, 9h às 16h</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Acolhimento:</span>
                    <span className="font-bold text-primary">24 horas</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
