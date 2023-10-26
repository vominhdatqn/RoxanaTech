import { getPostBySlug } from "@/lib/sanity.client";
import React from "react";
import {
  PortableText,
  type PortableTextReactComponents,
} from "@portabletext/react";
import SanityImage from "@/components/SanityImage";
import styles from "../../../styles/components/post.module.css";
import PostDate from "@/components/PostDate";
import SanityCoverImage from "@/components/SanityCoverImage";

export const revalidate = 0;

export default async function PostSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getPostBySlug(params.slug);
  const myPortableTextComponents: Partial<PortableTextReactComponents> = {
    types: {
      image: ({ value }) => {
        return <SanityImage {...value} />;
      },
      youtubeVideo: ({ value }) => {
        const { url } = value;
        // console.log(url)
        // You can customize the iframe dimensions and other attributes here
        return (
          <iframe
            width="560"
            height="315"
            src={url}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        );
      },
    },
  };

  return (
    <div className={`w-full bg-white ${styles.portableText}`}>
      <div className="px-12 text-center">
        <h4 className="block-type text-lg font-semibold">{data.type}</h4>
        <h1 className="text-2xl md:text-3xl font-bold">{data.title}</h1>
        <div className="mt-4 mb-9 text-sm text-[#777777]">
          <PostDate dateString={data.date} />
        </div>
      </div>
      <div className="my-9">
        <SanityCoverImage
          {...{
            slug: data.slug,
            title: data.title,
            image: data.coverImage,
            priority: false,
          }}
        />
      </div>
      <div className="mx-auto max-w-3xl px-6 md:px-6">
        <PortableText
          value={data?.content}
          components={myPortableTextComponents}
        />
      </div>
    </div>
  );
}
