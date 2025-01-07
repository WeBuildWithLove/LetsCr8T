import Image from "next/image";
import AboutBanner from "../../../public/aboutBanner.svg";
import AboutBannerMobile from "../../../public/aboutBannerMobile.svg";
import Crown from "../../../public/crown.svg";

const Hero = () => {
  return (
    <section className="lg:pt-20 md:px-[80px] pt-[50px] px-[25px]">
      <div className="flex flex-col items-center">
        {/* Header Section */}
        <div className="lg:w-[865px] md:w-[568px] w-[340px] flex flex-col items-center mx-auto text-center lg:gap-5 gap-[10px]">
          <h1 className="text-cr8tBlack font-grotesk lg:text-5xl text-[32px] font-medium">
            About Us
          </h1>
          <p className="md:text-lg text-base font-light font-poppins md:leading-[27px] leading-6 text-cr8tLightBlack">
            We build websites and web-apps that help businesses grow. Meet the
            team turning ideas into results.
          </p>
        </div>

        {/* Banner Section */}
        <div className="relative md:mt-20 mt-[30px] flex justify-center">
          {/* Crown Icon */}
          <Image
            src={Crown}
            alt="Crown icon"
            className="absolute md:translate-y-[-69px] translate-y-[-15px] md:w-[144.99px] md:h-[90.57px] w-[40.5px] h-[25px] md:translate-x-5"
            width={144.99}
            height={90.57}
            priority // Ensure critical LCP assets load faster
          />
          {/* Desktop Banner */}
          <Image
            src={AboutBanner}
            alt="About banner image"
            className="hidden md:block"
            priority // Priority for larger screens
          />
          {/* Mobile Banner */}
          <Image
            src={AboutBannerMobile}
            alt="About banner image for mobile"
            width={342}
            height={210}
            className="block md:hidden"
            priority // Priority for smaller screens
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
