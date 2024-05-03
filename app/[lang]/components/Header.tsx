import Link from "next/link";
import Button from "./Button";
import { logout } from "../actions";
import LocaleSwitcher from "./LocaleSwitcher";

function Header({dic, locale}: headerProps) {
  const handleLogOut = async () => {
    "use server";
    await logout();
  };

  return (
    <header className="flex-[0_0_auto]">
      <nav className="bg-customMain">
        <div className="container mx-auto">
          <div className="flex py-[15px] items-center justify-between">
            <p className="font-bold text-[24px] text-white tracking-[3px] cursor-pointer">
              <Link href={"/" + locale}>
                <i>Filtro</i>
              </Link>
            </p>
            <ul className="flex gap-[40px]">
              <li>
                <Link href={'/' + locale}>{dic?.navbar.home}</Link>
              </li>
              <li>
                <Link href={"/" + locale + "/profile"}>{dic?.navbar.profile}</Link>
              </li>
              <li>
                <Link href={"/" + locale + "/blogs"}>{dic?.navbar.blogs}</Link>
              </li>
              <li>
                <Link href={"/" + locale + "/contacts"}>{dic?.navbar.contacts}</Link>
              </li>
            </ul>
            <div>
              <LocaleSwitcher></LocaleSwitcher>
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
