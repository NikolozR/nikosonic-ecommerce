import NewsLetterp1 from "../../../public/newsletterp1.png";
import NewsLetterp2 from "../../../public/newletterp2.jpg";
import { CiMail } from "react-icons/ci";
import Image from "next/image";

function NewsLetter() {
  return (
    <section
      style={{
        backgroundImage: `url(${NewsLetterp2.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="relative w-full h-[360px] justify-center"
    >
      <div className="absolute flex items-center justify-center h-full w-[300px]">
        <Image
          src={NewsLetterp1}
          alt="Headphone Newsletter"
          fill
          className="object-contain absolute !left-[100px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        <h4 className="font-medium font-poppins text-[2.5rem]">
          Join Our Newsletter
        </h4>
        <p className="text-[1.125rem] pt-[20px] text-[#121212]">
          Sign up for deals, new products and promotions
        </p>
        <div className="flex border-b-[1px] mt-[44px] w-[488px] max-w-full pb-[12px] border-solid border-[#6C727580]">
          <div className="flex items-center pl-[3px] pr-[10px]">
            <CiMail size={20} color="black"></CiMail>
          </div>
          <input
            type="email"
            className="w-full font-medium text-[1rem] bg-transparent placeholder:text-[#6C7275] text-[#6C7275] focus:outline-none"
            placeholder="Email address"
          />
          <button className="bg-transparent text-[#6C7275] font-medium hover:bg-gray-300 focus:outline-none">
            Signup
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
