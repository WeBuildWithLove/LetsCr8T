import React from "react";
import { howItWorksData } from "../../../constants";
import Arrow from "../../../public/arrow.svg";
import Preye from "../../../public/PREYE.svg";
import Image from "next/image";
import AnimatedButton from "../ui/animatedButton";

const HowItWorks = () => {
  return (
    <section className="md:pt-[100px] pt-[70px] px-[32px] md:px-[80px] items-center">
      <div className="bg-white w-full flex flex-col gap-[50px] justify-center items-center mx-auto py-[50px] rounded-[20px] ">
        <div className="flex flex-col justify-center items-center text-center gap-[10px]">
          <h2 className="font-urban md:text-2xl text-base font-normal text-cr8tOrange">
            What Happens Next?
          </h2>
          <p className="text-Cr8tGray font-grotesk md:font-semibold font-medium md:text-[32px] text-2xl  text-center">
            Simple Steps, Big Results
          </p>
        </div>

        {/* Flex container for icons with arrow */}
        <div className="flex items-center justify-center px-[237.66px] gap-[67px]">
          <Image
            src={howItWorksData[0].icon}
            alt="icon showcasing challenge"
            width={75.22}
            height={80}
            className="ml-[3.34px]"
          />

          <Image
            src={Arrow}
            alt="arrow indicating flow"
            width={185}
            height={28}
            className="ml-[4.78px]"
          />

          <Image
            src={howItWorksData[1].icon}
            alt="icon showcasing challenge"
            width={75.22}
            height={80}
          />

          <Image
            src={Arrow}
            alt="arrow indicating flow"
            width={185}
            height={28}
          />

          <Image
            src={howItWorksData[2].icon}
            alt="icon showcasing challenge"
            width={75.22}
            height={80}
          />
        </div>

        {/* Content below the icons */}
        <div className="flex gap-[118px] text-center items-center px-[136px]">
          {howItWorksData.map((step, index) => (
            <div
              key={index}
              className="w-[281px] flex flex-col gap-[15px] items-center"
            >
              <div className="flex flex-col gap-[10px] font-poppins justify-center text-center">
                <h3 className="text-xl font-medium text-cr8tBlack">
                  {step.title}
                </h3>
                <p className="text-lg font-normal leading-[27px] text-cr8tLightBlack">
                  {step.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <AnimatedButton className=" w-[25%] md:h-[56px] h-[50px] ">
          Book Your Free Call With Preye
          <Image src={Preye} alt="Preye Omusuku" width={45} height={45} />
        </AnimatedButton>
      </div>
    </section>
  );
};

export default HowItWorks;
