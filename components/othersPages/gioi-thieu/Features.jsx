// "use client";

// import { iconBoxes4 } from "@/data/features";
// import { Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// export default function Features() {
//   return (
//     <section>
//       <div className="container">
//         <div className="bg_grey-2 radius-10 flat-wrap-iconbox">
//           <div className="flat-title lg">
//             <span className="title fw-5 text-center">
//               Khởi nghiệp với đam mê rực cháy và khát vọng vươn xa.
//             </span>
//           </div>
//           <div className="flat-iconbox-v3 lg">
//             <div className="wrap-carousel wrap-mobile">
//               <Swiper
//                 dir="ltr"
//                 spaceBetween={15}
//                 slidesPerView={3}
//                 breakpoints={{
//                   768: { slidesPerView: 3, spaceBetween: 10 },
//                   480: { slidesPerView: 3, spaceBetween: 10 },
//                   0: { slidesPerView: 3, spaceBetween: 10 },
//                 }}
//                 className="swiper tf-sw-mobile"
//                 modules={[Pagination]}
//                 pagination={{ clickable: true, el: ".spd303" }}
//               >
//                 {iconBoxes4.map((box, index) => (
//                   <SwiperSlide key={index}>
//                     <div className="tf-icon-box text-center">
//                       <div className="icon">
//                         <i className={box.iconClass} />
//                       </div>
//                       <div className="content">
//                         <div className="title">{box.title}</div>
//                         <p className="text_black-2">{box.description}</p>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 ))}
//                 <div className="sw-dots style-2 sw-pagination-mb justify-content-center spd303" />
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { FaUserTie, FaUsers, FaCheckCircle, FaFileAlt } from "react-icons/fa";

const statsData = [
  {
    icon: <FaUserTie size={40} />,
    value: 30,
    label: "Nhân viên kì cựu",
  },
  {
    icon: <FaUsers size={40} />,
    value: 5,
    label: "3 năm kì cưu",
  },
  {
    icon: <FaCheckCircle size={40} />,
    value: 129,
    label: "Khách hàng mỗi năm",
  },
  {
    icon: <FaFileAlt size={40} />,
    value: 24,
    label: "Ngành nghề thấu hiểu",
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

const Features = () => {
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
          Khởi nghiệp với đam mê rực cháy và khát vọng vươn xa.
        </h4>

        {statsData.map((stat, index) => (
          <div key={index} className="col-lg-3 col-md-3 col-6 mb-4">
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

export default Features;
