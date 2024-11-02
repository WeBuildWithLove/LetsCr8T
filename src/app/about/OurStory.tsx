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
                message="LetsCr8T, we design and develop high-quality websites and web applications for businesses of all sizes."
                className="lg:block hidden  lg:w-[428px]  w-[342px]"
              />
              {/* <Paragraph
                message="and web applications for businesses of all sizes."
                className="lg:block hidden"
              /> */}
              <p className="w-[342px] font-poppins font-light text-cr8tLightBlack block lg:hidden text-base">
                <span className=" px-[6px] py-[6px] mr-1 bg-cr8tOrange rounded-[7px] font-normal  text-lg text-[#F4F4F4]">
                  At
                </span>
                LetsCr8T, we design and develop high-quality websites and web
                applications for businesses of all sizes.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:text-lg md:leading-[27px] text-base leading-6 xl:w-[572px] lg:w-[472px]  w-[342px]">
            <Paragraph message="Our skilled team blends creativity with technical know-how to craft custom digital solutions that not only help your business grow but also connect you with more customers in meaningful ways." />
            <br />

            <Paragraph
              message="We also believe in giving back. Through our charity initiatives, we
            provide free web services to small businesses that need a helping
            hand, supporting their success in the digital world."
            />
          </div>
        </div>
        <div className="border border-Cr8tGray hidden md:block h-[317px] border-opacity-20 lg:mr-[2%] xl:mr-0 "></div>
        <div className="flex flex-col lg:gap-[30px] gap-[25px] items-center ">
          <div className="flex flex-col lg:gap-5 gap-[5px]">
            <span className="lg:w-[125px] w-[114px] lg:h-[45px] h-[42px] p-[10px] bg-opacity-[0.1] bg-Cr8tGray rounded-[5px] text-cr8tBlack lg:text-lg font-grotesk font-medium text-base">
              Our Mission
            </span>

            <Paragraph
              message="Our mission is simple: We want to empower businesses to become profitable and shine with innovative digital solutions that truly reflect who they are."
              className="flex flex-col lg:text-lg text-base  lg:leading-[27px] leading-6 xl:w-[572px] lg:w-[472px]  w-[342px] "
            />
          </div>
          <div className="flex flex-col lg:gap-5 gap-[5px]">
            <span className="lg:w-[125px] w-[114px] lg:h-[45px] h-[42px] p-[10px] bg-opacity-[0.1] bg-Cr8tGray rounded-[5px] text-cr8tBlack lg:text-lg font-grotesk font-medium text-base">
              Our Vision
            </span>

            <Paragraph
              message="We envision a world where every company stands out. Through exceptional digital experiences and strong brand identities, we help businesses thrive in competitive industries."
              className="flex flex-col  lg:text-lg text-base lg:leading-[27px] leading-6 xl:w-[572px] lg:w-[472px] w-[342px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
