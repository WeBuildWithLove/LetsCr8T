import React from "react";
import { REVIEWS } from "../../../constants";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
// import { Star } from "lucide-react";

const Reviews = () => {
  return (
    <div className=" flex flex-col justify-center mx-auto">
      <Carousel
        className="relative  "
        childrenCount={REVIEWS.length}
        hiddenOnMd={true}
      >
        <CarouselContent className="flex gap-[35px] items-center justify-center  ">
          {REVIEWS.map((review, index) => (
            <CarouselItem
              key={index}
              className="max-w-[350px] w-full h-[350px] rounded-[10px] border px-[38px] py-[39px] flex flex-col justify-center items-center text-center hover:border-cr8tOrange hover:border-2"
            >
              <Image
                src={review.image}
                width={87}
                height={87}
                alt="photo"
                className="rounded-full"
              />{" "}
              {/* <div className="flex justify-center items-center">
                <Star color="#FFD700" fill="#FFD700" />
                <Star color="#FFD700" fill="#FFD700" />
                <Star color="#FFD700" fill="#FFD700" />
                <Star color="#FFD700" fill="#FFD700" />
                <Star color="#FFD700" fill="#FFD700" />
              </div> */}
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
