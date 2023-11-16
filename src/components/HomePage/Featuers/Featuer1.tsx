"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import matgarLikeYouWant from "/public/img for salla/homePage/صورة 4.png";
import { motion, useAnimation, useInView } from "framer-motion";

const Featuer1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const itemControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      itemControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 1 }}
      className="anime-block home-block feature-block bg-white end my-[150px] overflow-hidden"
    >
      <div className="container">
        <div className="feature-block__wrapper">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={itemControls}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.25, ease: "linear" }}
            className="flex items-center justify-start flex-1"
          >
            <article className="article article--features flex items-start flex-col text-right justify-start">
              <div className="mb-8">
                <div className="title title--hero sm">
                  <h2>متجرك، على ذوقك </h2>
                  <p>
                    نجاحك التجاري يحتاج لمظهر أنيق، اختر مظهرًا يناسب علامتك.
                  </p>
                  <ul
                    className="list list--flat list--bullets mt-7 opacity-70"
                    style={{ lineHeight: "40px" }}
                  >
                    <li
                      className="anime-text opacity-0"
                      style={{ opacity: 1, transform: "translateY(0px)" }}
                    >
                      مكتبة متنوعة من الثيمات الجاهزة القابلة للتخصيص حسب رغبتك.
                    </li>
                    <li
                      className="anime-text opacity-0"
                      style={{ opacity: 1, transform: "translateY(0px)" }}
                    >
                      تخصيص تفاصيل التصميم عن طريق JS و CSS.
                    </li>
                    <li
                      className="anime-text opacity-0"
                      style={{ opacity: 1, transform: "translateY(0px)" }}
                    >
                      كما يمكنك صنع ثيمك الخاص مع Matgar Twilight.
                    </li>
                  </ul>
                </div>
              </div>
            </article>{" "}
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={itemControls}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
          >
            <Image
              decoding="async"
              className="block"
              src={matgarLikeYouWant}
              alt="متجرك، على ذوقك"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Featuer1;
