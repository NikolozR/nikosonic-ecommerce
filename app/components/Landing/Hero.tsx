'use client'
import Link from "next/link";
import LandingPlaceholder from "../../../public/LandingPlaceholder.png";
import DarkLandingPlaceholder from '../../../public/LandingPlaceholderDark.png'
import Button from "../shared/Button";
import { useTranslations } from "next-intl";

function Hero() {
  const heroT =  useTranslations("LandingHero");
  return (
    <section className="font-poppins">
      <div
        style={{
          backgroundImage: `url(${LandingPlaceholder.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-[820px] pt-[222px] dark:hidden"
      >
        <div className="container">
          <div className="flex flex-col items-end">
            <div>
              <h1 className="text-[5rem] leading-[84px] w-fit">
                {heroT("head1")} <br /> {heroT("head2")}{" "}
                <span className="text-[#377DFF]">{heroT("head3")}</span>
                <br /> {heroT("head4")}.
              </h1>
              <p
                className={
                  "text-[#121212] text-[1.125rem] pt-[8px] pb-[28px] mt-[10px]"
                }
              >
                {heroT("sub")}
              </p>
              <Link href={"/products"}>
                <Button
                  type="button"
                  fontSize="1.125rem"
                  padding="px-[56px] py-[12px]"
                >
                  {heroT("btn")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${DarkLandingPlaceholder.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-[820px] pt-[222px] hidden dark:block"
      >
        <div className="container">
          <div className="flex flex-col items-end">
            <div>
              <h1 className="text-[5rem] leading-[84px] w-fit">
                {heroT("head1")} <br /> {heroT("head2")}{" "}
                <span className="text-[#377DFF]">{heroT("head3")}</span>
                <br /> {heroT("head4")}.
              </h1>
              <p
                className={
                  "text-[#121212] dark:text-white text-[1.125rem] pt-[8px] pb-[28px] mt-[10px]"
                }
              >
                {heroT("sub")}
              </p>
              <Link href={"/products"}>
                <Button
                  type="button"
                  fontSize="1.125rem"
                  padding="px-[56px] py-[12px]"
                >
                  {heroT("btn")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
