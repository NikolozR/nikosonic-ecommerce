import { getTranslations } from "next-intl/server";
import Link from "next/link";
import ProfileDropDown from "./ProfileDropDown";
import { getAuth0User } from "../../actions";
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
                  <ProfileDropDown isAuthorized={false} />
                </>
              ) : (
                <div className="flex gap-[15px] items-center">
                  <CartIcon />
                  <ProfileDropDown isAuthorized={true} />
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
