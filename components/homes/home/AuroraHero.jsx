"use client";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Image from "next/image";
import { isEmpty } from "lodash";
import Link from "next/link";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const contentDefault = {
  title: "Thiết kế Website và App chuyên nghiệp",
  content:
    "Đối với chúng tôi, mỗi dự án đối không chỉ là một thử thách, mà còn là một tác phẩm nghệ thuật, nơi mỗi khách hàng đều khao khát chạm đến sự hoàn mỹ.",
  subContent:
    "Chúng tôi đã triển khai nhiều dự án với thiết kế chuyên nghiệp, giải quyết những bài toán phức tạp mà vẫn đảm bảo giao diện tinh tế, thân thiện với người dùng.",
};

export const AuroraHero = (props) => {
  const {
    title = contentDefault.title,
    content = contentDefault.content,
    subContent = contentDefault.subContent,
  } = props || {};
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="position-relative d-grid min-vh-75 overflow-hidden bg-dark px-4 py-3 text-light"
    >
      <div className="container">
        <div className="row flex-column flex-lg-row align-items-center">
          <div className="col-12 col-lg-6 position-relative z-10 pt-2 text-center text-lg-start">
            {/* <span className="mb-2 d-inline-block rounded-pill bg-secondary bg-opacity-50 px-3 py-1 small">
                            <IoRocketSharp className="fs-6 ml-2" />
                            Phiên bản mới đã ra mắt!
                        </span> */}
            <h1 className="fs-1 fw-medium lh-sm text-white mb-3">{title}</h1>
            {!isEmpty(content) && <p className="fs-5 lh-base">{content}</p>}
            {!isEmpty(subContent) && (
              <p className="fs-5 lh-base mb-3">{subContent}</p>
            )}
            <motion.button
              style={{
                border,
                boxShadow,
              }}
              // whileHover={{
              //   scale: 1.015,
              // }}
              // whileTap={{
              //   scale: 0.985,
              // }}
              className="d-flex align-items-center gap-2 rounded-pill bg-dark bg-opacity-10 px-4 py-2 text-light transition mx-auto mx-lg-0"
            >
              <Link
                href="/mau-giao-dien"
                className="text-light"
                style={{
                  zIndex: 1000,
                }}
              >
                Xem mẫu giao diện
                <FiArrowRight className="transition" />
              </Link>
            </motion.button>
          </div>

          <div className="col-12 col-lg-6 position-relative mt-5 mt-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="position-relative"
            >
              {/* Hình ảnh chính từ Freepik */}
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
                <Image
                  src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
                  alt="Web Development Main Illustration"
                  width={500}
                  height={400}
                  className="img-fluid mx-auto d-block rounded-4"
                />
              </motion.div>

              {/* Hình ảnh bổ trợ 1 */}
              <motion.div
                animate={{
                  x: [0, 20, 0],
                  y: [0, -15, 0],
                  rotate: [0, 15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="position-absolute"
                style={{ top: "0%", right: "-3%" }}
              >
                <Image
                  src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3454633-2918522.png"
                  alt="Web Development Concept"
                  width={150}
                  height={150}
                  className="img-fluid"
                />
              </motion.div>

              {/* Hình ảnh bổ trợ 2 */}
              <motion.div
                animate={{
                  x: [0, -20, 0],
                  y: [0, 15, 0],
                  rotate: [0, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="position-absolute"
                style={{ bottom: "0%", left: "-3%" }}
              >
                <Image
                  src="https://cdni.iconscout.com/illustration/premium/thumb/website-development-5691682-4759512.png"
                  alt="Web Development"
                  width={160}
                  height={160}
                  className="img-fluid"
                />
              </motion.div>

              {/* Rocket animation */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  x: [0, 200, 0, -200, 0],
                  y: [0, -200, 0, 200, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="position-absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                }}
              >
                <Image
                  src="/images/icon/rocket-space-2.png"
                  alt="Rocket Space Ship"
                  width={80}
                  height={80}
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(19, 255, 170, 0.6))",
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="position-absolute top-0 start-0 bottom-0 end-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
