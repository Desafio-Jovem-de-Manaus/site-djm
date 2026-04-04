import { Instagram, Facebook, ExternalLink, ArrowUpRight } from "lucide-react";

type SocialPost = {
  link: string;
  thumbnail?: string;
};

type Account = {
  id: string;
  platform: "instagram" | "facebook";
  name: string;
  username: string;
  url: string;
  avatar: string;
  description: string;
  posts: SocialPost[];
};

export default function InstagramSection() {
  const accounts: Account[] = [
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
        { link: "https://www.instagram.com/p/DExalvnPynN/?img_index=1" },
        { link: "https://www.instagram.com/p/DNrAQ5fZMoa/" },
        { link: "https://www.instagram.com/p/DGQ-YPXSTIR/?img_index=1" }
      ]
    },
    {
      id: "facebook-djm",
      platform: "facebook",
      name: "Desafio Jovem",
      username: "/desafiojovem.manaus",
      url: "https://web.facebook.com/desafiojovem.manaus",
      avatar: "/logo-instagram-geral.jpg",
      description: "Siga também nossa página oficial no Facebook para comunicados, vídeos e cobertura de nossas ações globais.",
      posts: [
        { link: "https://web.facebook.com/reel/926565149726286/?s=single_unit" },
        { link: "https://web.facebook.com/reel/800176842344858/?s=single_unit" },
        { link: "https://web.facebook.com/reel/4356768084558903" }
      ]
    }
  ];

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
          {accounts.map((account) => {
            const isInsta = account.platform === "instagram";
            const gradientBg = isInsta 
                ? "from-orange-400 via-pink-500 to-purple-600" 
                : "from-blue-400 to-blue-700";
            const shadowHover = isInsta ? "hover:shadow-pink-500/30" : "hover:shadow-blue-500/30";
            const textColor = isInsta ? "text-pink-600 hover:text-pink-700" : "text-blue-600 hover:text-blue-700";
            const iconHoverColor = isInsta ? "group-hover/photo:text-pink-400" : "group-hover/photo:text-blue-400";
            const bgHoverColor = isInsta ? "group-hover/photo:bg-pink-50 hover:border-pink-200" : "group-hover/photo:bg-blue-50 hover:border-blue-200";

            const Icon = isInsta ? Instagram : Facebook;

            return (
              <div 
                key={account.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/50 group flex flex-col"
              >
                {/* Header Gradient */}
                <div className={`h-32 bg-gradient-to-r ${gradientBg} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-20 bg-center"></div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Profile Image & Info */}
                <div className="px-8 pb-8 flex-1 flex flex-col relative">
                  <div className="absolute -top-12 left-8 w-24 h-24 bg-white rounded-full p-1.5 shadow-lg">
                    <div className="w-full h-full rounded-full border border-slate-100 flex items-center justify-center overflow-hidden bg-white">
                      {account.avatar ? (
                        <img src={account.avatar} alt={account.name} className="w-full h-full object-cover" />
                      ) : (
                        <Icon className="w-10 h-10 text-slate-400" />
                      )}
                    </div>
                  </div>

                  <div className="mt-14 mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 leading-tight mb-1">{account.name}</h3>
                    <a 
                      href={account.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`inline-flex items-center font-medium transition-colors ${textColor}`}
                    >
                      <span>{account.username}</span>
                    </a>
                    <p className="text-slate-600 mt-4 leading-relaxed">{account.description}</p>
                  </div>
                  
                  {/* Simulated Feed Grid */}
                  <div className="grid grid-cols-3 gap-3 mt-auto mb-8">
                     {account.posts.map((post, i) => (
                        <a 
                          key={i} 
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`aspect-square bg-slate-50 border border-slate-100 rounded-xl overflow-hidden relative group/photo transition-colors block ${bgHoverColor}`}
                        >
                          <div className={`absolute inset-0 flex items-center justify-center transition-colors ${!post.thumbnail && (isInsta ? 'group-hover/photo:bg-pink-50' : 'group-hover/photo:bg-blue-50')}`}>
                             {post.thumbnail ? (
                               <>
                                 <img src={post.thumbnail} alt={`Post ${i+1}`} className="w-full h-full object-cover group-hover/photo:scale-110 transition-transform duration-500" />
                                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/photo:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                   <Icon className="w-6 h-6 text-white" />
                                 </div>
                               </>
                             ) : (
                               <Icon className={`w-6 h-6 text-slate-300 transition-colors ${iconHoverColor}`} />
                             )}
                          </div>
                        </a>
                     ))}
                  </div>

                  {/* CTA Button */}
                  <a 
                    href={account.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`w-full py-4 px-6 rounded-2xl bg-gradient-to-r ${gradientBg} text-white font-bold text-center flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all hover:scale-[1.02] ${shadowHover}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>Acessar Perfil Completo</span>
                    <ArrowUpRight className="w-5 h-5 ml-1 opacity-80" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
