"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { Button } from "../ui/button";
import { MoveDown } from "lucide-react";
import AnimatedButton from "../ui/animatedButton";

function HomeHero() {
  return (
    <section className="font-grotesk text-[#202526] lg:pt-[100px] pt-[50px] flex flex-col items-center justify-center hero_bg ">
      <div className="flex flex-col lg:gap-[50px] gap-[25px] items-center justify-center ">
        <div>
          <p className="leading-[44.8px] lg:leading-[81px] font-bold text-[32px] lg:text-[70px] text-center ">
            Transform Your{" "}
            <span className="text-[#FF5A12] font-normal font-urban ">
              Business
            </span>{" "}
            with <br className="hidden lg:block" /> Stunning Digital Solutions
          </p>

          <p className="text-center text-base lg:text-lg font-poppins font-normal leading-6 text-[#202526CC] pt-5">
            At <span>LetsCr8T,</span> we create unforgettable first digital
            experiences – that help your
            <br className="hidden lg:block" />
            business grow.
            <br className="hidden lg:block" />
            Whether you&apos;re a startup, small business, or an established
            company,
            <br className="hidden lg:block" />
            we are devoted in bringing your vision to life and ensuring your
            brand shines online.
          </p>
        </div>

        <div className="flex lg:gap-[34px] gap-[20px] flex-wrap items-center justify-center">
          <Link href="/contact" className="">
            <AnimatedButton
              className="w-[199px] lg:w-[229px] lg:h-[56px] h-[50px] "
              withHeartbeat
            >
              Start Project
            </AnimatedButton>
          </Link>
          <Link href="/portfolio" className="">
            <Button className="border border-[#FF5A12] rounded-full w-[199px] lg:w-[229px] lg:h-[56px] h-[50px] hover:bg-[#FF5A12] hover:text-white font-manrope font-semibold text-base">
              See Portfolio
            </Button>
          </Link>
        </div>

        <div className="text-[#ADADAD] text-[13px] font-normal flex gap-[11px] items-center font-poppins">
          <h3>SCROLL</h3>
          <MoveDown size={13} className="animate-bounce" color="#FF5A12" />
        </div>
      </div>

      <h3 className="text-[#ADADAD] font-grotesk font-medium text-base lg:text-2xl lg:pt-[30px] pt-[20px]">
        Trusted By The Big Names
      </h3>

      <div className="mt-[20px] flex justify-center items-center w-full h-[100px] lg:h-[150px] bg-[#202526] ">
        <Marquee
          pauseOnClick
          pauseOnHover
          autoFill
          loop={0}
          speed={60}
          gradient={true}
          gradientColor="#202526"
          gradientWidth={300}
          className="flex justify-center items-center overflow-x-hidden h-full"
        >
          <div className="flex items-center gap-[100px] h-[41px] ">
            <Image
              src="/logo-white-dark.png"
              alt="wecr8t"
              width={150}
              height={40}
            />

            <Image
              src="/white-hod.png"
              alt="white-hod"
              width={100}
              height={40}
            />

            <Image
              src="/save-d-bride.png"
              alt="save-d-bride"
              width={80}
              height={40}
            />

            <Image
              src="/splash-screen.png"
              alt="splash-screen"
              width={100}
              height={40}
            />

            <Image
              src="/nurtifeed.png"
              alt="nurtifeed"
              width={100}
              height={40}
            />

            <Image src="/frameasy.png" alt="frameasy" width={100} height={40} />

            <Image src="/readr.png" alt="readr" width={65} height={40} />

            <Image src="/gericht.png" alt="gericht" width={60} height={40} />
            <div className="w-[10px]" />
          </div>
        </Marquee>
      </div>
    </section>
  );
}

export default HomeHero;
