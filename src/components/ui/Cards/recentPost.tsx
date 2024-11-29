import React from "react";
import Image from "next/image";
import { recentBlogs } from "@/lib/utils";
import { formatDate } from "@/lib/utils";

const RecentPost = () => {
  return (
    <div className="bg-white  rounded-[20px]  md:px-[40px] md:py-[40px] px-[26px] py-[26px]">
      <div className="flex flex-col gap-[10px]">
        <h3 className=" md:text-[21px] text-base font-medium text-cr8tBlack font-grotesk">
          Recent Posts
        </h3>
        <div className="flex flex-col gap-[15px] font-poppins">
          {recentBlogs.map((post, index) => (
            <div key={index} className="flex gap-[10px]">
              <Image
                src={post.image}
                alt="Recent Blog Image"
                width={80}
                height={80}
                className="rounded-[5px]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw "
              />
              <div className="flex flex-col gap-[5px] text-base">
                <p className="text-cr8tBlack font-medium">
                  {formatDate(post.date)}
                </p>
                <h3 className="text-Cr8tGray font-light">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
