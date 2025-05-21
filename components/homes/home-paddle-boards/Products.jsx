"use client";
import ProductCard15 from "@/components/shopCards/ProductCard15";
import { products21, products211, products212 } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Pagination } from "swiper/modules";

export default function Products(props) {
  const { subTitle = "Hãy tham khảo chi phí thiết kế website/app và đăng ký thông tin hoặc liên hệ trực tiếp để được tư vấn giải pháp phù hợp với nhu cầu của bạn." } = props || {};
  return (
    <section className="flat-price flat-spacing-5 pb_0">
      <div className="container">
        <div className="flat-title text-center">
          <span
            className="title wow fadeInUp fw-6 text_blue-1"
            data-wow-delay="0s"
          >
            Bảng giá dịch vụ tại{" "}
            <span
              style={{
                background: "linear-gradient(to right, #93f859, #2cbb00)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                display: "inline-block",
              }}
            >
              RoxanaTech
            </span>
            {" "}
            2025
          </span>
          <p
            className="sub-title text_black-2 wow fadeInUp"
            data-wow-delay="0s"
          >
            {subTitle}
          </p>
        </div>
        <div className="wrap-carousel wrap-mobile">
          <Swiper
            dir="ltr"
            className="swiper tf-sw-mobile-1"
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1180: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd225" }}
          >
            {products21.map((elm, i) => (
              <SwiperSlide key={i}>
                <ProductCard15 product={elm} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-mb-1 justify-content-center spd225" />
        </div>
        <div className="wrap-carousel wrap-mobile mt-5">
          <Swiper
            dir="ltr"
            className="swiper tf-sw-mobile-1"
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1180: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd225" }}
          >
            {products211.map((elm, i) => (
              <SwiperSlide key={i}>
                <ProductCard15 product={elm} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-mb-1 justify-content-center spd225" />
        </div>
        <div className="wrap-carousel wrap-mobile mt-5">
          <Swiper
            dir="ltr"
            className="swiper tf-sw-mobile-1"
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1180: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            pagination={{ clickable: true, el: ".spd225" }}
          >
            {products212.map((elm, i) => (
              <SwiperSlide key={i}>
                <ProductCard15 product={elm} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-mb-1 justify-content-center spd225" />
        </div>
      </div>
    </section>
  );
}
