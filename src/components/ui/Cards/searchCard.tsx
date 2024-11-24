import { Search } from "lucide-react";
import React from "react";

const SearchCard = () => {
  return (
    <div className="bg-white  lg:w-[445px]   w-full rounded-[20px]  md:px-[40px] px-[26px] md:y-[40px] py-[26px]">
      <div className="relative">
        <label
          htmlFor="search-input"
          className="block md:text-[21px] text-base font-medium text-cr8tBlack font-grotesk"
        >
          Search
        </label>
        <input
          id="search-input"
          type="search"
          placeholder="Search your keywords"
          className="w-full border  rounded-[5px] mt-[10px] pl-4 pr-12 py-2 focus:outline-none focus:ring-1 focus:ring-cr8tOrange text-Cr8tGray text-base font-light font-poppins"
        />
        <Search
          className="absolute right-3 top-2/3 transform -translate-y-[5px] text-gray-400"
          size={24}
          color="#adadad"
        />
      </div>
    </div>
  );
};

export default SearchCard;
