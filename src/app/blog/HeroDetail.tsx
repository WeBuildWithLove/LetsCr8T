import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeroDetail = () => {
  return (
    <section className="md:pt-[80px] pt-[50px] lg:px-[80px] px-6 ">
      <div className="bg-white bg-opacity-35 rounded-br-[20px] rounded-bl-[20px] h-[320px] flex items-center md:h-[281px] justify-center  blog_detail  ">
        <div className=" px-[14px] md:px-[171px] md:pt-[63px] md:pb-[34px] pt-0 pb-[25px]">
          <div className="flex flex-col justify-center items-center gap-[10px] text-center ">
            <h1 className="md:text-5xl text-[32px] text-cr8tBlack font-medium font-grotesk leading-[44.8px] md:leading-[62px]">
              Stay Ahead with Letscr8t
            </h1>

            <p className=" flex md:text-[21px] text-base font-bold text-Cr8tGray font-poppins leading-6 md:leading-7 text-center">
              <Link
                href="/blog"
                className=" hover:underline hover:decoration-cr8tOrange  hover:text-cr8tOrange"
              >
                Our Blog{" "}
              </Link>
              <span className="text-cr8tBlack flex">
                <ChevronLeft size={27} color="#202526" /> Read more
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDetail;
