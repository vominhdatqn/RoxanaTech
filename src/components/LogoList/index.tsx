import { base64 } from "@/data/base64";
import Image from "next/image";
import React from "react";

export default function LogoList() {
  const partnerLogos = [
    {
      src: "assets/images/partner_1.svg",
      alt: "Partner",
    },
    {
      src: "assets/images/partner_2.svg",
      alt: "Partner",
    },
    {
      src: "assets/images/partner_3.svg",
      alt: "Partner",
    },
    {
      src: "assets/images/partner_4.svg",
      alt: "Partner",
    },
    {
      src: "assets/images/partner_5.svg",
      alt: "Partner",
    },
  ];
  return (
    <div className="flex justify-between py-2 mr-[-15px] ml-[-15px] my-0 md:-mx-2.5 md:my-0">
      {partnerLogos.map((partnerLogo, index) => (
        <div key={index}>
          {/* <img
            src={partnerLogo.src}
            alt={partnerLogo.alt}
            className="h-[60px] object-cover"
          /> */}
          <Image
             alt={partnerLogo.alt}
             src={partnerLogo.src}
             className="h-[60px] object-cover"
             height={60}
             width={80}
             placeholder="blur"
             blurDataURL={base64}
          />
        </div>
      ))}
    </div>
  );
}
