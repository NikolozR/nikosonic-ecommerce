import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0/edge";

export const authMiddleware: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;
    const session = await getSession();
    console.log(session?.user.role[0]);
    if (!session) {
      if (
        pathname === "/" ||
        (pathname.startsWith("/blogs") &&
          !pathname.includes("create") &&
          !pathname.includes("edit")) ||
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
        pathname.startsWith("/blogs/create") ||
        pathname.startsWith("/blogs/edit")
      ) {
        const url = new URL("/", request.url);
        return NextResponse.redirect(url);
      }
    } else {
      if (pathname.includes("admin")) {
        if (session?.user.role[0] === "Admin") {
          return next(request, _next);
        } else {
          const url = new URL("/", request.url);
          return NextResponse.redirect(url);
        }
      } else {
        return next(request, _next);
      }
    }
    return NextResponse.next();
  };
};
