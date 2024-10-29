import ProjectItem from "./ProjectItem"; // Import ProjectItem component
import { PORTFOLIO } from "../../../constants"; // Import your portfolio data

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
