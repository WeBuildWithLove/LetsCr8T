import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimatedButton from "../animatedButton";
import DateViews from "../dateViews";
import Author from "./author";

type BlogPost = {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  views: number;
  category: string;
  image: string;
  passport: string;
};

type BlogListingCardProps = {
  blog: BlogPost;
};

const BlogListingCard: React.FC<BlogListingCardProps> = ({ blog }) => (
  <div className="bg-white rounded-[20px] md:px-[40px] px-[15px] py-[15px] md:py-[40px] ">
    <div className="flex gap-[40px] flex-wrap lg:flex-nowrap w-full">
      <Image
        src={blog.image}
        alt={blog.title}
        width={300}
        height={346}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw "
        className="rounded-[10px] md:w-full lg:w-[300px] w-[312px] "
      />
      <div className="flex flex-col md:gap-[30px] gap-[20px]">
        <DateViews date={blog.date} views={blog.views} />
        <div className="flex flex-col gap-[8px]">
          <h1 className="md:text-2xl text-[21px] font-medium md:leading-9 leading-[27px] font-grotesk">
            {blog.title}
          </h1>
          <p className="text-base text-cr8tLightBlack font-light leading-6 font-poppins">
            {blog.excerpt}
          </p>
        </div>
        <div className="flex md:justify-between flex-wrap md:flex-nowrap gap-[15px] md:gap-0 ">
          <Author src={blog.passport} name={blog.author} />
          <div className="flex w-full justify-end ">
            <Link href={`/blog/${blog.id}`}>
              <AnimatedButton
                className=" md:w-[166px] w-[156px]  h-[50px] "
                withHeartbeat
              >
                Read more
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BlogListingCard;
