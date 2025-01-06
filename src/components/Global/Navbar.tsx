"use client";
import React, { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import LOGO from "../../../public/LOGO.svg";
import Image from "next/image";
import { Plus, X } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import AnimatedButton
const AnimatedButton = dynamic(() => import("../ui/animatedButton"), {
  ssr: false, // Ensure it's only rendered on the client side
});

const Navbar = React.memo(() => {
  const router = useRouter();
  const currentPath = usePathname();
  const [open, setOpen] = useState(false);

  // Preload link for faster navigation
  const handleNavigation = useCallback(
    (url: string) => {
      setOpen(false);
      router.push(url);
    },
    [router]
  );

  return (
    <div className="sticky top-0 z-20 w-full bg-[#F4F4F4]">
      {/* Header */}
      <div className="flex justify-between items-center h-[70px] lg:h-[100px] px-[24px] xl:px-[80px] lg:px-[40px] border-b border-cr8tLightBlack border-opacity-[0.1] font-grotesk text-base font-medium text-Cr8tGray">
        {/* Left Section - Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-[20px]">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              prefetch={true} // Ensures prefetching
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

        {/* Center Section - Logo */}
        <div className="lg:flex justify-center flex-1">
          <Link href="/" prefetch={true}>
            <Image
              src={LOGO}
              width={109.33}
              height={40}
              alt="Logo"
              priority // Prioritize loading
              style={{ width: "auto" }}
            />
          </Link>
        </div>

        {/* Right Section - Social Media Icons and Contact Button (Desktop) */}
        <div className="hidden lg:flex gap-[30px] items-center">
          {linksTwo.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              prefetch={true}
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
          <a
            href="https://calendly.com/preyeomusuku"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedButton className="w-[157px] h-[56px]">
              Book A Free Call
            </AnimatedButton>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden" onClick={() => setOpen((prev) => !prev)}>
          {open ? (
            <X size={24} strokeWidth={3} color="#202526" />
          ) : (
            <Plus size={24} color="#202526" strokeWidth={3} />
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          open ? "max-h-[100vh]" : "max-h-0"
        } bg-[#F4F4F4]`}
      >
        <div className="flex flex-col justify-evenly h-screen">
          {/* Mobile Menu Links */}
          <div className="flex flex-col items-center font-grotesk text-base font-medium text-Cr8tGray gap-5">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.url)}
                className={`relative uppercase font-medium text-center ${
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
              </button>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center mt-4 lg:hidden gap-[40px]">
            {linksTwo.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.url)}
                className={`relative uppercase font-medium text-center ${
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
              </button>
            ))}
            <Link href="/contact" prefetch={true}>
              <AnimatedButton className="w-[157px] h-[56px]">
                Book A Free Call
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

// Set display name for debugging
Navbar.displayName = "Navbar";

export default Navbar;

// Link items for navigation
const links = [
  { name: "Home", url: "/" },
  { name: "Our Work", url: "/our-work" },
  { name: "Services", url: "/services" },
  { name: "About", url: "/about" },
];
const linksTwo = [{ name: "Blog", url: "/blog" }];
