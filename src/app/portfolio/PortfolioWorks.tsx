import ProjectItem from "./ProjectItem"; // Import ProjectItem component
import { PORTFOLIO } from "../../../constants"; // Import your portfolio data

const PortfolioWorks = () => {
  return (
    <section className=" lg:px-[80px] px-6 lg:my-[150px] my-[50px]">
      <div className="font-poppins font-light text-cr8tLightBlack lg:text-base text-[15px] lg:leading-6 leading-[22.5px]  ">
        <p className=" lg:w-[388px] w-[246px]">
          PROJECTS
          <br />
          We WORK CLOSELY WITH OUR CLIENTS TO CREATE OUTSTANDING EXPERIENCES FOR
          THEIR USERS.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-[50px] gap-[15px] lg:mt-[50px] mt-[25px]">
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
