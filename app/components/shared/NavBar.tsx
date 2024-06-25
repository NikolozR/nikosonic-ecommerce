import { getTranslations } from "next-intl/server";
import Link from "next/link";
import ProfileDropDown from "./ProfileDropDown";
import { getAuth0User } from "../../actions";
import CartIcon from "./CartIcon";
import Logo from "./Logo";
import LocaleSwitcher from "./LocaleSwitcher";
import { cookies } from "next/headers";
import BurgerMenu from "../Landing/BurgerMenu";

async function NavBar() {
  const headerT = await getTranslations("Header");
  const user = await getAuth0User();
  const theme = cookies().get("theme")?.value ?? "";
  return (
    <nav className="py-[10px] dark:!bg-black bg-gradient-to-b bg-white dark:from-[#241b33] dark:to-[#241b33] border-b-1 border-solid border-[#F3F5F7] dark:border-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer flex gap-[20px]">
            <BurgerMenu user={user} />
            <Link href={"/"} className="hidden xl:block dark:hidden">
              <Logo color="black" width={182} height={70} />
            </Link>
            {/* Dark mode LG - White */}
            <Link href={"/"} className="hidden dark:xl:block">
              <Logo color="white" width={182} height={70} />
            </Link>
            {/* Light mode MD-XL - Black */}
            <Link href={"/"} className="hidden sm:block xl:hidden dark:hidden">
              <Logo color="" width={130} height={50} />
            </Link>
            {/* Dark mode MD-XL - White */}
            <Link href={"/"} className="hidden sm:dark:block dark:xl:hidden">
              <Logo color="white" width={130} height={50} />
            </Link>
            {/* Dark mode XS-MD - White */}
            <Link href={"/"} className="hidden dark:block dark:sm:hidden">
              <Logo color="white" width={104} height={40} />
            </Link>
            {/* Light mode XS-MD - Black */}
            <Link href={"/"} className="block sm:hidden dark:hidden">
              <Logo color="" width={104} height={40} />
            </Link>
          </div>
          <ul className="hidden md:flex justify-between items-center gap-[10px] lg:gap-[35px]">
            <li className="flex items-center">
              <Link
                href={"/"}
                className="text-[0.7rem] lg:text-[1rem] font-grotesk dark:text-white font-medium text-black"
              >
                {headerT("home")}
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href={"/products"}
                className="text-[0.7rem] lg:text-[1rem] font-grotesk dark:text-white font-medium text-black"
              >
                {headerT("products")}
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href={"/blogs"}
                className="text-[0.7rem] lg:text-[1rem] font-grotesk dark:text-white font-medium text-black"
              >
                {headerT("blogs")}
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href={"/contacts"}
                className="text-[0.7rem] lg:text-[1rem] font-grotesk dark:text-white font-medium text-black"
              >
                {headerT("contacts")}
              </Link>
            </li>
            {user?.role[0] === "Admin" ? (
              <>
                <li className="flex items-center">
                  <Link
                    href={"/admin/products"}
                    className="text-[0.7rem] lg:text-[1rem] text-wrap text-center font-grotesk text-black font-medium dark:text-white"
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
                <ProfileDropDown isAuthorized={false} theme={theme} />
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
