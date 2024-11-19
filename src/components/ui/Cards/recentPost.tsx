import React from "react";
import Image from "next/image";
import { recentBlogs } from "@/lib/utils";
import { formatDate } from "@/lib/utils";

const RecentPost = () => {
  return (
    <div className="bg-white w-[445px] rounded-[5px] p-4 px-[40px] py-[40px]">
      <div className="flex flex-col gap-[10px]">
        <h3 className="block text-[21px] font-medium text-cr8tBlack font-grotesk">
          Recent Posts
        </h3>
        <div className="flex flex-col gap-[15px]">
          {recentBlogs.map((post, index) => (
            <div key={index} className="flex gap-[10px]">
              <Image
                src={post.image}
                alt="Recent Blog Image"
                width={80}
                height={80}
              />
              <div className="flex flex-col gap-[5px] text-base">
                <p className="text-cr8tBlack font-medium">
                  {formatDate(post.date)}
                </p>
                <h3 className="text-Cr8tGray font-normal">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
