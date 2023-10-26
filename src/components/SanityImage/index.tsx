import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { getSanityImageConfig } from "@/lib/sanity.client";

interface Props {
  asset: SanityImageSource;
  alt: string;
  caption?: string;
}

export default function SanityImage(props: Props) {
  const { asset, alt, caption } = props || {};
  const imageProps = useNextSanityImage(getSanityImageConfig(), asset);

  if (!imageProps) return null;

  return (
    <figure>
      <Image
        width={imageProps.width}
        height={imageProps.height}
        src={imageProps.src}
        alt={alt}
        style={{ width: "100%", height: "auto" }}
        sizes="(max-width: 800px) 100vw, 800px"
      />
      {caption && (
        <figcaption className="mt-2 text-center italic text-sm text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
