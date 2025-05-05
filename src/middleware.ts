import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
export default createMiddleware(routing);

export const config = {
    // Match only th below paths
    // matcher: ['/', '/((?!api|trpc|_next|_vercel|.*\\..*).*)']
    matcher: ['/', '/(jp|en)/:path*']
}