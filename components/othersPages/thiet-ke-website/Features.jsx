"use client";

import { slidesData3 } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Features() {
  return (
    <section className="flat-spacing-18 feature-electric-bike">
      <Image
        className="lazyload"
        src="/images/slider/bg-electric-bike-1.jpg"
        data-=""
        alt="image-collection"
        width={1920}
        height={972}
      />
      <div className="container">
        <div className="flat-title wow fadeInUp" data-wow-delay="0s">
          <span className="title fw-6 text-center">
            Lý do doanh nghiệp nên sở hữu một website chuyên nghiệp
          </span>
        </div>
        <div className="row text-center">
          {slidesData3.map((slide, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-6 mb-4">
              <div className="banner-gr-item text-center type-2 radius-20">
                <div className="img-wrapper">
                  <img
                    className="lazyload radius-20"
                    data-src={slide.imgSrc}
                    alt={slide.alt}
                    src={slide.imgSrc}
                  />
                </div>
                <div className="content">
                  <p className="sub-title fw-7 mb_10 font-sora">
                    {slide.subTitle}
                  </p>
                  <p className="desc mb_10">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="wrap-carousel">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              1024: { slidesPerView: 4 },
              568: { slidesPerView: 2 },
              0: { slidesPerView: 2 },
            }}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".spdcolletion",
            }}
            dir="ltr"
            className="swiper tf-sw-testimonial"
          >
            {slidesData3.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="banner-gr-item text-center type-2 radius-20">
                  <Link href={`/shop-default`} className="img-style">
                    <Image
                      className="lazyload radius-20"
                      data-src={slide.imgSrc}
                      alt={slide.alt}
                      src={slide.imgSrc}
                      width={160}
                      height={160}
                    />
                  </Link>
                  <div className="content">
                    <p className="sub-title fw-7 mb_10 font-sora">
                      {slide.subTitle}
                    </p>
                    <div className="title mb_10 font-sora">
                      <Link href={`/shop-default`} className="link fw-6">
                        {slide.title}
                      </Link>
                    </div>
                    <p className="desc mb_10">{slide.description}</p>
                    <Link
                      href={`/shop-collection-list`}
                      className="tf-btn style-2 btn-fill radius-60 animate-hover-btn bg_primary border-0"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-dots style-2 sw-pagination-testimonial justify-content-center spdcolletion" />
        </div> */}
      </div>
      <style jsx>{`
        .banner-gr-item {
          position: relative;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          overflow: hidden;
          border-top: 1px solid rgba(255, 49, 49, 0.5);
          border-right: 1px solid rgba(0, 255, 255, 0.5);
          border-bottom: 1px solid rgba(57, 255, 20, 0.5);
          border-left: 1px solid rgba(255, 255, 113, 0.5);
        }

        .img-wrapper {
          overflow: hidden;
          border-radius: 0.25rem;
         
        }

        .img-wrapper img {
          transition: transform 0.5s ease;
          height: 160px;
          width: 160px;
          object-fit: cover;
        }

        .banner-gr-item:hover .img-wrapper img {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
