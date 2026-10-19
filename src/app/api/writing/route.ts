import { NextResponse } from 'next/server'
import { getAllBlog, getAllCaseStudies } from '@/lib/api'

// Blog posts and case studies together, newest first
export async function GET() {
  try {
    const stories = [...getAllBlog(), ...getAllCaseStudies()].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
    return NextResponse.json({ stories });
  } catch (error) {
    return NextResponse.json({ stories: [] }, { status: 500 });
  }
}
