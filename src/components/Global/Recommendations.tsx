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
        <p className="font-poppins font-normal text-base text-cr8tLightBlack pt-[10px] text-center pb-[17px]">
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

        <CarouselPrevious className="hidden md:flex left-[100px] " />
        <CarouselNext className="hidden md:flex right-[100px]" />
      </Carousel>

      <div className="md:pt-[200px] pt-[50px] text-2xl md:text-[32px] md:w-[744px] w-[333px] flex flex-col justify-center items-center mx-auto text-center md:gap-[10px] gap-[5px]">
        <h1 className="text-cr8tBlack font-medium font-grotesk leading-[33.6px] px-[4.5px]">
          Let’s brew something{" "}
          <span className="text-cr8tOrange font-normal font-urban capitalize">
            great
          </span>{" "}
          together!
        </h1>

        <p className=" text-cr8tLightBlack font-normal font-poppins text-base md:text-lg leading-6 md:leading-7  ">
          You're not just searching for a service provider; you're seeking a
          true partner. Someone dedicated to deeply understanding your
          challenges to ensure your project's success. We know that not every
          problem can be solved with code alone. That's why we go beyond
          delivering just any solution—we strive to provide the best solution,
          tailored specifically to your unique needs
        </p>
      </div>
      <Link href="/contact" className="md:mt-[20px] mt-[25px]">
        <AnimatedButton className="md:w-[156px] h-[56px] w-[146px]">
          Get In Touch
        </AnimatedButton>
      </Link>
    </section>
  );
};

export default Recommendations;
