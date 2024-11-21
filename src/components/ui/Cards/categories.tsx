import React from "react";
import { categoriesData } from "../../../../constants";

const Categories = () => {
  return (
    <div className="bg-white lg:w-[445px] w-full  rounded-[20px]  md:px-[40px] md:py-[40px] px-[26px] py-[26px]">
      <div className="flex flex-col gap-[10px] ">
        <h3 className="md:text-[21px] text-base font-medium text-cr8tBlack font-grotesk">
          Categories
        </h3>
        <div>
          {categoriesData.map((list, index) => (
            <ul
              key={index}
              className="flex flex-col gap-[12px] text-cr8tLightBlack text-base font-medium font-poppins"
            >
              <li>{list.title}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
