import React from "react";
import Link from "next/link";
import AnimatedButton from "../ui/animatedButton";

const ElevateCard = () => {
  return (
    <div className="md:w-[592px] w-[342px] bg-[#F8F8F8] shadow-[0.1] rounded-[25px] md:h-[275px] px-[24px] md:px-[35px]">
      <div className="md:w-[462px] w-[298px] flex flex-col md:py-[35px] py-6 ">
        <h1 className=" text-cr8tBlack md:text-[32px] text-2xl font-grotesk font-medium">
          Have a{" "}
          <span className="text-cr8tOrange font-normal font-urban">
            PROJECT
          </span>{" "}
          in mind?
        </h1>
        <p className="md:pt-[10px] pt-[5px] text-cr8tLightBlack text-base font-normal font-poppins leading-[23px]">
          We don’t just work—we create with joy, blending creativity and
          determination to turn ideas into reality. Let’s bring your next great
          project to life together.
        </p>
        <Link href="/contact" className="mt-[25px]">
          <AnimatedButton className="md:w-[147px] w-[137px] h-[56px]">
            Contact Us
          </AnimatedButton>
        </Link>
      </div>
    </div>
  );
};

export default ElevateCard;
