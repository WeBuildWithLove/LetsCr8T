import React from "react";
import { categoriesData } from "../../../../constants";

const Categories = () => {
  return (
    <div className="bg-white w-[445px] rounded-[5px] p-4 px-[40px] py-[40px]">
      <div className="flex flex-col gap-[10px]">
        <h3 className="block text-[21px] font-medium text-cr8tBlack font-grotesk">
          Search
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
