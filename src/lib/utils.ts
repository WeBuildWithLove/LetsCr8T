import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import blogsData from "@/app/blog/mock/blogs.json";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const recentBlogs = blogsData
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

const urban = localFont({
  src: "../../public/fonts/Urban Storm.ttf",
  weight: "400",
  variable: "--font-urban",
  display: "swap",
});

const grotesk = localFont({
  src: [
    { path: "../../public/fonts/BDOGrotesk-Regular.ttf", weight: "400" },
    { path: "../../public/fonts/BDOGrotesk-Medium.ttf", weight: "500" },
    { path: "../../public/fonts/BDOGrotesk-Bold.ttf", weight: "700" },
  ],
  variable: "--font-grotesk",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"], // Specify the weights to include
  subsets: ["latin"], // Optional: define the subset
  display: "swap",
});
export { urban, grotesk, poppins };
