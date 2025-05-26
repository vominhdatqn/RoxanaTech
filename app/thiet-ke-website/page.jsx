import { BreadCrumb } from "@/components/common/BreadCrumb";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Topbar from "@/components/homes/home-headphone/Topbar";
import Products2 from "@/components/homes/home-paddle-boards/Products";
import { AuroraHero } from "@/components/homes/home/AuroraHero";
import About from "@/components/othersPages/thiet-ke-website/About";
import Features from "@/components/othersPages/thiet-ke-website/Features";

export const metadata = {
  title: "Thiết kế website",
  description:
    "Cung cấp giải pháp thiết kế website hiện đại, chuẩn SEO và thân thiện với mọi thiết bị.",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  applicationName: "RoxanaTech",
  generator: "RoxanaTech",
  referrer: "origin-when-cross-origin",
  keywords: [
    "RoxanaTech",
    "RoxanaTech - Thiết kế website/app chuyên nghiệp cho doanh nghiệp",
    "Thiết kế và phát triển website",
    "roxanatech",
    "roxanatech - website/app chuyên nghiệp cho doanh nghiệp",
    "thiết kế và phát triển ứng dụng di động",
    "thiết kế ứng dụng",
    "thiết kế ứng dụng android",
    "thiết kế ứng dụng ios",
    "thiết kế ứng dụng android và ios",
    "thiết kế website",
    "thiết kế ứng dụng di động",
    "thiết kế ứng dụng di động tại bình thạnh",
    "thiết kế ứng dụng web tại bình thạnh",
    "thiết kế ứng dụng website tại bình thạnh",
    "thiết kế app tại bình thạnh",
    "thiết kế app tại sài gòn",
    "thiết kế app tại hồ chí minh",
    "thiết kế app tại long an",
    "thiết kế app tại Long An",
    "thiết kế app tại bến tre",
    "thiết kế app tại Bến Tre",
  ],
  creator: "Đạt Võ",
  publisher: "Đoàn Thị Kim Khoa",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/roxanatech-favicon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/roxanatech-favicon.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/roxanatech-favicon.png",
    },
  ],
  openGraph: {
    images: [
      {
        url: "https://roxanatech.com/images/roxanatech_background.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://roxanatech.com/images/roxanatech_background.png",
        width: 1800,
        height: 1600,
        alt: "RoxanaTech - Thiết kế phát triển website, ứng dụng di động trên nền tảng android và ios.",
      },
    ],
    url: "https://roxanatech.com/",
    siteName: "RoxanaTech",
    description:
      "RoxanaTech - Thiết kế phát triển website, ứng dụng di động trên nền tảng android và ios.",
    locale: "vi_VN",
    type: "website",
  },
};
export default function page() {
  return (
    <>
      <Topbar />
      <Header2 />
      {/* <Hero /> */}
      <AuroraHero
        title="THIẾT KẾ WEBSITE"
        content="Chúng tôi mang đến giải pháp thiết kế website chuẩn SEO, nâng cao trải nghiệm người dùng và tối ưu hiệu quả bán hàng đa kênh."
        subContent="Hãy để Web Roxanatech “Đổi mới công nghệ – Tối ưu hiệu quả”, giúp doanh nghiệp của bạn bứt phá và phát triển bền vững!"
      />
      <BreadCrumb pageName="Thiết kế website" />
      {/* <FlatTitle /> */}
      <About />
      {/* <OrderDetails /> */}
      <Features />
      <Products2 subTitle="Chúng tôi mang đến một website không chỉ đẹp mắt mà còn dễ dàng sử dụng, giúp khách hàng mua sắm thuận tiện và nhanh chóng. Với sự minh bạch trong giá cả, bạn sẽ luôn cảm thấy yên tâm và tin tưởng khi đồng hành cùng chúng tôi!" />
      <Footer1 />
    </>
  );
}
