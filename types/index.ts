// Type definitions for Notion API
export interface NotionPost {
    id: string;
    title: string;
    description: string;
    date: string;
    slug: string;
    tags: string[];
    thumbnail: string | null;
}

export interface PostMetadata extends NotionPost {}

export interface SinglePost {
    metadata: PostMetadata;
    markdown: string;
}

export interface HomeProps {
    fourposts: NotionPost[];
    allTags: string[];
}

export interface PostProps {
    post: SinglePost;
}

export interface SinglePostProps {
    title: string;
    description: string;
    date: string;
    tags: string[];
    slug: string;
    thumbnail: string | null;
    //isPaginationPage: boolean;
}

export interface NewsListProps {
    newsposts: NotionPost[];
    allTags: string[];
}

