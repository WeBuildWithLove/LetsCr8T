"use client";
import Link from "next/link";
import React from "react";
import { FiMenu, FiPlus } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import LOGO from "../../../public/LOGO.svg";
import Image from "next/image";
import { Github, Linkedin, Plus, X } from "lucide-react";
import Twitter from "@/app/assets/icons/Twitter";
import AnimatedButton from "../ui/animatedButton";

function Navbar() {
  const router = useRouter();
  const currentPath = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex justify-between border-b border-cr8tLightBlack border-opacity-[0.1] font-grotesk text-base font-medium sticky top-0 z-20 lg:h-[100px] h-[50px] text-Cr8tGray bg-[#F4F4F4] px-[24px] xl:px-[80px]  items-center w-full">
      <div className="lg:hidden block">
        <Link href="/" className="">
          <Image src={LOGO} width={82} height={30} alt="Logo" />
        </Link>
      </div>

      <div className="lg:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <X
            onClick={() => setOpen(!open)}
            size={18.5}
            strokeWidth={3}
            color="#202526"
          />
        ) : (
          <Plus size={18.5} color="#202526" strokeWidth={3} />
        )}
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex items-center gap-[20px]">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            className={`relative uppercase font-medium text-[#202526] text-center ${
              currentPath === link.url
                ? "text-[#202526]" // Active link: no hover effect, underline applied
                : "text-[#ADADAD] hover:text-[#202526] hover:before:w-full"
            } before:content-[''] before:absolute before:w-0 before:h-[1.5px] before:bottom-0 before:left-0 before:bg-[#FF5A12] before:transition-all before:duration-300 before:ease-in-out ${
              currentPath === link.url ? "before:w-full" : "hover:before:w-full"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Logo */}
      <div className="hidden lg:block">
        <Link href="/" className="">
          <Image src={LOGO} width={109.33} height={40} alt="Logo" />
        </Link>
      </div>

      {/* Social Media Icons */}
      <div className="hidden gap-[30px] items-center lg:flex">
        <div className="flex gap-[20px] items-center">
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
        </div>
        <Link href="/contact" className="">
          <AnimatedButton className="w-[147px] h-[56px]">
            Contact Us
          </AnimatedButton>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "left-0" : "left-[-100%]"
        } lg:hidden fixed top-0 h-screen bg-[#4B0082] w-[80%] p-[20px] transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-start space-y-[40px]">
          {links.map((link, index) => (
            <Link
              key={index}
              onClick={() => setOpen(!open)}
              href={link.url}
              className={`uppercase text-white font-[600] text-center ${
                currentPath === link.url ? "text-white" : "hover:text-[#4B0082]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="mt-20">
          <Link href="/contact" className="pt-[20px] w-[180px]">
            <AnimatedButton>Get Started</AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

// Link items for navigation
const links = [
  { name: "Home", url: "/" },
  { name: "Portfolio", url: "/portfolio" },
  { name: "Services", url: "/services" },
  { name: "About", url: "/about" },
];
