import React from "react";
import { howItWorksData } from "../../../constants";
import Arrow from "../../../public/arrow.svg";
import Preye from "../../../public/PREYE.svg";
import Image from "next/image";
import AnimatedButton from "../ui/animatedButton";

const HowItWorks = () => {
  return (
    <section className="md:pt-[100px] pt-[50px] px-[24px] lg:px-[80px] flex items-center justify-center">
      <div className="bg-white w-full flex flex-col gap-[30px] md:gap-[50px] items-center justify-center py-[25px] md:py-[50px] rounded-[20px]">
        {/* Header Section */}
        <div className="text-center flex flex-col gap-[7px] md:gap-[10px]">
          <h2 className="font-urban text-cr8tOrange text-base md:text-2xl font-normal">
            What Happens Next?
          </h2>
          <p className="text-Cr8tGray font-grotesk font-semibold text-base md:text-[32px] leading-[33.6px] md:leading-[44.8px]">
            Simple Steps, Big Results
          </p>
        </div>

        {/* Icons with Arrows Section */}
        <div className="hidden xl:flex items-center gap-[67px] px-[237.66px]">
          {howItWorksData.map((step, index) => (
            <React.Fragment key={index}>
              <Image
                src={step.icon}
                alt={`Step ${index + 1}: ${step.title}`}
                width={75}
                height={80}
                className="object-contain"
                priority={index === 0} // Preload the first icon
              />
              {index < howItWorksData.length - 1 && (
                <Image
                  src={Arrow}
                  alt="Arrow indicating flow"
                  width={185}
                  height={28}
                  className="object-contain"
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Steps Details */}
        <div className="flex flex-wrap xl:flex-nowrap gap-[30px] xl:gap-[118px] text-center items-center md:px-[136px] px-[30px] justify-center">
          {howItWorksData.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-[14px] md:gap-[15px] lg:w-[281px]"
            >
              <Image
                src={step.icon}
                alt={`Step ${index + 1}: ${step.title}`}
                width={56}
                height={60}
                className="xl:hidden object-contain"
              />
              <div className="flex flex-col gap-[7px] md:gap-[10px] font-poppins">
                <h3 className="text-base md:text-xl font-medium text-cr8tBlack">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg leading-6 md:leading-[27px] font-light text-cr8tLightBlack">
                  {step.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action for Desktop */}
        <a
          href="https://calendly.com/preyeomusuku"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex justify-center w-full"
        >
          <AnimatedButton className="h-[50px] xl:w-[30%] md:w-[50%] flex items-center justify-center gap-[10px]">
            Book Your Free Call With Preye
            <Image
              src={Preye}
              alt="Preye Omusuku"
              width={45}
              height={45}
              className="object-contain"
            />
          </AnimatedButton>
        </a>

        {/* Call to Action for Mobile */}
        <a
          href="https://calendly.com/preyeomusuku"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden flex justify-center"
        >
          <AnimatedButton className="w-[187px] h-[50px]">
            Book Your Free Call
          </AnimatedButton>
        </a>
      </div>
    </section>
  );
};

export default HowItWorks;
