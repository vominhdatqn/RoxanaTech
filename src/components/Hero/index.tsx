import React from "react";
import { Typography } from "antd";
import Image from "next/image";
// import { getPlaiceholder } from "plaiceholder";
// import fs from "node:fs/promises";

const { Title } = Typography;

export default async function Hero() {
  // const buffer = await fs.readFile('./public/assets/images/banner-animted.png');
  // const { base64 } = await getPlaiceholder(buffer);

  return (
    <section className="roxanatech-hero-section">
      <div className="roxanatech-hero px-5 md:px-0">
        <div className="roxanatech-hero-container">
          <div className="roxanatech-hero-content">
            <h1 className="font-semibold pb-5 lg:text-[46px] xl:[60px]  text-center md:text-start">
              Thiết kế Website và App chuyên nghiệp
            </h1>
            <p className="leading-[27px] my-5 text-lg text-center md:text-start">
              Dù bạn đang kinh doanh bất cứ ngành hàng nào, RoxanaTech đều hỗ
              trợ bạn xây dựng Website/App kinh doanh quản lý hiệu quả nhất.
            </p>
          </div>
          <figure className="roxanatech-hero-image">
            <Image
              alt="hero Image"
              src="/assets/images/123.jpeg"
              // blurDataURL={base64}
              // placeholder="blur"
              width={2000}
              height={415}
            />
            <img
              src="/assets/images/banner-animted.png"
              alt="hero-left-animted"
              className="hero-image-left"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
