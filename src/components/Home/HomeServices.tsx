import React from "react";
import { Services } from "../../../constants";
import Link from "next/link";
import Image from "next/image";
import ServiceDisplay from "../../../public/services-display.svg";
import ConnectingDots from "../../../public/connecting-dots.svg";
import AnimatedButton from "../ui/animatedButton";

const HomeServices = () => {
  return (
    <section className=" lg:pt-[224px]">
      <div className="flex items-center justify-center flex-col w-[300px] h-[500px] bg-[#EEEEEE] rounded-[30px] mx-auto">
        <Image
          src={ServiceDisplay}
          alt="virtual display of services"
          width={229}
          height={453}
        />
      </div>

      <div className="flex flex-col gap-[100px] pt-[100px]">
        <div className="w-[304px] flex flex-col justify-center gap-[10px] mx-auto items-center">
          <h2 className="font-urban text-2xl font-normal text-cr8tOrange">
            SERVICES
          </h2>
          <p className="text-Cr8tGray font-poppins font-semibold text-5xl leading-[62px] text-center">
            Our Core Capabilities
          </p>
        </div>
        <div className="flex flex-col font-poppins  justify-center items-center mx-auto">
          {Services.map((service, index) => (
            <div
              className="flex flex-col gap-[15px] justify-center items-center"
              key={index}
              style={{ width: service.width }}
            >
              <div className="w-[100px] h-[100px] rounded-full border mx-auto">
                {service.icon}
              </div>
              <div className="flex flex-col gap-[5px] items-center text-center">
                <h1 className="font-medium text-[32px]">{service.service}</h1>
                <p className="font-normal text-lg leading-7">
                  {service.description}
                </p>
              </div>
              {index !== Services.length - 1 && (
                <div className="mb-[15px]">
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
        <div className="flex justify-center">
          <Link href="/services" className="">
            <AnimatedButton
              className="w-[199px] lg:w-[223px] lg:h-[56px] h-[50px] "
              showSettingsIcon
            >
              View All Services
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
