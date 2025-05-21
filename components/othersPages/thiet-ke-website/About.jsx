"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Timeline } from "./Timeline";

export default function About() {
  return (
    <>
      <section className="flat-spacing-15">
        <div className="container">
          <div className="tf-grid-layout md-col-2 tf-img-with-text style-4">
            <div className="px-0 d-flex w-100">
              <div>
                <div className="heading">Dịch vụ thiết kế website</div>
                <div className="text">
                  Thiết kế độc quyền, được cá nhân hóa theo ý tưởng và mong muốn
                  của khách hàng.
                  {/* <br className="d-xl-block d-none" />
                  We want everyone to look and feel good, while also doing our
                  part to <br className="d-xl-block d-none" />
                  help the environment.We believe that fashion should be
                  stylish, <br className="d-xl-block d-none" />
                  affordable and accessible to everyone. Body positivity and
                  inclusivity <br className="d-xl-block d-none" />
                  are values that are at the heart of our brand. */}
                </div>
                <Timeline />
              </div>
            </div>
            <div className="grid-img-group">
              {/* <div className="tf-image-wrap box-img item-1">
                <div className="img-style">
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
                      <Image
                        className="lazyload"
                        src="/images/icon/thiet-ke-2.png"
                        data-=""
                        alt="img-slider"
                        width={337}
                        height={388}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </div> */}
              <div className="tf-image-wrap box-img item-2">
                <div className="img-style">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="position-relative"
                  >
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                        // scale: [0.8, 0.85, 0.8],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="position-relative"
                    >
                      <Image
                        className="lazyload"
                        src="/images/icon/thiet-ke-1.jpg"
                        data-=""
                        alt="img-slider"
                        width={400}
                        height={438}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
