import Link from "next/link";
import LandingPlaceholder from "../../../public/blogPlaceholder.jpg";
// import LandingPlaceholderDark from '../../../public/LandingPlaceholderDark.png'
import Button from "../shared/Button";
import { getSession } from "@auth0/nextjs-auth0";
import AuthorizeModal from "./AuthorizeModal";

async function Hero() {
  const session = await getSession();
  return (
    <section className="font-poppins">
      <div className="container">
        <div
          style={{
            backgroundImage: `url(${LandingPlaceholder.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="h-fit py-[110px]"
        >
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-[24px]">
              <h1 className="text-[3.375rem] leading-[58px] font-poppins font-medium text-center">
                Our Blogs
              </h1>
              <p className={"text-[#121212] text-[1.25rem] text-center "}>
                Soundscapes and Stories: Explore the World of Headphones with
                OurBlogs
              </p>
              {session ? (
                <Button
                  type="button"
                  fontSize="1.125rem"
                  padding="px-[56px] py-[12px]"
                >
                  <Link href={"/blogs/create"}>Create Your Blog</Link>
                </Button>
              ) : (
                <AuthorizeModal />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
