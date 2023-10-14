"use client";
import React, { useState } from "react";
import DemoItem, { IDemoItem } from "./DemoItem";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "antd";
import { cn } from "../../lib/cs";

const itemsAll: IDemoItem[] = [
  {
    id: 1,
    url: "/assets/images/product-item-1.1.png",
    href: "https://ciseco-reactjs.vercel.app/",
    name: "/demos/san-pham-demo-website-ciseco",
  },
  {
    id: 2,
    url: "/assets/images/product-demo-2.png",
    href: "https://andshop-reactjs.netlify.app/",
    name: "/demos/san-pham-demo-website-andshop",
  },
  {
    id: 3,
    url: "/assets/images/product-demo-3.png",
    href: "https://voxo-next-reactpixelstrap.vercel.app/",
    name: "/demos/san-pham-demo-website-voxo",
  },
  {
    id: 4,
    url: "/assets/images/product-demo-7.png",
    href: "https://xtreme-react-dark.netlify.app/",
    name: "/demos/san-pham-demo-website-xtreme",
  },
  {
    id: 5,
    url: "/assets/images/product-demo-5.png",
    href: "https://roxana-tech-studio.vercel.app/",
    name: "/demos/san-pham-demo-website-roxana-tech-studio",
  },
  {
    id: 6,
    url: "/assets/images/product-demo-6.png",
    href: "https://roxana-tech-studio-admin.vercel.app/",
    name: "/demos/san-pham-demo-website-roxana-tech-studio-admin",
  },
  {
    id: 7,
    url: "/assets/images/product-demo-mobile-1.png",
    href: "https://mardoll-admin.vercel.app/auth/login",
    name: "contact-form",
  },
  {
    id: 8,
    url: "/assets/images/product-demo-mobile-2.png",
    href: "https://mardoll-admin.vercel.app/auth/login",
    name: "contact-form",
  },
];

const itemsWeb: IDemoItem[] = [
  {
    id: 1,
    url: "/assets/images/product-item-1.1.png",
    href: "https://ciseco-reactjs.vercel.app/",
    name: "/demos/san-pham-demo-website-ciseco",
  },
  {
    id: 2,
    url: "/assets/images/product-demo-2.png",
    href: "https://andshop-reactjs.netlify.app/",
    name: "/demos/san-pham-demo-website-andshop",
  },
  {
    id: 3,
    url: "/assets/images/product-demo-3.png",
    href: "https://voxo-next-reactpixelstrap.vercel.app/",
    name: "/demos/san-pham-demo-website-voxo",
  },
  {
    id: 4,
    url: "/assets/images/product-demo-7.png",
    href: "https://xtreme-react-dark.netlify.app/",
    name: "/demos/san-pham-demo-website-xtreme",
  },
  {
    id: 5,
    url: "/assets/images/product-demo-5.png",
    href: "https://roxana-tech-studio.vercel.app/",
    name: "/demos/san-pham-demo-website-roxana-tech-studio",
  },
  {
    id: 6,
    url: "/assets/images/product-demo-6.png",
    href: "https://roxana-tech-studio-admin.vercel.app/",
    name: "/demos/san-pham-demo-website-roxana-tech-studio-admin",
  },
];

const itemMobile: IDemoItem[] = [
  {
    id: 1,
    url: "/assets/images/product-demo-mobile-1.png",
    href: "contact-form",
    name: "contact-form",
  },
  {
    id: 2,
    url: "/assets/images/product-demo-mobile-2.png",
    href: "contact-form",
    name: "contact-form",
  },
];

export default function Demos() {
  const [filter, setFilter] = useState<IDemoItem[]>(itemsAll);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      id="roxanatech-demos"
      className="roxanatech-demos-section px-6 py-10 md:py-[90px]"
    >
      <div className="roxanatech-demos-tabs flex flex-col md:flex-row md:mb-10 md:items-center justify-between">
        <h2
          data-aos="fade-right"
          className="text-2xl md:text-3xl font-semibold"
        >
          Sản Phẩm Web / App Mẫu
        </h2>
        <div
          data-aos="fade-left"
          className="roxanatech-demos-tab__filter flex items-center py-10 md:py-0 gap-6"
        >
          <Button
            // className={cn(
            //   activeIndex === 0 && "!bg-gradient-to-r from-primary to-green-700"
            // )}
            type={activeIndex === 0 ? "primary" : "text"}
            onClick={() => {
              setActiveIndex(0);
              setFilter(itemsAll);
            }}
          >
            Tất cả
          </Button>

          <Button
            type={activeIndex === 1 ? "primary" : "text"}
            onClick={() => {
              setActiveIndex(1);
              setFilter(itemsWeb);
            }}
          >
            Website
          </Button>

          <Button
            type={activeIndex === 2 ? "primary" : "text"}
            onClick={() => {
              setActiveIndex(2);
              setFilter(itemMobile);
            }}
          >
            App
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        <AnimatePresence>
          {filter.map((demo, index) => (
            <DemoItem key={`demo-item-${index}`} {...demo} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
