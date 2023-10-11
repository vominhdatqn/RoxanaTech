"use client";

import React, { useRef } from "react";
import { BiSolidCalendarCheck } from "react-icons/bi";
import OrderTime, { OrderTimeRef } from "../Modal/OrderTime";
import { useRouter } from "next/navigation";

interface TabBarItemProps {
  name: string;
  icon: React.ReactNode | string;
  tooltip: boolean;
  url: string;
}

export default function TabBarItem({
  name,
  icon,
  tooltip,
  url,
}: TabBarItemProps) {
  const orderTimeRef = useRef<OrderTimeRef>(null);
  const router = useRouter();

  const handleShowOrderTime = () => {
    orderTimeRef.current?.onShow();
  };

  const handleGoToPage = () => {
    router.push(url);
  };
  return (
    <button
      type="button"
      onClick={handleGoToPage}
      className="relative inline-flex flex-col items-center justify-center font-medium px-3 hover:bg-gray-50 group"
    >
      {/* {tooltip && (
        <>
          <OrderTime ref={orderTimeRef} />
          <div
            role="tooltip"
            onClick={handleShowOrderTime}
            className="inline-flex gap-2 items-center absolute z-50 bottom-[72px] px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-1 tooltip dark:bg-gray-700"
          >
            <BiSolidCalendarCheck />
            <span onClick={handleShowOrderTime}>Đặt hẹn</span>
          </div>
        </>
      )} */}
      {icon}
      <span className="text-sm text-gray-500 group-hover:text-primary capitalize">
        {name}
      </span>
    </button>
  );
}
