import React from "react";

import FeaturedProductCard from "../FeaturedProductCard";

const items = [
  {
    title: "Thiết kế web",
    icon: "/assets/icons/featured/website-icon-128x128.png",
    description:
      "Thiết kế website chuyên nghiệp cho công ty, doanh nghiệp, cửa hàng hoặc đơn vị cần quản trị kinh doanh dựa trên nền tảng ứng dụng web. Mọi sản phẩm đều được thiết kế web chuẩn SEO, code tay dùng công nghệ ReactJS, NextJs và tư vấn thiết kế web trọn gói. Khách hàng không phải lo về độ mượt của web, giao diện đẹp có thể tuỳ biến.",
  },
  {
    title: "Thiết kế App",
    icon: "/assets/icons/featured/mobile-app-icon-128x128.png",
    description:
      "Thiết kế App cho Smartphone bằng công nghệ React Native đáp ứng mọi tiêu chuẩn của Apple iOS và Google Android. Đảm bảo App luôn chạy tốt đa nền tảng, tương thích với mọi loại thiết bị màn hình điện thoại,và máy tính bảng.",
  },
  {
    title: "Outsourcing",
    icon: "/assets/icons/featured/outsource.png",
    description:
      "Với nhiều năm kinh nghiệm thực hiện dự án Web / App trên nền ReactJS, NextJS và React Native, chúng tôi sẵn sàng nhận những dự án hoặc một phần của dự án lớn từ đối tác trong và ngoài nước. Dịch vụ bao gồm làm HTML / CSS, ReactJS, NextJS và phát triển React Native App...",
  },
];

export default function FeaturedProducts() {
  const renderFeaturedProducts = () => {
    return items.map((items, index) => {
      return (
        <FeaturedProductCard
          key={`featured-products-details__item-${index}`}
          {...items}
        />
      );
    });
  };

  return (
    <section
      id="roxanatech-services"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      className="roxanatech-featured-products pt-6"
    >
      <div className="roxanatech-featured-products__container">
        <div className="roxanatech-featured-products__content">
          <div className="max-w-[650px] px-4">
            <div className="relative pb-[47px] text-center">
              <h2 data-aos="fade-down" id="roxanatech-services">
                Dịch vụ của RoxanaTech
              </h2>
              <p
                data-aos="fade-up"
                className="text-base md:text-lg md:font-medium"
              >
                Là công ty thiết kế website / thiết kế app chuyên nghiệp, chúng
                tôi đã tạo ra hàng trăm Website / App chất lượng cao gửi tới
                khách hàng.
                <br />
                Nhiều loại hình website / app đã được xây dựng bao gồm: Website
                doanh nghiệp, website / app bán hàng / thương mại điện tử / app
                vận tải định vị Google Map, website báo điện tử, website / app
                số hóa doanh nghiệp.v.v.
              </p>
            </div>
          </div>
        </div>
        <div className="roxanatech-featured-products__detail"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 px-5 gap-6 md:gap-3 mx-auto md:px-6 lg:max-w-[1280px]">
        {renderFeaturedProducts()}
      </div>
    </section>
  );
}
