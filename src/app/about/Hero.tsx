import AboutBanner from "../../../public/aboutBanner.svg";
import Crown from "../../../public/crown.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-20 px-[76px]">
      <div className="flex items-center flex-col">
        <div className="max-w-[865px] flex flex-col justify-center mx-auto text-center gap-5">
          <h1 className=" text-cr8tBlack font-grotesk text-5xl font-medium">
            About Us
          </h1>

          <p className="text-lg font-light font-poppins leading-[27px] text-cr8tLightBlack">
            Discover How We Create Innovative Digital Solutions for Businesses
            Worldwide — and Meet The Team Behind the Magic.
          </p>
        </div>
        <div className="mt-20">
          <div className="flex flex-col items-end">
            <Image
              src={Crown}
              alt="about banner image"
              className="absolute translate-y-[-69px]"
              width={144.99}
              height={90.57}
            />
          </div>
          <Image src={AboutBanner} alt="about banner image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
