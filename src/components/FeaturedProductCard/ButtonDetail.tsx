"use client";
import React, { useRef } from "react";
import OrderTime, { OrderTimeRef } from "../Modal/OrderTime";

export default function ButtonDetail() {
  const orderTimeRef = useRef<OrderTimeRef>(null);
  const handleShowModal = () => {
    orderTimeRef.current?.onShow();
  };
  return (
    <>
      <OrderTime ref={orderTimeRef} />
      <div className="pt-5 text-base font-semibold leading-7">
        <p
          className="text-green-700 cursor-pointer transition-all duration-300 group-hover:text-white"
          onClick={handleShowModal}
        >
          Chi tiết &rarr;
        </p>
      </div>
    </>
  );
}
