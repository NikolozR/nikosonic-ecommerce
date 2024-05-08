import { cookies } from "next/headers";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export const authMiddleware: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;
    const user = cookies().get("user");
    if (!user?.value) {
      if (pathname.indexOf("/login") === -1) {
        const url = new URL(`/login`, request.url);
        return NextResponse.redirect(url);
      }
    } else {
      if (pathname.indexOf("/login") !== -1) {
        const url = new URL(`/`, request.url);
        return NextResponse.redirect(url);
      }
    }

    return next(request, _next);
  };
};
