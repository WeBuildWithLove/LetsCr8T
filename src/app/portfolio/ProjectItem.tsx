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
      {/* Portfolio image */}
      <Image
        src={image}
        alt="portfolio images"
        width={666}
        height={478}
        className="w-full"
      />

      {/* Group parent for hover effects */}
      <p className="text-lg font-medium font-grotesk text-black pt-[25px] group hover:text-cr8tOrange">
        {/* Anchor element */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:underline hover:decoration-cr8tOrange"
        >
          {/* Project text */}
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
