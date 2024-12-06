import React from "react";
import { clientChallengeData } from "../../../constants";
import Image from "next/image";

const ClientChallenges = () => {
  // Split the data into two rows
  const firstRow = clientChallengeData.slice(0, 3);
  const secondRow = clientChallengeData.slice(3, 6);

  return (
    <section className="md:pt-[100px] pt-[50px] px-[30px] lg:px-0 items-center">
      <div className="flex flex-col md:gap-[50px] gap-[30px] justify-center items-center md:w-[710px] mx-auto">
        <div className="flex justify-center text-center flex-col gap-[10px]">
          <h1 className="font-grotesk text-cr8tBlack font-medium md:text-[32px] text-2xl leading-[33.6px] md:leading-[44.8px]">
            You Have a Vision. We Bring It to Life—and Make It Work for Your
            Business
          </h1>
          <p className="md:text-lg text-base font-light text-cr8tLightBlack md:leading-7 font-poppins leading-7 md:w-[631px] mx-auto">
            Whether you’re starting fresh or refining what you have, we create
            solutions that turn your ideas into results.
          </p>
        </div>

        {[firstRow, secondRow].map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center items-center md:gap-[50px] flex-wrap xl:flex-nowrap"
          >
            {row.map((challenge, index) => (
              <React.Fragment key={index}>
                <div className="md:w-[311px] flex flex-col gap-[15px] items-center md:h-[221px] h-[167px]">
                  <Image
                    src={challenge.icon}
                    alt="icon showcasing challenge"
                    width={30}
                    height={30}
                  />
                  <div className="flex flex-col gap-[10px] font-poppins justify-center text-center">
                    <h3 className="md:text-xl text-base font-medium text-cr8tBlack md:leading-[30px] leading-6">
                      {challenge.title}
                    </h3>
                    <p className="md:text-lg  text-base font-light md:leading-[27px] text-cr8tLightBlack leading-6">
                      {challenge.content}
                    </p>
                  </div>
                </div>
                {/* Add stroke between items except the last one */}
                {index < row.length - 1 && (
                  <div className="h-[100px] border border-Cr8tGray border-opacity-30 xl:block hidden"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientChallenges;
