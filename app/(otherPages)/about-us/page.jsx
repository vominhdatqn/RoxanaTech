import ProductSinglePrevNext from "@/components/common/ProductSinglePrevNext";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import { AuroraHero } from "@/components/homes/home/AuroraHero";
import About from "@/components/othersPages/about/About";
import Features from "@/components/othersPages/about/Features";
import FlatTitle from "@/components/othersPages/about/FlatTitle";
import Hero from "@/components/othersPages/about/Hero";
import Topbar from "@/components/homes/home-headphone/Topbar";
import ShopGram from "@/components/othersPages/about/ShopGram";
import Testimonials from "@/components/othersPages/about/Testimonials";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "About Us || Ecomus - Ultimate Nextjs Ecommerce Template",
  description: "Ecomus - Ultimate Nextjs Ecommerce Template",
};
export default function page() {
  return (
    <>
      <Topbar />
      <Header2 />
      {/* <Hero /> */}
      <AuroraHero
        title="THIẾT KẾ WEBSITE"
        content="Chúng tôi cung cấp dịch vụ thiết kế website chuẩn SEO, hỗ trợ
                bán hàng đa kênh. Hãy để Web RoxanaTech 'ĐỔI MỚI CÔNG NGHỆ - TỐI ĐA HIỆU QUẢ' cho
                doanh nghiệp của bạn."
      />
      <div className="tf-breadcrumb">
        <div className="container">
          <div className="tf-breadcrumb-wrap d-flex justify-content-between flex-wrap align-items-center">
            <div className="tf-breadcrumb-list">
              <Link href={`/`} className="text">
                Trang chủ
              </Link>
              <i className="icon icon-arrow-right" />

              <span className="text">Thiết kế website</span>
            </div>
          </div>
        </div>
      </div>
      {/* <FlatTitle /> */}
      <div className="container">
        <div className="line"></div>
      </div>
      <About />
      <Features />
      <Testimonials />
      <div className="container">
        <div className="line"></div>
      </div>
      <ShopGram />
      <Footer1 />
    </>
  );
}
