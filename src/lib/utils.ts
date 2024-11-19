import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import blogsData from "@/app/blog/mock/blogs.json";

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
