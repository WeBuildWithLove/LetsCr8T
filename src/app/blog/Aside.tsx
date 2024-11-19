import Categories from "@/components/ui/Cards/categories";
import RecentPost from "@/components/ui/Cards/recentPost";
import SearchCard from "@/components/ui/Cards/searchCard";
import Socials from "@/components/ui/socials";
import React from "react";

const Aside = () => {
  return (
    <aside>
      {" "}
      <div className="flex flex-col gap-[30px]">
        <SearchCard />
        <Categories />
        <RecentPost />
        <div className="flex flex-col gap-[15px]">
          <div className="font-poppins flex gap-[10px] items-center">
            <p className="text-base font-medium">Follow Us</p>
            <div className="border-2 border-cr8tOrange min-w-[100px] flex-shrink-0"></div>
          </div>
          <Socials />
        </div>
      </div>
    </aside>
  );
};

export default Aside;
