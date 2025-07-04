"use client";
import Image from "next/image";
import { testimonials16, thumbImages } from "@/data/testimonials";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="flat-testimonial-v2 flat-spacing-24">
      <div className="container">
        <div className="wrapper-thumbs-testimonial-v2 flat-thumbs-testimonial">
          <div className="box-left">
            <Swiper
              dir="ltr"
              spaceBetween={40} // Swiper data-space-lg
              breakpoints={{
                768: { spaceBetween: 30 }, // Swiper data-space-md equivalent
              }}
              slidesPerView={1}
              className="swiper tf-sw-tes-2"
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Thumbs, Navigation, Pagination]}
              navigation={{
                prevEl: ".snbp305",
                nextEl: ".snbn305",
              }}
              pagination={{ clickable: true, el: ".spd305" }}
            >
              {testimonials16.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonial-item lg lg-2">
                    <h4 className="mb_40 uppercase">
                      Luôn nỗ lực vươn tầm, nâng cao chất lượng dịch vụ.
                    </h4>
                    <div className="icon">
                      <Image
                        src={testimonial.quoteSrc}
                        alt="Quote"
                        width={37}
                        height={25}
                      />
                    </div>
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="icon-start" />
                      ))}
                    </div>
                    <p className="text">{testimonial.text}</p>
                    <div className="author box-author">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="position-relative"
                      >
                        <motion.div
                          animate={{
                            y: [0, -20, 0],
                            scale: [0.8, 0.85, 0.8],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="position-relative"
                        >
                          <div className="box-img d-md-none rounded-0">
                            <Image
                              src={"/images/icon/gioi-thieu-4.jpg"}
                              alt="Author"
                              width={500}
                              height={390}
                            />
                          </div>
                        </motion.div>
                      </motion.div>
                      {/* <div className="content">
                        <div className="name">{testimonial.authorName}</div>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="d-md-flex d-none box-sw-navigation">
              <div className="nav-sw nav-next-slider nav-next-tes-2 snbp305">
                <span className="icon icon-arrow-left" />
              </div>
              <div className="nav-sw nav-prev-slider nav-prev-tes-2 snbn305">
                <span className="icon icon-arrow-right" />
              </div>
            </div>
            <div className="d-md-none sw-dots style-2 sw-pagination-tes-2 spd305" />
          </div>
          <div className="box-right">
            <Swiper
              dir="ltr"
              spaceBetween={30} // Corresponds to data-space
              slidesPerView={1}
              pagination={{ clickable: true, clickable: true }}
              className="swiper tf-thumb-tes"
              onSwiper={setThumbsSwiper}
              modules={[Thumbs]}
            >
              {thumbImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="position-relative"
                  >
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                        scale: [0.8, 0.85, 0.8],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="position-relative"
                    >
                      <div className="img-sw-thumb">
                        <Image
                          src={image.imgSrc}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          className="lazyload img-product"
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
