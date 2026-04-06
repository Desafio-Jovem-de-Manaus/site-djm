import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import PageSidebar from "@/components/PageSidebar";
import { 
  MessageCircleQuestion, Building2, 
  HeartHandshake, Bookmark, AlertCircle,
  Pill, HandHeart, Heart, Building
} from "lucide-react";

export default function FAQPage() {
  const sidebarItems = [
    { label: "Dependência química", anchor: "faq-dep-quimica", icon: <Pill className="w-5 h-5" /> },
    { label: "Assistência social", anchor: "faq-social", icon: <HandHeart className="w-5 h-5" /> },
    { label: "Como ajudar", anchor: "faq-como-ajudar", icon: <Heart className="w-5 h-5" /> },
    { label: "Sobre a instituição", anchor: "faq-instituicao", icon: <Building className="w-5 h-5" /> },
  ];

  const faqCT = [
    { question: "Como funciona o tratamento?", answer: "O tratamento é voluntário, com duração rígida estipulada em 6 meses em regime totalmente residencial (in-loco). A pessoa é amparada por equipe multiprofissional, faz oficinas laborais diárias terapêuticas e integra-se no Programa Familiar GAF." },
    { question: "Quem pode ser acolhido na clínica?", answer: "Restringe-se inteiramente a Homens a partir de 18 até 59 anos, dependentes crônicos ou não de álcool e/ou outras drogas de abuso. Reforçamos: sempre pautado na vontade prória do residente." },
    { question: "O serviço tem grande custo mensal?", answer: "O acolhimento pode ser enquadrado de forma particular (integral ou parcial). Há constante possibilidade flexível de aberturas de Vagas Sociais públicas limpas de custo quando há lotes de convênios abertos e vagos vigentes do Governo." },
    { question: "Como solicitar uma vaga ou internação?", answer: "Ligue imediatamente e agende sua vaga conversando por voz através do telefone (92) 3304-7704 ou se preferir digite sem medo no WhatsApp de triagem 24 horas: (92) 98444-6540." },
    { question: "A família pode de fato participar do tratamento?", answer: "Sim! Não apenas pode, como é a espinha dorsal. A participação ocorre através do grandioso 'Grupo de Apoio Familiar (GAF)', o qual impõe reuniões mensais fixas terapêuticas de reestruturação de laços com esposas e mães." },
  ];

  const faqAbrigo = [
    { question: "Quem exatamente pode ser abrigado gratuitamente?", answer: "Foco absoluto no resgate vital de Homens robustos entre 18 a 59 anos de idade estagnados em situação aguda de rua, desabrigo provisório ou impossibilitados temporariamente de prover próprio teto e autossustento civil." },
    { question: "Como chegar até a porta do abrigo?", answer: "Majoritariamente pelas rotas de encaminhamento da rede Estatal gigante do SUAS (como papeladas do CRAS, triagem no CREAS, guias do Centro POP ou viaturas de Abordagem Social), ou mesmo batendo o paciente na porta de demanda espontânea." },
    { question: "O que ganho ou o que o abrigo me oferece de verdade?", answer: "O resgate de volta da dignidade: Proteção institucional integral 24 horas ininterruptas, pratos de alimentação quente, assepsia (higiene), colchão de guarita, acompanhamento psicológico cível, laborterapia engrenada em oficinas de profissão crua, e passaporte (encaminhamentos) para recuperar os velhos documentos no PAC e saúde perdida via SUS." },
  ];

  const faqRuas = [
    { question: "O que de fato é a Tropa de 'Braços Abertos'?", answer: "É o nosso Serviço primário especializado de 'Busca Ativa'. Nossa van transita calada de madrugada nas avenidas marginais, praças e viadutos de Manaus identificando a olho as pessoas jogadas ao acaso em estado letal, oferecendo escuta humanizada, e ofertando um resgate logístico seguro de encaminhamento aos polos estatais." },
    { question: "Posso solicitar que a Viatura busque uma pessoa deitada na minha rua?", answer: "Sem sombra de dúvidas. Basta bater foto ou anotar endereço cru da pessoa vulnerável e acionar a base remota pelo número direto do WhatsApp: (92) 98444-6540." },
    { question: "Aonde essa Kombi atua primordialmente?", answer: "Cortamos a madrugada prioritariamente nas ruas das densas Zonas Sul e engrenagem Central de Manaus. Os pontos clássicos são a popular Feira da Panair marginal, leito da famosa Praça dos Remédios, becos no cruzamento da Praça da Matriz, lotes perigosos da extensa Manaus Moderna e entorno raiz do grandioso Centro POP Municipal sob coordenação do bairro Petrópolis." },
  ];

  const faqAjuda = [
    { question: "Estou ansioso, como faço pra injetar R$ financeiro hoje?", answer: "Todas as suas vias generosas de doações (Listas Pix, chaves primárias ou transferência nominal direta da Conta Base) se escondem com maestria lá dentro da Aba centralizada do menu 'Como Ajudar'. Confie, é super simples e estopim rápido de alívio social!" },
    { question: "Vocês recebem caixas com velhas camisas usadas?", answer: "Ótima e salvadora pergunta. Sim! Nós captamos camisas, sapatos, e calças, desde que sejam focados estritamente na roupagem Masculina adulta e ainda aguentem as intempéries." },
    { question: "Como faço pra ir suar e varrer chão com vocês como motor solidário?", answer: "Você preenche os simples campos cegos do formulário estático de 'Voluntariado' no topo da via online 'Como Ajudar', ou nos remete um email simples e rústico de declaração p/: contato@desafiojovemmanaus.org.br." },
  ];

  const faqInstituicao = [
    { question: "Vocês exigem ser evangélico/católico para ser curado?", answer: "De maneira alguma! O Desafio Jovem é uma Associação OSC puramente cível, laica e não possui fins engajadores de lucro atrelado. Apesar de nossa inspiração de vida ser guiada no Cristo Bíblico, os atendimentos aos pacientes, a comida fria doada, e o asilo terapêutico não seleciona credos; atendemos muçulmanos, irreligiosos, todos com excelência neutra!" },
    { question: "Qual o Ponto Geográfico e GPS para visitas?", answer: "Anote ou cole no Maps: Estacionamento principal localizado na Rua Fragata, logradouro 100 — Conj. Jardim Petrópolis — Bairro denso e seguro de Petrópolis, Manaus/Amazonas. Ponto forte base de Orientação: O Prédio encontra-se praticamente anexado às ruas do Comando Geral Militar da Polícia do Estado! (Aviso Seguro)" },
    { question: "Qual o horário logístico das engrenagens da casa?", answer: "Escrituração e Administração pura e Cível: Segundas à Sextas estritas, correndo das 08h matinais e fechando a guilhotina nas 17h solares.\nAtendimento Expresso (Exterior) das portas rotativas: Iniciam-se abertas às 09h e cruzam o muro fechando 17h.\n Acolhimento Físico Primário de Vidas no Polo C.T e Moradia do Teto: A fábrica da vida funciona sem fechar os olhos 24 horas por dia girando na engrenagem!" },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-slate-50">
      
      {/* Hero FAQ */}
      <section className="bg-primary-dark border-b-8 border-primary py-24 relative overflow-hidden">
        <div className="absolute -top-40 -right-20 opacity-5 mix-blend-overlay">
           <MessageCircleQuestion className="w-[800px] h-[800px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-xl">Perguntas Frequentes (FAQ)</h1>
          <p className="text-xl md:text-2xl text-teal-200 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow">Tire suas últimas dúvidas sobre o funcionamento incansável da nossa instituição.</p>
        </div>
      </section>

      {/* Main Layout Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 relative">
            
            {/* Sidebar Sticky de Navegação */}
            <div className="lg:col-span-3">
              <PageSidebar items={sidebarItems} />
            </div>

            {/* Coluna Principal de Accordions */}
            <div className="lg:col-span-9 space-y-20 pb-20">

              {/* Box 1 (C.T) - Dependência Química */}
              <section id="faq-dep-quimica" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm scroll-mt-32">
                <h2 className="text-3xl font-black text-primary-dark mb-8 pb-4 border-b-2 border-slate-100 flex items-center">
                  <Pill className="w-8 h-8 mr-4 text-primary" /> Dependência Química
                </h2>
                <div className="space-y-4">
                  {faqCT.map((faq, i) => <FAQAccordion key={i} question={faq.question} answer={faq.answer} />)}
                </div>
              </section>

              {/* Box 2 (Abrigo & Abordagem) - Assistência Social */}
              <section id="faq-social" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm scroll-mt-32">
                <h2 className="text-3xl font-black text-primary-dark mb-8 pb-4 border-b-2 border-slate-100 flex items-center">
                  <HandHeart className="w-8 h-8 mr-4 text-blue-600" /> Assistência Social
                </h2>
                
                {/* SubCategoria Abrigo */}
                <h3 className="text-xl font-bold text-slate-700 mt-6 mb-4 flex items-center">
                   <Building2 className="w-5 h-5 mr-3 text-slate-400" /> Sobre o Abrigo Institucional
                </h3>
                <div className="space-y-4 mb-10">
                  {faqAbrigo.map((faq, i) => <FAQAccordion key={`ab-${i}`} question={faq.question} answer={faq.answer} />)}
                </div>

                {/* SubCategoria Ruas */}
                <h3 className="text-xl font-bold text-slate-700 mt-6 mb-4 flex items-center">
                   <AlertCircle className="w-5 h-5 mr-3 text-orange-400" /> Sobre a Abordagem Noturna
                </h3>
                <div className="space-y-4">
                  {faqRuas.map((faq, i) => <FAQAccordion key={`ruas-${i}`} question={faq.question} answer={faq.answer} />)}
                </div>
              </section>

              {/* Box 3 (Como Ajudar) */}
              <section id="faq-como-ajudar" className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm scroll-mt-32">
                <h2 className="text-3xl font-black text-primary-dark mb-8 pb-4 border-b-2 border-slate-100 flex items-center">
                  <Heart className="w-8 h-8 mr-4 text-rose-600" /> Como Ajudar & Doações
                </h2>
                <div className="space-y-4">
                  {faqAjuda.map((faq, i) => <FAQAccordion key={i} question={faq.question} answer={faq.answer} />)}
                </div>
              </section>

              {/* Box 4 (Instituição) */}
              <section id="faq-instituicao" className="bg-slate-100 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-inner scroll-mt-32">
                <h2 className="text-3xl font-black text-primary-dark mb-8 pb-4 border-b-2 border-slate-300 flex items-center">
                  <Building className="w-8 h-8 mr-4 text-primary-dark" /> Sobre a Instituição
                </h2>
                <div className="space-y-4">
                  {faqInstituicao.map((faq, i) => <FAQAccordion key={i} question={faq.question} answer={faq.answer} />)}
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>

      {/* Roda-Pé Fixo CTA */}
      <CTASection />

    </div>
  );
}
