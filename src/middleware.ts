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
 * Posts whose slug changed when they moved to Ghost. null means the post was
 * not carried over, so its old URLs go to the Ghost home page instead.
 */
const MOVED_SLUGS: Record<string, string | null> = {
  puppydog: 'personalization-at-scale',
  'puppydog-media-pipeline': 'optimizing-media-pipeline',
  'make-it-your-own': null,
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
  // legacy /case-studies) all moved to Ghost, mostly under the same slugs.
  const slug = getLastSegment(pathname)
  const ghostSlug = slug && slug in MOVED_SLUGS ? MOVED_SLUGS[slug] : slug
  return redirectTo(request, writingUrl(ghostSlug))
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
