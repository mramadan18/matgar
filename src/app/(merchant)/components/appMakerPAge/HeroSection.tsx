"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import HeroImg from "#/img for salla/AppMakerPage/Group 91.png";
import { motion, useAnimation, useInView } from "framer-motion";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const itemControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      itemControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="bg-white mb-[25px] rounded">
      <div className="container">
        <div className="feature-block__wrapper flex justify-between w-full">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={itemControls}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              decoding="async"
              className="block w-[90%] h-[90%]"
              src={HeroImg}
              alt="wallet"
            />
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={itemControls}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-end max992:justify-start flex-1"
          >
            <article className="article article--features flex items-start flex-col text-right">
              <div className="mb-8">
                <div className="title title--hero mb-10">
                  <h2
                    className="anime-text opacity-0"
                    style={{ opacity: 1, transform: "translateY(0px)" }}
                  >
                    اصنع تطبيقك بنفسك{" "}
                  </h2>
                  <p
                    className="anime-text opacity-0"
                    style={{
                      opacity: 1,
                      transform: "translateY(0px)",
                      width: "100%",
                    }}
                  >
                    استعد لقفزتك التجارية واصنع تطبيقاً لمتجرك خلال 72 ساعة
                    وبدون مبرمج
                  </p>
                </div>
                <div>
                  <a
                    href="https://s.salla.sa/register"
                    rel="noopener"
                    target="_blank"
                    className="hover:bg-white py-3 px-16 text-white rounded-full transition duration-300 focus:outline-none inline-flex font-semibold text-center bg-[#0279DE]"
                  >
                    <span className="fix-font">اصنع تطبيقك الآن</span>
                  </a>
                </div>
              </div>
            </article>{" "}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
