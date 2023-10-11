"use client";
import React from "react";
import { Button, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import MegaMenuService from "../MegaMenu/Service";
import OrderTime, { OrderTimeRef } from "../Modal/OrderTime";
import DrawerMenu from "./DrawerMenu";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { useScrollActiveShadow } from "@/hooks/useScrollActiveShadow";
import { cn } from "@/lib/cs";
import ColorButton from "../ColorButton";
import colors from "../../styles/colors";

// const StickyBanner = dynamic(() => import("@/components/StickyBanner"));
export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { isVisible } = useScrollActiveShadow();

  const handleScrollToView = (elementId: string) => () => {
    const element = document.getElementById(elementId);
    if (pathname === "/" && element) {
      // 👇 Will scroll smoothly to the top of the next section
      return element.scrollIntoView({ behavior: "smooth" });
    }
    router.push("/");
    setTimeout(() => {
      const element = document.getElementById(elementId);
      console.log("element", element);
      return element?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
    // navigate()
    //   .then()
    //   .finally(() => {
    //     () => router.push("/")
    //   });
  };
  return (
    <div className="sticky w-full top-0 z-50">
      {/* <StickyBanner /> */}
      <nav className={cn("navbar-container", isVisible && "shadow")}>
        <div className="flex flex-row items-center">
          <Link href="/" aria-label="Trang chủ" rel="noopener noreferrer">
            <Image
              src="/assets/roxanatech_logo.png"
              alt="RoxanaTech Logo"
              className="w-[120px] h-[65px] object-cover"
              width={120}
              height={80}
              priority
            />
          </Link>
          <div className="hidden md:flex items-center text-base justify-center ml-16">
            <Link
              className="underline-hover mr-5 uppercase"
              href="/"
              aria-label="Về chúng tôi"
              rel="noopener noreferrer"
            >
              Trang chủ
            </Link>
            {/* <Link
              className="hoverable mr-5"
              // href="/vay-cuoi"
              href="#"
              aria-label="Dịch vụ"
              rel="noopener noreferrer"
            > */}
            <span
              aria-label="Demos"
              onClick={handleScrollToView("roxanatech-demos")}
              className="underline-hover mr-5 uppercase cursor-pointer"
            >
              Demos
            </span>
            {/* <div className="mega-menu">
                <MegaMenuService />
              </div> */}
            {/* </Link> */}
            <span
              aria-label="Dịch vụ"
              onClick={handleScrollToView("roxanatech-services")}
              className="underline-hover mr-5 uppercase cursor-pointer"
            >
              Dịch vụ
            </span>
            <span
              aria-label="Bảng giá"
              onClick={handleScrollToView("roxanatech-pricing-plan")}
              className="underline-hover mr-5 uppercase cursor-pointer"
            >
              Bảng giá
            </span>
            {/* <Link
              className="underline-hover mr-5 uppercase"
              // href="/bai-viet"
              href="#"
              aria-label="Stories & Tips"
              rel="noopener noreferrer"
            >
              Bảng giá
            </Link> */}
            <Link
              className="underline-hover mr-5 uppercase"
              href="/lien-he"
              aria-label="Liên hệ"
              rel="noopener noreferrer"
            >
              Liên hệ
            </Link>
          </div>
        </div>

        <div className="hidden md:flex">
          <Button
            aria-label="Khám phá"
            type="text"
            shape="round"
            className="!bg-gradient-to-r from-primary to-green-700"
            size="large"
          >
            Khám phá
          </Button>
        </div>

        <div className="flex md:hidden gap-3">
          <Button
            aria-label="Khám phá"
            type="text"
            shape="round"
            className="!bg-gradient-to-r from-primary to-green-700"
            size="large"
          >
            Khám phá
          </Button>
          <DrawerMenu />
        </div>
      </nav>
    </div>
  );
}
