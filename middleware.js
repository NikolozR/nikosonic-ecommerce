import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
let locales = ["en", "ka"];

function getLocale(request) {
  let headers = { "accept-language": "en;q=0.5" };
  let languages = new Negotiator({ headers }).languages();
  let locales = ["en", "ka"];
  let defaultLocale = "en";
  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  

  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;
  console.log("Daaaaaaaaaaaaaaaaaaaaaa")
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
