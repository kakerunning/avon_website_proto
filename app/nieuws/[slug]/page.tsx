import { getSinglePost, getAllPosts } from "@/lib/notion";
import type { PostProps } from "@/types/index";
import NewsPostsClient from "../../components/NewsPostsClient";
import { notFound } from "next/navigation";

export const revalidate = 60;

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function NieuwsPostsPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getSinglePost(slug);

  if (!post) {
    notFound();
  }

  const data: PostProps = {
    post
  };
  return <NewsPostsClient data={data} />;
}


