"use client";
import { useState } from "react";
import Image from "next/image";

type PROJECTITEM = {
  project: string;
  image: string;
  gif: string;
  link: string;
  span: string;
};

const ProjectItem = ({ project, image, gif, link, span }: PROJECTITEM) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="project-item relative rounded-[5px] overflow-hidden "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Static Image */}
      <Image
        src={image}
        alt="portfolio image"
        width={666}
        height={478}
        className={`w-full h-auto transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* GIF (only visible on hover) */}
      <Image
        src={gif}
        alt="portfolio gif"
        width={666}
        height={478}
        className={`absolute top-0 left-0 w-full h-auto transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Project Details */}
      <p className="lg:text-lg text-base font-medium font-grotesk text-black lg:pt-[25px] pt-[15px] group hover:text-cr8tOrange">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:underline hover:decoration-cr8tOrange"
        >
          {project}
          <span className="text-cr8tLightBlack group-hover:text-cr8tOrange">
            {span}
          </span>
        </a>
      </p>
    </div>
  );
};

export default ProjectItem;
