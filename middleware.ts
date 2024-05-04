import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';
 
export default createMiddleware({
  defaultLocale: 'en',
  locales,
  localePrefix
});
 

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
