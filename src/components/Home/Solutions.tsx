import Image from "next/image";
import React from "react";
import { solutionsData } from "../../../constants";

const Solutions = () => {
  return (
    <section className="md:pt-[99px] pt-[70px] px-[32px] md:px-[230px] items-center">
      <div className="flex flex-col gap-[50px] justify-center items-center mx-auto">
        <div className="flex flex-col justify-center items-center text-center gap-[10px]">
          <h2 className="font-urban md:text-2xl text-base font-normal text-cr8tOrange">
            We Don’t Just Build Websites—We Build Conversions
          </h2>
          <p className="text-Cr8tGray font-grotesk md:font-semibold font-medium md:text-5xl text-2xl md:leading-[62px] leading-[33.6px] text-center">
            How We Help Turn Your Visitors Into Customers
          </p>
        </div>

        <div className="flex justify-center items-center gap-[42px]">
          {solutionsData.map((solution, index) => (
            <React.Fragment key={index}>
              <div className="w-[360px] flex flex-col gap-[15px] items-center rounded-[20px] bg-white px-[49px] py-[42px]">
                <Image
                  src={solution.icon}
                  alt="icon showcasing challenge"
                  width={30}
                  height={30}
                />
                <div className="flex flex-col gap-[10px] font-poppins justify-center text-center">
                  <h3 className="text-xl font-medium text-cr8tBlack">
                    {solution.title}
                  </h3>
                  <p className="text-lg font-normal leading-[27px] text-cr8tLightBlack">
                    {solution.content}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
