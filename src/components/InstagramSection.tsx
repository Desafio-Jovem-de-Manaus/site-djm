import { Instagram } from "lucide-react";

export default function InstagramSection() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
            <Instagram className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Acompanhe nossas atividades</h2>
          <p className="text-xl text-slate-600">Siga o dia a dia da recuperação e do abrigo nas redes sociais.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Widget 1 */}
          <div className="bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-12 min-h-[400px]">
             <Instagram className="w-12 h-12 text-slate-300 mb-4" />
             <p className="text-slate-500 font-semibold text-center text-lg max-w-[200px]">Widget Instagram — Abordagem Social</p>
             <p className="text-sm text-slate-400 mt-2 font-mono">@desafiomanaus</p>
          </div>

          {/* Widget 2 */}
          <div className="bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-12 min-h-[400px]">
             <Instagram className="w-12 h-12 text-slate-300 mb-4" />
             <p className="text-slate-500 font-semibold text-center text-lg max-w-[200px]">Widget Instagram — Comunidade Terapêutica</p>
             <p className="text-sm text-slate-400 mt-2 font-mono">@comunidadeterap_djm</p>
          </div>

        </div>

      </div>
    </section>
  );
}
