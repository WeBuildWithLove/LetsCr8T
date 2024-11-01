"use client";
import Image from "next/image";

type PROJECTITEM = {
  project: string;
  image: string;
  link: string;
  span: string;
};

const ProjectItem = ({ project, image, link, span }: PROJECTITEM) => {
  return (
    <div className="project-item">
      <Image
        src={image}
        alt="portfolio images"
        width={666}
        height={478}
        className="w-full"
      />

      <p className="lg:text-lg text-base font-medium font-grotesk text-black lg:pt-[25px] pt-[15px] group hover:text-cr8tOrange">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:underline hover:decoration-cr8tOrange"
        >
          {project}

          {/* Span element inside the link */}
          <span className="text-cr8tLightBlack group-hover:text-cr8tOrange">
            {span}
          </span>
        </a>
      </p>
    </div>
  );
};

export default ProjectItem;
