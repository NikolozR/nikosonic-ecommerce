import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0/edge";

export const authMiddleware: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;
    const session = await getSession();

    if (!session) {
      if (
        pathname === "/" ||
        (pathname.startsWith('/blogs') && !pathname.includes("create")) ||
        pathname.startsWith("/products") ||
        pathname === "/contacts"
      ) {
        return next(request, _next);
      }

      if (
        pathname.startsWith("/profile") ||
        pathname.startsWith("/admin") ||
        pathname.startsWith("/cart") ||
        pathname.startsWith("/checkout") ||
        pathname.startsWith("/blogs/create")
      ) {
        const url = new URL("/", request.url);
        return NextResponse.redirect(url);
      }
    } else {
      if (pathname === "/login" || pathname === "/register") {
        const url = new URL(pathname, request.url);
        return NextResponse.redirect(url);
      } else {
        return next(request, _next);
      }
    }
    return NextResponse.next();
  };
};
