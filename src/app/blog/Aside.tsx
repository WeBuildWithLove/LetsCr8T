import Categories from "@/components/ui/Cards/categories";
import RecentPost from "@/components/ui/Cards/recentPost";
import SearchCard from "@/components/ui/Cards/searchCard";
import React from "react";

const Aside = () => {
  return (
    <aside>
      {" "}
      <div className="flex flex-col gap-[30px]">
        <SearchCard />
        <Categories />
        <RecentPost />
      </div>
    </aside>
  );
};

export default Aside;
