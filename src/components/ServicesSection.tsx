import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Image as ImageIcon, PlayCircle } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">Serviços Institucionais</h2>
          <p className="text-xl text-slate-600">
            quatro motores de mudança para transformação de vidas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1: Comunidade Terapêutica */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
            <div className="h-[400px] bg-purple-900 flex items-center justify-center relative">
              <ImageIcon className="w-10 h-10 text-white/30 absolute" />
              <span className="text-white/60 font-medium z-10">[ Foto Comunidade Terapêutica ]</span>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            </div>
            <div className="p-8 flex-grow flex flex-col border-t-4 border-purple-700">
              <div className="text-purple-700 font-bold tracking-wider text-sm mb-2 uppercase">Comunidade Terapêutica</div>
              <h3 className="text-2xl font-bold text-primary-dark mb-2">Tratamento e recuperação desde 1985</h3>
              <p className="text-sm font-semibold text-slate-500 mb-4 pb-4 border-b border-slate-100">Projeto: Recuperação e Ressocialização Familiar</p>
              
              <p className="text-slate-600 mb-6 flex-grow">
                Tratamento voluntário para homens adultos dependentes de álcool e outras drogas, em regime de residência por 6 meses. Equipe multiprofissional com psicólogos, assistentes sociais e pedagoga. Programa inclui oficinas terapêuticas, atendimento psicológico individual, atividades físicas e esportivas, espiritualidade, alfabetização e reforço escolar, oficinas de iniciação profissional e Programa de Prevenção à Recaída.
              </p>

              <div className="bg-purple-50 p-4 rounded-xl mb-6">
                <p className="text-sm font-bold text-purple-900 mb-2">Impacto em 2024</p>
                <p className="text-sm text-purple-800 leading-relaxed">
                  27 acolhimentos realizados <span className="mx-1">•</span> 50 triagens <span className="mx-1">•</span> 237 familiares atendidos no Grupo de Apoio Familiar <span className="mx-1">•</span> 37% concluíram o programa com sucesso
                </p>
              </div>

              <div className="w-full h-32 bg-slate-100 rounded-xl border border-dashed border-slate-300 flex items-center justify-center mb-6 text-slate-500">
                <PlayCircle className="w-6 h-6 mr-2" />
                <span className="text-sm font-medium">[ Vídeo sobre o programa de recuperação ]</span>
              </div>

              <Link href="/dep-quimica" className="mt-auto inline-flex items-center text-purple-700 font-bold hover:text-purple-900 transition-colors">
                Saiba mais <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Card 2: Abrigo Institucional */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
            <div className="h-[400px] bg-blue-800 flex items-center justify-center relative">
              <ImageIcon className="w-10 h-10 text-white/30 absolute" />
              <span className="text-white/60 font-medium z-10">[ Foto Abrigo Institucional ]</span>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            </div>
            <div className="p-8 flex-grow flex flex-col border-t-4 border-blue-600">
              <div className="text-blue-700 font-bold tracking-wider text-sm mb-2 uppercase">Abrigo Institucional</div>
              <h3 className="text-2xl font-bold text-primary-dark mb-2">Acolher para Viver — desde 2018</h3>
              <p className="text-sm font-semibold text-slate-500 mb-4 pb-4 border-b border-slate-100">Projeto: Ressocialização Familiar e Comunitária — Acolher para Viver</p>
              
              <p className="text-slate-600 mb-6 flex-grow">
                Acolhimento institucional para homens adultos (18-59 anos) em situação de rua, desabrigo por moradia, trânsito e sem condições de autossustento. Oferece proteção integral, convivência comunitária, atendimento psicossocial, oficinas profissionalizantes (barbearia, massas, artes), alfabetização, atividades desportivas e encaminhamentos para a rede socioassistencial e SUS.
              </p>

              <div className="bg-blue-50 p-4 rounded-xl mb-6">
                <p className="text-sm font-bold text-blue-900 mb-2">Impacto em 2024</p>
                <p className="text-sm text-blue-800 leading-relaxed">
                  51 acolhimentos <span className="mx-1">•</span> 815 atendimentos psicossociais <span className="mx-1">•</span> 838 encaminhamentos para rede SUAS/SUS <span className="mx-1">•</span> 71% restabeleceram contato familiar <span className="mx-1">•</span> Capacidade: 25 vagas simultâneas
                </p>
              </div>

              <div className="w-full h-32 bg-slate-100 rounded-xl border border-dashed border-slate-300 flex items-center justify-center mb-6 text-slate-500">
                <PlayCircle className="w-6 h-6 mr-2" />
                <span className="text-sm font-medium">[ Vídeo sobre o Abrigo ]</span>
              </div>

              <Link href="/social" className="mt-auto inline-flex items-center text-blue-700 font-bold hover:text-blue-900 transition-colors">
                Saiba mais <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Card 3: Abordagem Social */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
            <div className="h-[400px] bg-orange-600 flex items-center justify-center relative">
              <ImageIcon className="w-10 h-10 text-white/30 absolute" />
              <span className="text-white/60 font-medium z-10">[ Foto Abordagem Social ]</span>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            </div>
            <div className="p-8 flex-grow flex flex-col border-t-4 border-orange-500">
              <div className="text-orange-600 font-bold tracking-wider text-sm mb-2 uppercase">Abordagem Social</div>
              <h3 className="text-2xl font-bold text-primary-dark mb-2">Braços Abertos — desde 2015</h3>
              <p className="text-sm font-semibold text-slate-500 mb-4 pb-4 border-b border-slate-100">Projeto: Braços Abertos na Perspectiva da Garantia de Direitos</p>
              
              <p className="text-slate-600 mb-6 flex-grow">
                Serviço especializado de busca ativa nas ruas, praças e espaços públicos de Manaus. A equipe realiza escuta qualificada, encaminhamentos para a rede socioassistencial, ações socioeducativas, de sensibilização, cidadania e resolução de necessidades imediatas para pessoas em situação de rua.
              </p>

              <div className="bg-orange-50 p-4 rounded-xl mb-6">
                <p className="text-sm font-bold text-orange-900 mb-2">Impacto em 2024</p>
                <p className="text-sm text-orange-800 leading-relaxed">
                  78 identificados em situação de rua <span className="mx-1">•</span> 43 retirados das ruas <span className="mx-1">•</span> 1.206 em ações de sensibilização <span className="mx-1">•</span> 432 em ações socioeducativas <span className="mx-1">•</span> 337 em cidadania <span className="mx-1">•</span> 238 necessidades imediatas resolv. <span className="mx-1">•</span> 100 encaminhamentos <span className="mx-1">•</span> 61 articulações de rede
                </p>
              </div>

              <div className="w-full h-32 bg-slate-100 rounded-xl border border-dashed border-slate-300 flex items-center justify-center mb-6 text-slate-500">
                <PlayCircle className="w-6 h-6 mr-2" />
                <span className="text-sm font-medium">[ Vídeo Projeto Braços Abertos ]</span>
              </div>

              <Link href="/social" className="mt-auto inline-flex items-center text-orange-600 font-bold hover:text-orange-800 transition-colors">
                Saiba mais <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Card 4: Comunidade Eficiente */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
            <div className="h-[400px] bg-primary flex items-center justify-center relative overflow-hidden">
              <img src="/Comunidade%20Eficiente%20-%201.png" alt="Comunidade Eficiente" className="absolute inset-0 w-full h-full object-cover z-0" loading="lazy" />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
            </div>
            <div className="p-8 flex-grow flex flex-col border-t-4 border-primary">
              <div className="text-primary font-bold tracking-wider text-sm mb-2 uppercase">Comunidade Eficiente</div>
              <h3 className="text-2xl font-bold text-primary-dark mb-2">Fortalecimento de vínculos comunitários</h3>
              <p className="text-sm font-semibold text-slate-500 mb-4 pb-4 border-b border-slate-100">Projeto: Comunidade Eficiente — COMEFI</p>
              
              <p className="text-slate-600 mb-6 flex-grow">
                Serviço de Convivência e Fortalecimento de Vínculos voltado para famílias em situação de vulnerabilidade social no entorno da instituição. Realiza oficinas de capacitação profissional (produção de massas, empreendedorismo), palestras de prevenção, apoio alimentar e ações comunitárias. Foco especial no protagonismo feminino e na autonomia econômica.
              </p>

              <div className="bg-blue-50 p-4 rounded-xl mb-6">
                <p className="text-sm font-bold text-primary-dark mb-2">Impacto em 2024</p>
                <p className="text-sm text-blue-800 leading-relaxed">
                  20 famílias assistidas (52 pessoas) <span className="mx-1">•</span> 4 oficinas de iniciação profissional <span className="mx-1">•</span> 4 oficinas de empreendedorismo <span className="mx-1">•</span> 70 crianças atendidas no Dia das Crianças <span className="mx-1">•</span> 100% dos cadastros são mulheres chefes de família
                </p>
              </div>

              <div className="w-full h-32 bg-slate-100 rounded-xl border border-dashed border-slate-300 flex items-center justify-center mb-6 text-slate-500">
                <PlayCircle className="w-6 h-6 mr-2" />
                <span className="text-sm font-medium">[ Vídeo Comunidade Eficiente ]</span>
              </div>

              <Link href="/social" className="mt-auto inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors">
                Saiba mais <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
