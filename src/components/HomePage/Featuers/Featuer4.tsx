"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import goodExpreince from "/public/img for salla/homePage/أسعد.png";
import marketingPro from "/public/img for salla/homePage/Marketing-bro.png";
import { motion, useAnimation, useInView } from "framer-motion";

const Featuer4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const itemControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      itemControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="w-full">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 1 }}
        className="anime-block home-block feature-block px-4 bg-grayer-100 dark:bg-darker-250 mb-[25px] overflow-hidden"
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
            >
              <Image
                decoding="async"
                className="block"
                src={goodExpreince}
                alt="goodExpreince"
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
              transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
              className="flex items-center justify-end max992:justify-start flex-1"
            >
              <article className="article article--features flex items-start flex-col text-right">
                <div className="mb-8">
                  <div className="title title--hero sm">
                    <h2
                      className="anime-text opacity-0"
                      style={{ opacity: 1, transform: "translateY(0px)" }}
                    >
                      أسعد عملاءك بتجربة شراء سهلة{" "}
                    </h2>
                    <p
                      className="anime-text opacity-0"
                      style={{
                        opacity: 1,
                        transform: "translateY(0px)",
                        width: "100%",
                      }}
                    >
                      قدم لعملائك أسهل تجربة شراء مع متجرك
                    </p>
                  </div>
                  <ul
                    className="list list--flat list--bullets mt-7 opacity-70"
                    style={{ lineHeight: "30px" }}
                  >
                    <li
                      className="anime-text opacity-0"
                      style={{ opacity: 1, transform: "translateY(0px)" }}
                    >
                      . الشراء مباشرة دون تعقيد أو إنشاء حساب
                    </li>
                    <li
                      className="anime-text opacity-0"
                      style={{ opacity: 1, transform: "translateY(0px)" }}
                    >
                      .الدفع إلكترونياً بخطوات بسيطة{" "}
                    </li>
                  </ul>
                </div>
              </article>{" "}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Featuer4;
