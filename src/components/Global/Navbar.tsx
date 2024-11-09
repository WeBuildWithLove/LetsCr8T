"use client";
import Link from "next/link";
import React from "react";
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
    <div className="sticky top-0 z-20 w-full overflow-hidden">
      {/* Header */}
      <div className="flex justify-between border-b border-cr8tLightBlack border-opacity-[0.1] font-grotesk text-base font-medium lg:h-[100px] h-[70px] text-Cr8tGray bg-[#F4F4F4] px-[24px] xl:px-[80px] lg:px-[40px] items-center">
        {/* Logo */}
        <div className="lg:hidden block">
          <Link href="/" className="">
            <Image
              src={LOGO}
              width={82}
              height={30}
              alt="Logo"
              style={{ width: "auto" }}
            />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <X size={18.5} strokeWidth={3} color="#202526" />
          ) : (
            <Plus size={18.5} color="#202526" strokeWidth={3} />
          )}
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-[20px]">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className={`relative uppercase font-medium text-[#202526] text-center ${
                currentPath === link.url
                  ? "text-[#202526]"
                  : "text-[#ADADAD] hover:text-[#202526] hover:before:w-full"
              } before:content-[''] before:absolute before:w-0 before:h-[1.5px] before:bottom-0 before:left-0 before:bg-[#FF5A12] before:transition-all before:duration-300 before:ease-in-out ${
                currentPath === link.url
                  ? "before:w-full"
                  : "hover:before:w-full"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo (Desktop) */}
        <div className="hidden lg:block">
          <Link href="/" className="">
            <Image
              src={LOGO}
              width={109.33}
              height={40}
              alt="Logo"
              style={{ width: "auto" }}
            />
          </Link>
        </div>

        {/* Social Media Icons (Desktop) */}
        <div className="hidden gap-[30px] items-center lg:flex">
          <div className="flex gap-[20px] items-center">
            <a
              href="https://www.linkedin.com/company/letscr8t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin
                color="gray"
                size={24}
                strokeWidth={1}
                className="text-gray-500 hover:fill-[#FF5A12] cursor-pointer transition-colors duration-300"
              />
            </a>
            <a
              href="https://x.com/LetsCr8T"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="text-gray-500 hover:fill-[#FF5A12] hover:text-[#FF5A12] cursor-pointer transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/WeBuildWithLove"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github
                color="gray"
                size={24}
                strokeWidth={1}
                className="text-gray-500 hover:fill-[#FF5A12] cursor-pointer transition-colors duration-300"
              />
            </a>
          </div>
          <Link href="/contact" className="">
            <AnimatedButton className="w-[147px] h-[56px]">
              Contact Us
            </AnimatedButton>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "top-[70px]" : "top-[-100%]"
        } lg:hidden fixed bg-[#F4F4F4] w-full h-screen p-[20px] flex flex-col justify-center items-center transition-all duration-700 ease-in-out`}
      >
        <div className="flex flex-col items-center font-grotesk text-base font-medium text-Cr8tGray gap-5">
          {links.map((link, index) => (
            <Link
              key={index}
              onClick={() => setOpen(!open)}
              href={link.url}
              className={`relative uppercase font-medium text-center ${
                currentPath === link.url
                  ? "text-[#202526]" // Active state
                  : "text-[#ADADAD] hover:text-[#202526] hover:before:w-full"
              } before:content-[''] before:absolute before:w-0 before:h-[1.5px] before:bottom-0 before:left-0 before:bg-[#FF5A12] before:transition-all before:duration-300 before:ease-in-out ${
                currentPath === link.url
                  ? "before:w-full"
                  : "hover:before:w-full"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className=" gap-[40px] items-center lg:hidden flex flex-col mt-[220px]">
          <div className="flex gap-[20px] items-center">
            <a
              href="https://www.linkedin.com/company/letscr8t"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin
                color="gray"
                size={24}
                strokeWidth={1}
                className="text-gray-500 hover:fill-[#FF5A12] cursor-pointer transition-colors duration-300"
              />
            </a>
            <a
              href="https://x.com/LetsCr8T"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="text-gray-500 hover:fill-[#FF5A12] hover:text-[#FF5A12] cursor-pointer transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/WeBuildWithLove"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github
                color="gray"
                size={24}
                strokeWidth={1}
                className="text-gray-500 hover:fill-[#FF5A12] cursor-pointer transition-colors duration-300"
              />
            </a>
          </div>
          <Link href="/contact" className="">
            <AnimatedButton className="w-[147px] h-[56px]">
              Contact Us
            </AnimatedButton>
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
  // { name: "Free Tools", url: "/freetools" },
];
