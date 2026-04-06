export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  category: string;
  resume: string;
  content: string[];
  mainImage: string;
  galleryImages: string[];
  author?: string;
  footerImage?: string;
}

export const allNews: NewsItem[] = [
  {
    slug: "desafio-crianca-feliz-2025",
    title: "Desafio Criança Feliz reúne mais de 200 crianças em celebração de alegria e solidariedade em Manaus",
    date: "out/2025",
    category: "Ações Sociais",
    resume: "Evento promovido pelo Desafio Jovem Manaus distribuiu kits de brinquedos e proporcionou momentos de afeto às comunidades do entorno da instituição.",
    author: "Ana Luisa Calmon",
    content: [
      "Evento promovido pelo Desafio Jovem Manaus distribuiu kits de brinquedos e proporcionou momentos de afeto às comunidades do entorno da instituição.",
      "Mais de 200 crianças participaram do Desafio Criança Feliz, iniciativa realizada pelo Desafio Jovem Manaus que reuniu voluntários, parceiros, doadores e a equipe da instituição em torno de um objetivo comum: levar alegria e esperança à infância das comunidades atendidas pelo projeto.",
      "Durante o evento, os pequenos vivenciaram uma programação repleta de brincadeiras, apresentações, lanches e gestos de cuidado. Cada criança recebeu um kit de brinquedos — totalizando mais de 200 kits distribuídos —, enquanto cerca de 50 adultos entre voluntários e colaboradores se emocionaram com a repercussão da ação.",
      "A realização do evento contou com a participação especial das alunas do Projeto Capacitar, além do engajamento de parceiros e doadores que tornaram possível a estrutura da celebração.",
      "Para a instituição, a iniciativa vai além da festa: trata-se de fortalecer laços comunitários e demonstrar que ações concretas de solidariedade são capazes de transformar realidades.",
      "O Desafio Criança Feliz reafirma o compromisso do Desafio Jovem Manaus com o desenvolvimento social e humano das comunidades do entorno, mostrando que união e afeto são ferramentas poderosas de mudança."
    ],
    mainImage: "/noticias-e-eventos-dia-das-criancas-2025-2.png",
    footerImage: "/noticias-e-eventos-dia-das-criancas-2025-1.png",
    galleryImages: [],
  },
  {
    slug: "desafio-jovem-tribuna-popular-camara-manaus",
    title: "Desafio Jovem é tema de Tribuna Popular na Câmara Municipal de Manaus",
    date: "nov/2023",
    category: "Institucional",
    resume: "O trabalho do Desafio Jovem de Manaus foi reconhecido em Tribuna Popular na Câmara Municipal de Manaus. O evento reuniu acolhidos e a diretoria da instituição para apresentar à sociedade os serviços oferecidos há 42 anos na cidade.",
    content: [
      "O Desafio Jovem de Manaus foi tema de uma Tribuna Popular realizada na Câmara Municipal de Manaus (CMM), no Plenário Adriano Jorge. O evento, presidido pelo vereador Dr. Daniel Vasconcelos (Podemos), reuniu acolhidos, lideranças e membros da diretoria da instituição, com o tema: \"Desafio Jovem de Manaus: de braços abertos para atender os invisíveis em situação de rua\".",
      "O parlamentar, que preside a Comissão de Direitos Humanos, Povos Indígenas e Minorias da CMM, destacou o papel fundamental das organizações da sociedade civil no atendimento à população vulnerável:",
      "\"As Organizações da Sociedade Civil fazem um trabalho invisível e muitas das vezes chegam aonde o poder público não chega, como é o caso do Desafio Jovem Manaus, que traz dignidade, com abordagem social e acolhimento aos mais vulneráveis.\" — Dr. Daniel Vasconcelos, vereador (Podemos)",
      "Com 42 anos de atuação em Manaus, o Desafio Jovem é uma instituição não governamental de abrangência nacional, com missão voltada ao cuidado integral do ser humano. Ao longo de sua trajetória na cidade, a organização atendeu cerca de 14 mil pessoas, atuando no resgate de jovens em situação de rua e no processo de ressocialização. Além do trabalho terapêutico, a instituição oferece cursos de alfabetização e capacitação profissional.",
      "A diretora executiva da entidade, Josani Pirangy, ressaltou a importância do espaço para ampliar o reconhecimento do trabalho realizado:",
      "\"Esse momento aqui na Câmara é extremamente importante para que os parlamentares e a população conheçam o Desafio Jovem e os serviços que ofertamos. Esperamos ter cada vez mais apoio para continuar contribuindo com a nossa cidade.\" — Josani Pirangy, diretora executiva",
      "O Desafio Jovem integra a Rede de Atenção Psicossocial (RAPS), sendo um dos pontos de cuidado reconhecidos pelo Sistema Único de Saúde (SUS) em Manaus. Ao final do evento, os vereadores Allan Campelo, Kennedy Marques, Marcel Alexandre, Rodrigo Guedes e Sassá da Construção Civil manifestaram interesse em contribuir com a instituição por meio de Emenda Parlamentar Coletiva.",
      "Fonte: Câmara Municipal de Manaus — Assessoria de Comunicação do Vereador Dr. Daniel Vasconcelos. Disponível em: https://www.cmm.am.gov.br/em-tribuna-popular-dr-daniel-destaca-trabalho-realizado-pelo-desafio-jovem-em-manaus/"
    ],
    mainImage: "/Noticias-Tribuna-Popular-na-Camara-Municipal-de-Manaus-2023.png",
    galleryImages: [],
  },
];
