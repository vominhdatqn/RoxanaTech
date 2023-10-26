import Blog from "@/components/Blog";
import SanityCoverImage from "@/components/SanityCoverImage";
import { getAllPosts } from "@/lib/sanity.client";
import Link from "next/link";

export const revalidate = 0;

export default async function BlogPage() {
  return (
    <div className="w-full bg-white divide-y divide-gray-200">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 text-center">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:leading-10 md:text-4xl md:leading-14">
          Blog
        </h1>
      </div>
      <div className="px-6">
        <Blog />
      </div>
    </div>
  );
}
