"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import wallet from "#/img for salla/homePage/محفظة221.png";
import { motion, useAnimation, useInView } from "framer-motion";

const Featuer2 = () => {
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
      className="anime-block home-block feature-block px-4 bg-grayer-100 overflow-hidden"
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
              src={wallet}
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
                    مدفوعات آمنة، لتجارة ! مستدامة، وثقة متينة{" "}
                  </h2>
                  <p
                    className="anime-text opacity-0"
                    style={{
                      opacity: 1,
                      transform: "translateY(0px)",
                      width: "100%",
                    }}
                  >
                    استفد من نظام متجر المتكامل للمدفوعات الإلكترونية لإدارة
                    مدفوعات متجرك وعملائك
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
                    . وسائل دفع متنوعة تلبي كافة احتياجات عملائك{" "}
                  </li>
                  <li
                    className="anime-text opacity-0"
                    style={{ opacity: 1, transform: "translateY(0px)" }}
                  >
                    . تفعيل سريع لنظام المدفوعات خلال يوم واحد{" "}
                  </li>
                  <li
                    className="anime-text opacity-0"
                    style={{ opacity: 1, transform: "translateY(0px)" }}
                  >
                    . تحصيل المدفوعات بعد 24 ساعة{" "}
                  </li>
                  <li
                    className="anime-text opacity-0"
                    style={{ opacity: 1, transform: "translateY(0px)" }}
                  >
                    . حماية عالية وأمان لكافة عملياتك{" "}
                  </li>
                </ul>
              </div>
            </article>{" "}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Featuer2;
