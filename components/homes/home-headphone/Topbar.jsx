"use client";
import React from "react";
import Link from "next/link";
import LanguageSelect from "@/components/common/LanguageSelect";
import CurrencySelect from "@/components/common/CurrencySelect";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Topbar() {
  return (
    <div className="tf-top-bar bg_dark line">
      <div className="container-full px_15 lg-px_40">
        <div className="tf-top-bar_wrap grid-3 gap-30 align-items-center">
          <div className="tf-top-bar_left">
            <div className="d-flex gap-30 text_white fw-5 text-decoration-underline">
              <span className="cursor-pointer">
                <BsTelephoneFill className="me-2 animate-ring" /> Kỹ thuật: 0329
                181 288
              </span>
              <span className="cursor-pointer">
                <BsTelephoneFill className="me-2 animate-ring" /> CSKH: 0921 107
                445
              </span>
              {/* <span className="cursor-pointer"><MdEmail className="me-2" />roxanatech@gmail.com</span> */}
            </div>
          </div>
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
                <p className="top-bar-text fw-5 text_white">
                  Giá ưu đãi{" "}
                  <Link
                    href={`/shop-default`}
                    title="all collection"
                    className="tf-btn btn-line"
                  >
                    {" "}
                    thiết kế ngay
                    <i className="icon icon-arrow1-top-left" />
                  </Link>
                </p>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <span className="top-bar-text fw-5 text_white">
                  Khuyến mãi giảm giá lên đến{" "}
                  <span className="tf-btn btn-line">30%</span>
                </span>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <span className="top-bar-text fw-5 text_white">
                  Tư vấn về{" "}
                  <span className="tf-btn btn-line">thiết kế website</span>
                </span>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="top-bar-language tf-cur justify-content-end">
            {/* <div className="tf-currencies">
              <CurrencySelect light topStart />
            </div> */}
            <div className="tf-languages">
              {/* <LanguageSelect
                parentClassName={
                  "image-select center style-default type-languages color-white"
                }
                topStart
              /> */}
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes ring {
          0% {
            transform: rotate(0deg) scale(1);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
          }
          10% {
            transform: rotate(-25deg) scale(1.1);
          }
          20% {
            transform: rotate(25deg) scale(1.2);
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
          }
          30% {
            transform: rotate(-20deg) scale(1.1);
          }
          40% {
            transform: rotate(20deg) scale(1);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
          }
          50% {
            transform: rotate(-10deg) scale(1.1);
          }
          60% {
            transform: rotate(10deg) scale(1.2);
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
          }
          70% {
            transform: rotate(-5deg) scale(1.1);
          }
          80% {
            transform: rotate(5deg) scale(1);
          }
          100% {
            transform: rotate(0deg) scale(1);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          }
        }

        .animate-ring {
          animation: ring 2s infinite;
          display: inline-block;
          border-radius: 50%;
          padding: 2px;
        }
      `}</style>
    </div>
  );
}
