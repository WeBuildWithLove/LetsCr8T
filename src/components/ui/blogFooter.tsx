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
    <div className="bg-white rounded-[20px] px-[21px] py-[16px]">
      <div className="flex gap-5 items-center">
        <Image src={src} alt="Preye Omusuku" width={100} height={100} />
        <div className="font-poppins  text-cr8tBlack flex flex-col gap-[15px]">
          <p className="text-[21px]  font-bold">About {name}</p>
          <p className="text-base font-normal  leading-6">{intro}</p>
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
