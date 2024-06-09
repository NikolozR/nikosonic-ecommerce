import Hero from "../../components/Hero";
import Image from "next/image";
import JBL from "../../../public/jbl.png";
import Beats from "../../../public/beats.png";
import Marshall from "../../../public/marshall.png";
import Sony from "../../../public/sony.png";
import Bose from "../../../public/bose.png";

function Landing() {
  return (
    <>
      <Hero />
      <div className="container">
        <div className="grid grid-cols-5 gap-[50px]">
          <div className="w-full h-[100px] relative">
            <Image src={JBL} objectFit="contain" fill alt="JBL Logo" />
          </div>
          <div className="w-full h-[100px] relative">
            <Image src={Sony} objectFit="contain" fill alt="Sony Logo" />
          </div>
          <div className="w-full h-[100px] relative">
            <Image src={Beats} objectFit="contain" fill alt="Beats Logo" />
          </div>  
          <div className="w-full h-[100px] relative">
            <Image src={Marshall} objectFit="contain" fill alt="Marshall Logo" />
          </div>
          <div className="w-full h-[100px] relative">
            <Image src={Bose} objectFit="contain" fill alt="Bose Logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
