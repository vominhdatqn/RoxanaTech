"use client";
import React from "react";
import CustomCarousel from "../CustomCarousel";

export default function Testimonial() {
  return (
    <section
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
      className="bg-white place-items-center px-1 md:px-6"
    >
      <CustomCarousel dots={false}>
        <div className="px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="mx-auto max-w-screen-md">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 "
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-lg px-6 md:px-0 md:text-xl font-normal text-gray-900 ">
                "RoxanaTech làm web giá vừa túi tiền và chất lượng. Đội ngũ hỗ
                trợ nhiệt tình."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src="https://firebasestorage.googleapis.com/v0/b/mardoll-studio.appspot.com/o/trinh.jpeg?alt=media&token=3a2ab37d-4d16-4fe9-977e-cc17e60cbc9e&_gl=1*cpq8xx*_ga*NDA2OTQ5NTkyLjE2OTE4MTY3ODc.*_ga_CW55HF8NVT*MTY5NzAzNjA0My42NS4xLjE2OTcwMzYwNzEuMzIuMC4w"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 ">
                <div className="pr-3 font-medium text-gray-900 ">
                  Trình Huỳnh
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 "
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-xl px-6 md:px-0 md:text-2xl font-medium text-gray-900 ">
                "Thích bé sale của công ty nói chuyện vui vẻ và hỗ trợ nhiệt
                tình. Web lên đẹp và load nhanh."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src="https://firebasestorage.googleapis.com/v0/b/mardoll-studio.appspot.com/o/nga.jpeg?alt=media&token=2ecf128e-1971-45aa-b631-ac06845e2795&_gl=1*zvvu9j*_ga*MTY5MTk5MTQ5NS4xNjk3MDg2MDIx*_ga_CW55HF8NVT*MTY5NzA5MjgxMS4yLjAuMTY5NzA5MjgxMS42MC4wLjA"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 ">
                <div className="pr-3 font-medium text-gray-900 ">Tính</div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 "
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-xl px-6 md:px-0 md:text-2xl font-medium text-gray-900 ">
                "App của RoxanaTech xài mượt nha. App đơn giản nhưng giao diện
                đẹp nè. Hỗ trợ cũng nhiệt tình. Uy tín."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src="https://firebasestorage.googleapis.com/v0/b/mardoll-studio.appspot.com/o/truong.jpeg?alt=media&token=62a0e832-31c1-40e4-b917-7018b22f0296&_gl=1*few0df*_ga*NDA2OTQ5NTkyLjE2OTE4MTY3ODc.*_ga_CW55HF8NVT*MTY5NzAzNjA0My42NS4xLjE2OTcwMzYxMDkuNjAuMC4w"
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 ">
                <div className="pr-3 font-medium text-gray-900 ">
                  Quang Trường
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </CustomCarousel>
    </section>
  );
}
