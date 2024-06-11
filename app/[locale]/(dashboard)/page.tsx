import Hero from "../../components/Hero";
import Image from "next/image";
import JBL from "../../../public/jbl.png";
import Beats from "../../../public/beats.png";
import Marshall from "../../../public/marshall.png";
import Sony from "../../../public/sony.png";
import Bose from "../../../public/bose.png";
import NewArrivals from "../../components/Landing/NewArrivals";
import ShopCollection from "../../components/Landing/ShopCollection";
import MostViewed from "../../components/Landing/MostViewed";
import DreQuote from "../../components/Landing/DreQuote";
import BusinessFeatures from "../../components/Landing/BusinessFeatures";
import NewsFeed from "../../components/Landing/NewsFeed";

function Landing() {
  return (
    <>
      <Hero />
      <main>
        <div className="container">
          <div className="grid grid-cols-5 gap-[50px] py-[40px]">
            <div className="w-full h-[100px] relative">
              <Image
                src={JBL}
                style={{ objectFit: "contain" }}
                fill
                alt="JBL Logo"
              />
            </div>
            <div className="w-full h-[100px] relative">
              <Image
                src={Sony}
                style={{ objectFit: "contain" }}
                fill
                alt="Sony Logo"
              />
            </div>
            <div className="w-full h-[100px] relative">
              <Image
                src={Beats}
                style={{ objectFit: "contain" }}
                fill
                alt="Beats Logo"
              />
            </div>
            <div className="w-full h-[100px] relative">
              <Image
                src={Marshall}
                style={{ objectFit: "contain" }}
                fill
                alt="Marshall Logo"
              />
            </div>
            <div className="w-full h-[100px] relative">
              <Image
                src={Bose}
                style={{ objectFit: "contain" }}
                fill
                alt="Bose Logo"
              />
            </div>
          </div>
        </div>
        <NewArrivals />
        <ShopCollection />
        <MostViewed />
        <DreQuote />
        <BusinessFeatures />
        <NewsFeed />
      </main>
    </>
  );
}

export default Landing;
