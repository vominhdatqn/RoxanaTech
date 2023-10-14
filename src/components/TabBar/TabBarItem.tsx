"use client";

import React, { useRef } from "react";
import { BiSolidCalendarCheck } from "react-icons/bi";
import OrderTime, { OrderTimeRef } from "../Modal/OrderTime";
import { usePathname, useRouter } from "next/navigation";
import { isEmpty } from "lodash";

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
  const pathname = usePathname();

  const handleShowOrderTime = () => {
    orderTimeRef.current?.onShow();
  };

  // const handleGoToPage = () => {
  //   router.push(url);
  // };
  const handleScrollToView = () => {
    if (url !== "lien-he") {
      if (pathname === "/") {
        if (url === "trang-chu") {
          return window.scrollTo({ top: 0, behavior: "smooth" });
        }
        const element = document.getElementById(url);
        return window.scrollTo({
          top: element!.offsetTop - 100,
          behavior: "smooth",
        });

        // return element?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/");
        setTimeout(() => {
          const element = document.getElementById(url);
          return window.scrollTo({
            top: (element as any)?.offsetTop - 100,
            behavior: "smooth",
          });
          // return element?.scrollIntoView({ behavior: "smooth" });
        }, 1000);
      }
    } else {
      router.push("/lien-he");
    }
    // let element = document.getElementById(elementId);
    // if (pathname !== "/lien-he" && element) {
    //   // 👇 Will scroll smoothly to the top of the next section
    //   router.push("/");
    //   setTimeout(() => {
    //     const element = document.getElementById(elementId);
    //     return element?.scrollIntoView({ behavior: "smooth" });
    //   }, 1000);
    // }
    // // const element = document.getElementById(elementId);
    // return element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleScrollToView}
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
      <span className="text-sm text-gray-500 group-hover:text-primary">
        {name}
      </span>
    </button>
  );
}
