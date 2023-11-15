"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const CommonQuestion = () => {
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
      transition={{ duration: 1, delay: 0.5 }}
      className="mb-10 lg:mb-40"
    >
      <div className="container">
        <div className="block-title text-center md:mb-10 py-16">
          <h2
            className="text-primary text-2xl sm:text-4xl font-bold anime-item opacity-0"
            style={{ transform: "translateY(0px) translateZ(0px)", opacity: 1 }}
          >
            الأسئلة الشائعة
          </h2>
        </div>
        <motion.dl
          ref={ref}
          initial="hidden"
          animate={itemControls}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 1 }}
          className="gridtab gridtab--1 visible"
        >
          <dt
            className="relative group cursor-pointer overflow-hidden anime-item"
            style={{
              order: 0,
              transform: "translateY(0px) translateZ(0px)",
              opacity: 1,
            }}
          >
            <h2 className="font-medium text-primary text-xl ml-16">
              ماهي المدة لتجهيز التطبيق؟
            </h2>
          </dt>
          <dd
            className="w-full relative hidden z-10 mt-8 bg-white rounded-xl shadow-md overflow-hidden"
            style={{ order: 1 }}
          >
            <p
              className="leading-7 text-gray-700 anime-item"
              style={{
                transform: "translateY(0px) translateZ(0px)",
                opacity: 1,
              }}
            >
              يتم تجهيز التطبيق في فترة تتراوح بين 2-7 أيام عمل بعد الانتهاء من
              ادخال بيانات التطبيق من قبلكم.‬ ‫مدة تجهيز التطبيق ورفعه منفصلة عن
              مدة إنشاء وتفعيل حساب الشركة الخاص بالتاجر على‬ ‫منصة أبل والتي
              تتراوح بين أسبوعين إلى شهر.‬
            </p>
            <div className="gridtab__controls">
              <a className=" gridtab__close" href="#">
                Close
              </a>
            </div>
          </dd>
          <dt
            className="relative group cursor-pointer overflow-hidden anime-item"
            style={{
              order: 1,
              transform: "translateY(0px) translateZ(0px)",
              opacity: 1,
            }}
          >
            <h2 className="font-medium text-primary text-xl ml-16">
              هل يتم دفع مبلغ خدمة التطبيق مرة واحدة فقط؟
            </h2>
          </dt>
          <dd
            className="w-full relative hidden z-10 mt-8 bg-white rounded-xl shadow-md overflow-hidden"
            style={{ order: 2 }}
          >
            <p
              className="leading-7 text-gray-700 anime-item"
              style={{
                transform: "translateY(0px) translateZ(0px)",
                opacity: 1,
              }}
            >
              قيمة الخدمة هي عبارة عن اشتراك سنوي منفصل عن اشتراك المتجر بمنصة
              سلة تشمل الخدمة صيانة وتشغيل التطبيق وكافة الإضافات والتحديثات
              والمميزات الجديدة على مدار العام كما هو الحال مع اشتراك الباقة
              بالمنصة.
            </p>
            <div className="gridtab__controls">
              <a className=" gridtab__close" href="#">
                Close
              </a>
            </div>
          </dd>
          <dt
            className="relative group cursor-pointer overflow-hidden anime-item"
            style={{
              order: 2,
              transform: "translateY(0px) translateZ(0px)",
              opacity: 1,
            }}
          >
            <h2 className="font-medium text-primary text-xl ml-16">
              ماهي مراحل إنشاء التطبيق؟
            </h2>
          </dt>
        </motion.dl>
      </div>
    </motion.div>
  );
};

export default CommonQuestion;
