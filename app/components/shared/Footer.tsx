import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { getAuth0User } from "../../actions";
import Logo from "./Logo";

async function Footer() {
  const headerT = await getTranslations("Header");
  const user = await getAuth0User();
  return (
    <footer className="bg-[#141718]">
      <div className="container">
        <div className="py-[60px] flex flex-col gap-[40px] sm:gap-0 sm:flex-row items-center justify-between border-b-[1px] border-solid border-[#6C7275]">
          <div className="flex items-center ">
            <div className="border-r-[1px] hidden lg:block pr-[32px] text-[1.5rem] text-[#FFFFFF]">
              <Logo color="#ffffff" height={76} width={200} />
            </div>
            <div className="border-r-[1px] block lg:hidden pr-[10px] text-[1.5rem] text-[#FFFFFF]">
              <Logo color="#ffffff" height={46} width={120} />
            </div>
          </div>
          <ul className="flex gap-[15px] flex-wrap justify-center md:gap-[30px] items-center">
            <li>
              <Link
                href={"/"}
                className="text-[0.75rem] md:text-[0.875rem] text-white font-medium"
              >
                {headerT("home")}
              </Link>
            </li>
            <li>
              <Link
                href={"/products"}
                className="text-[0.75rem] md:text-[0.875rem] text-white font-medium"
              >
                {headerT("products")}
              </Link>
            </li>
            {user && (
              <li>
                <Link
                  href={"/profile"}
                  className="text-[0.75rem] md:text-[0.875rem] text-white font-medium"
                >
                  {headerT("profile")}
                </Link>
              </li>
            )}
            <li>
              <Link
                href={"/blogs"}
                className="text-[0.75rem] md:text-[0.875rem] text-white font-medium"
              >
                {headerT("blogs")}
              </Link>
            </li>
            <li>
              <Link
                href={"/contacts"}
                className="text-[0.75rem] md:text-[0.875rem] text-white font-medium"
              >
                {headerT("contacts")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="pt-[16px] pb-[52px] flex gap-[30px] sm:gap-0 sm:flex-row items-center flex-col-reverse justify-between">
          <div>
            <p className="text-[#FEFEFE] text-[0.75rem] text-center sm:text-[0.875rem]">
              {headerT('copyright')}
            </p>
          </div>
          <ul className="flex gap-[10px] items-center">
            <li>
              <a href="https://www.instagram.com/nika_rusishvili/" target="_blank">
                <FaInstagram></FaInstagram>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100011428154064" target="_blank">
                <FiFacebook></FiFacebook>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nika-rusishvili-69a641228/" target="_blank">
                <FaLinkedin></FaLinkedin>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
