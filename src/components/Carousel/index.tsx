// import { Image } from 'antd';
import Image from "next/image";
import CustomCarousel from "../CustomCarousel";
import { imageBase64 } from "@/utils/imageBase64";
import { ImageType } from "@/model/ContractModel";
// import getBase64, { getPlaiceholderData } from "@/lib/getLocalBase64";

const heroSectionCarousel = [
  "/assets/images/carousel_new_1.jpeg",
  "/assets/images/carousel_new_2.jpeg",
  "/assets/images/carousel_new_3.jpeg",
];

export default function Carousel({ data }: { data?: ImageType[] }) {
  const renderCarousel = () => {
    return data?.map((item, index) => (
      <div key={index} className="h-auto w-full">
        <Image
          alt={item?.alt || "hình ảnh nên mardoll studio"}
          src={item?.url || ""}
          placeholder="blur"
          blurDataURL={imageBase64}
          width={2500}
          height={1000}
          quality={100}
          priority
          // fill
          sizes="100vw"
          style={{
            // width: '100%',
            // height: 'auto',
            objectFit: "cover",
          }}
        />
        {/* <Image className="object-cover" alt={item} src={item} /> */}
      </div>
    ));
  };
  return (
    <div className="relative">
      <CustomCarousel autoplay>{renderCarousel()}</CustomCarousel>
    </div>
  );
}
