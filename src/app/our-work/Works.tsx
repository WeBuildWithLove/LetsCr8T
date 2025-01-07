"use client";
import React, { useState, useEffect } from "react";
import { worksData } from "../../../constants";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

const Works = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetch or delay for demonstration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay based on your actual loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="lg:px-[80px] px-6 lg:my-[150px] my-[50px]">
      <div className="font-poppins font-light text-cr8tLightBlack lg:text-base text-[15px] lg:leading-6 leading-[22.5px]">
        <p className="lg:w-[388px] w-[246px]">
          <span className="text-Cr8tGray">PROJECTS</span>
          <br />
          We WORK CLOSELY WITH OUR CLIENTS TO BUILD EXPERIENCES THAT CAPTIVATE
          AND CONVERT.
        </p>
      </div>

      <div className="lg:mt-[50px] mt-[25px] overflow-hidden">
        <Carousel className="relative overflow-hidden">
          <div className="justify-end mt-[20px] pr-12 md:flex hidden">
            <CarouselPrevious className="relative z-10 flex items-center justify-center w-[30px] h-[30px] rounded-full border-2 hover:border-cr8tOrange border-Cr8tGray" />
            <CarouselNext className="relative z-10 flex items-center justify-center w-[30px] h-[30px] rounded-full border-2 border-Cr8tGray hover:border-cr8tOrange" />
          </div>
          <CarouselContent className="flex gap-[10px]">
            {worksData.map((portfolio, index) =>
              portfolio ? (
                <CarouselItem
                  key={index}
                  className="flex-shrink-0 flex-grow-0 basis-auto flex flex-col lg:gap-[10px] gap-[5px]"
                >
                  {loading ? (
                    <Skeleton className="w-[554px] h-[684px] bg-Cr8tGray rounded-2xl" />
                  ) : (
                    <>
                      <Image
                        src={portfolio.image}
                        alt={`Portfolio ${index + 1}`}
                        width={554}
                        height={684}
                        layout="responsive"
                        priority={index === 0}
                        className="rounded-lg hidden lg:block"
                      />

                      <div className="relative w-full h-[283px]">
                        <Image
                          src={portfolio.mobile}
                          alt={`Portfolio ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg lg:hidden block"
                          quality={75}
                        />
                      </div>
                    </>
                  )}

                  {loading ? (
                    <Skeleton className="h-6 w-[200px] mt-2 " />
                  ) : (
                    <a
                      href={portfolio.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="md:text-base text-[14px] font-medium italic font-poppins text-Cr8tGray cursor-pointer hover:underline hover:decoration-cr8tOrange hover:text-cr8tOrange">
                        {portfolio.project}
                      </p>
                    </a>
                  )}
                </CarouselItem>
              ) : null
            )}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Works;
