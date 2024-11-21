import Twitter from "@/app/assets/icons/Twitter";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import React, { FC } from "react";

interface AuthorProps {
  name: string;
  src: string;
  intro: any;
}

const BlogFooter: FC<AuthorProps> = ({ src, name, intro }) => {
  return (
    <div className="bg-white rounded-[20px] md:px-[21px] px-[23px] md:py-[16px] py-[23px]">
      <div className="flex gap-5 items-center flex-wrap xl:flex-nowrap">
        <Image
          src={src}
          alt="Preye Omusuku"
          width={100}
          height={100}
          className="md:w-[100px] md:h-[100px] w-[80px] h-[80px]"
        />
        <div className="font-poppins  text-cr8tBlack flex flex-col gap-[15px]">
          <p className="text-[21px]  font-bold">About {name}</p>
          <p className="text-base font-normal  leading-6 text-Cr8tGray">
            {intro}
          </p>
          <div className="flex gap-[20px] items-end justify-end ">
            <a
              href="https://www.linkedin.com/in/preyeomusuku"
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
              href="https://x.com/p_r_e_y_e_o"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="text-gray-500 hover:fill-[#FF5A12] hover:text-[#FF5A12] cursor-pointer transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/PreyeO"
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
        </div>
      </div>
    </div>
  );
};

export default BlogFooter;
