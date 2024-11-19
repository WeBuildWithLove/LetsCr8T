import AboutBanner from "../../../public/aboutBanner.svg";
import AboutBannerMobile from "../../../public/aboutBannerMobile.svg";
import Crown from "../../../public/crown.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="lg:pt-20 md:px-[80px] pt-[50px] px-[25px]">
      <div className="flex items-center flex-col">
        <div className="lg:w-[865px] md:w-[568px] w-[340px] flex flex-col justify-center mx-auto text-center lg:gap-5 gap-[10px] items-center">
          <h1 className=" text-cr8tBlack font-grotesk lg:text-5xl text-[32px] font-medium">
            About Us
          </h1>

          <p className="md:text-lg text-base font-light font-poppins md:leading-[27px] leading-6 text-cr8tLightBlack">
            We build websites and web-apps that help businesses grow. Meet the
            team turning ideas into results.
          </p>
        </div>
        <div className="md:mt-20 mt-[30px]">
          <div className="flex flex-col items-end">
            <Image
              src={Crown}
              alt="about banner image"
              className="absolute md:translate-y-[-69px]  translate-y-[-15px] md:w-[144.99px] md:h-[90.57px] w-[40.5px] h-[25px] md:translate-x-5"
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
