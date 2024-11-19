"use client";
import React from "react";
import AnimatedContainer from "../Animations/AnimatedContainer";
import Image from "next/image";
import ServicePlayer from "../../../public/service.gif";

const ServiceDisplay = () => {
  return (
    <section className=" md:pt-[100px] pt-[70px] px-[32px] md:px-0 items-center">
      <AnimatedContainer className="flex flex-col items-center justify-center mx-auto">
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={ServicePlayer}
            alt="services gif player"
            className="object-contain md:mr-[15px] md:mb-[-15px] mr-[10px] mb-[-10px]"
          />
        </div>
      </AnimatedContainer>
    </section>
  );
};

export default ServiceDisplay;
