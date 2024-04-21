import { NextResponse } from "next/server";

export function middleware(request) {
  const isLoggedIn = request.cookies.get('token') && request.cookies.get('token').value !== ''
  if (request.nextUrl.pathname.startsWith("/login")) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  } else {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next();
}


export const config = {
  matcher: ['/', '/login', '/products/:id*', '/blogs/:id*', '/contacts', '/profile']
}