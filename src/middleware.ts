import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { WRITING_URL, writingUrl } from '@/lib/writing'

/**
 * Return the last non-empty path segment, or null if the path has no segment
 * beyond the leading section (e.g. "/writing/" → null). Filtering out
 * empty strings protects against trailing slashes which otherwise yield "".
 */
function getLastSegment(pathname: string): string | null {
  const segments = pathname.split('/').filter(Boolean)
  return segments.length > 1 ? segments[segments.length - 1] : null
}

/**
 * Permanently redirect to the Ghost site, preserving the incoming search
 * string so UTM/campaign params survive the redirect.
 */
function redirectTo(request: NextRequest, target: string) {
  const url = new URL(target)
  url.search = request.nextUrl.search
  return NextResponse.redirect(url, 308)
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/rss.xml') {
    return redirectTo(request, `${WRITING_URL}/rss/`)
  }

  // Blogs (/writing, legacy /blogs) and case studies (/projects/<slug>,
  // legacy /case-studies) all moved to Ghost under the same slugs.
  return redirectTo(request, writingUrl(getLastSegment(pathname)))
}

export const config = {
  matcher: [
    '/writing',
    '/writing/:path*',
    '/blogs',
    '/blogs/:path*',
    '/case-studies',
    '/case-studies/:path*',
    '/projects/:path+',
    '/rss.xml',
  ],
}
