import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Button from "./Button";
import { logout } from "../actions";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import Chart from "./chart";
import { getSession } from "@auth0/nextjs-auth0";

async function Header() {
  const headerT = await getTranslations("Header");
  const session = await getSession();
  const user = session?.user;
  console.log(user)
  const handleLogOut = async () => {
    "use server";
    await logout();
  };

  return (
    <header className="flex-[0_0_auto]">
      <nav className="bg-neutral-4 dark:bg-neutral-6">
        <div className="container mx-auto">
          <div className="flex py-[15px] items-center justify-between">
            <p className="hidden sm:block font-bold text-[24px] text-white tracking-[3px] cursor-pointer">
              <Link href={"/"}>
                <i>3Legant</i>
              </Link>
            </p>
            <ul className="flex justify-between sm:gap-[1rem] lg:gap-[25px]">
              <li>
                <Link href={"/"} className="text-[0.75em] lg:text-[1.25em]">
                  {headerT("home")}
                </Link>
              </li>
              <li>
                <Link
                  href={"/profile"}
                  className="text-[0.75em] lg:text-[1.25em]"
                >
                  {headerT("profile")}
                </Link>
              </li>
              <li>
                <Link
                  href={"/blogs"}
                  className="text-[0.75em] lg:text-[1.25em]"
                >
                  {headerT("blogs")}
                </Link>
              </li>
              <li>
                <Link
                  href={"/contacts"}
                  className="text-[0.75em] lg:text-[1.25em]"
                >
                  {headerT("contacts")}
                </Link>
              </li>
              {user?.role === "admin" ? (
                <li>
                  <Link
                    href={"/admin"}
                    className="text-[0.75em] lg:text-[1.25em]"
                  >
                    {headerT("admin")}
                  </Link>
                </li>
              ) : null}
            </ul>
            <div className="flex items-center gap-2">
              <LocaleSwitcher></LocaleSwitcher>
              <ThemeSwitcher></ThemeSwitcher>
            </div>
            <Chart />
            <div className="flex gap-[15px]">
              {!user ? (
                <>
                  <a href="/api/auth/login">Log In</a>
                  <a href="/api/auth/signup">Register</a>
                </>
              ) : (
                <a href="/api/auth/logout">Log Out</a>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
