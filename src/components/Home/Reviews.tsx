"use client";
import React, { useMemo } from "react";
import { REVIEWS } from "../../../constants";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Reviews: React.FC = () => {
  const reviewsData = useMemo(() => REVIEWS, []);

  return (
    <div className="flex flex-col justify-center mx-auto w-full">
      <Carousel className="relative">
        <CarouselContent className="flex gap-[35px] items-center justify-center">
          {reviewsData.map((review) => (
            <CarouselItem
              key={review.name}
              className="max-w-[300px] md:w-full h-[300px] rounded-[10px] px-[17px] py-[17px] border flex flex-col justify-center items-center text-center hover:border-cr8tOrange hover:border-2"
            >
              <Image
                src={review.image}
                width={87}
                height={87}
                alt={`Photo of ${review.name}`}
                className="rounded-full w-[87px] h-[87px]"
              />
              <div className="flex flex-col gap-[5px] pt-[14px]">
                <p className="text-base font-bold font-grotesk text-cr8tBlack">
                  {review.name}
                </p>
                <p className="text-[14px] font-normal font-urban text-cr8tOrange">
                  {review.position}
                </p>
              </div>
              <p className="pt-[10px] text-base font-light font-poppins text-cr8tLightBlack leading-6">
                {review.text}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Reviews;
