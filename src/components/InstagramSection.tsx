import { Instagram } from "lucide-react";
import SocialCard, { SocialAccount } from "./SocialCard";

export const socialAccounts: SocialAccount[] = [
  {
    id: "desafiomanaus",
    platform: "instagram",
    name: "Desafio Jovem",
    username: "@desafiomanaus",
    url: "https://www.instagram.com/desafiomanaus/",
    avatar: "/logo-instagram-geral.jpg",
    description: "Acompanhe nossas novidades, eventos e o trabalho institucional em nossa sede e nas ações sociais.",
    posts: [
      { link: "https://www.instagram.com/p/DWZN8Tkju0A/", thumbnail: "/instagram-desafiomanaus-1.png" },
      { link: "https://www.instagram.com/p/DUrOrYHievn/", thumbnail: "/instagram-desafiomanaus-2.png" },
      { link: "https://www.instagram.com/p/DQU7i4vElPl/?img_index=1", thumbnail: "/instagram-desafiomanaus-3.png" }
    ]
  },
  {
    id: "desafiojovemdemanaus",
    platform: "instagram",
    name: "Comunidade Terapêutica",
    username: "@desafiojovemdemanaus",
    url: "https://www.instagram.com/desafiojovemdemanaus/",
    avatar: "/logo-Instagram-ct.jpg",
    description: "Acompanhe o dia a dia da recuperação, as atividades diárias e as transformações de vidas no nosso centro.",
    posts: [
      { link: "https://www.instagram.com/p/DExalvnPynN/?img_index=1", thumbnail: "/instagram-desafiojovemdemanaus-1.png" },
      { link: "https://www.instagram.com/p/DNrAQ5fZMoa/", thumbnail: "/instagram-desafiojovemdemanaus-2.png" },
      { link: "https://www.instagram.com/p/DGQ-YPXSTIR/?img_index=1", thumbnail: "/instagram-desafiojovemdemanaus-3.png" }
    ]
  },
  {
    id: "facebook-djm",
    platform: "facebook",
    name: "Desafio Jovem",
    username: "/desafiojovem.manaus",
    url: "https://web.facebook.com/desafiojovem.manaus",
    avatar: "/logo-instagram-geral.jpg",
    description: "Siga também nossa página oficial no Facebook para comunicados, vídeos e cobertura de nossas ações.",
    posts: [
      { link: "https://web.facebook.com/reel/926565149726286/?s=single_unit", thumbnail: "/facebook-desafiojovem.manaus-1.png" },
      { link: "https://www.facebook.com/reel/640108701179952", thumbnail: "/facebook-desafiojovem.manaus-2.png" },
      { link: "https://web.facebook.com/reel/4356768084558903", thumbnail: "/facebook-desafiojovem.manaus-3.png" }
    ]
  }
];

export default function InstagramSection() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-pink-500/20">
            <Instagram className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Acompanhe nossas atividades</h2>
          <p className="text-xl text-slate-600">Fique por dentro do dia a dia da instituição em nossas redes sociais oficiais.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {socialAccounts.map((account) => (
            <SocialCard key={account.id} account={account} />
          ))}
        </div>

      </div>
    </section>
  );
}
