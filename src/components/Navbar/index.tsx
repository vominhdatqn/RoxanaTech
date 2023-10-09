"use client";

import { Button, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import MegaMenuService from "../MegaMenu/Service";
import OrderTime, { OrderTimeRef } from "../Modal/OrderTime";
import DrawerMenu from "./DrawerMenu";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useScrollActiveShadow } from "@/hooks/useScrollActiveShadow";
import { cn } from "@/lib/cs";

// const StickyBanner = dynamic(() => import("@/components/StickyBanner"));
export default function Navbar() {
  const { isVisible } = useScrollActiveShadow();
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
              href="/ve-chung-toi"
              aria-label="Về chúng tôi"
              rel="noopener noreferrer"
            >
              Trang chủ
            </Link>
            <Link
              className="hoverable mr-5"
              href="/vay-cuoi"
              aria-label="Dịch vụ"
              rel="noopener noreferrer"
            >
              <span className="underline-hover uppercase">Demos</span>
              <div className="mega-menu">
                <MegaMenuService />
              </div>
            </Link>
            <Link
              className="underline-hover mr-5 uppercase"
              href="/vay-cuoi"
              aria-label="Váy cưới"
              rel="noopener noreferrer"
            >
              Dịch vụ
            </Link>
            <Link
              className="underline-hover mr-5 uppercase"
              href="/bai-viet"
              aria-label="Stories & Tips"
              rel="noopener noreferrer"
            >
              Bảng giá
            </Link>
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
            type="primary"
            shape="round"
            size="large"
          >
            Khám phá
          </Button>
        </div>

        <div className="flex md:hidden gap-3">
          <Button
            aria-label="Khám phá"
            type="primary"
            shape="round"
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
