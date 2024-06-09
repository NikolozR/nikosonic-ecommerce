import { getTranslations } from "next-intl/server";
import Link from "next/link";
import ShopIcon from '../../public/shop.svg';
import SearchIcon from '../../public/search.svg';
import Image from "next/image";
import ProfileDropDown from "./ProfileDropDown";
import { getAuth0User } from "../actions";

async function NavBar() {
  const headerT = await getTranslations("Header");
  const user = await getAuth0User();
  return (
    <nav
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 171, 0, 0.64), rgba(255, 171, 0, 0.64))",
      }}
      className="py-[18px]"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <p className="font-bold text-[1.5rem] text-black tracking-[3px] cursor-pointer">
            <Link href={"/"} className="text-black">
              <i>3Legant</i>
            </Link>
          </p>
          <ul className="flex justify-between items-center gap-[40px]">
            <li>
              <Link href={"/"} className="text-[1rem] font-grotesk text-black font-medium">
                {headerT("home")}
              </Link>
            </li>
            <li>
              <Link
                href={"/profile"}
                className="text-[1rem] font-grotesk text-black font-medium"
              >
                {headerT("profile")}
              </Link>
            </li>
            <li>
              <Link
                href={"/blogs"}
                className="text-[1rem] font-grotesk text-black font-medium"
              >
                {headerT("blogs")}
              </Link>
            </li>
            <li>
              <Link
                href={"/contacts"}
                className="text-[1rem] font-grotesk text-black font-medium"
              >
                {headerT("contacts")}
              </Link>
            </li>
            {user?.role[0] === "Admin" ? (
              <>
              <li>
                <Link
                  href={"/admin/users"}
                  className="text-[1rem] font-grotesk text-black font-medium"
                >
                  {"Users"}
                </Link>
              </li>
              <li>
                <Link
                  href={"/admin/products"}
                  className="text-[1rem] font-grotesk text-black font-medium"
                >
                  {"Add Products"}
                </Link>
              </li>
              </>
            ) : null}
          </ul>
          <div>
            <div className="flex gap-[15px]">
              <Image src={SearchIcon} width={24} height={24} alt="Search Icon"></Image>
              {!user ? (
                <>
                  <a
                    href="/api/auth/login"
                    className="text-[1rem] text-black border-solid font-grotesk border-black border-[1px] rounded-md flex items-center justify-center py-1 px-3"
                  >
                    Log In
                  </a>
                  <a
                    href="/api/auth/signup"
                    className="text-[1rem] text-black border-solid font-grotesk border-black border-[1px] rounded-md flex items-center justify-center py-1 px-3"
                  >
                    Register
                  </a>
                </>
              ) : (
                <div className="flex gap-[15px] items-center">
                  <div className="flex items-center gap-[5px]">
                    <Image src={ShopIcon} className="cursor-pointer" width={24} height={24} alt="Shop Icon" />
                    <span className="rounded-[50%] flex items-center justify-center w-[20px] h-[20px] bg-[#141718] text-[#FFAB00] text-[12px]">
                      0
                    </span>
                  </div>
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
