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
    <div className="flex justify-between mr-[-15px] ml-[-15px] my-0 md:-mx-2.5 md:my-0">
      {partnerLogos.map((partnerLogo, index) => (
        <div className="p-[15px]" key={index}>
          <img src={partnerLogo.src} alt={partnerLogo.alt} />
        </div>
      ))}
    </div>
  );
}
