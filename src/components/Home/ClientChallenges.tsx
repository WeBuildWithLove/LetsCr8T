import React from "react";
import { clientChallengeData } from "../../../constants";
import Image from "next/image";

const ClientChallenges = () => {
  return (
    <section className="md:pt-[100px] pt-[70px] px-[32px] md:px-0 items-center">
      <div className="flex flex-col gap-[50px] justify-center items-center w-[710px] mx-auto">
        <div className="flex justify-center text-center flex-col gap-[10px]">
          <h1 className="font-grotesk text-cr8tBlack font-medium text-[32px]">
            You Don’t Have a Traffic Problem… You Have a Conversion Problem
          </h1>
          <p className="text-lg font-light text-cr8tLightBlack leading-7 font-poppins">
            Your Real Challenge? Turning Your Visitors Into Customers
          </p>
        </div>
        <div className="flex justify-center items-center gap-[50px]">
          {clientChallengeData.map((challenge, index) => (
            <React.Fragment key={index}>
              <div className="w-[311px] flex flex-col gap-[15px] items-center h-[221px]">
                <Image
                  src={challenge.icon}
                  alt="icon showcasing challenge"
                  width={30}
                  height={30}
                />
                <div className="flex flex-col gap-[10px] font-poppins justify-center text-center">
                  <h3 className="text-xl font-medium text-cr8tBlack">
                    {challenge.title}
                  </h3>
                  <p className="text-lg font-normal leading-[27px] text-cr8tLightBlack">
                    {challenge.content}
                  </p>
                </div>
              </div>

              {index < clientChallengeData.length - 1 && (
                <div className="h-[100px] border border-Cr8tGray border-opacity-30"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientChallenges;
