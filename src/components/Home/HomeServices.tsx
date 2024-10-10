"use client";

import React from "react";
import { Services } from "../../../constants";
import Link from "next/link";
import Image from "next/image";
import ServiceDisplay from "../../../public/services-display.svg";
import ConnectingDots from "../../../public/connecting-dots.svg";
import AnimatedButton from "../ui/animatedButton";
import ServiceAnimate from "../Animations/ServiceAnimate";
import AnimatedContainer from "../Animations/AnimatedContainer";

const HomeServices = () => {
  return (
    <section className=" md:pt-[224px] pt-[70px] px-[32px] md:px-0">
      <AnimatedContainer>
        <ServiceAnimate
          src="https://lottie.host/41f83571-7511-4a78-9df4-f0887188693a/xwo927jp6y.json"
          width="229px"
          height="453px"
          loop
          autoplay
        />
      </AnimatedContainer>

      <div className="flex flex-col md:gap-[100px] gap-[50px] md:pt-[100px] pt-[50px]">
        <div className="md:w-[304px] w-[170px] flex flex-col justify-center gap-[10px] mx-auto items-center">
          <h2 className="font-urban md:text-2xl text-base font-normal text-cr8tOrange">
            SERVICES
          </h2>
          <p className="text-Cr8tGray font-grotesk md:font-semibold font-medium md:text-5xl text-2xl md:leading-[62px] leading-[33.6px] text-center">
            Our Core Capabilities
          </p>
        </div>
        <div className="flex flex-col font-grotesk justify-center items-center mx-auto text-cr8tBlack">
          {Services.map((service, index) => (
            <div
              className="flex flex-col md:gap-[15px] gap-[10px] justify-center items-center"
              key={index}
              style={{ maxWidth: service.width }}
            >
              <div className="w-[100px] h-[100px] rounded-full border flex flex-col justify-center items-center mx-auto">
                {service.icon}
              </div>
              <div className="flex flex-col gap-[5px] items-center text-center">
                <h1 className="font-medium md:text-[32px] text-2xl leading-[33.6px] md:leading-normal">
                  {service.service}
                </h1>
                <p className="font-normal md:text-lg text-base md:leading-7 leading-6  font-poppins text-cr8tLightBlack">
                  {service.description}
                </p>
              </div>
              {index !== Services.length - 1 && (
                <div className="md:mb-[15px] mb-[10px]">
                  <Image
                    src={ConnectingDots}
                    alt="icon of Connecting dots"
                    width={4.6}
                    height={93}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-[25px]">
        <Link href="/services" className="">
          <AnimatedButton
            className="w-[199px] lg:w-[223px] lg:h-[56px] h-[50px] "
            showSettingsIcon
          >
            View All Services
          </AnimatedButton>
        </Link>
      </div>
    </section>
  );
};

export default HomeServices;
