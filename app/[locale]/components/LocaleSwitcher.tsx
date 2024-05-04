'use client'
import { locales } from "../../../i18n";
import {Link, usePathname} from "../../../navigation";




function LocaleSwitcher() {
  const pathname = usePathname();

  return (
    <div className="flex gap-2">
      {locales.map((locale: 'en' | 'ka') => {
        return (
          <Link key={locale} locale={locale} href={pathname}>
            {locale}
          </Link>

        );
      })}
    </div>
  );
}

export default LocaleSwitcher;
