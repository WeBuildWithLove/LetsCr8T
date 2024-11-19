import React from "react";
import { REVIEWS } from "../../../constants";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Reviews = () => {
  return (
    <div className=" ">
      <Carousel
        className="relative md:w-full w-[342px]"
        childrenCount={REVIEWS.length}
      >
        <CarouselContent className="flex gap-[35px] items-center">
          {REVIEWS.map((review, index) => (
            <CarouselItem
              key={index}
              className="max-w-[300px] h-[300px] w-full rounded-[10px] border px-[17px] py-[17px] flex flex-col justify-center items-center text-center "
            >
              <Image
                src={review.image}
                width={87}
                height={87}
                alt="photo"
                className=""
              />
              <div className="flex flex-col gap-[5px] pt-[14px]">
                <p className="text-base font-bold font-grotesk text-cr8tBlack">
                  {review.name}
                </p>
                <p className="text-[14px] font-normal font-urban text-cr8tOrange">
                  {review.position}
                </p>
              </div>
              <div>
                <p className="pt-[10px] text-base font-light font-poppins text-cr8tLightBlack leading-6">
                  {review.text}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Reviews;
