"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import marketing from "/public/img for salla/homePage/Group 86.png";
import { motion, useAnimation, useInView } from "framer-motion";

const Featuer3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const itemControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      itemControls.start("visible");
    }

    console.log(isInView);
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
        className="anime-block home-block feature-block bg-white dark:bg-darker-200 end my-[25px]"
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
                    <h2
                      className="anime-text opacity-0"
                      style={{ opacity: 1, transform: "translateY(0px)" }}
                    >
                      حلول تسويقيَّة في مكان واحد{" "}
                    </h2>
                    <p
                      className="anime-text opacity-0"
                      style={{
                        opacity: 1,
                        transform: "translateY(0px)",
                        width: "100%",
                      }}
                    >
                      استهدف المزيد من العملاء بحلول تسويقية مخصصة
                    </p>
                    <ul
                      className="list list--flat list--bullets mt-7 opacity-70"
                      style={{ lineHeight: "40px" }}
                    >
                      <li
                        className="anime-text opacity-0"
                        style={{ opacity: 1, transform: "translateY(0px)" }}
                      >
                        . قدم لعملائك كوبونات خصم تشجعهم الشراء{" "}
                      </li>
                      <li
                        className="anime-text opacity-0"
                        style={{ opacity: 1, transform: "translateY(0px)" }}
                      >
                        . تحكم بكافة تفاصيل العروض والخصومات
                      </li>
                      <li
                        className="anime-text opacity-0"
                        style={{ opacity: 1, transform: "translateY(0px)" }}
                      >
                        . دعم التسويق بالعمولة لمتجرك{" "}
                      </li>
                      <li
                        className="anime-text opacity-0"
                        style={{ opacity: 1, transform: "translateY(0px)" }}
                      >
                        . استهداف دقيق للسلات المتروكة{" "}
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
                src={marketing}
                alt="marketing"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Featuer3;
