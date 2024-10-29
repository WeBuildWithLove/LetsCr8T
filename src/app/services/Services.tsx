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
    <section className="pt-[100px] px-[80px] text-cr8tBlack">
      <div className="flex flex-col gap-[100px]">
        <div className="flex flex-col gap-[25px]">
          <div className="flex justify-between">
            <div className="flex gap-[25px]">
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
            <div>
              <Image
                src={Service2}
                alt="services image"
                className=""
                width={320}
                height={478}
              />
            </div>
          </div>
          <div className="flex items-end justify-end">
            <Image
              src={Service3}
              alt="services image"
              className=""
              width={686}
              height={478}
            />
          </div>
        </div>
        <div className="flex justify-between font-normal font-poppins">
          <h3 className="text-base text-cr8tBlack">APPROACH</h3>

          <p className="text-lg w-[572px] text-cr8tLightBlack leading-[27px]">
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
        <div className="pr-[123px] font-grotesk text-[70px] leading-[98px] ">
          <p>
            {` We're committed to creating exceptional `}
            <span className="font-urban font-normal  text-cr8tOrange">
              DIGITAL EXPERIENCES
            </span>{" "}
            by combining strategic insights, collaborative design, and
            innovative development.
          </p>
        </div>
        <div className="flex justify-between font-normal font-poppins">
          <h3 className="text-base text-cr8tBlack">SERVICES</h3>
          <div className="font-poppins text-lg  w-[301px] flex flex-col gap-[25px]">
            {ServiceListingData.map((service, index) => (
              <div key={index} className="flex flex-col gap-[5px]">
                <h2 className=" font-medium">{service.service_name}</h2>
                <ul className=" font-normal text-cr8tLightBlack">
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
      <div className="my-[150px]">
        <Advert />
      </div>
    </section>
  );
};

export default Services;
