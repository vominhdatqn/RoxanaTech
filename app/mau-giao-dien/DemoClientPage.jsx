"use client";
import ProductSinglePrevNext from "@/components/common/ProductSinglePrevNext";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import { AuroraHero } from "@/components/homes/home/AuroraHero";
import About from "@/components/othersPages/thiet-ke-website/About";
import Features from "@/components/othersPages/thiet-ke-website/Features";
import FlatTitle from "@/components/othersPages/about/FlatTitle";
import Hero from "@/components/othersPages/about/Hero";
import Topbar from "@/components/homes/home-headphone/Topbar";
import ShopGram from "@/components/othersPages/about/ShopGram";
import Testimonials from "@/components/othersPages/about/Testimonials";
import Link from "next/link";
import React, { use, useEffect } from "react";
import { BreadCrumb } from "@/components/common/BreadCrumb";
import OrderDetails from "@/components/othersPages/dashboard/OrderDetails";
import { Timeline } from "@/components/common/Timeline";
import Collections from "@/components/homes/home-electric-bike/Collections";
import Products2 from "@/components/homes/home-paddle-boards/Products";
import ShopSidebarRight2 from "@/components/shop/ShopSidebarRight2";
import { useDataConnectQuery } from "@tanstack-query-firebase/react/data-connect";
import { listDemoRef } from "@/services/demoService";
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { useCollectionQuery, useDocumentQuery } from '@tanstack-query-firebase/react/firestore';

export default function DemoClientPage() {
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
        <BreadCrumb pageName="Mẫu giao diện" />
        <ShopSidebarRight2 />
        <Footer1 />
      </>
    );
  }