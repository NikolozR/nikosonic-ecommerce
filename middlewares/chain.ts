import { NextMiddleware } from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "../navigation";

export function chain(
  functions: MiddlewareFactory[] = [],
  index = 0
): NextMiddleware {
  const current = functions[index];
  if (current) {
    const next = chain(functions, index + 1);
    return current(next);
  }
  const handleInternationalization = createMiddleware({
    defaultLocale: "en",
    locales,
    localePrefix,
  });
  return handleInternationalization;
}