import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";

async function Footer() {
  const headerT = await getTranslations("Header");
  return (
    <footer className="bg-[#141718]">
      <div className="container">
        <div className="py-[60px] flex justify-between border-b-[1px] border-solid border-[#6C7275]">
          <div className="flex items-center">
            <div className="border-r-[1px] pr-[32px] text-[1.5rem] border-solid border-[#6C7275] text-[#FFFFFF]">
              3legant
            </div>
            <p className="text-[#FEFEFE] text-[0.875rem] pl-[32px]">
              Headphones Shop
            </p>
          </div>
          <ul className="flex gap-[40px]">
            <li>
              <Link
                href={"/"}
                className="text-[0.875rem] text-white font-medium"
              >
                {headerT("home")}
              </Link>
            </li>
            <li>
              <Link
                href={"/profile"}
                className="text-[0.875rem] text-white font-medium"
              >
                {headerT("profile")}
              </Link>
            </li>
            <li>
              <Link
                href={"/blogs"}
                className="text-[0.875rem] text-white font-medium"
              >
                {headerT("blogs")}
              </Link>
            </li>
            <li>
              <Link
                href={"/contacts"}
                className="text-[0.875rem] text-white font-medium"
              >
                {headerT("contacts")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="pt-[16px] pb-[52px] flex justify-between">
          <div>
            <p className="text-[#FEFEFE] text-[0.875rem]">
              Copyright © 2023 3legant. All rights reserved
            </p>
          </div>
          <ul className="flex gap-[10px]">
            <li>
                <a href="">
                    <FaInstagram></FaInstagram>
                </a>
            </li>
            <li>
                <a href="">
                    <FiFacebook></FiFacebook>
                </a>
            </li>
            <li>
                <a href="">
                    <FaYoutube></FaYoutube>
                </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
