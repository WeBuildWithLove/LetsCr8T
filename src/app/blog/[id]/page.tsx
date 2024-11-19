"use client";
import { useParams } from "next/navigation";
import blogsData from "@/app/blog/mock/blogs.json";
import Image from "next/image";
import Layout from "@/layout";
import Hero from "../Hero";
import Aside from "../Aside";
import DateViews from "@/components/ui/dateViews";
import Author from "@/components/ui/Cards/author";
import BlogFooter from "@/components/ui/blogFooter";
import Head from "next/head";
import Advert from "@/components/Global/Advert";

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
      <Hero />
      <article className="pt-[150px] lg:px-[80px] px-6">
        <div className="flex justify-center gap-[104px]">
          <div className="flex-1">
            <Image
              src={blog.image}
              alt={blog.title}
              width={803}
              height={346}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="flex gap-[37px] pt-5">
              <Author name={blog.author} src={blog.passport} />
              <DateViews date={blog.date} views={blog.views} />
            </div>
            <header>
              <h1 className="text-4xl font-bold mt-[30px]">{blog.title}</h1>
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
            <div className="mt-[30px]">
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
