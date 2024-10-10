/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Recommendations from "../Global/Recommendations";

const Clients = () => {
  return (
    <section className=" pt-[200px] flex flex-col gap-[50px] ">
      <div className="text-[32px] flex flex-col justify-center items-center mx-auto w-[524px] gap-[10px]">
        <h1 className=" font-grotesk">
          What Our{" "}
          <span className="text-cr8tOrange capitalize font-urban font-normal">
            Clients
          </span>{" "}
          Are Saying
        </h1>

        <p className="text-lg text-[#202526CC] font-normal text-center leading-7 font-poppins">
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
