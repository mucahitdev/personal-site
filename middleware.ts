import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Next.js internals (/_next, /_vercel)
  // - static files (containing a dot, e.g. favicon.ico, sitemap.xml)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
