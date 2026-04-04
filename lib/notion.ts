import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const DATABASE_ID = process.env.NOTION_DATABASE_ID!;

export async function getPublishedPosts() {
  const response = await (notion as any).databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: "Status",
      status: {
        equals: "Concluído",
      },
    },
    sorts: [
      {
        property: "Data",
        direction: "descending",
      },
    ],
  });
  return response.results;
}
