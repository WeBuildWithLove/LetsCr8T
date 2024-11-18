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
  <div className="bg-white rounded-[20px] px-[40px] py-[40px]">
    <div className="flex gap-[40px]">
      <Image
        src={blog.image}
        alt={blog.title}
        width={300}
        height={346}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="flex flex-col gap-[30px]">
        <DateViews date={blog.date} views={blog.views} />
        <div className="flex flex-col gap-[8px]">
          <h1 className="text-2xl font-bold">{blog.title}</h1>
          <p className="text-base text-gray-700">{blog.excerpt}</p>
        </div>
        <div className="flex justify-between">
          <Author src={blog.passport} name={blog.author} />
          <Link href={`/blog/${blog.id}`}>
            <AnimatedButton className=" w-[166px]  h-[50px] " withHeartbeat>
              Read more
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default BlogListingCard;
