"use client";

import Layout from "@/layout";
import Hero from "./Hero";
import Aside from "./Aside";
import BlogListingCard from "@/components/ui/Cards/blogListingCard";

// Static import of blogs data
import blogsData from "./mock/blogs.json";
import Head from "next/head";

const Blog = () => {
  return (
    <Layout>
      <Head>
        <title>
          Our Blog | Insights and Ideas for Your Business | Letscr8t
        </title>
        <meta
          name="description"
          content="Explore insights, tips, and ideas on building websites, digital tools, and strategies for small businesses and startups."
        />
        <meta
          name="keywords"
          content="small business blogs, website design tips, digital marketing insights, start-ups"
        />
      </Head>
      <Hero />
      <section className="pt-[150px] lg:px-[80px] px-6">
        <div className="flex justify-center gap-[104px]">
          <div className="flex flex-col gap-[30px]">
            {blogsData.map((blog) => (
              <BlogListingCard key={blog.id} blog={blog} />
            ))}
          </div>
          <Aside />
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
