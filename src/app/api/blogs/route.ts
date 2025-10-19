import { NextResponse } from 'next/server'
import { getAllBlog } from '@/lib/api'

export async function GET() {
  try {
    const blogs = getAllBlog();
    return NextResponse.json({ blogs });
  } catch (error) {
    return NextResponse.json({ blogs: [] }, { status: 500 });
  }
}
