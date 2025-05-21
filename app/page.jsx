import Footer1 from "@/components/footers/Footer1";
import { AuroraHero } from "@/components/homes/home/AuroraHero";
import Header2 from "@/components/headers/Header2";
import Products from "@/components/homes/home-baby/Products";
import Marquee from "@/components/homes/home-electronic/Marquee";
import Categories from "@/components/homes/home-grocery/Categories";
import Topbar from "@/components/homes/home-headphone/Topbar";
import Testimonials from "@/components/homes/home-gaming-accessories/Testimonials";
import Features from "@/components/homes/home-paddle-boards/Features";
import Products2 from "@/components/homes/home-paddle-boards/Products";

export const metadata = {
  title: "RoxanaTech - Thiết kế website/app chuyên nghiệp cho doanh nghiệp",
  description:
    "Thiết kế website/app cho doanh nghiệp, uy tín, chuẩn UX,UI✅ website/app doanh nghiệp chuẩn SEO ✅ tại TPHCM và các tỉnh miền Tây nam bộ. Dịch vụ uy tín, hỗ trợ kỹ thuật 24/7, tư vấn miễn phí theo yêu cầu chỉ từ 2tr8 ✅ tặng hosting tên miền tốc độ cao. Miễn phí dùng thử ✅, thiết kế chọn gói website/app tại RoxanaTech.",
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

export default function Home() {
  return (
    <>
      <Topbar />
      <Header2 />
      <AuroraHero />
      <Marquee />
      <Categories />
      {/* <Features /> */}
      <Products2 />
      <Products />
      <Testimonials />
      <Footer1 />
    </>
  );
}
