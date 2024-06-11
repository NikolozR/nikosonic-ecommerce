import Link from "next/link";
import LandingPlaceholder from "../../public/LandingPlaceholder.png";
import Button from "./shared/Button";

function Hero() {
  return (
    <section className="font-poppins">
      <div
        style={{
          backgroundImage: `url(${LandingPlaceholder.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-[820px] pt-[222px]"
      >
        <div className="container">
          <div className="flex flex-col items-end">
            <div>
              <h1 className="text-[5rem] leading-[84px] w-fit">
                Listen to <br /> the{" "}
                <span className="text-[#377DFF]">Amazing</span>
                <br /> music sound.
              </h1>
              <p
                className={"text-[#121212] text-[1.125rem] pt-[8px] pb-[28px] "}
              >
                Experience music like never before
              </p>
              <Button
                type="button"
                fontSize="1.125rem"
                padding="px-[56px] py-[12px]"
              >
                <Link href={"/products"}>Shop Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
