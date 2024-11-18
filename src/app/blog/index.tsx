// "use client";
// import Layout from "@/layout";
// import Hero from "./Hero";
// import Aside from "./Aside";
// import { useEffect, useState } from "react";
// import BlogListingCard from "@/components/ui/Cards/blogListingCard";

// type BlogPost = {
//   id: string;
//   title: string;
//   date: string;
//   author: string;
//   excerpt: string;
//   content: string;
//   views: number;
//   category: string;
//   image: string;
// };

// const BlogPage = () => {
//   const [blogs, setBlogs] = useState<BlogPost[]>([]);

//   useEffect(() => {
//     import("../../app/blog/mock/blogs.json").then((data) => {
//       setBlogs(data);
//     });
//   }, []);

//   return (
//     <Layout>
//       <Hero />
//       <section className="pt-[150px]">
//         <div className="flex justify-center gap-[104px]">
//           <div className="flex flex-col gap-[30px]">
//             {blogs.map((blog) => (
//               <BlogListingCard key={blog.id} blog={blog} />
//             ))}
//           </div>
//           <Aside />
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default BlogPage;
