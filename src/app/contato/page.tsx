import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";

export default function ContatoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pt-32 pb-24">
      {/* Header da Página */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-4 animate-fade-in">
          Entre em contato
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto animate-fade-in animation-delay-100">
          Estamos de braços abertos para tirar suas dúvidas e receber sua visita.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
        
        {/* Coluna Esquerda — Formulário "Envie uma mensagem" */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 animate-slide-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-primary-dark">Envie uma mensagem</h2>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                Nome completo
              </label>
              <input
                type="text"
                id="name"
                placeholder="Como devemos chamar você?"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Telefone
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="(xx) xxxxx-xxxx"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Escreva sua dúvida, sugestão ou interesse em colaborar..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
            >
              Enviar Mensagem
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Coluna Direita — Informações de contato */}
        <div className="space-y-8 animate-slide-up animation-delay-200">
          
          {/* Bloco 1 — Onde estamos */}
          <div className="flex gap-6 group">
            <div className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center shadow-lg border border-slate-100 flex-shrink-0 group-hover:scale-110 transition-transform">
              <MapPin className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">Onde estamos</h3>
              <div className="text-slate-600 leading-relaxed uppercase tracking-wider text-sm font-medium">
                <p>Rua Fragata, 100 — Conj. Jardim Petrópolis</p>
                <p>Bairro Petrópolis — Manaus/AM</p>
                <p>CEP 69067-110</p>
              </div>
              <div className="mt-3 inline-block px-3 py-1 bg-blue-50 text-primary border border-teal-100 rounded-full text-xs font-bold uppercase tracking-widest">
                Ref: Na rua da Gráfica Amazonas / Próximo ao Comando Geral da PM
              </div>
            </div>
          </div>

          {/* Bloco 2 — Fale conosco */}
          <div className="flex gap-6 group">
            <div className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center shadow-lg border border-slate-100 flex-shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">Fale conosco</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Telefone Fixo</p>
                  <p className="text-slate-700 font-bold">(92) 3304-7704</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Geral (Whats)</p>
                  <p className="text-slate-700 font-bold">(92) 98412-4324 / 98160-1574</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Serviço Social</p>
                  <p className="text-slate-700 font-bold">(92) 98444-6540 / 98432-1699</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bloco 3 — E-mail corporativo */}
          <div className="flex gap-6 group">
            <div className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center shadow-lg border border-slate-100 flex-shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">E-mail corporativo</h3>
              <p className="text-slate-700 font-bold text-lg">desafiojovemmanaus@gmail.com</p>
            </div>
          </div>

          {/* Bloco 4 — Horário de funcionamento */}
          <div className="flex gap-6 group">
            <div className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center shadow-lg border border-slate-100 flex-shrink-0 group-hover:scale-110 transition-transform">
              <Clock className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">Horário de funcionamento</h3>
              <div className="space-y-2">
                <div className="flex justify-between w-full max-w-xs border-b border-dashed border-slate-200 pb-1">
                  <span className="text-slate-500 font-medium tracking-wide">Administrativo:</span>
                  <span className="text-primary-dark font-bold">Seg a Sex, 8h às 17h</span>
                </div>
                <div className="flex justify-between w-full max-w-xs border-b border-dashed border-slate-200 pb-1">
                  <span className="text-slate-500 font-medium tracking-wide">Público Externo:</span>
                  <span className="text-primary-dark font-bold">Seg a Sex, 9h às 16h</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
