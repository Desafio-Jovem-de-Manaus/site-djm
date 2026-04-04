import { Newspaper } from "lucide-react";
import NoticiasGrid, { type NoticiasItem } from "@/components/NoticiasGrid";
import { getPublishedPosts } from "../../../lib/notion";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const revalidate = 60;

// ── helpers de extração ──────────────────────────────────────────────────────

function isFullPage(page: unknown): page is PageObjectResponse {
  return (
    typeof page === "object" &&
    page !== null &&
    "properties" in page &&
    (page as Record<string, unknown>).object === "page"
  );
}

function formatNotionDate(dateStr: string | null | undefined): string {
  if (!dateStr) return "";
  const months = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
  const [year, month] = dateStr.split("-");
  const idx = parseInt(month, 10) - 1;
  return `${months[idx]}/${year}`;
}

function mapPost(page: PageObjectResponse): NoticiasItem | null {
  const props = page.properties;

  // Título
  const titleProp = props["Nome"];
  const title =
    titleProp?.type === "title"
      ? (titleProp.title[0]?.plain_text ?? "")
      : "";

  // Slug
  const slugProp = props["Slug"];
  const slug =
    slugProp?.type === "rich_text"
      ? (slugProp.rich_text[0]?.plain_text ?? "")
      : "";

  if (!slug) return null; // descarta entradas sem slug

  // Categoria (suporta select e multi_select)
  const catProp = props["Categorias"];
  let category = "";
  if (catProp?.type === "multi_select" && catProp.multi_select.length > 0) {
    category = catProp.multi_select[0].name;
  } else if (catProp?.type === "select" && catProp.select) {
    category = catProp.select.name;
  }

  // Resumo
  const resumeProp = props["Resumo"];
  const resume =
    resumeProp?.type === "rich_text"
      ? (resumeProp.rich_text[0]?.plain_text ?? "")
      : "";

  // Data
  const dateProp = props["Data"];
  const rawDate = dateProp?.type === "date" ? dateProp.date?.start : null;
  const date = formatNotionDate(rawDate);

  // Imagem de Capa: tenta o cover da página e depois a propriedade
  let coverImage: string | undefined;
  if (page.cover) {
    coverImage =
      page.cover.type === "external"
        ? page.cover.external.url
        : page.cover.file.url;
  } else {
    const imgProp = props["Imagem de Capa"];
    if (imgProp?.type === "files" && imgProp.files.length > 0) {
      const f = imgProp.files[0];
      coverImage =
        f.type === "external" ? f.external.url : f.file.url;
    }
  }

  return { slug, title, date, category, resume, coverImage };
}

// ── página ───────────────────────────────────────────────────────────────────

export default async function NoticiasPage() {
  let news: NoticiasItem[] = [];

  try {
    const posts = await getPublishedPosts();
    news = posts
      .filter(isFullPage)
      .map(mapPost)
      .filter((n: NoticiasItem | null): n is NoticiasItem => n !== null);
  } catch (err) {
    console.error("[Notion] Erro ao buscar notícias:", err);
    // Em caso de falha, exibe a listagem vazia sem quebrar a página
  }

  return (
    <div className="flex flex-col min-h-screen pt-20 bg-slate-50">

      {/* Hero Portfólio Gráfico */}
      <section className="bg-primary-dark border-b-[24px] border-emerald-500 pt-24 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-5 -translate-y-1/4 translate-x-1/4">
          <Newspaper className="w-[800px] h-[800px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-xl">
            Notícias e Imprensa Viva
          </h1>
          <p className="text-xl md:text-2xl text-emerald-200 font-medium max-w-4xl mx-auto leading-relaxed drop-shadow">
            Varra as camadas orgânicas do pó jornalístico da cidade e acompanhe em dados duros as atividades que mudam pontes de desespero nas ladeiras diárias de Manaus do Amazonas.
          </p>
        </div>
      </section>

      {/* Grid Filter Engine */}
      <section className="py-16 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NoticiasGrid news={news} />
        </div>
      </section>

    </div>
  );
}
