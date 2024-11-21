"use client";

import { useState } from "react";
import Layout from "@/layout";
import Hero from "./Hero";
import Aside from "./Aside";
import BlogListingCard from "@/components/ui/Cards/blogListingCard";
import blogsData from "./mock/blogs.json";
import Head from "next/head";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Blog = () => {
  const ITEMS_PER_PAGE = 3; // Number of blogs per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogsData.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Calculate blogs to display
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visibleBlogs = blogsData.slice(startIndex, endIndex);

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
      <section className="lg:pt-[150px] md:pt-[100px] pt-[50px] lg:px-[80px] px-6">
        <div className="flex flex-wrap xl:flex-nowrap justify-center xl:gap-[80px] gap-[50px]">
          <div className="flex flex-col gap-[30px]">
            {visibleBlogs.map((blog) => (
              <BlogListingCard key={blog.id} blog={blog} />
            ))}
            <Pagination className="flex justify-center items-center gap-[8px]">
              <PaginationContent>
                <PaginationItem className="w-[32px] h-[32px] rounded-[4px] ">
                  <PaginationPrevious
                    href={`#`}
                    className={
                      currentPage === 1
                        ? " cursor-not-allowed bg-[#ADADAD] border-none"
                        : ""
                    }
                    onClick={() =>
                      handlePageChange(Math.max(1, currentPage - 1))
                    }
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, index) => (
                  <PaginationItem key={index} className="w-[32px] h-[32px]  ">
                    <PaginationLink
                      href={`#`}
                      isActive={currentPage === index + 1}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem className="w-[32px] h-[32px] ">
                  <PaginationNext
                    href={`#`}
                    className={
                      currentPage === totalPages
                        ? " cursor-not-allowed bg-[#ADADAD]  border-none"
                        : ""
                    }
                    onClick={() =>
                      handlePageChange(Math.min(totalPages, currentPage + 1))
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>

          <div className="w-full">
            <Aside />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
