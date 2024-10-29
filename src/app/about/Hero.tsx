import AboutBanner from "../../../public/aboutBanner.svg";
import AboutBannerMobile from "../../../public/aboutBannerMobile.svg";
import Crown from "../../../public/crown.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="md:pt-20 md:px-[80px] pt-[50px] px-[25px]">
      <div className="flex items-center flex-col">
        <div className="max-w-[865px] flex flex-col justify-center mx-auto text-center gap-5 items-center">
          <h1 className=" text-cr8tBlack font-grotesk lg:text-5xl md:text-4xl text-[32px] font-medium">
            About Us
          </h1>

          <p className="md:text-lg text-base font-light font-poppins md:leading-[27px] leading-6 text-cr8tLightBlack">
            Discover How We Create Innovative Digital Solutions for Businesses
            Worldwide — and Meet The Team Behind the Magic.
          </p>
        </div>
        <div className="md:mt-20 mt-[25px]">
          <div className="flex flex-col items-end">
            <Image
              src={Crown}
              alt="about banner image"
              className="absolute lg: translate-y-[-19px] md:translate-y-[-69px] md:w-[144.99px] md:h-[90.57px] w-[40.5px] h-[25px] "
              width={144.99}
              height={90.57}
            />
          </div>
          <Image
            src={AboutBanner}
            alt="about banner image "
            className="md:block hidden"
          />
          <Image
            src={AboutBannerMobile}
            alt="about banner image"
            width={342}
            height={210}
            className="block md:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
