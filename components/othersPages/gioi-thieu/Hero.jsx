import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="tf-slideshow about-us-page position-relative">
      <div className="banner-wrapper">
        <Image
          className="lazyload"
          src="/images/slider/bg-slider-gaming-accessories.jpg"
          data-=""
          alt="image-collection"
          width={2000}
          height={1262}
        />
        <div className="box-content text-center">
          <div className="container">
            <div className="text-white">
              <span class="text">THIẾT KẾ WEBSITE</span>
              <br className="d-xl-block d-none" />
              <span className="fs-18">
                Chúng tôi cung cấp dịch vụ thiết kế website chuẩn SEO, hỗ trợ
                bán hàng đa kênh.{" "}
              </span>
              <br className="d-xl-block d-none" />
              <span className="fs-18 mt-1">
                Hãy để Web RoxanaTech "ĐỔI MỚI CÔNG NGHỆ - TỐI ĐA HIỆU QUẢ" cho
                doanh nghiệp của bạn.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
