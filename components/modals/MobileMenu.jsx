"use client";
import React from "react";
import Link from "next/link";
import LanguageSelect from "../common/LanguageSelect";
import CurrencySelect from "../common/CurrencySelect";
import { navItems } from "@/data/menu";
import { usePathname } from "next/navigation";
export default function MobileMenu() {
  const pathname = usePathname();
  const isMenuActive = (menuItem) => {
    let active = false;
    if (menuItem.href?.includes("/")) {
      if (menuItem.href?.split("/")[1] == pathname.split("/")[1]) {
        active = true;
      }
    }
    if (menuItem.links) {
      menuItem.links?.forEach((elm2) => {
        if (elm2.href?.includes("/")) {
          if (elm2.href?.split("/")[1] == pathname.split("/")[1]) {
            active = true;
          }
        }
        if (elm2.links) {
          elm2.links.forEach((elm3) => {
            if (elm3.href.split("/")[1] == pathname.split("/")[1]) {
              active = true;
            }
          });
        }
      });
    }

    return active;
  };
  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
      <span
        className="icon-close icon-close-popup"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
      <div className="mb-canvas-content">
        <div className="mb-body">
          <ul className="nav-ul-mb" id="wrapper-menu-navigation">
            {navItems.map((item, i) => (
              <li key={i} className="nav-mb-item">
                <a
                  href={`${item.href}`}
                  className={`collapsed mb-menu-link current ${
                    isMenuActive(item) ? "activeMenu" : ""
                  }`}
                  aria-expanded="true"
                  aria-controls={item.id}
                >
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
            <li className="nav-mb-item">
                Liên Hệ
            </li>
          </ul>
          <div className="mb-other-content">
            <ul className="mb-info">
              <li>
                Địa chỉ: 87 Dương Khuê, Tân Hiệp, <br />
                Tân Phú, Tp.Hồ Chí Minh
              </li>
              <li>
                Email: <b>roxanatechcompany@gmail.com</b>
              </li>
              <li>
                Hotline:{" "}
                <a
                  rel="nofollow noreferrer"
                  className="text_primary"
                  href="tel:0329181288"
                  aria-label="0329181288"
                >
                  0329 181 288
                </a>{" "}
                -{" "}
                <a
                  rel="nofollow noreferrer"
                  className="text_primary"
                  href="tel:0329181288"
                  aria-label="0921107445"
                >
                  0921 107 445
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="mb-bottom">
          <Link href={`/login`} className="site-nav-icon">
            <i className="icon icon-account" />
            Login
          </Link>
          <div className="bottom-bar-language">
            <div className="tf-currencies">
              <CurrencySelect />
            </div>
            <div className="tf-languages">
              <LanguageSelect
                parentClassName={
                  "image-select center style-default type-languages"
                }
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
