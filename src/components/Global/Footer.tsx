/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CiMail } from "react-icons/ci";
import ElevateCard from "../Home/ElevateCard";
import Image from "next/image";
import Logo from "../../../public/LOGO.svg";
import { Copyright } from "lucide-react";
import Socials from "../ui/socials";

function Footer() {
  return (
    <div className="">
      <div className="md:pl-[80px] lg:block flex flex-col justify-center mx-auto items-center mt-[150px] lg:mt-0">
        <ElevateCard />
      </div>

      <footer className="w-full bg-white rounded-t-[50px]  lg:mt-[227.48px] lg:pt-[98.82px] pt-[50px] md:px-[80px] px-6 footer_bg footer_mobile_bg">
        <Image
          src={Logo}
          alt="image of logo"
          width={138}
          height={50}
          className="w-[69.15px] md:w-[138px] h-[25px] md:h-[50px]  mt-[200px] lg:mt-[150px] "
          style={{ width: "auto" }}
        />
        <div className=" flex md:gap-[100px] gap-[30px] text-base font-light font-poppins text-cr8tLightBlack items-center flex-wrap lg:flex-nowrap">
          <p className=" leading-[29px] md:leading-7 md:w-[418px] w-[315px] md:pt-5 pt-[15px]">
            At LetsCr8T, we design modern websites and web-apps that help
            startups and small businesses turn visitors into customers.
          </p>

          <div className="flex flex-col  md:gap-[3.5px] gap-[5px]  md:pt-0">
            <p className="uppercase font-medium text-cr8tBlack">Contact Us</p>

            <span className="flex items-center  md:gap-[2.5px] gap-[5px]">
              <CiMail size={24} color="#202526" />
              <p className="font-light font-poppins text-cr8tLightBlack">
                contact@letscr8t.xyz
              </p>
            </span>
          </div>
          <div className="flex flex-col  md:gap-[3.5px] gap-[5px]">
            <p className="uppercase font-medium text-cr8tBlack">Follow Us On</p>
            <Socials />
          </div>
        </div>
        <div className="w-full border-t mt-5 border-[#CFCFD1] flex gap-[5px] font-poppins pt-[15px] items-center pb-2 font-light">
          <Copyright size={24} color="#ADADAD" className="hidden md:block" />
          <Copyright size={18} color="#ADADAD" className="block md:hidden" />
          <p className="md:text-base text-xs text-cr8tLightBlack font-light">
            2024 <span className=" font-semibold">LetsCr8T.</span> All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
