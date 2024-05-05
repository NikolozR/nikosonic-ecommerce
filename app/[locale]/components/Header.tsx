import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Button from "./Button";
import { logout } from "../actions";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

async function Header() {
  const headerT = await getTranslations('Header');
  const handleLogOut = async () => {
    "use server";
    await logout();
  };

  return (
    <header className="flex-[0_0_auto]">
      <nav className="bg-customMain dark:bg-slate-800">
        <div className="container mx-auto">
          <div className="flex py-[15px] items-center justify-between">
            <p className="font-bold text-[24px] text-white tracking-[3px] cursor-pointer">
              <Link href={"/"}>
                <i>Filtro</i>
              </Link>
            </p>
            <ul className="flex gap-[40px]">
              <li>
                <Link href={'/'}>{headerT('home')}</Link>
              </li>
              <li>
                <Link href={"/profile"}>{headerT('profile')}</Link>
              </li>
              <li>
                <Link href={"/blogs"}>{headerT('blogs')}</Link>
              </li>
              <li>
                <Link href={"/contacts"}>{headerT('contacts')}</Link>
              </li>
            </ul>
            <div className="flex items-center gap-2">
              <LocaleSwitcher></LocaleSwitcher>
              <ThemeSwitcher></ThemeSwitcher>
            </div>
            <div className="flex gap-[15px]">
              <Button handle={handleLogOut}>Log Out</Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
