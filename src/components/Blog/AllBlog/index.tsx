import PostDate from "@/components/PostDate";
import SanityCoverImage from "@/components/SanityCoverImage";
import { getAllBlogPosts } from "@/lib/sanity.client";
import { Button } from "antd";
import Link from "next/link";

type BeautyBlogType = {
  positionTitle?: "center" | "start";
};

export default async function AllBlog({
  positionTitle = "center",
}: BeautyBlogType) {
  const data = await getAllBlogPosts();

  return (
    <div className="mb-20 mt-8">
      <div className={`text-${positionTitle}`}>
        <h2 className="text-2xl text-gray-900 font-semibold uppercase">Blog</h2>
        <p className="text-sm text-gray-600 my-4">
          RoxanaTech gợi ý bạn những blog hay.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-20 md:grid-cols-3 md:gap-x-4">
        {data.map((post) => {
          const { slug, title, coverImage, date, type } = post;
          return (
            <div className="flex flex-col">
              <SanityCoverImage
                {...{
                  slug,
                  title,
                  image: coverImage,
                  priority: false,
                }}
              />
              <p className="mt-2 text-sm uppercase text-black font-normal">
                {type}
              </p>
              <h3 className="my-2 text-xl lg:text-2xl font-semibold leading-6">
                <Link href={`/bai-viet/${slug}`} className="hover:underline">
                  {title}
                </Link>
              </h3>
              <div className="mb-4 text-sm text-[#777777]">
                <PostDate dateString={date} />
              </div>
            </div>
          );
        })}
      </div>
      {positionTitle === "center" ? null : (
        <div className="flex justify-center">
          <Button type="primary">
            <Link href={"/bai-viet/beauty"}>XEM THÊM</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
