'use client'
import Link from "next/link";
import LandingPlaceholder from "../../../public/LandingPlaceholder.webp";
import DarkLandingPlaceholder from '../../../public/LandingPlaceholderDark.webp'
import Button from "../shared/Button";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Hero() {
  const heroT = useTranslations("LandingHero");
  return (
    <section className="font-poppins">
      <div
        style={{
          backgroundImage: `url(${LandingPlaceholder.src})`,
          backgroundRepeat: "no-repeat",
        }}
        className="pt-[50px] h-[692px] md:h-[820px] md:pt-[222px] dark:hidden !object-contain md:object-cover bg-[position:20%_-200%] xs:bg-[position:15%_-200%] sm:bg-[position:9%_-200%] md:bg-[position:40%_0%] lg:bg-[position:50%_0%] xl:bg-[0%_0%]"
      >
        <div className="container">
          <div className="flex justify-center md:flex-col md:items-end">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={itemVariants}
                className="md:pr-[15px] text-center lg:text-left xl:pr-0 text-[1.8rem] xs:text-[3rem] mx-auto dark:text-[#ECEDEE] lg:text-[4rem] xl:text-[5rem] leading-[30px] xs:leading-[50px] lg:leading-[84px] w-fit"
              >
                {heroT("head1")} <br /> {heroT("head2")}{" "}
                <span className="text-[#377DFF]">{heroT("head3")}</span>
                <br /> {heroT("head4")}.
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className={
                  "text-[#121212] text-[1rem] text-center lg:text-left dark:text-white xs:text-[1.125rem] pt-[8px] pb-[28px] mt-[10px]"
                }
              >
                {heroT("sub")}
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link href={"/products"} className="block mx-auto">
                  <Button
                    type="button"
                    fontSize="1.125rem"
                    padding="px-[56px] py-[12px]"
                    className="mx-auto lg:ml-0 block"
                  >
                    {heroT("btn")}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${DarkLandingPlaceholder.src})`,
          backgroundRepeat: "no-repeat",
        }}
        className="pt-[50px] h-[692px] md:h-[820px] md:pt-[222px] dark:block hidden !object-contain md:object-cover bg-[position:20%_-200%] xs:bg-[position:15%_-200%] sm:bg-[position:9%_-200%] md:bg-[position:40%_0%] lg:bg-[position:50%_0%] xl:bg-[0%_0%]"
      >
        <div className="container">
          <div className="flex justify-center md:flex-col md:items-end">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                variants={itemVariants}
                className="md:pr-[15px] text-center lg:text-left xl:pr-0 text-[1.8rem] xs:text-[3rem] mx-auto dark:text-[#ECEDEE] lg:text-[4rem] xl:text-[5rem] leading-[30px] xs:leading-[50px] lg:leading-[84px] w-fit"
              >
                {heroT("head1")} <br /> {heroT("head2")}{" "}
                <span className="text-[#377DFF]">{heroT("head3")}</span>
                <br /> {heroT("head4")}.
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className={
                  "text-[#121212] text-[1rem] text-center lg:text-left dark:text-white xs:text-[1.125rem] pt-[8px] pb-[28px] mt-[10px]"
                }
              >
                {heroT("sub")}
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link href={"/products"} className="block mx-auto">
                  <Button
                    type="button"
                    fontSize="1.125rem"
                    padding="px-[56px] py-[12px]"
                    className="block lg:ml-0 mx-auto"
                  >
                    {heroT("btn")}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
