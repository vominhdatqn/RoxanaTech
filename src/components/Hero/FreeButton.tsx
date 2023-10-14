"use client";
import React, { useRef } from "react";
import { Button } from "antd";
import OrderTime, { OrderTimeRef } from "../Modal/OrderTime";

export default function FreeButton() {
  // const orderTimeRef = useRef<OrderTimeRef>(null);
  // const handleShowOrder = () => {
  //   orderTimeRef.current?.onShow();
  // };
  const handleScrollToDemos = () => {
    const element = document.getElementById("roxanatech-demos");
    window.scroll({
      top: (element as any)?.offsetTop - 100,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* <OrderTime ref={orderTimeRef} /> */}
      <Button
        onClick={handleScrollToDemos}
        className="!h-[60px] mt-5 md:mt-0 md:before:content-[''] md:before:w-[162px] md:before:h-[65px] md:before:bg-contain md:before:absolute md:before:-translate-x-2/4 md:before:top-[40px] md:before:z-[2] md:before:left-[80px] md:before:bg-[url(/assets/icons/km-tag.png)]"
        type="primary"
        size="large"
        shape="round"
      >
        Dùng thử miễn phí
      </Button>
    </>
  );
}
