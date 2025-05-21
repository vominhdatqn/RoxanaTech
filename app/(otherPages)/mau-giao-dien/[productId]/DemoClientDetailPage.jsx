"use client";
import { BreadCrumb } from "@/components/common/BreadCrumb";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Topbar from "@/components/homes/home-headphone/Topbar";
import { AuroraHero } from "@/components/homes/home/AuroraHero";
import ShopSidebarRight2 from "@/components/shop/ShopSidebarRight2";
import { useGetDemoBrandDetail, useGetDemoDetail } from "@/hooks/demos";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

import DefaultShopDetails from "@/components/shopDetails/DefaultShopDetails";
import Details12 from "@/components/shopDetails/Details12";
import Products from "@/components/shopDetails/Products";
import RecentProducts from "@/components/shopDetails/RecentProducts";
import ShopDetailsTab from "@/components/shopDetails/ShopDetailsTab";
import Tabs5 from "@/components/shopDetails/Tabs5";
import React from "react";
import Link from "next/link";
import { allProducts } from "@/data/products";
import ProductSinglePrevNext from "@/components/common/ProductSinglePrevNext";
import { createClient } from "@/utlis/supabase/client";

export default function DemoClientDetailPage({ id }) {
  const product =
    allProducts.filter((elm) => elm.id == id)[0] || allProducts[0];
  const supabase = useSupabaseClient();
  const supabaseClient = createClient();

  const { data, isLoading } = useGetDemoDetail(supabase, id);
  const { data: dataBrand } = useGetDemoBrandDetail(supabaseClient, id, data?.demos?.brand);

  return (
    <>
      <Topbar />
      <Header2 />
      {/* <Hero /> */}
      <AuroraHero
        title="Mẫu Giao Diện"
        content="Kho mẫu giao diện đa dạng và phong phú, liên tục được làm mới theo xu hướng thiết kế hiện đại, mang đến cho bạn nhiều lựa chọn để xây dựng một website không chỉ đẹp mắt mà còn tối ưu về tính năng và trải nghiệm người dùng"
        subContent=""
        // subContent="Hãy để Web Roxanatech “Đổi mới công nghệ – Tối ưu hiệu quả”, giúp doanh nghiệp của bạn bứt phá và phát triển bền vững!"
      />
      <BreadCrumb pageName={`${data?.demos?.title}`} />
      {/* <ShopSidebarRight2 /> */}
      <Details12 product={data?.demos} />
      {/* <Tabs5 /> */}
      {/* <Products /> */}
      <RecentProducts products={dataBrand?.demos || []} />
      <Footer1 />
    </>
  );
}
