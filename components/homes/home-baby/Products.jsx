"use client";

import React, { useEffect, useState } from "react";
import { FaUserTie, FaUsers, FaCheckCircle, FaFileAlt } from "react-icons/fa";

const statsData = [
  {
    icon: <FaUserTie size={40} />,
    value: 30,
    label: "Chuyên viên tư vấn thiết kế và tư vấn chuyên nghiệp",
  },
  {
    icon: <FaUsers size={40} />,
    value: 599,
    label: "Khách hàng tin tưởng sử dụng dịch vụ",
  },
  {
    icon: <FaCheckCircle size={40} />,
    value: 3200,
    label: "Tư liệu thiết kế sáng tạo phục vụ khách hàng",
  },
  {
    icon: <FaFileAlt size={40} />,
    value: 200,
    label: "Lĩnh vực kinh doanh được phục vụ",
  },
  {
    icon: <FaFileAlt size={40} />,
    value: 10,
    label: "Giải pháp chiến lược phát triển thương hiệu",
  },
  {
    icon: <FaFileAlt size={40} />,
    value: 49,
    label: "Hạng mục thương hiệu đa dạng",
  },
];

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 giây
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}+</span>;
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(".stats-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div className="container py-5 stats-section">
      <div className="row text-center">
        <h4
          className="fw-bold mb-4"
          style={{
            background: "linear-gradient(to right, #000000, #808080)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Thành Tích Đạt Được Của Roxanatech
        </h4>

        {statsData.map((stat, index) => (
          <div key={index} className="col-lg-2 col-md-4 col-6 mb-4">
            <div className="card p-4 shadow-sm border-0 h-100">
              <div className="d-flex flex-column align-items-center justify-content-center h-100">
                <div className="mb-3 text-gradient">{stat.icon}</div>
                <h4 className="fw-bold mb-2 text-gradient">
                  {isVisible ? <Counter end={stat.value} /> : "0+"}
                </h4>
                <p className="text-muted mb-0">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .card {
          transition: all 0.3s ease;
          border-radius: 15px;
          background: linear-gradient(145deg, #ffffff, #f5f5f5);
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(44, 187, 0, 0.1) !important;
        }

        .text-gradient {
          background: linear-gradient(
            45deg,
            #2cbb00,
            #34d800,
            #3cf000,
            #44ff00
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 400% 400%;
          animation: gradient 3s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default StatsSection;
