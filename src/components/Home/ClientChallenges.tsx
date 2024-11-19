import React from "react";
import { clientChallengeData } from "../../../constants";
import Image from "next/image";

const ClientChallenges = () => {
  // Split the data into two rows
  const firstRow = clientChallengeData.slice(0, 3);
  const secondRow = clientChallengeData.slice(3, 6);

  return (
    <section className="md:pt-[100px] pt-[70px] px-[32px] md:px-0 items-center">
      <div className="flex flex-col gap-[50px] justify-center items-center w-[710px] mx-auto">
        <div className="flex justify-center text-center flex-col gap-[10px]">
          <h1 className="font-grotesk text-cr8tBlack font-medium text-[32px]">
            You Have a Vision. We’ll Bring It to Life—and Make It Work for Your
            Business.
          </h1>
          <p className="text-lg font-light text-cr8tLightBlack leading-7 font-poppins">
            Whether you’re starting fresh or improving what you have, we craft
            solutions that turn your ideas into results.
          </p>
        </div>

        {/* Render the two rows */}
        {[firstRow, secondRow].map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex justify-center items-center gap-[50px]"
          >
            {row.map((challenge, index) => (
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
                {/* Add stroke between items except the last one */}
                {index < row.length - 1 && (
                  <div className="h-[100px] border border-Cr8tGray border-opacity-30"></div>
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
