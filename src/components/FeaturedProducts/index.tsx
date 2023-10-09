import FeaturedProductCard from "../FeaturedProductCard";

const items = [
  {
    title: "Thiết kế web",
    icon: "/assets/icons/featured/website-icon-128x128.png",
    description: "Thiết kế website chuyên nghiệp cho công ty, doanh nghiệp thương mại điện tử, vận tải, hoặc đơn vị cần quản trị kinh doanh dựa trên nền tảng ứng dụng web. Mọi sản phẩm đều được thiết kế web chuẩn SEO và tư vấn thiết kế web trọn gói.",
  },
  {
    title: "Thiết kế App",
    icon: "/assets/icons/featured/mobile-app-icon-128x128.png",
    description: 'Thiết kế App cho Smartphone bằng công nghệ React Native + Expo đáp ứng mọi tiêu chuẩn của Apple iOS và Google Android. Đảm bảo App luôn chạy tốt đa nền tảng, tương thích với mọi loại thiết bị màn hình điện thoại, đồng hồ, và máy tính bảng.'
  },
  {
    title: "Outsourcing",
    icon: "/assets/icons/featured/outsource.png",
    description: 'Với nhiều năm kinh nghiệm thực hiện dự án Web / App trên nền Drupal CMS và React Native, chúng tôi sẵn sàng nhận những dự án hoặc một phần của dự án lớn từ đối tác trong và ngoài nước. Dịch vụ bao gồm làm NEXTJS, REACTJS, HTML / CSS / JAVASCRIPT, phát triển React Native App...'
  }
]

export default function FeaturedProducts() {
  const renderFeaturedProducts = () => {
    return items.map((items, index) => {
      return (
        <FeaturedProductCard key={`featured-products-details__item-${index}`} {...items} />
      )
    })
  }

  return (
    <section className="roxanatech-featured-products pt-[50px] md:pt-[60px]">
      <div className="roxanatech-featured-products__container">
        <div className="roxanatech-featured-products__content">
          <div className="max-w-[560px] md:px-4">
            <div className="relative mb-[47px] text-center">
              <h2>
                Chọn bảng thông tin cho mọi giai đoạn trong hành trình khách
                hàng của bạn
              </h2>
              <p className="text-base md:text-lg md:font-medium">
                Sự nổi lên của thiết bị di động đã thay đổi hoàn toàn cách chúng
                ta sử dụng thông tin và các kênh phù hợp nhất trên thế giới như
                Facebook và Instagram hầu như chỉ được sử dụng trên thiết bị di
                động
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
