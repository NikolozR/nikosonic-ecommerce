import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.next()
  } else {
    if (!request.cookies.get('token') || request.cookies.get('token' === '')) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
  return NextResponse.next();
}


export const config = {
  matcher: ['/', '/login', '/products/:id*', '/blogs/:id*', '/contacts', '/profile']
}