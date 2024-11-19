import Twitter from "@/app/assets/icons/Twitter";
import { Github, Linkedin } from "lucide-react";
import React from "react";

const Socials = () => {
  return (
    <div className="flex items-center gap-5">
      <a
        href="https://www.linkedin.com/company/letscr8t"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin
          color="#ADADAD"
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
        <Twitter
          className=" hover:fill-[#FF5A12] hover:text-[#FF5A12] cursor-pointer transition-colors duration-300"
          color="#ADADAD"
        />
      </a>
      <a
        href="https://github.com/WeBuildWithLove"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github
          color="#ADADAD"
          size={24}
          strokeWidth={1}
          className=" hover:fill-[#FF5A12] cursor-pointer transition-colors duration-300"
        />
      </a>
    </div>
  );
};

export default Socials;
