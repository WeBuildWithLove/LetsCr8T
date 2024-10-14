/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { REVIEWS } from "../../../constants";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import AnimatedButton from "../ui/animatedButton";

type REVIEWITEM = {
  name: string;
  text: string;
  position: string;
  image: string;
};

const ReviewItem = ({ name, position, text, image }: REVIEWITEM) => {
  return (
    <CarouselItem className="flex flex-col gap-4 items-center border border-solid border-[#E1E1E1] rounded-xl md:basis-1/2 lg:basis-1/4 h-[400px] ">
      <div className=" mt-[17px] w-[266px] flex flex-col justify-center items-center">
        <Image
          src={image}
          width={80}
          height={80}
          alt={name}
          className="rounded-full"
        />

        <div className="w-[266px] flex flex-col justify-center items-center pt-[14px] gap-[5px]">
          <h5 className="text-base font-grotesk font-bold text-cr8tBlack">
            {name}
          </h5>
          <p className=" text-cr8tOrange font-urban text-[14px]">{position}</p>
        </div>
        <p className="font-poppins font-light text-base text-cr8tLightBlack pt-[10px] text-center pb-[17px]">
          {text}
        </p>
      </div>
    </CarouselItem>
  );
};

const Recommendations = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full px-[24px] md:px-0">
      <Carousel
        className="md:w-full   w-[342px] "
        childrenCount={REVIEWS.length}
      >
        <CarouselContent className="flex gap-10 ">
          {REVIEWS.map((review, index) => (
            <ReviewItem
              key={index}
              name={review.name}
              text={review.text}
              position={review.position}
              image={review.image}
            />
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden md:flex left-[100px]  " />
        <CarouselNext className="hidden md:flex right-[100px]" />
      </Carousel>

      <div className="md:pt-[150px] pt-[50px]  md:w-[781px] w-[324px] flex flex-col justify-center items-center mx-auto text-center md:text-[70px] md:leading-[98px] leading-[44.8px] text-[32px] font-medium font-grotesk text-cr8tBlack ">
        <h1>
          Let’s brew something{" "}
          <span className="text-cr8tOrange font-normal font-urban capitalize">
            great
          </span>{" "}
          together!
        </h1>
      </div>
      <Link
        href="/contact"
        className="md:mt-[20px] mt-[25px]  w-[146px] md:w-[156px] "
      >
        <AnimatedButton className="md:w-[156px] h-[56px] w-[146px]">
          Get In Touch
        </AnimatedButton>
      </Link>
    </section>
  );
};

export default Recommendations;
