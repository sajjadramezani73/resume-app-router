import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest } from 'next/server'

const I18nMiddleware = createI18nMiddleware(['en', 'fa'] as const, 'fa')

export function middleware(request: NextRequest) {
  return I18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
