import { getTranslations } from "next-intl/server";
import Link from "next/link";
import ProfileDropDown from "./ProfileDropDown";
import { getAuth0User } from "../../actions";
import CartIcon from "./CartIcon";
import Logo from "./Logo";
import LocaleSwitcher from "./LocaleSwitcher";
import { cookies } from "next/headers";

async function NavBar() {
  const headerT = await getTranslations("Header");
  const user = await getAuth0User();
  const theme: string = cookies().get("theme")?.value ?? '';
  return (
    <nav
    // from-[#FFAB00A3] to-[#FFAB00A3]
      className="py-[10px] dark:!bg-black bg-gradient-to-b bg-white dark:from-[#241b33] dark:to-[#241b33] border-b-1 border-solid border-[#F3F5F7] dark:border-0"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <p className="font-bold text-[1.5rem] text-black tracking-[3px] cursor-pointer">
            <Link href={"/"} className="dark:hidden">
              <Logo color="" width={182} height={70} />
            </Link>
            <Link href={"/"} className="hidden dark:block">
              <Logo color="white" width={182} height={70} />
            </Link>
          </p>
          <ul className="flex justify-between items-center gap-[40px]">
            <li>
              <Link
                href={"/"}
                className="text-[1rem] font-grotesk dark:text-white font-medium text-black"
              >
                {headerT("home")}
              </Link>
            </li>
            <li>
              <Link
                href={"/products"}
                className="text-[1rem] font-grotesk dark:text-white font-medium text-black"
              >
                {headerT("products")}
              </Link>
            </li>
            {user && (
              <li>
                <Link
                  href={"/profile"}
                  className="text-[1rem] font-grotesk dark:text-white font-medium text-black"
                >
                  {headerT("profile")}
                </Link>
              </li>
            )}

            <li>
              <Link
                href={"/blogs"}
                className="text-[1rem] font-grotesk dark:text-white font-medium text-black"
              >
                {headerT("blogs")}
              </Link>
            </li>
            <li>
              <Link
                href={"/contacts"}
                className="text-[1rem] font-grotesk dark:text-white font-medium text-black"
              >
                {headerT("contacts")}
              </Link>
            </li>
            {user?.role[0] === "Admin" ? (
              <>
                {/* <li>
                  <Link
                    href={"/admin/users"}
                    className="text-[1rem] font-grotesk text-black font-medium dark:text-white"
                  >
                    {"Users"}
                  </Link>
                </li> */}
                <li>
                  <Link
                    href={"/admin/products"}
                    className="text-[1rem] font-grotesk text-black font-medium dark:text-white"
                  >
                    {headerT("addProducts")}
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
          <div>
            <div className="flex gap-[15px] items-center">
              {!user ? (
                <>
                  <ProfileDropDown isAuthorized={false} theme={theme} />
                </>
              ) : (
                <div className="flex gap-[15px] items-center">
                  <CartIcon />
                  <ProfileDropDown isAuthorized={true} theme={theme} />
                </div>
              )}
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
