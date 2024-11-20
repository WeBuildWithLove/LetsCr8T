import React from "react";
import { howItWorksData } from "../../../constants";
import Arrow from "../../../public/arrow.svg";
import Preye from "../../../public/PREYE.svg";
import Image from "next/image";
import AnimatedButton from "../ui/animatedButton";

const HowItWorks = () => {
  return (
    <section className="md:pt-[100px] pt-[50px] px-[24px] lg:px-[80px] items-center">
      <div className="bg-white w-full flex flex-col md:gap-[50px]  gap-[30px] justify-center items-center mx-auto md:py-[50px] rounded-[20px] py-[25px] ">
        <div className="flex flex-col justify-center items-center text-center md:gap-[10px] gap-[7px]">
          <h2 className="font-urban md:text-2xl text-base font-normal text-cr8tOrange">
            What Happens Next?
          </h2>
          <p className="text-Cr8tGray font-grotesk font-semibold  md:text-[32px] md:text-2xl text-base  text-center">
            Simple Steps, Big Results
          </p>
        </div>

        <div className="xl:flex items-center justify-center px-[237.66px] gap-[67px]  hidden">
          <Image
            src={howItWorksData[0].icon}
            alt="icon showcasing how to begin"
            width={75.22}
            height={80}
            className="ml-[3.34px]"
          />

          <Image
            src={Arrow}
            alt="arrow indicating flow"
            width={185}
            height={28}
            className="ml-[4.78px] xl:block hidden"
          />

          <Image
            src={howItWorksData[1].icon}
            alt="icon showcasing how to begin"
            width={75.22}
            height={80}
          />

          <Image
            src={Arrow}
            alt="arrow indicating flow"
            width={185}
            height={28}
            className="xl:block hidden"
          />

          <Image
            src={howItWorksData[2].icon}
            alt="icon showcasing how to begin"
            width={75.22}
            height={80}
          />
        </div>

        <div className="flex xl:gap-[118px]  gap-[30px] text-center items-center md:px-[136px] px-[30px] flex-wrap justify-center">
          {howItWorksData.map((step, index) => (
            <div
              key={index}
              className="lg:w-[281px] flex flex-col md:gap-[15px] gap-[14px] items-center"
            >
              <Image
                src={step.icon}
                alt="icon showcasing how to begin"
                width={56}
                height={60}
                className=" xl:hidden mx-auto"
              />
              <div className="flex flex-col md:gap-[10px] gap-[7px] font-poppins justify-center text-center">
                <h3 className="md:text-xl  text-base font-medium text-cr8tBlack">
                  {step.title}
                </h3>
                <p className="md:text-lg text-base leading-6 font-normal lmd:eading-[27px] text-cr8tLightBlack">
                  {step.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <AnimatedButton className=" xl:w-[25%] md:w-[50%]  h-[50px] md:flex hidden ">
          Book Your Free Call With Preye
          <Image
            src={Preye}
            alt="Preye Omusuku"
            width={45}
            height={45}
            className=""
          />
        </AnimatedButton>

        <AnimatedButton className=" w-[187px] h-[50px] md:hidden">
          Book Your Free Call
          {/* <Image
            src={Preye}
            alt="Preye Omusuku"
            width={45}
            height={45}
            className=""
          /> */}
        </AnimatedButton>
      </div>
    </section>
  );
};

export default HowItWorks;
