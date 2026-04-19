import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Return the last non-empty path segment, or null if the path has no segment
 * beyond the leading section (e.g. "/case-studies/" → null). Filtering out
 * empty strings protects against trailing slashes which otherwise yield "".
 */
function getLastSegment(pathname: string): string | null {
  const segments = pathname.split('/').filter(Boolean)
  return segments.length > 1 ? segments[segments.length - 1] : null
}

/**
 * Build a redirect response preserving the incoming request's search string.
 * `request.nextUrl.clone()` carries `search` across, so UTM/campaign params
 * survive the redirect — `new URL(path, request.url)` would drop them.
 */
function redirectTo(request: NextRequest, pathname: string) {
  const url = request.nextUrl.clone()
  url.pathname = pathname
  return NextResponse.redirect(url)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect /blogs and /case-studies to /writing
  if (pathname === '/blogs' || pathname === '/case-studies') {
    return redirectTo(request, '/writing')
  }

  // Redirect legacy case-study URLs to the new /projects/<slug> location
  if (pathname.startsWith('/case-studies/')) {
    const slug = getLastSegment(pathname)
    return redirectTo(request, slug ? `/projects/${slug}` : '/projects')
  }

  // Redirect legacy blog URLs to /writing/<slug>
  if (pathname.startsWith('/blogs/')) {
    const slug = getLastSegment(pathname)
    return redirectTo(request, slug ? `/writing/${slug}` : '/writing')
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
