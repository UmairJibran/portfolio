import { NextResponse } from "next/server";
import { fetchStories, STORIES_REVALIDATE } from "@/lib/stories";

export const revalidate = STORIES_REVALIDATE;

// Blog posts and case studies from Ghost, newest first
export async function GET() {
  return NextResponse.json({ stories: await fetchStories() });
}
