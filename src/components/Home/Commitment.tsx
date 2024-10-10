import React from "react";
import Button from "../Global/Button";
import Image from "next/image";
import Link from "next/link";
import Scale from "../../../public/scale.svg";
import AnimatedButton from "../ui/animatedButton";

function Commitment() {
  return (
    <section className="pt-[200px] flex items-center justify-center gap-[50px]">
      <div className="bg-[#F8F8F8] font-poppins flex flex-col  items-center w-[692px] gap-[50px] ">
        <div className="w-[474px] pt-[41px] flex flex-col gap-[10px] text-center">
          <p className="text-2xl font-semibold text-cr8tBlack">
            Free Web projects for small businesses
          </p>
          <p className="text-Cr8tGray font-medium text-lg">
            80% of our annual goal completed
          </p>
        </div>
        <div className="mb-[15px] ">
          <Image
            src={Scale}
            alt="icon of Connecting dots"
            width={363}
            height={241}
          />
        </div>
      </div>
      <div className="flex flex-col gap-[10px]">
        <h1 className="text-3xl font-grotesk font-medium">
          Our Commitment to{" "}
          <span className="font-urban text-cr8tOrange font-normal">
            CHARITY
          </span>
        </h1>

        <p className="font-poppins text-[#202526CC] text-lg font-normal w-[610px] leading-7">
          At LetsCr8T, we believe in giving back. Every month, we offer free web
          services to one small business, helping them build a strong online
          presence and grow. We understand the challenges small businesses face
          and are here to help them succeed.
        </p>
        <a
          href="https://forms.gle/H3TpBS64a2CBNUSb9"
          target="_blank"
          className="mt-[10px]"
        >
          <AnimatedButton className="w-[140px] h-[56px]">
            Apply Now
          </AnimatedButton>
        </a>
      </div>
    </section>
  );
}

export default Commitment;
