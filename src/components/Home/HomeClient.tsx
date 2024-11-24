/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Marquee from "react-fast-marquee";
import Reviews from "./Reviews";

const Clients = () => {
  return (
    <section className="md:pt-[150px] pt-[50px] flex flex-col md:gap-[50px] gap-[25px] px-[24px] md:px-0  ">
      <div className="flex flex-col items-center mx-auto md:w-[524px]  gap-[10px] text-center  ">
        <h1 className="font-grotesk md:w-full text-center md:text-[32px] text-2xl text-cr8tBlack">
          Why{" "}
          <span className="text-cr8tOrange capitalize font-urban font-normal">
            Businesses
          </span>{" "}
          Trust Us
        </h1>

        <p className="md:text-lg text-base text-cr8tLightBlack font-light text-center md:leading-7 leading-6 font-poppins">
          From startups to small businesses, our clients rely on us to turn
          their ideas into results. Here’s what they have to say.
        </p>
      </div>

      <div className="hidden md:flex">
        <Marquee
          autoFill
          pauseOnClick
          pauseOnHover
          loop={0}
          className="flex gap-3"
        >
          <Reviews />
        </Marquee>
      </div>
      <div className="flex md:hidden">
        <Reviews />
      </div>
    </section>
  );
};

export default Clients;
