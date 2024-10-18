import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { PORTFOLIO } from "../../../constants";
import ButtonIcon from "@/components/Global/ButtonIcon";

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

      <p className="text-lg font-medium font-grotesk text-black pt-[25px]">
        {project}
        <span className="text-cr8tLightBlack">{span}</span>
      </p>

      {/* <Link
        href={link}
        className="mt-5 md:mt-20 pb-6 flex items-center justify-end gap-2 text-[#4B0082] text-sm font-semibold"
      >
        Go to Project <IoIosArrowForward />
      </Link> */}
    </div>
  );
};

const PortfolioWorks = () => {
  return (
    <section className="px-[80px] my-[150px]">
      <div className="text-base leading-6 font-poppins font-light text-cr8tLightBlack ">
        <p className="w-[388px]">
          PROJECTS
          <br />
          We WORK CLOSELY WITH OUR CLIENTS TO CREATE OUTSTANDING EXPERIENCES FOR
          THEIR USERS.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] mt-[50px]">
        {PORTFOLIO.map((portfolio, index) => (
          <ProjectItem
            key={index}
            project={portfolio.project}
            image={portfolio.image}
            link={portfolio.link}
            span={portfolio.span}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioWorks;
