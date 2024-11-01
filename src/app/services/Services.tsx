import React from "react";
import { ServiceListingData } from "../../../constants";
import Advert from "@/components/Global/Advert";
import Image from "next/image";
import Service1 from "../../../public/service1.svg";
import Service2 from "../../../public/service2.svg";
import Service3 from "../../../public/service3.svg";
import Service4 from "../../../public/service4.svg";

const Services = () => {
  return (
    <section className="lg:pt-[100px] pt-[23px] lg:px-[80px]  text-cr8tBlack">
      <div className="flex flex-col md:gap-[100px] gap-[25px] px-6 lg:px-0">
        <div className="flex flex-col lg:gap-[25px] gap-[15px] md:gap-0 ">
          <div className="flex justify-between">
            <div className="flex xl:gap-[25px] gap-[10px] xl:w-[320px] lg:w-[270px] lg:h-[478px] h-[112px] w-[82px] md:w-[220px] md:h-[438px]">
              <Image
                src={Service4}
                alt="services image"
                className=""
                width={320}
                height={478}
              />
              <Image
                src={Service1}
                alt="services image"
                className=""
                width={320}
                height={478}
              />
            </div>
            <div className="xl:w-[320px] lg:w-[270px] lg:h-[478px] h-[112px] w-[82px] md:w-[220px] md:h-[438px] mx_auto flex flex-col items-center justify-center  ">
              <Image
                src={Service2}
                alt="services image"
                className=""
                width={320}
                height={478}
              />
            </div>
          </div>
          <div className="ml-auto w-[175px] xl:w-[686px] md:w-[400px] lg:w-[550px]  lg:h-[478px] md:h-[200px] h-[112px]">
            <Image
              src={Service3}
              alt="services image"
              className=""
              width={686}
              height={478}
            />
          </div>
        </div>
        <div className="flex md:justify-between gap-[10px] md:gap-0 flex-wrap md:flex-nowrap font-normal font-poppins md:mt-[80px] lg:mt-0">
          <h3 className="text-base text-cr8tBlack">APPROACH</h3>

          <p className="lg:text-lg text-base leading-6 lg:w-[572px] w-[256px] text-cr8tLightBlack md:leading-[27px] ml-auto lg:ml-0">
            Whether you require help with strategy, branding, web or product
            design, development, app creation we have the expertise and
            experience to deliver uniquely branded and interactive solutions for
            your audience.
            <br />
            <br />
            {`We understand that each client, project, and context is different.
            We adopt a flexible approach, allowing us to adapt and tailor our
            services to meet our client's needs.`}
          </p>
        </div>
        <div className="md:pr-[123px] w-[341px] md:w-full font-grotesk xl:text-[70px]  lg:text-[50px] text-[32px] leading-[44.8px] xl:leading-[98px] lg:leading-[68px] ">
          <p>
            {` We're committed to creating exceptional `}
            <span className="font-urban font-normal  text-cr8tOrange">
              DIGITAL EXPERIENCES
            </span>{" "}
            by combining strategic insights, collaborative design, and
            innovative development.
          </p>
        </div>
        <div className="flex lg:justify-between flex-wrap lg:flex-nowrap font-normal font-poppins pt-[18px] lg:pt-0 gap-[10px] lg:gap-0  ">
          <h3 className="text-base text-cr8tBlack">SERVICES</h3>
          <div className="font-poppins text-lg lg:w-[301px] w-[254px] flex flex-col gap-[25px]  ml-auto lg:ml-0">
            {ServiceListingData.map((service, index) => (
              <div key={index} className="flex flex-col gap-[5px] ">
                <h2 className=" font-medium">{service.service_name}</h2>
                <ul className=" font-normal text-base lg:text-lg text-cr8tLightBlack">
                  <li>{service.one}</li>
                  <li>{service.two}</li>
                  <li>{service.three}</li>
                  <li>{service.four}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:my-[150px] my-[50px] flex flex-col items-center justify-center mx-auto">
        <Advert />
      </div>
    </section>
  );
};

export default Services;
