"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import marketingPro from "/public/img for salla/homePage/Marketing-bro.png";
import { motion, useAnimation, useInView } from "framer-motion";

const Featuer5 = () => {
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
        className="anime-block home-block feature-block bg-white dark:bg-darker-200 end my-[25px] overflow-hidden"
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
                      ركز على البيع، واترك التسويق علينا{" "}
                    </h2>
                    <p
                      className="anime-text opacity-0"
                      style={{
                        opacity: 1,
                        transform: "translateY(0px)",
                        width: "100%",
                      }}
                    >
                      منصة محلي تجمع التاجر المحلي، بالمستهلك المحلي . لدعم
                      الاقتصاد المحلي
                    </p>
                    <ul
                      className="list list--flat list--bullets mt-7 opacity-70"
                      style={{ lineHeight: "40px" }}
                    >
                      <li
                        className="anime-text opacity-0"
                        style={{ opacity: 1, transform: "translateY(0px)" }}
                      >
                        . خدمة تسويق جديدة مجانية لمتجرك
                      </li>
                      <li
                        className="anime-text opacity-0"
                        style={{ opacity: 1, transform: "translateY(0px)" }}
                      >
                        . اجذب شريحة عملاء أكبر ومبيعات أكثر
                      </li>
                      <li
                        className="anime-text opacity-0"
                        style={{ opacity: 1, transform: "translateY(0px)" }}
                      >
                        .اعرض منتجاتك لجمهور مستعد للشراء
                      </li>
                      <li
                        className="anime-text opacity-0"
                        style={{ opacity: 1, transform: "translateY(0px)" }}
                      >
                        . عزز مبيعات متجرك بخطوات بسيطة
                      </li>
                    </ul>
                  </div>
                </div>
              </article>{" "}
            </motion.div>
            <div>
              <Image
                decoding="async"
                className="block"
                src={marketingPro}
                alt="marketingPro"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Featuer5;
