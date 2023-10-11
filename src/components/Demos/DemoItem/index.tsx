"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { motion } from "framer-motion";

interface IDemoItem {
  url: string;
  href: string;
}

export default function DemoItem({
  url = "/assets/images/product-item-1.1.png",
  href = "https://ciseco-reactjs.vercel.app/",
}: IDemoItem) {
  return (
    // <motion.div
    //   className="roxanatech-demo-item__container w-full group relative rounded-2xl h-[300px] transition-all duration-300 overflow-hidden"
    //   layout
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   transition={{ duration: 0.5 }}
    // >
    <div className="roxanatech-demo-item__container w-full group relative rounded-2xl h-[300px] transition-all duration-300 overflow-hidden">
      <div className="roxanatech-demo-item__thumb overflow-hidden rounded-2xl after:rounded-2xl group-hover:after:bg-gray-600/50 group-hover:after:rounded-2xl">
        <div className="roxanatech-demo-item__fancybox h-[400px] md:h-full">
          {/* <img
            src={url}
            alt="image"
            className="w-full h-full object-cover rounded-2xl"
          /> */}
          <Image
            alt={"Image Demo Item"}
            src={url}
            width={2000}
            height={415}
            className="w-full h-full object-cover"
          />
        </div>
        <Link
          className="roxanatech-demo-item__button group-hover:opacity-100 text-center"
          aria-label="product-item-1.1"
          href={href}
          target="_blank"
          rel="noopener"
        >
          Xem sản phẩm mẫu
        </Link>
      </div>
    </div>
    // </motion.div>
  );
}

{
  /* <iframe
        src="https://quomodothemes.website/shopo/demo/"
        name="preview-frame"
        frameborder="0"
        noresize="noresize"
        data-view="fullScreenPreview"
        allow="geolocation 'self'; autoplay 'self'"
        style={{ height: 588, width: "100%", backgroundColor: "white" }}
      ></iframe> */
}
