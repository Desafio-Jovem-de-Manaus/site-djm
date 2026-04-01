import Link from "next/link";
import { Heart, PlayCircle, HandHeart, Briefcase, GraduationCap } from "lucide-react";

export default function HelpSection() {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Graphic Pattern */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-dark rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-[30rem] h-[30rem] bg-accent rounded-full opacity-10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm mb-8 font-medium">
              <Heart className="w-4 h-4 text-rose-300 mr-2" fill="currentColor" />
              Sua doação faz a diferença
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Ajude a transformar vidas</h2>
            
            <p className="text-lg md:text-xl text-blue-50 mb-6 leading-relaxed">
              O Desafio Jovem de Manaus realiza, anualmente, cerca de 120 acolhimentos institucionais, além de alcançar milhares de pessoas por meio de ações de abordagem social e projetos comunitários.
            </p>
            
            <div className="bg-primary-dark/50 border-l-4 border-highlight p-6 rounded-r-xl mb-8">
              <p className="text-base font-semibold leading-relaxed mb-4">
                O perfil dos atendidos evidencia a importância da atuação institucional:
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>69% não possuem renda fixa;</li>
                <li>81% encontram-se desempregados;</li>
                <li>47% possuem ensino fundamental incompleto.</li>
              </ul>
              <p className="text-base font-semibold leading-relaxed text-rose-200">
                Esses dados reforçam a necessidade de ações contínuas voltadas à inclusão social e ao resgate da dignidade humana.
              </p>
            </div>

            <div className="mb-10 bg-white/10 p-6 rounded-xl border border-white/20">
              <p className="font-bold text-lg mb-3">Sua contribuição é fundamental para a continuidade e ampliação desses serviços.</p>
              <p className="text-blue-100 font-medium">
                Ao apoiar o Desafio Jovem de Manaus, você participa diretamente da transformação de vidas e do fortalecimento de comunidades em situação de vulnerabilidade na Amazônia.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/como-ajudar" className="flex items-center px-6 py-4 bg-white text-primary-dark hover:bg-highlight font-bold rounded-xl transition-colors shadow-xl">
                <HandHeart className="w-5 h-5 mr-3" />
                Fazer uma doação
              </Link>
              <Link href="/como-ajudar#voluntariado" className="flex items-center px-6 py-4 bg-primary-dark hover:bg-black/20 text-white border border-white/20 font-bold rounded-xl transition-all">
                <Heart className="w-5 h-5 mr-3" />
                Ser voluntário
              </Link>
              <Link href="/como-ajudar#estagios" className="flex items-center px-6 py-4 bg-primary-dark hover:bg-black/20 text-white border border-white/20 font-bold rounded-xl transition-all">
                <GraduationCap className="w-5 h-5 mr-3" />
                Estágios
              </Link>
              <Link href="/como-ajudar#parcerias" className="flex items-center px-6 py-4 bg-primary-dark hover:bg-black/20 text-white border border-white/20 font-bold rounded-xl transition-all">
                <Briefcase className="w-5 h-5 mr-3" />
                Parcerias empresariais
              </Link>
            </div>
          </div>

          <div className="w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative bg-primary-dark border-8 border-white/10 flex flex-col items-center justify-center group cursor-pointer hover:border-white/20 transition-all">
            <PlayCircle className="w-16 h-16 text-white/50 mb-4 group-hover:scale-110 transition-transform" />
            <p className="text-white/80 font-medium text-lg px-8 text-center">[ Vídeo sobre necessidades / como ajudar ]</p>
          </div>

        </div>
        
      </div>
    </section>
  );
}
