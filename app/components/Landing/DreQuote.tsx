import Image from "next/image";
import DreQuotePlaceholder from '../../../public/quotePlaceholder.png';
import Button from "../shared/Button";
import Link from "next/link";

function DreQuote() {
  return (
    <section className="flex">
      <div className="relative w-[50%]">
        <Image src={DreQuotePlaceholder} alt="Dr Dre Quote Placeholder" fill className='object-cover' />
      </div>
      <div className="bg-[#FFAB0066] w-[50%] py-[100px] pl-[72px]">
        <h2 className="text-[#121212] font-poppins text-[2.5rem] mb-5 font-medium">
          Explore Headphones for Every Lifestyle!
        </h2>
        <h3 className="text-[#377DFF] text-[1rem] font-bold italic mb-9">&quot;Music is life. That&apos;s why our hearts have beats.&quot; - Dr. Dre</h3>
        <p className="text-[#121212] text-[1.1rem] leading-7 w-[55ch] max-w-full pb-[24px]">
          Explore our diverse headphone collection, designed to elevate your listening experience. Whether you&apos;re chasing beats or immersing yourself in your favorite tunes, we have the perfect headphones to complement your lifestyle. Discover yours today!
        </p>
        <Button type="button" padding="px-[40px] py-[10px]" fontSize="1rem">
            <Link href={'/products'}>Shop Now</Link>
        </Button>
      </div>
    </section>
  );
}

export default DreQuote;
