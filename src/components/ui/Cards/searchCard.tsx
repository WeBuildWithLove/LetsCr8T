import { Search } from "lucide-react";
import React from "react";

const SearchCard = () => {
  return (
    <div className="bg-white w-[445px] rounded-[5px] p-4 px-[40px] py-[40px]">
      <div className="relative">
        <label
          htmlFor="search-input"
          className="block text-[21px] font-medium text-cr8tBlack font-grotesk"
        >
          Search
        </label>
        <input
          id="search-input"
          type="search"
          placeholder="Search your keywords"
          className="w-full border border-gray-300 rounded-[5px] mt-[10px] pl-4 pr-12 py-2 focus:outline-none focus:ring-1 focus:ring-cr8tOrange text-Cr8tGray text-base font-medium font-poppins"
        />
        <Search
          className="absolute right-3 top-2/3 transform -translate-y-[3px] text-gray-400"
          size={24}
          color="#adadad"
        />
      </div>
    </div>
  );
};

export default SearchCard;
