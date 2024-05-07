import {
  type NextFetchEvent,
  type NextRequest,
} from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "../navigation";

export function intlMiddleware(middleware: CustomMiddleware) {
  return async (
    request: NextRequest,
    event: NextFetchEvent,
  ) => {
    const handleInternationalization = createMiddleware({
      defaultLocale: "en",
      locales,
      localePrefix,
    });
    const responseIntl = handleInternationalization(request)
    return middleware(request, event, responseIntl);
  };
}

