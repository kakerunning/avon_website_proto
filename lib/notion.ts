import { Client } from '@notionhq/client';
//import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { NotionConverter } from 'notion-to-md';
import type { NotionPost, SinglePost } from "../types";


// initialize notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

//notiontomd setup
const n2m = new NotionConverter(notion);

// Type definitions for Notion API (simplified)
interface NotionTag {
  name: string;
}
interface NotionFile {
  name?: string;
  type?: "file" | "external";
  file?: {
      url?: string;
  };
  external?: {
      url?: string;
  };
}
interface NotionPageProperties {
  Name?: {
      title?: Array<{ plain_text?: string }>;
  };
  Description?: {
      rich_text?: Array<{ plain_text?: string }>;
  };
  Date?: {
      date?: {
          start?: string;
      };
  };
  Slug?: {
      rich_text?: Array<{ plain_text?: string }>;
  };
  Tags?: {
      multi_select?: NotionTag[];
  };
  Thumbnail?: {
      files?: NotionFile[];
  };
}

interface NotionPage {
  id: string;
  properties: NotionPageProperties;
}

//get all posts from notion
export const getAllPosts = async () => {
  if (!process.env.NOTION_DATABASE_ID) {
      throw new Error('NOTION_DATABASE_ID environment variable is not set');
  }
  
  const posts = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      page_size: 100, // max page size

      // Published/unpublished setting
      filter: {
          property: "Published",
          checkbox: {
              equals: true,
          },
      },
      // Sort posts in descending order by date
      sorts: [{
          property: "Date",
          direction: "descending",
      }],
  });
 
  const allPosts = posts.results as NotionPage[]; // Get all posts
  return allPosts.map((post) => {
      return getPageMetaData(post);
  }); // Get metadata using map
};

//get thumbnail URL
const getThumbnailUrl = (files?: NotionFile[]): string | null => {
  if (!files || files.length === 0) {
      return null;
  }

  const [file] = files;
  if (!file) {
      return null;
  }

  if (file.type === "external" && file.external?.url) {
      return file.external.url;
  }

  if (file.type === "file" && file.file?.url) {
      return file.file.url;
  }

  return null;
};

//get page meta data
const getPageMetaData = (post: NotionPage): NotionPost => {
  // Function to get tags
  const getTags = (tags: NotionTag[]): string[] => {
      const allTags = tags.map((tag) => {
          return tag.name;
      });
      return allTags;
  };

  const propertiesWithAnyCase = post.properties as Record<string, { files?: NotionFile[] }>;
  const thumbnailFiles = post.properties.Thumbnail?.files ?? propertiesWithAnyCase?.thumbnail?.files;

   return {
       id: post.id,
       title: post.properties.Name?.title?.[0]?.plain_text || 'No title',
       description: post.properties.Description?.rich_text?.[0]?.plain_text || 'No description',
       date: post.properties.Date?.date?.start || 'No date',
       slug: post.properties.Slug?.rich_text?.[0]?.plain_text || 'no-slug',
       tags: getTags(post.properties.Tags?.multi_select || []),
       thumbnail: getThumbnailUrl(thumbnailFiles),
   };
};

export const getSinglePost = async (slug: string): Promise<SinglePost | null> => {
  if (!process.env.NOTION_DATABASE_ID) {
      throw new Error('NOTION_DATABASE_ID environment variable is not set');
  }
  
  const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
          property:"Slug",
          rich_text: {
              equals: slug,
          },
      },
  });

  if (!response.results || response.results.length === 0) {
      return null;
  }

  const page = response.results[0] as NotionPage;
  const metadata = getPageMetaData(page);
  const mdBlocks = await n2m.convert(page.id);
  const mdString = mdBlocks.content;

  return {
      metadata,
      markdown: mdString,
  }
}

// Get posts for top page (4 posts)
export const getPostsForTopPage = async (pageSize = 4): Promise<NotionPost[]> => {
    const allPosts = await getAllPosts();
    const fourPosts = allPosts.slice(0,pageSize);
    return fourPosts;
}

export const getAllTags = async (): Promise<string[]> => {
    const allPosts = await getAllPosts();

    const allTagsDuplicationLists = allPosts.flatMap((post) => post.tags);
    const set = new Set(allTagsDuplicationLists); // Store elements without duplication using Set class
    const allTagsList = Array.from(set); // Convert to array

    return allTagsList;
};

// get news list from notion
export const getNewsList = async (): Promise<NotionPost[]> => {
    const allPosts = await getAllPosts();
    const newsposts = allPosts;
    return newsposts;
}

// Get post by slug (alias for getNewsById)
export const getNewsById = async (slug: string) => {
    const singlePost = await getSinglePost(slug);
    
    if (!singlePost || !singlePost.metadata) {
        return null;
    }

    // Convert to format expected by app/nieuws/[slug]/page.tsx
    return {
        id: singlePost.metadata.id,
        title: singlePost.metadata.title,
        date: singlePost.metadata.date,
        thumbnail: singlePost.metadata.thumbnail,
        bodyMarkdown: singlePost.markdown,
    };
};

