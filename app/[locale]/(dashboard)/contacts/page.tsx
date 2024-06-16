import Image from "next/image";
import ContactForm from "../../../components/ContactUs/ContactForm";
import Placeholder from "../../../../public/AboutUsPLaceholder.jpg";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <>
      <div className="container">
        <h3 className="text-[#141718] mt-[80px] font-poppins font-medium text-[3.375rem] leading-[58px] w-[30ch]">
          Stay Connected with Exceptional Sound. We&apos;re Here to Help!
        </h3>
        <div className="flex w-full h-fit mt-[48px]">
          <div className="w-[40%] relative">
            <Image
              src={Placeholder}
              alt="About Us Placeholder"
              fill
              className="object-cover"
            ></Image>
          </div>
          <div className="bg-[#F3F5F7] pl-[72px] w-[60%] py-[94px] pr-[35px]">
            <h4 className="font-poppins font-medium text-[2.5rem]">About Us</h4>
            <p className="py-[24px] text-[#141718] text-[1rem] leading-[28px]">
              3legant is a gift & decorations store based in HCMC, Vietnam. Est
              since 2019. Our customer service is always prepared to support you
              24/7
            </p>
            <span className="text-[#121212] font-medium leading-[28px] border-solid border-b-[1px] border-[#121212]">
              Shop Now
            </span>
          </div>
        </div>
        <h4 className="font-poppins font-medium leading-[44px] text-[2.5rem] mt-[48px] text-[#121212] text-center">
          Contact Us
        </h4>
        <div className="grid grid-cols-3 gap-[24px] my-[40px]">
          <div className="bg-[#F3F5F7] flex flex-col py-[18px] items-center justify-center">
            <FaLocationCrosshairs size={32} className="mb-[16px]" />
            <h4 className="text-[#6C7275] font-bold mb-[8px] text-[1rem] leading-[16px]">
              ADDRESS
            </h4>
            <p className="text-[#141718] text-[1rem] leading-[26px] font-semibold">
              Akhalgazrdoba Ave. Lane 5/7, Kutaisi, Georgia
            </p>
          </div>
          <div className="bg-[#F3F5F7] flex flex-col py-[18px] items-center justify-center">
            <FaPhoneAlt size={32} className="mb-[16px]" />
            <h4 className="text-[#6C7275] font-bold mb-[8px] text-[1rem] leading-[16px]">
              CONTACT US
            </h4>
            <p className="text-[#141718] text-[1rem] leading-[26px] font-semibold">
              +995 551 741 155
            </p>
          </div>
          <div className="bg-[#F3F5F7] flex flex-col py-[18px] items-center justify-center">
            <MdOutlineEmail size={32} className="mb-[16px]" />
            <h4 className="text-[#6C7275] font-bold mb-[8px] text-[1rem] leading-[16px]">
              EMAIL
            </h4>
            <p className="text-[#141718] text-[1rem] leading-[26px] font-semibold">
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
