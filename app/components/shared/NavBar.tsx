import { getTranslations } from "next-intl/server";
import Link from "next/link";
import ProfileDropDown from "./ProfileDropDown";
import { getAuth0User } from "../../actions";
import ThemeSwitcher from "./ThemeSwitcher";
import CartIcon from "./CartIcon";  
import { CiSearch } from "react-icons/ci";

async function NavBar() {
  const headerT = await getTranslations("Header");
  const user = await getAuth0User();
  return (
    <nav
      // style={{
      //   background:
      //     "linear-gradient(0deg, , )",
      // }}
      className="py-[18px] dark:!bg-black bg-gradient-to-b from-[#ffab00a3] to-[#ffab00a3] dark:from-[#241b33] dark:to-[#241b33]"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <p className="font-bold text-[1.5rem] text-black tracking-[3px] cursor-pointer">
            <Link href={"/"} className="text-black dark:text-white">
              <i>3Legant</i>
            </Link>
          </p>
          <ul className="flex justify-between items-center gap-[40px]">
            <li>
              <Link
                href={"/"}
                className="text-[1rem] font-grotesk text-black font-medium dark:text-white"
              >
                {headerT("home")}
              </Link>
            </li>
            <li>
              <Link
                href={"/products"}
                className="text-[1rem] font-grotesk text-black font-medium dark:text-white"
              >
                {headerT("products")}
              </Link>
            </li>
            {user && (
              <li>
                <Link
                  href={"/profile"}
                  className="text-[1rem] font-grotesk text-black font-medium dark:text-white"
                >
                  {headerT("profile")}
                </Link>
              </li>
            )}

            <li>
              <Link
                href={"/blogs"}
                className="text-[1rem] font-grotesk text-black font-medium dark:text-white"
              >
                {headerT("blogs")}
              </Link>
            </li>
            <li>
              <Link
                href={"/contacts"}
                className="text-[1rem] font-grotesk text-black font-medium dark:text-white"
              >
                {headerT("contacts")}
              </Link>
            </li>
            {user?.role[0] === "Admin" ? (
              <>
                <li>
                  <Link
                    href={"/admin/users"}
                    className="text-[1rem] font-grotesk text-black font-medium dark:text-white"
                  >
                    {"Users"}
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/admin/products"}
                    className="text-[1rem] font-grotesk text-black font-medium dark:text-white"
                  >
                    {"Add Products"}
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
          <div>
            <div className="flex gap-[15px] items-center">
            <CiSearch size={24} className="dark:text-white text-black" />
              {!user ? (
                <>
                  <a
                    href="/api/auth/login"
                    className="text-[1rem] text-black dark:text-white border-solid font-grotesk border-black dark:border-white border-[1px] rounded-md flex items-center justify-center py-1 px-3"
                  >
                    Log In
                  </a>
                  <a
                    href="/api/auth/signup"
                    className="text-[1rem] text-black border-solid font-grotesk border-black dark:border-white dark:text-white border-[1px] rounded-md flex items-center justify-center py-1 px-3"
                  >
                    Register
                  </a>
                  <ThemeSwitcher></ThemeSwitcher>
                </>
              ) : (
                <div className="flex gap-[15px] items-center">
                  <CartIcon />
                  <ProfileDropDown />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
