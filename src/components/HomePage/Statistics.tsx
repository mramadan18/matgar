"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Statistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      className="my-[150px] overflow-hidden"
    >
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <div className="w-full text-center">
            <h2 className="text-4xl">
              أكبر منصَّة لبنانية للتجارة الإلكترونيَّة في الشرق الأوسط
            </h2>
            <p className="text-xl mt-8">
              أنشئ متجرك الإلكتروني، وانضمَّ لعشرات الآلاف من العلامات المحلية
              والعالمية <br /> الناجحة مع متجر اليوم
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Statistics;
