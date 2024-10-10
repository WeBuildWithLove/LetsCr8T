/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Recommendations from "../Global/Recommendations";

const Clients = () => {
  return (
    <section className=" md:pt-[200px] pt-[50px] flex flex-col md:gap-[50px] gap-[25px] ">
      <div className=" leading-[33.6px] md:leading-normal md:text-[32px] text-2xl flex flex-col justify-center items-center mx-auto md:w-[524px] w-[326px] gap-[10px] text-cr8tBlack">
        <h1 className=" font-grotesk md:w-full w-[306px] text-center">
          What Our{" "}
          <span className="text-cr8tOrange capitalize font-urban font-normal">
            Clients
          </span>{" "}
          Are Saying
        </h1>

        <p className="md:text-lg text-base text-cr8tLightBlack font-normal text-center md:leading-7 leading-6 font-poppins">
          Our clients' feedback speaks for itself. See how we've helped
          businesses grow, improved their online presence, and created digital
          experiences that drive results.
        </p>
      </div>

      <Recommendations />
    </section>
  );
};

export default Clients;
