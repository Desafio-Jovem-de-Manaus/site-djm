import { Instagram, Facebook, ArrowUpRight } from "lucide-react";

export type SocialPost = {
  link: string;
  thumbnail?: string;
};

export type SocialAccount = {
  id: string;
  platform: "instagram" | "facebook";
  name: string;
  username: string;
  url: string;
  avatar: string;
  description: string;
  posts: SocialPost[];
};

type SocialCardProps = {
  account: SocialAccount;
};

export default function SocialCard({ account }: SocialCardProps) {
  const isInsta = account.platform === "instagram";

  const gradientBg = isInsta
    ? "from-orange-400 via-pink-500 to-purple-600"
    : "from-blue-400 to-blue-700";
  const shadowHover = isInsta ? "hover:shadow-pink-500/30" : "hover:shadow-blue-500/30";
  const textColor = isInsta
    ? "text-pink-600 hover:text-pink-700"
    : "text-blue-600 hover:text-blue-700";
  const iconHoverColor = isInsta
    ? "group-hover/photo:text-pink-400"
    : "group-hover/photo:text-blue-400";
  const bgHoverColor = isInsta
    ? "group-hover/photo:bg-pink-50 hover:border-pink-200"
    : "group-hover/photo:bg-blue-50 hover:border-blue-200";

  const Icon = isInsta ? Instagram : Facebook;

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/50 group flex flex-col">
      {/* Header Gradient */}
      <div className={`h-32 bg-gradient-to-r ${gradientBg} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-[url('/pattern-grid.svg')] opacity-20 bg-center" />
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

        {/* Feed Grid */}
        <div className="grid grid-cols-3 gap-3 mt-auto mb-8">
          {account.posts.map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`aspect-square bg-slate-50 border border-slate-100 rounded-xl overflow-hidden relative group/photo transition-colors block ${bgHoverColor}`}
            >
              <div
                className={`absolute inset-0 flex items-center justify-center transition-colors ${
                  !post.thumbnail && (isInsta ? "group-hover/photo:bg-pink-50" : "group-hover/photo:bg-blue-50")
                }`}
              >
                {post.thumbnail ? (
                  <>
                    <img
                      src={post.thumbnail}
                      alt={`Post ${i + 1}`}
                      className="w-full h-full object-cover group-hover/photo:scale-110 transition-transform duration-500"
                    />
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
}
