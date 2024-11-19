"use client";

import BlogHomeCard from "../ui/Cards/blogHomeCard";
import { recentBlogs } from "@/lib/utils";

const BlogPost = () => {
  return (
    <section className="mt-[150px]">
      <div className="flex flex-col gap-[50px]">
        <div className="leading-[33.6px] md:leading-normal md:text-[32px] text-2xl flex flex-col items-center mx-auto md:w-[524px] w-[326px] gap-[10px] text-cr8tBlack">
          <h2 className="font-grotesk text-center font-medium">
            Recent
            <span className="text-cr8tOrange font-urban font-normal">
              {" "}
              BLOG
            </span>{" "}
            Posts
          </h2>
          <p className="md:text-lg text-base text-cr8tLightBlack font-light text-center md:leading-7 leading-6 font-poppins pt-[10px]">
            Discover Trends, Tips, and Stories to Make Your Website
            Unforgettable and Drive More Customers.
          </p>
        </div>

        <div className="flex justify-evenly">
          {recentBlogs.map((blog) => (
            <BlogHomeCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              excerpt={blog.content.slice(0, 100) + "..."}
              image={blog.image}
              recentDay={blog.recentDay}
              recentMonth={blog.recentMonth}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
