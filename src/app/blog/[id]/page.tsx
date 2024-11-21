"use client";
import { useParams } from "next/navigation";
import blogsData from "@/app/blog/mock/blogs.json";
import Image from "next/image";
import Layout from "@/layout";
import Aside from "../Aside";
import DateViews from "@/components/ui/dateViews";
import Author from "@/components/ui/Cards/author";
import BlogFooter from "@/components/ui/blogFooter";
import Head from "next/head";
import Advert from "@/components/Global/Advert";
import HeroDetail from "../HeroDetail";

const BlogDetail = () => {
  const { id } = useParams(); // Retrieve dynamic ID from the URL
  const blog = blogsData.find((item) => item.id === id);

  if (!blog) return <div>Loading...</div>; // Handle if the blog is not found

  return (
    <Layout>
      <Head>
        <title>{blog.title} | Letscr8t</title>
        <meta name="description" content={blog.excerpt} />
        <meta
          name="keywords"
          content="small business tools, free digital tools, productivity apps, website growth, small business, start-ups"
        />
        <meta name="author" content={blog.author} />
      </Head>
      <HeroDetail />
      <article className="lg:pt-[150px] md:pt-[100px] pt-[50px] lg:px-[80px] px-6">
        <div className="flex justify-center xl:gap-[104px] gap-[50px] flex-wrap lg:flex-nowrap">
          <div className="flex-1">
            <Image
              src={blog.image}
              alt={blog.title}
              width={803}
              height={346}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-[20px] w-full"
            />
            <div className="flex md:gap-[37px] pt-5 ">
              <div className="hidden xl:flex">
                <Author name={blog.author} src={blog.passport} />
              </div>
              <DateViews date={blog.date} views={blog.views} />
            </div>
            <header>
              <h1 className="md:text-[28px] text-[21px] leading-[27px]  md:leading-[36px] font-grotesk font-medium text-cr8tBlack mt-[30px]">
                {blog.title}
              </h1>
              <p className="py-5 text-base font-light font-poppins leading-6 text-cr8tLightBlack">
                {blog.excerpt}
              </p>
            </header>
            <section className="text-base font-light font-poppins leading-6 text-cr8tLightBlack flex flex-col gap-5">
              {blog.listItems.map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{item}</h3>
                  <p className="pt-1">{blog.paragraphs[index]}</p>
                </div>
              ))}
            </section>
            <div className="text-base font-light font-poppins leading-6 text-cr8tLightBlack pt-[30px]">
              <h2 className="text-cr8tBlack font-semibold text-lg">
                Conclusion
              </h2>
              <p className="pt-2">{blog.conclusion}</p>
              <p className="pt-5">
                Ready to upgrade your website?{" "}
                <span className="text-cr8tOrange font-urban">Contact us</span>{" "}
                today to get started!
              </p>
            </div>
            <div className="mt-[30px] ">
              <BlogFooter
                name={blog.author}
                src={blog.passport}
                intro={blog.profile}
              />
            </div>
          </div>
          <Aside />
        </div>
      </article>
      <div className="mt-[150px]">
        <Advert />
      </div>
    </Layout>
  );
};

export default BlogDetail;
