import Image from "next/image";
import ContactForm from "../../../components/ContactUs/ContactForm";
import Placeholder from "../../../../public/AboutUsPLaceholder.webp";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

function Contact() {
  return (
    <>
      <div className="container">
        <h3 className="text-[#141718] mt-[80px] font-poppins font-medium dark:text-[#ECEDEE] text-[3rem] block max-w-full lg:text-[3.375rem] leading-[58px] w-[30ch]">
          Stay Connected with Exceptional Sound. We&apos;re Here to Help!
        </h3>
        <div className="flex flex-col md:flex-row w-full h-fit mt-[48px]">
          <div className="w-full md:w-[40%] h-[500px] md:h-auto relative">
            <Image
              src={Placeholder}
              alt="About Us Placeholder"
              fill
              className="object-cover"
            ></Image>
          </div>
          <div className="bg-[#F3F5F7] dark:!bg-[#493565] pl-[72px] w-full md:w-[60%] py-[94px] pr-[35px]">
            <h4 className="font-poppins font-medium text-[2.5rem]">About Us</h4>
            <p className="py-[24px] text-[#141718] text-[1rem] leading-[28px] dark:text-[#ECEDEE]">
              3legant is a gift & decorations store based in HCMC, Vietnam. Est
              since 2019. Our customer service is always prepared to support you
              24/7
            </p>
            <Link
              href={"/products"}
              className="text-[#121212] dark:text-[#ECEDEE] dark:border-white font-medium leading-[28px] border-solid border-b-[1px] border-[#121212]"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <h4 className="font-poppins font-medium leading-[44px] dark:text-[#ECEDEE] text-[2.5rem] mt-[48px] text-[#121212] text-center">
          Contact Us
        </h4>
        <div className="grid md:grid-cols-3 gap-[24px] my-[40px]">
          <div className="bg-[#F3F5F7] dark:bg-[#201424] flex flex-col py-[18px] items-center justify-center">
            <FaLocationCrosshairs size={32} className="mb-[16px] dark:hidden" />
            <FaLocationCrosshairs
              size={32}
              color="white"
              className="mb-[16px] hidden dark:block"
            />
            <h4 className="text-[#6C7275] font-bold mb-[8px] text-[1rem] leading-[16px]">
              ADDRESS
            </h4>
            <p className="text-[#141718] block max-w-full dark:text-[#ECEDEE] text-[0.75rem] text-center mx-auto lg:text-[1rem] leading-[26px] font-semibold">
              Akhalgazrdoba Ave. Lane 5/7, Kutaisi, Georgia
            </p>
          </div>
          <div className="bg-[#F3F5F7] dark:bg-[#201424] flex flex-col py-[18px] items-center justify-center">
            <FaPhoneAlt size={32} className="mb-[16px] dark:hidden" />
            <FaPhoneAlt
              size={32}
              color="white"
              className="mb-[16px] hidden dark:block"
            />
            <h4 className="text-[#6C7275] font-bold mb-[8px] text-[1rem] leading-[16px]">
              CONTACT US
            </h4>
            <p className="text-[#141718] block max-w-full dark:text-[#ECEDEE] text-[0.75rem] text-center mx-auto lg:text-[1rem] leading-[26px] font-semibold">
              +995 551 741 155
            </p>
          </div>
          <div className="bg-[#F3F5F7] dark:bg-[#201424] flex flex-col py-[18px] items-center justify-center">
            <MdOutlineEmail size={32} className="mb-[16px] dark:hidden" />
            <MdOutlineEmail
              size={32}
              color="white"
              className="mb-[16px] hidden dark:block"
            />
            <h4 className="text-[#6C7275] font-bold mb-[8px] text-[1rem] leading-[16px]">
              EMAIL
            </h4>
            <p className="text-[#141718] block max-w-full dark:text-[#ECEDEE] text-[0.75rem] text-center mx-auto lg:text-[1rem] leading-[26px] font-semibold">
              nika.rusishvili.95@gmail.com
            </p>
          </div>
        </div>
        <ContactForm></ContactForm>
      </div>
    </>
  );
}

export default Contact;
