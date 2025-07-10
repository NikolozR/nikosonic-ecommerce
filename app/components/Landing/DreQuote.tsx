'use client'
import Image from "next/image";
import DreQuotePlaceholder from "../../../public/quotePlaceholder.jpg";
import Button from "../shared/Button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

function DreQuote() {
  const t = useTranslations("DrDre");
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col md:flex-row"
    >
      <div className="relative w-full h-[500px] md:h-auto md:w-[50%]">
        <Image
          src={DreQuotePlaceholder}
          alt="Dr Dre Quote Placeholder"
          fill
          className="object-cover"
        />
      </div>
      <div className="bg-[#AEACA8] md:w-[50%] py-[100px] pl-[30px] pr-[20px] lg:pl-[72px]">
        <h2 className="text-[#121212] font-poppins text-[1.9rem] leading-[39px] lg:text-[2.5rem] mb-5 font-medium">
          {t("head")}
        </h2>
        <h3 className="text-[#141718] text-[1rem] font-bold italic mb-9 leading-[20px]">
          &quot;{t("quote")}&quot; - Dr. Dre
        </h3>
        <p className="text-[#121212] text-[1.1rem] leading-7 w-[55ch] max-w-full pb-[24px]">
          {t("text")}
        </p>
        <Link href={"/products"}>
          <Button type="button" padding="px-[40px] py-[10px]" fontSize="1rem">
            {t("btn")}
          </Button>
        </Link>
      </div>
    </motion.section>
  );
}

export default DreQuote;
