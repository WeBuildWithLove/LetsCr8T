/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegCopyright, FaSquareXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import ElevateCard from "../Home/ElevateCard";
import Image from "next/image";
import Logo from "../../../public/LOGO.svg";
import { Copyright, Github, Linkedin } from "lucide-react";
import Twitter from "@/app/assets/icons/Twitter";

function Footer() {
  return (
    <div className="pt-[294px] ">
      <div className="absolute mt-[-97px]">
        <ElevateCard />
      </div>
      <footer className="w-full bg-white rounded-t-[50px] h-[526px] pt-[294px] px-[80px] footer_bg ">
        <Image src={Logo} alt="image of logo" width={138} height={50} />
        <div className=" flex gap-[100px] text-base font-normal font-poppins text-cr8tLightBlack items-center">
          <p className="leading-7 w-[418px] pt-5">
            At LetsCr8T, we design and develop stunning, high-quality websites
            and web applications for businesses of all sizes
          </p>

          <div className="flex flex-col gap-[3.5px]">
            <p className="uppercase font-medium text-cr8tBlack">Contact Us</p>

            <span className="flex items-center gap-[2.5px]">
              <CiMail size={24} />
              <p className="">contact@LetsCr8T.xyz</p>
            </span>
          </div>
          <div className="flex flex-col gap-[3.5px]">
            <p className="uppercase font-medium text-cr8tBlack">
              Connect With Us
            </p>
            <span className="flex items-center gap-5">
              <Linkedin
                color="gray"
                size={24}
                strokeWidth={1}
                className="text-gray-500 hover:fill-[#FF5A12] cursor-pointer transition-colors duration-300"
              />
              <Twitter className="text-gray-500 hover:fill-[#FF5A12] hover:text-[#FF5A12] cursor-pointer transition-colors duration-300" />
              <Github
                color="gray"
                size={24}
                strokeWidth={1}
                className="text-gray-500 hover:fill-[#FF5A12] cursor-pointer transition-colors duration-300"
              />
            </span>
          </div>
        </div>
        <div className="w-full border-t mt-5 border-[#CFCFD1] flex gap-[5px] font-poppins pt-[15px]">
          <Copyright size={24} color="#ADADAD" />
          <p className="text-base text-Cr8tGray">
            2024,<span className=" font-semibold">LetsCr8T.</span>All Right
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
