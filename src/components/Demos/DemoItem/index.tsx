"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import OrderTime, { OrderTimeRef } from "../../Modal/OrderTime";

export interface IDemoItem {
  id: number;
  url: string;
  href: string;
  name: string;
}

export default function DemoItem({
  url = "/assets/images/product-item-1.1.png",
  href = "https://ciseco-reactjs.vercel.app/",
  name = "/demos/product-demo-1",
}: IDemoItem) {
  const orderTimeRef = useRef<OrderTimeRef>(null);
  const handleShowOrderTime = () => {
    orderTimeRef.current?.onShow();
  };
  return (
    <>
      <motion.div
        className="roxanatech-demo-item__container w-full group relative rounded-2xl h-[300px] transition-all duration-300 overflow-hidden"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* <div className="roxanatech-demo-item__container w-full group relative rounded-2xl h-[300px] transition-all duration-300 overflow-hidden"> */}
        <div
          data-aos="zoom-in"
          className="roxanatech-demo-item__thumb overflow-hidden rounded-2xl after:rounded-2xl group-hover:after:bg-gray-600/50 group-hover:after:rounded-2xl"
        >
          <div className="roxanatech-demo-item__fancybox relative h-[300px]">
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

            {name !== "contact-form" ? (
              <Link
                className="roxanatech-demo-item__button group-hover:opacity-100 text-center"
                aria-label={name}
                href={name}
                rel="noopener"
              >
                Chi tiết
              </Link>
            ) : (
              <span
                onClick={handleShowOrderTime}
                className="roxanatech-demo-item__button group-hover:opacity-100 text-center"
                aria-label={name}
              >
                Chi tiết
              </span>
            )}
            {/* <Link
              className="roxanatech-demo-item__button group-hover:opacity-100 text-center"
              aria-label="product-item-1.1"
              href={name}
              rel="noopener"
              onClick={handleShowOrderTime}
            >
              Chi tiết
            </Link> */}
          </div>
        </div>
        {/* </div> */}
      </motion.div>
      <OrderTime ref={orderTimeRef} />
    </>
  );
}
