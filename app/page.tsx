import { getAllTags, getPostsForTopPage } from "../lib/notion";
import { HomeProps} from "../types";
import HomeClient from "./components/HomeClient";

// ISR configuration (regenerate every 60 seconds)
export const revalidate = 60;

export default async function Home() {
  // Get data directly in Server Component
  const fourposts = await getPostsForTopPage();
  const allTags = await getAllTags();

  const data: HomeProps = {
    fourposts,
    allTags,
  };

  // Pass data to client component
  return <HomeClient data={data} />;
}

