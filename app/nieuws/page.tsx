import { getAllTags, getNewsList } from "@/lib/notion";
import type { NewsListProps } from "@/types";
import NewsClient from "../components/NewsClient";

export const revalidate = 60;

export default async function NieuwsPage() {
  const newsposts = await getNewsList();
  const allTags = await getAllTags();

  const data: NewsListProps = {
    newsposts,
    allTags,
  };

  return <NewsClient data={data} />;
}


