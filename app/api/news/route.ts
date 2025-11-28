import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/notion';

export async function GET() {
  try {
    const newsItems = await getAllPosts();
    return NextResponse.json(newsItems);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}