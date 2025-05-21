"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Link from "next/link";

const COLORS_TOP = ["#2cbb00", "#1E67C6", "#CE84CF", "#DD335C"];

const services = [
  {
    title: "Thiết Kế Website",
    description:
      "Lựa chọn thông minh mang doanh nghiệp của bạn đến mọi người. Tối ưu hoá chi phí đầu tư, mang lại lợi nhuận cao.",
    img: "/images/icon/web-design-icon.png",
  },
  {
    title: "Đăng Ký Tên Miền",
    description:
      "Đăng ký tên miền riêng cho bạn để tăng nhận diện thương hiệu, cạnh tranh với các đối thủ cùng ngành nghề.",
    img: "/images/icon/domain-icon.png",
  },
  {
    title: "Hosting Lưu Trữ Website",
    description:
      "Hosting ổn định, tốc độ cao, bảo mật, an toàn tuyệt đối. Dữ liệu luôn được tự động hoá sao lưu. Tiết kiệm chi phí tối ưu.",
    img: "/images/icon/hosting-icon.png",
  },
  {
    title: "Chăm Sóc Website",
    description:
      "Đội ngũ chuyên gia của chúng tôi sẽ tư vẫn và đồng hành với các mong muốn của các bạn để đưa ra giải pháp chăm sóc tối ưu.",
    img: "/images/icon/website-care-icon.png",
  },
  {
    title: "Dịch Vụ Email Server",
    description:
      "Dịch vụ Email Server được tích hợp với các tên miền của bạn, đảm bảo tính bảo mật và tính linh hoạt cao.",
    img: "/images/icon/email-server-icon.png",
  },
  {
    title: "Dịch Vụ Thiết Kế Branding",
    description:
      "Thiết kế Branding tạo một bộ phận nhận diện thương hiệu: logo, thương hiệu màu sắc và kiểu chữ đều mang phong cách riêng biệt.",
    img: "/images/icon/brand-icon.png",
  },
  // {
  //   title: "Dịch Vụ Quảng Cáo Facebook",
  //   description:
  //     "Bùng nổ doanh số với quảng cáo Facebook, đưa sản phẩm doanh nghiệp của bạn đến hàng triệu người dùng.",
  //   img: "/images/icon/facebook-ads-icon.png",
  // },
  // {
  //   title: "Dịch Vụ Quảng Cáo Google",
  //   description:
  //     "Dịch vụ Quảng cáo Google ADS mang doanh nghiệp bạn đến hàng triệu khách hàng thông qua các hình ảnh quảng cáo trên Google.",
  //   img: "/images/icon/google-ads-icon.png",
  // },
  // {
  //   title: "Dịch Vụ Zalo Doanh Nghiệp",
  //   description:
  //     "Thoải mái nhắn tin, tư vấn cho khách hàng, tiết kiệm được nhiều chi phí marketing. Khả năng tương tác bán hàng cao.",
  //   img: "/images/icon/zalo-business-icon.png",
  // },
];

const AnimatedButton = ({ border }) => {
  return (
    <div className="btn-animated">
      <motion.button
        style={{
          border,
          borderRadius: "50px",
          overflow: "hidden"
        }}
        whileHover={{
          scale: 1.015,
          // color: "#fff"
        }}
        whileTap={{
          scale: 0.985,
        }}
        className="d-flex align-items-center gap-2 bg-white bg-opacity-10 px-4 py-2 text-black transition mx-auto mx-lg-0"
      >
        <div className="btn-border-animation"></div>
        Liên Hệ Tư Vấn
      </motion.button>
      <style jsx>{`
        .btn-animated {
          position: relative;
        }

        .btn-animated button {
          position: relative;
          border: none;
          background: transparent;
        }

        .btn-animated button:hover {
          color: white;
        }

        .btn-border-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to right,
            #25aae1,
            #40e495,
            #30dd8a,
            #2bb673,
            #25aae1
          );
          border-radius: 50px;
          z-index: -1;
          animation: rotateGradient 3s linear infinite;
        }

        @keyframes rotateGradient {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

const ServiceCard = ({ service }) => {
  const color = useMotionValue(COLORS_TOP[0]);
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return (
    <div className="col-md-4 d-flex flex-column align-items-center text-center p-3">
      <div className="card border-0 service-card">
        <span className="top"></span>
        <span className="right"></span>
        <span className="bottom"></span>
        <span className="left"></span>
        <div className="img-wrapper">
          <img src={service.img} alt={service.title} className="card-img-top rounded" />
        </div>
        <div className="card-body">
          <h6 className="card-title text-black">{service.title}</h6>
          <p className="card-text text-black">{service.description}</p>
          <div className="d-flex justify-content-between mt-3">
            <AnimatedButton border={border} />
            <Link
              href={`/shop-collection-sub`}
              className="tf-btn btn-primary animate-hover-btn radius-60 bg_red-1"
            >
              <span>Xem Chi Tiết</span>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .service-card {
          position: relative;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
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
          height: 261px;
        }

        .img-wrapper img {
          transition: transform 0.5s ease;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .service-card:hover .img-wrapper img {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="pt-5">
      <div className="container text-center">
        {/* <h4 className="fw-bold mb-4" style={{ background: "linear-gradient(to right, #000000, #808080)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Dịch vụ của Roxanatech</h4> */}
        <div className="flat-title">
          <span
            className="title wow fadeInUp fw-6 text_blue-1"
            data-wow-delay="0s"
          >
            Dịch vụ của{" "}
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
          </span>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
