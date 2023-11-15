"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/Layout/Header";
import helpImg from "#/img for salla/helpCenter/Psychologist-bro.png";
import searchImg from "#/img for salla/helpCenter/vuesax-broken-search-normal.png";
import settingImg from "#/img for salla/helpCenter/vuesax-broken-setting-4.png";
import { motion, useAnimation, useInView } from "framer-motion";

const page = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const itemControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      itemControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <Header />
      <div className="container pt-4 text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={itemControls}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mx-auto"
        >
          <Image
            className="mx-auto mt-32"
            src={helpImg}
            alt="help-center"
            priority
          />

          <h1 className="text-white text-5xl font-bold tracking-widest absolute top-1/2 left-1/2 -translate-x-1/2">
            ... أهلاً كيف نقدر نساعدك
          </h1>

          <div className="absolute bottom-[-0.5rem] z-10 left-1/2 -translate-x-1/2 w-4/5 bg-white">
            <Image
              className="absolute top-1/2 right-4 -translate-y-1/2"
              src={searchImg}
              alt="map"
              priority
              width={18}
              height={18}
            />
            <input
              type="text"
              placeholder="إبحث عن ما تريد"
              className="mx-auto border border-gray-500 w-full py-3 px-10 bg-white text-black text-right opacity-50 placeholder:text-black placeholder:font-bold tracking-wider"
            />
            <Image
              className="absolute top-1/2 left-4 -translate-y-1/2"
              src={settingImg}
              alt="map"
              priority
              width={18}
              height={18}
            />
          </div>
        </motion.div>

        <p className="mt-[220px] mb-4">جميع الحقوق محفوظة لدى متجر 2023 ©</p>
      </div>
    </>
  );
};

export default page;
