import React from "react";
import Link from "next/link";
import AnimatedButton from "../ui/animatedButton";

const ElevateCard = () => {
  return (
    <div className="w-[592px] bg-[#F8F8F8] shadow-[10%] rounded-[25px] h-[275px] mx-[80px] ">
      <div className="w-[462px] flex flex-col justify-center items-center mx-auto py-[35px]">
        <h1 className=" text-cr8tBlack text-[32px] font-grotesk font-medium">
          Have a <span className="text-cr8tOrange font-normal">PROJECT</span> in
          mind?
        </h1>
        <p className="pt-[10px] text-[#202526CC] text-base font-normal font-poppins leading-[23px]">
          We don’t just work—we create with joy, blending creativity and
          determination to turn ideas into reality. Let’s bring your next great
          project to life together.
        </p>
        <Link href="/contact" className="mt-[25px]">
          <AnimatedButton className="w-[147px] h-[56px]">
            Contact Us
          </AnimatedButton>
        </Link>
      </div>
    </div>
  );
};

export default ElevateCard;
