import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { headers } from "next/headers";
import i18nConfig from "../utils/i18n";
import Button from "./Button";

async function handleClick(locale: string) {
  "use server";
  const host = headers().get("host");
  let pathname = headers().get("referer");
  const p = pathname?.slice(pathname.indexOf(host || '')).replace(host || '', "");
  const pathSegments = p?.slice(1).split("/");
  const pathWithoutLocale = pathSegments?.slice(1).join("/");

  const newPath = `/${locale}/${pathWithoutLocale}`;
  cookies().set("NEXT_LOCALE", locale);
  redirect(newPath);
}
function LocaleSwitcher() {
  return (
    <div className="flex gap-2">
      {i18nConfig.locales.map((locale) => {
        return (
          <Button
            key={locale}
            handle={async () => {
              "use server";
             return handleClick(locale);
            }}
          >
            {locale}
          </Button>
        );
      })}
    </div>
  );
}

export default LocaleSwitcher;
