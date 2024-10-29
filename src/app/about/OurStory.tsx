import Paragraph from "@/components/ui/Titles/paragraph";
import React from "react";

const OurStory = () => {
  return (
    <section className="md:mt-[100px] mt-[25px] font-grotesk md:px-[80px] px-[25px]">
      <h2 className=" font-semibold md:text-[32px] text-2xl text-cr8tBlack">
        Our Story
      </h2>
      <div className=" flex justify-between flex-wrap">
        <div className="flex flex-col">
          <div className="flex gap-[6px] mt-5">
            <span className=" md:h-[60px] md:w-[60px] h-[48px] w-[48px] bg-cr8tOrange rounded-[7px] font-normal md:text-[32px] text-lg text-[#F4F4F4] flex flex-col items-center justify-center">
              <p>At </p>
            </span>
            <div className="flex flex-col md:text-lg md:leading-[27px] text-base leading-6">
              <Paragraph message="LetsCr8T, we design and develop high-quality websites" />
              <Paragraph message="and web applications for businesses of all sizes." />
            </div>
          </div>
          <p className="flex flex-col  md:text-lg md:leading-[27px] text-base leading-6 w-[572px]">
            <Paragraph message="Our skilled team blends creativity with technical know-how to craft custom digital solutions that not only help your business grow but also connect you with more customers in meaningful ways." />
            <br />

            <Paragraph
              message="We also believe in giving back. Through our charity initiatives, we
            provide free web services to small businesses that need a helping
            hand, supporting their success in the digital world."
            />
          </p>
        </div>
        <div className="border border-Cr8tGray"></div>
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-5">
            <span className="w-[125px] h-[45px] p-[10px] bg-opacity-[0.1] bg-Cr8tGray rounded-[5px] text-cr8tBlack text-lg font-grotesk font-medium">
              Our Mission
            </span>

            <Paragraph
              message="Our mission is simple: We want to empower businesses to become profitable and shine with innovative digital solutions that truly reflect who they are."
              className="flex flex-col  text-lg leading-[27px] w-[572px]"
            />
          </div>
          <div className="flex flex-col gap-5">
            <span className="w-[125px] h-[45px] p-[10px] bg-opacity-[0.1] bg-Cr8tGray rounded-[5px] text-cr8tBlack text-lg font-grotesk font-medium">
              Our Vision
            </span>

            <Paragraph
              message="We envision a world where every company stands out. Through exceptional digital experiences and strong brand identities, we help businesses thrive in competitive industries."
              className="flex flex-col  text-lg leading-[27px] w-[572px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
