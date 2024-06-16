import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0/edge";

export const authMiddleware: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;
    const session = await getSession(); // Ensure to pass the request object

    console.log(`Pathname: ${pathname}`);
    console.log(`Session: ${session ? "Exists" : "None"}`);

    if (!session) {
      if (
        pathname === "/" ||
        pathname === "/blogs" ||
        pathname === "/products" ||
        pathname === "/contacts"
      ) {
        return next(request, _next);
      }

      if (pathname.startsWith("/profile") || pathname.startsWith("/admin") || pathname.startsWith("/cart") || pathname.startsWith("/checkout")) {
        console.log("Redirecting to homepage due to no session");
        const url = new URL('/', request.url);
        return NextResponse.redirect(url);
      }
    } else {
      if (pathname === "/login" || pathname === "/register") {
        console.log("Redirecting to homepage due to existing session");
        const url = new URL(pathname, request.url);
        return NextResponse.redirect(url);
      }
    }
    console.log("Proceeding to next middleware/handler");
    return NextResponse.next();
  };
};
