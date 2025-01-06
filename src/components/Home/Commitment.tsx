import React from "react";
import Image from "next/image";
import Link from "next/link";
import Scale from "../../../public/scale.svg";
import AnimatedButton from "../ui/animatedButton";

function Commitment() {
  return (
    <section className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-5 xl:gap-10 px-6 xl:px-[80px] pt-[50px] md:pt-[150px]">
      {/* Left Section */}
      <div className="bg-[#F8F8F8] rounded-[20px] font-poppins flex flex-col items-center gap-[20px] md:gap-[50px] w-[342px] md:w-[500px] lg:w-[500px] xl:w-[692px] order-2 lg:order-1 p-4">
        {/* Title and Progress */}
        <div className="flex flex-col items-center text-center gap-[5px] md:gap-[10px] w-[316px] md:w-[474px] pt-[27px] md:pt-[41px]">
          <p className="text-base md:text-2xl font-semibold text-cr8tBlack">
            Free Web projects for small businesses
          </p>
          <p className="text-base md:text-lg font-medium text-Cr8tGray">
            80% of our annual goal completed
          </p>
        </div>

        {/* Scale Image and Completed Projects */}
        <div className="flex flex-col items-center gap-[10px] md:mb-[15px] mb-[10px]">
          <Image
            src={Scale}
            alt="Image of a scale showcasing progress"
            width={363}
            height={241}
            className="w-[301.52px] md:w-[363px]"
          />
          <div className="bg-white w-[240px] md:w-[271px] h-[30px] flex items-center justify-center font-poppins font-semibold text-[14px] md:text-base text-Cr8tGray rounded-[5px]">
            12+ Websites completed in 2024
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col text-cr8tBlack gap-[5px] md:gap-[10px] w-[327px] lg:w-[400px] xl:w-[610px] order-1 lg:order-2">
        <h1 className="text-2xl md:text-3xl font-grotesk font-medium">
          Our Commitment to{" "}
          <span className="font-urban font-normal text-cr8tOrange">
            CHARITY
          </span>
        </h1>
        <div className="flex flex-col gap-3 font-poppins font-light text-base md:text-lg leading-6 md:leading-7 text-cr8tLightBlack pr-[15px] md:pr-0">
          <p>
            At LetsCr8T, we believe in giving back. Every month, we offer free
            web services to one small business in need, providing them with a
            landing page to support growth and reach more customers.
          </p>
          <div className="flex flex-col">
            <h3 className="font-grotesk font-bold text-cr8tBlack">
              How To Apply?
            </h3>
            <p>
              If you own or represent a small business in need of digital
              support, apply today to see if you qualify for our monthly
              initiative.
            </p>
          </div>
        </div>
        <Link
          href="https://forms.gle/H3TpBS64a2CBNUSb9"
          target="_blank"
          className="mt-[20px] md:mt-[15px] w-[130px] md:w-[140px]"
        >
          <AnimatedButton className="w-[130px] md:w-[140px] h-[56px]">
            Apply Now
          </AnimatedButton>
        </Link>
      </div>
    </section>
  );
}

export default Commitment;
