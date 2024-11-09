import Paragraph from "@/components/ui/Titles/paragraph";
import React from "react";

const OurStory = () => {
  return (
    <section className="lg:mt-[100px] md:mt-[50px] mt-[25px] font-grotesk xl:px-[80px] px-[25px]">
      <h2 className=" font-semibold md:text-[32px] text-2xl text-cr8tBlack">
        Our Story
      </h2>
      <div className=" flex md:justify-between flex-wrap md:flex-nowrap gap-[25px] xl:gap-2 items-center">
        <div className="flex flex-col">
          <div className="flex gap-[6px] md:mt-5 mt-[10px] items-center ">
            <span className=" hidden lg:flex md:h-[60px] md:w-[60px] h-[48px] w-[48px] bg-cr8tOrange rounded-[7px] font-normal md:text-[32px] text-lg text-[#F4F4F4]  flex-col items-center justify-center">
              At
            </span>
            <div className="flex flex-col lg:text-lg lg:leading-[27px] text-base leading-6">
              <Paragraph
                message="LetsCr8T, we specialize in developing custom websites and web applications that help small businesses and startups thrive online."
                className="lg:block hidden  lg:w-[428px]  w-[342px]"
              />

              <p className="min-w-[342px] font-poppins font-light text-cr8tLightBlack block lg:hidden text-base">
                <span className=" px-[6px] py-[6px] mr-1 bg-cr8tOrange rounded-[7px] font-normal  text-lg text-[#F4F4F4]">
                  At
                </span>
                LetsCr8T, we specialize in developing custom websites and web
                applications that help small businesses and startups thrive
                online.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:text-lg md:leading-[27px] text-base leading-6 xl:w-[572px] lg:w-[472px]  min-w-[342px]">
            <Paragraph message="Our team combines creativity and technical expertise to deliver digital solutions that drive growth and connect you with your audience" />
            <br />

            <Paragraph message="We're also passionate about giving back. Through our charity initiatives, we offer free web services to small businesses in need, helping them succeed in the digital world." />
          </div>
        </div>
        <div className="border border-Cr8tGray hidden md:block h-[317px] border-opacity-20 lg:mr-[2%] xl:mr-0 "></div>
        <div className="flex flex-col lg:gap-[30px] gap-[25px] items-center ">
          <div className="flex flex-col lg:gap-5 gap-[5px]">
            <span className="lg:w-[125px] w-[114px] lg:h-[45px] h-[42px] p-[10px] bg-opacity-[0.1] bg-Cr8tGray rounded-[5px] text-cr8tBlack lg:text-lg font-grotesk font-medium text-base">
              Our Mission
            </span>

            <Paragraph
              message="We build custom websites and digital solutions tailored to help your business grow online. Whether you need a user-friendly app or a unique brand identity, we’re here to support you."
              className="flex flex-col lg:text-lg text-base  lg:leading-[27px] leading-6 xl:w-[572px] lg:w-[472px]  min-w-[342px] "
            />
          </div>
          <div className="flex flex-col lg:gap-5 gap-[5px]">
            <span className="lg:w-[125px] w-[114px] lg:h-[45px] h-[42px] p-[10px] bg-opacity-[0.1] bg-Cr8tGray rounded-[5px] text-cr8tBlack lg:text-lg font-grotesk font-medium text-base">
              Our Vision
            </span>

            <Paragraph
              message="To empower small businesses and startups with digital solutions that help them stand out and succeed online."
              className="flex flex-col  lg:text-lg text-base lg:leading-[27px] leading-6 xl:w-[572px] lg:w-[472px] min-w-[342px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
