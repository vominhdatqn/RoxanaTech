"use client";
import React from "react";
import Link from "next/link";
import LanguageSelect from "../common/LanguageSelect";
import CurrencySelect from "../common/CurrencySelect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
export default function Topbar1() {
  return (
    <div className="tf-top-bar bg_white line">
      <div className="px_15 lg-px_40">
        <div className="tf-top-bar_wrap grid-3 gap-30 align-items-center">
          <ul className="tf-top-bar_item tf-social-icon d-flex gap-10">
            <li>
              <a
                href="#"
                className="box-icon w_28 round social-facebook bg_line"
              >
                <i className="icon fs-12 icon-fb" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="box-icon w_28 round social-instagram bg_line"
              >
                <i className="icon fs-12 icon-instagram" />
              </a>
            </li>
            <li>
              <a href="#" className="box-icon w_28 round social-tiktok bg_line">
                <i className="icon fs-12 icon-tiktok" />
              </a>
            </li>
          </ul>
          <div className="text-center overflow-hidden">
            <Swiper
              dir="ltr"
              className="swiper tf-sw-top_bar"
              slidesPerView={1}
              modules={[Autoplay]}
              speed={1000}
              autoplay={{
                delay: 2000,
              }}
              loop
            >
              <SwiperSlide className="swiper-slide">
                <p className="top-bar-text fw-5">
                  Giá ưu đãi{" "}
                  {/* Spring Fashion Sale{" "} */}
                  <Link
                    href={`/shop-default`}
                    title="all collection"
                    className="tf-btn btn-line"
                  >
                    {/* Shop now */}
                    Mua ngay
                    <i className="icon icon-arrow1-top-left" />
                  </Link>
                </p>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <span className="top-bar-text fw-5">
                  {/* Summer sale discount off 70% */}
                  Khuyến mãi giảm giá lên đến <span className="tf-btn btn-line">30%</span>
                </span>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <span className="top-bar-text fw-5">
                  {/* Time to refresh your wardrobe. */}
                  Tư vấn về <span className="tf-btn btn-line">thiết kế website</span>
                </span>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="top-bar-language tf-cur justify-content-end">
            {/* <div className="tf-currencies">
              <CurrencySelect topStart />
            </div> */}
            <div className="tf-languages">
              <LanguageSelect
                parentClassName={
                  "image-select center style-default type-languages"
                }
                topStart
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
