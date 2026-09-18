import { trackAICrawlerRequest } from '@datafast/ai-crawl'
import createMiddleware from 'next-intl/middleware'
import type { NextFetchEvent, NextRequest } from 'next/server'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

// Same id as the Script tag in app/[locale]/layout.tsx.
const DATAFAST_ID = 'dfid_Ng89GKEbaJuLkJLiRk3eQ'

export default function middleware(request: NextRequest, event: NextFetchEvent) {
  // AI and search crawlers do not run the page's JavaScript, so the browser script
  // never sees them. This is the only way to learn whether ChatGPT, Claude or
  // Perplexity fetch these pages to answer someone, which for a blog is a real
  // share of how people arrive. Cheap for real visitors: the package classifies the
  // user agent first and makes no request unless it matches a known crawler, and
  // the send is handed to event.waitUntil so nothing blocks the response.
  trackAICrawlerRequest(request, event, {
    websiteId: DATAFAST_ID,
    authToken: process.env.DATAFAST_BOT_TOKEN,
  })

  return intlMiddleware(request)
}

export const config = {
  // Match all pathnames except for
  // - API routes (the analytics proxy in next.config.mjs serves /api/events, and a
  //   locale prefix on that path would break ingestion)
  // - Next.js internals (/_next, /_vercel)
  // - static files (containing a dot, e.g. favicon.ico, sitemap.xml)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
