"use client";
import React, { useState } from "react";
import DemoItem from "./DemoItem";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "antd";
import { cn } from "../../lib/cs";

const itemsAll = [
  {
    id: 1,
    url: "/assets/images/product-item-1.1.png",
    href: "https://ciseco-reactjs.vercel.app/",
  },
  {
    id: 2,
    url: "/assets/images/product-demo-2.png",
    href: "https://ciseco-reactjs.vercel.app/",
  },
  {
    id: 3,
    url: "/assets/images/product-demo-3.png",
    href: "https://voxo-next-reactpixelstrap.vercel.app/",
  },
  {
    id: 4,
    url: "/assets/images/product-demo-7.png",
    href: "https://xtreme-react-dark.netlify.app/",
  },
  {
    id: 5,
    url: "/assets/images/product-demo-5.png",
    href: "https://mardoll-studio-egs9.vercel.app/",
  },
  {
    id: 6,
    url: "/assets/images/product-demo-6.png",
    href: "https://mardoll-admin.vercel.app/auth/login",
  },
  {
    id: 7,
    url: "/assets/images/product-demo-mobile-1.png",
    href: "https://mardoll-admin.vercel.app/auth/login",
  },
  {
    id: 8,
    url: "/assets/images/product-demo-mobile-2.png",
    href: "https://mardoll-admin.vercel.app/auth/login",
  },
];

const itemsWeb = [
  {
    id: 1,
    url: "/assets/images/product-item-1.1.png",
    href: "https://ciseco-reactjs.vercel.app/",
  },
  {
    id: 2,
    url: "/assets/images/product-demo-2.png",
    href: "https://ciseco-reactjs.vercel.app/",
  },
  {
    id: 3,
    url: "/assets/images/product-demo-3.png",
    href: "https://voxo-next-reactpixelstrap.vercel.app/",
  },
  {
    id: 4,
    url: "/assets/images/product-demo-7.png",
    href: "https://xtreme-react-dark.netlify.app/",
  },
  {
    id: 5,
    url: "/assets/images/product-demo-5.png",
    href: "https://mardoll-studio-egs9.vercel.app/",
  },
  {
    id: 6,
    url: "/assets/images/product-demo-6.png",
    href: "https://mardoll-admin.vercel.app/auth/login",
  },
];

const itemMobile = [
  {
    id: 1,
    url: "/assets/images/product-demo-mobile-1.png",
    href: "",
  },
  {
    id: 2,
    url: "/assets/images/product-demo-mobile-2.png",
    href: "",
  },
];

export default function Demos() {
  const [filter, setFilter] = useState(itemsAll);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      id="roxanatech-demos"
      className="roxanatech-demos-section px-6 py-[90px]"
    >
      <div className="roxanatech-demos-tabs flex flex-col md:flex-row md:mb-10 md:items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Sản Phẩm Web / App Mẫu
        </h2>
        <div className="roxanatech-demos-tab__filter flex items-center py-10 md:py-0 gap-6">
          <Button
            className={cn(
              activeIndex === 0 && "!bg-gradient-to-r from-primary to-green-700"
            )}
            type="text"
            onClick={() => {
              setActiveIndex(0);
              setFilter(itemsAll);
            }}
          >
            Tất cả
          </Button>

          <Button
            className={cn(
              activeIndex === 1 && "!bg-gradient-to-r from-primary to-green-700"
            )}
            type="text"
            onClick={() => {
              setActiveIndex(1);
              setFilter(itemsWeb);
            }}
          >
            Website
          </Button>

          <Button
            className={cn(
              activeIndex === 2 && "!bg-gradient-to-r from-primary to-green-700"
            )}
            type="text"
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
