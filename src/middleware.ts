import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect /blogs and /case-studies to /writing
  if (pathname === '/blogs' || pathname === '/case-studies') {
    return NextResponse.redirect(new URL('/writing', request.url))
  }

  // Redirect legacy case-study URLs to the new /projects/<slug> location
  if (pathname.startsWith('/case-studies/')) {
    const slug = pathname.split('/').pop()
    return NextResponse.redirect(new URL(`/projects/${slug}`, request.url))
  }

  // Redirect legacy blog URLs to /writing/<slug>
  if (pathname.startsWith('/blogs/')) {
    const slug = pathname.split('/').pop()
    return NextResponse.redirect(new URL(`/writing/${slug}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/blogs',
    '/blogs/:path*',
    '/case-studies',
    '/case-studies/:path*',
  ],
} 