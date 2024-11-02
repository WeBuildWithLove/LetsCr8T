import React from "react";
import Image from "next/image";
import Link from "next/link";
import Scale from "../../../public/scale.svg";
import AnimatedButton from "../ui/animatedButton";

function Commitment() {
  return (
    <section className="md:pt-[150px] pt-[50px] flex items-center justify-between lg:gap-5 xl:gap-0 flex-wrap lg:flex-nowrap xl:px-[80px] px-6">
      <div className="bg-[#F8F8F8] rounded-[20px] font-poppins flex flex-col  items-center md:w-[692px] xl:w-[692px] lg:w-[500px] w-[342px] md:gap-[50px] gap-[20px] order-2 lg:-order-none p-4">
        <div className="md:w-[474px] w-[316px] md:pt-[41px] pt-[27px] flex flex-col md:gap-[10px] gap-[5px] text-center  items-center">
          <p className="md:text-2xl text-base font-semibold text-cr8tBlack">
            Free Web projects for small businesses
          </p>
          <p className="text-Cr8tGray font-medium md:text-lg text-base">
            80% of our annual goal completed
          </p>
        </div>
        <div className="md:mb-[15px] mb-[10.3px] flex flex-col items-center mx-auto">
          <Image
            src={Scale}
            alt="image of a scale"
            width={363}
            height={241}
            className="w-[301.52px] md:w-[363px]"
          />
          <div className="bg-white md:w-[271px] w-[240px]  h-[30.7px] font-poppins font-semibold text-center text-[14px]  md:text-base text-Cr8tGray flex flex-col justify-center rounded-[5px]">
            <p className="">12+ Website completed in 2024</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col md:gap-[10px]  gap-[5px] order-1 lg:-order-none text-cr8tBlack  ">
        <h1 className="md:text-3xl text-2xl font-grotesk font-medium">
          Our Commitment to{" "}
          <span className="font-urban text-cr8tOrange font-normal">
            CHARITY
          </span>
        </h1>

        <p className="font-poppins text-cr8tLightBlack md:text-lg text-base leading-6 font-light md:w-[610px] xl:w-[610px] lg:w-[400px] w-[327px] md:leading-7 pr-[15px] md:pr-0  ">
          At LetsCr8T, we believe in giving back. Every month, we offer free web
          services to one small business, helping them build a strong online
          presence and grow. We understand the challenges small businesses face
          and are here to help them succeed.
        </p>

        <Link
          href="https://forms.gle/H3TpBS64a2CBNUSb9"
          target="_blank"
          className="md:mt-[15px] mt-[20px] md:w-[140px] w-[130px]"
        >
          <AnimatedButton className="md:w-[140px] w-[130px] h-[56px] flex flex-col">
            Apply Now
          </AnimatedButton>
        </Link>
      </div>
    </section>
  );
}

export default Commitment;
