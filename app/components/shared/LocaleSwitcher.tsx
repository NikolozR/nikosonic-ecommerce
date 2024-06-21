'use client'
import React, { ReactElement } from "react";
import { GB, GE } from 'country-flag-icons/react/3x2'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useLocale } from "next-intl";
import { Link, usePathname } from "../../../navigation";

const locales: {locale: 'en' | 'ka', name: string, icon: ReactElement}[] = [
  { locale: "en", name: "EN", icon: <GB width={20} height={13} /> },
  { locale: "ka", name: "KA", icon: <GE width={20} height={13} /> },
];

function LocaleSwitcher() {
  const pathname = usePathname();
  const locale = useLocale()
  return (
    <Dropdown classNames={{
      content: 'w-fit min-w-fit'
    }}>
      <DropdownTrigger>
        <Button variant="bordered" className="border-black border-1">
          {locales.find((item) => item.locale === locale)?.icon}
          {locale?.toUpperCase()}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Language Selector" className="w-fit">
        {locales.map((item) => (
          <DropdownItem className="w-fit" key={item.locale}>
            <Link key={item.locale} locale={item.locale} href={pathname} className="flex items-center gap-[5px] text-black">
              {item.icon} {item.name}
            </Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default LocaleSwitcher;
