import Hero from "../../components/Hero";
import Image from "next/image";
import JBL from '../../../public/jbl.png'
import Beats from '../../../public/beats.png'
import Marshall from '../../../public/marshall.png'
import Sony from '../../../public/sony.png'
import Bose from '../../../public/bose.jpg'

function Landing() {
  return (
    <>
      <Hero />
      <div className="container">
        <div className="flex ">
        <Image src={JBL} width={100} height={50} alt="JBL Logo" />
        <Image src={Marshall} width={100} height={50} alt="JBL Logo" />
        <Image src={Sony} width={100} height={50} alt="JBL Logo" />
        <Image src={Beats} width={100} height={50} alt="JBL Logo" />
        <Image src={Bose} width={100} height={50} alt="JBL Logo" />

        </div>
      </div>
    </>
  );
}

export default Landing;
